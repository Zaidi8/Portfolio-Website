'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown, Sparkles } from 'lucide-react';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:example@email.com', label: 'Email' },
  ];

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Profile Image with 3D effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-8 flex justify-center perspective-1000"
        >
          <motion.div
            whileHover={{ 
              scale: 1.1, 
              rotateY: 15,
              rotateX: 15,
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative w-48 h-48 rounded-full"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
            <div className="absolute inset-1 rounded-full bg-card flex items-center justify-center backdrop-blur-xl">
              <span className="text-7xl">👨‍💻</span>
            </div>
            {/* Floating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/50"
            />
          </motion.div>
        </motion.div>

        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Available for opportunities</span>
          </motion.div>
        </motion.div>

        {/* Name with gradient animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-6xl md:text-8xl mb-4 relative"
        >
          <motion.span
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto]"
          >
            Alex Johnson
          </motion.span>
        </motion.h1>

        {/* Typing effect title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-4xl text-muted-foreground mb-6"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 'auto' }}
            transition={{ duration: 1, delay: 0.6 }}
            className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-primary"
          >
            Frontend / Full-Stack Engineer
          </motion.span>
        </motion.h2>

        {/* Tagline with stagger */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Crafting{' '}
          <motion.span
            whileHover={{ scale: 1.1, color: '#60a5fa' }}
            className="inline-block text-primary cursor-default"
          >
            exceptional
          </motion.span>{' '}
          web experiences with{' '}
          <motion.span
            whileHover={{ scale: 1.1, color: '#60a5fa' }}
            className="inline-block text-primary cursor-default"
          >
            React
          </motion.span>
          ,{' '}
          <motion.span
            whileHover={{ scale: 1.1, color: '#60a5fa' }}
            className="inline-block text-primary cursor-default"
          >
            Next.js
          </motion.span>
          , and cutting-edge{' '}
          <motion.span
            whileHover={{ scale: 1.1, color: '#60a5fa' }}
            className="inline-block text-primary cursor-default"
          >
            AI integrations
          </motion.span>
        </motion.p>

        {/* CTA Buttons with 3D effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(96, 165, 250, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/50"
          >
            Get in Touch
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(96, 165, 250, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-card/50 border border-primary/50 backdrop-blur-sm text-foreground rounded-xl hover:bg-card transition-all flex items-center gap-2 shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Social Links with magnetic effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex gap-6 justify-center mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, -10, 0],
                boxShadow: '0 0 20px rgba(96, 165, 250, 0.6)',
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.8 + index * 0.1,
                rotate: { duration: 0.5 }
              }}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-primary/30 backdrop-blur-sm flex items-center justify-center hover:border-primary transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 text-primary" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.6 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </motion.button>
      </div>
    </section>
  );
}