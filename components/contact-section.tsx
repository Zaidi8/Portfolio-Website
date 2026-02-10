'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import isEmail from 'validator/es/lib/isEmail';
import { socialLinks } from '@/data/portfolio';
import { FadeIn } from '@/components/fade-in';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

function playSuccessSound() {
  try {
    const ctx = new AudioContext();
    const now = ctx.currentTime;

    // Pleasant two-tone chime: C5 → E5
    const notes = [523.25, 659.25];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.15, now + i * 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.15 + 0.4);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now + i * 0.15);
      osc.stop(now + i * 0.15 + 0.4);
    });
  } catch {
    // Audio not supported — silent fallback
  }
}

function Toast({
  type,
  message,
  onClose,
}: {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-xl border shadow-2xl backdrop-blur-sm ${
        type === 'success'
          ? 'bg-emerald-500/10 border-emerald-500/30 shadow-emerald-500/10'
          : 'bg-red-500/10 border-red-500/30 shadow-red-500/10'
      }`}
    >
      {type === 'success' ? (
        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
      ) : (
        <XCircle className="w-5 h-5 text-red-400 shrink-0" />
      )}
      <span
        className={`text-sm font-medium ${
          type === 'success' ? 'text-emerald-300' : 'text-red-300'
        }`}
      >
        {message}
      </span>
    </motion.div>
  );
}

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [emailError, setEmailError] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const dismissToast = useCallback(() => setToast(null), []);

  const fieldErrors = submitted
    ? {
        name: !formData.name.trim(),
        email: !formData.email.trim() || emailError !== '',
        message: !formData.message.trim(),
      }
    : { name: false, email: !!emailError, message: false };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    if (!isEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setStatus('sending');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setEmailError('');
      setSubmitted(false);
      playSuccessSound();
      setToast({ type: 'success', message: 'Message sent successfully!' });
    } catch {
      setStatus('error');
      setToast({ type: 'error', message: 'Failed to send. Please try again.' });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'email') setEmailError('');
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or want to collaborate? Let&apos;s connect!
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <FadeIn direction="left" delay={0.1}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-card border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 ${fieldErrors.name ? 'border-red-500' : 'border-border'}`}
                  placeholder="Your name"
                />
                {fieldErrors.name && (
                  <p className="mt-1 text-sm text-red-500">This field is required</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-card border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 ${fieldErrors.email ? 'border-red-500' : 'border-border'}`}
                  placeholder="your.email@example.com"
                />
                {fieldErrors.email && !emailError && (
                  <p className="mt-1 text-sm text-red-500">This field is required</p>
                )}
                {emailError && (
                  <p className="mt-1 text-sm text-red-500">{emailError}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-card border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 resize-none ${fieldErrors.message ? 'border-red-500' : 'border-border'}`}
                  placeholder="Your message..."
                />
                {fieldErrors.message && (
                  <p className="mt-1 text-sm text-red-500">This field is required</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col justify-center h-full">
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-500">
                <h3 className="text-2xl mb-6">Let&apos;s Connect</h3>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  I&apos;m always open to discussing new projects, creative ideas,
                  or opportunities to be part of your visions. Feel free to reach
                  out through any of these channels:
                </p>

                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target='_blank'
                      className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary hover:translate-x-1 transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                        <social.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="group-hover:text-primary transition-colors duration-200">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <Toast type={toast.type} message={toast.message} onClose={dismissToast} />
        )}
      </AnimatePresence>
    </section>
  );
}
