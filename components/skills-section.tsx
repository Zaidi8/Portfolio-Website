'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, useInView, useAnimate } from 'motion/react';
import { Code, Users } from 'lucide-react';
import {
  technicalSkills,
  softSkills,
  type TechnicalSkill,
  type SoftSkill,
} from '@/data/portfolio';
import { FadeIn } from '@/components/fade-in';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

function TechnicalSkillCard({ skill, index }: { skill: TechnicalSkill; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const reducedMotion = useReducedMotion();
  const [scope, animate] = useAnimate();
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-60px' });
  const hasHinted = useRef(false);

  // Hint animation: only the first card does a full 360° flip + 2 pulses
  useEffect(() => {
    if (index !== 0 || !isInView || reducedMotion || hasHinted.current) return;
    hasHinted.current = true;

    const hintDelay = 0.6; // wait for FadeIn to finish

    const runHint = async () => {
      // Full 360° flip
      await animate(
        scope.current,
        { rotateY: 360 },
        { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: hintDelay }
      );
      await animate(
        scope.current,
        { rotateY: 0 },
        { duration: 0 }
      );
      // 2 pulses
      for (let i = 0; i < 2; i++) {
        await animate(
          scope.current,
          { scale: 1.06 },
          { duration: 0.3, ease: 'easeOut' }
        );
        await animate(
          scope.current,
          { scale: 1 },
          { duration: 0.3, ease: 'easeInOut' }
        );
      }
    };

    runHint();
  }, [isInView, reducedMotion, animate, scope, index]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped((prev) => !prev);
    }
  }, []);

  if (reducedMotion) {
    return (
      <FadeIn delay={index * 0.08} direction="up">
        <div className="bg-card border border-border rounded-2xl p-6 h-48">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <skill.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base">{skill.name}</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {skill.description}
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={index * 0.08} direction="up">
      <div
        ref={cardRef}
        className="perspective-1000 h-48"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onClick={() => setIsFlipped((prev) => !prev)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`${skill.name} — ${isFlipped ? 'showing details' : 'tap to see details'}`}
      >
        <motion.div
          ref={scope}
          className="relative w-full h-full preserve-3d cursor-pointer"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Front face */}
          <div className="absolute inset-0 backface-hidden bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <skill.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-base">{skill.name}</h3>
          </div>

          {/* Back face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-card border border-primary/30 rounded-2xl p-6 flex flex-col justify-center">
            <h3 className="text-sm font-semibold text-primary mb-2">{skill.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {skill.description}
            </p>
          </div>
        </motion.div>
      </div>
    </FadeIn>
  );
}

function StrengthItem({ skill, index }: { skill: SoftSkill; index: number }) {
  return (
    <FadeIn delay={index * 0.12} direction="up">
      <div className="group flex items-start gap-6 py-6 border-b border-border last:border-b-0">
        {/* Large ordinal number */}
        <span className="text-4xl md:text-5xl font-bold text-indigo-400/30 group-hover:text-indigo-400 transition-colors duration-300 select-none leading-none pt-1 shrink-0 tabular-nums" style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <skill.icon className="w-5 h-5 text-primary shrink-0" />
            <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {skill.name}
            </h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-1">
            {skill.description}
          </p>
          <span className="text-xs text-primary/70 font-medium">
            {skill.impact}
          </span>
        </div>
      </div>
    </FadeIn>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Skills &amp; <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and strengths I bring to every project
          </p>
        </FadeIn>

        {/* Technical Skills — Flip Cards */}
        <div className="mb-20">
          <FadeIn direction="left">
            <h3 className="text-2xl mb-8 flex items-center gap-3">
              <Code className="w-6 h-6 text-primary" />
              <span>Technical Skills</span>
            </h3>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalSkills.map((skill, index) => (
              <TechnicalSkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Strengths — Distinct editorial design */}
        <div>
          <FadeIn direction="left">
            <h3 className="text-2xl mb-2 flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              <span>Strengths</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-8">
              What I bring beyond the code
            </p>
          </FadeIn>

          <div className="max-w-3xl">
            {softSkills.map((skill, index) => (
              <StrengthItem key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
