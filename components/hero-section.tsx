'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Download, ChevronDown, Sparkles } from 'lucide-react';
import { siteConfig, socialLinks } from '@/data/portfolio';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Profile image */}
        <motion.div {...fadeUp(0)} className="mb-8 flex justify-center">
          <motion.div
            whileHover={reducedMotion ? {} : { scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full group cursor-default"
          >
            {/* Gradient ring — glow layer */}
            <div className="absolute -inset-1 rounded-full bg-linear-to-br from-indigo-400 via-violet-400 to-purple-400 opacity-75 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            {/* Gradient ring — crisp layer */}
            <div className="absolute -inset-1 rounded-full bg-linear-to-br from-indigo-400 via-violet-400 to-purple-400 opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-background">
              <Image
                src="/image.png"
                alt={`${siteConfig.name} — ${siteConfig.title}`}
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Available badge */}
        <motion.div {...fadeUp(0.1)} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm hover:bg-primary/15 transition-colors duration-300">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Available for opportunities</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 {...fadeUp(0.2)} className="text-6xl md:text-8xl mb-4">
          <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          {...fadeUp(0.3)}
          className="text-2xl md:text-4xl text-muted-foreground mb-6"
        >
          {siteConfig.title}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={reducedMotion ? {} : { scale: 1.03, y: -2 }}
            whileTap={reducedMotion ? {} : { scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="px-8 py-4 bg-linear-to-r from-indigo-500 to-violet-600 text-white rounded-xl hover:shadow-xl hover:shadow-indigo-500/25 transition-shadow duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="#"
            whileHover={reducedMotion ? {} : { scale: 1.03, y: -2 }}
            whileTap={reducedMotion ? {} : { scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="px-8 py-4 bg-card/50 border border-primary/50 text-foreground rounded-xl hover:bg-card hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links with shake animation */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex gap-4 justify-center mb-12"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:animate-[shake_0.5s_ease-in-out] active:scale-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={social.label}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            >
              <social.icon className="w-5 h-5 text-primary" />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0 }}
          animate={reducedMotion ? {} : { opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block text-muted-foreground hover:text-primary transition-colors duration-300 motion-safe:animate-bounce focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
