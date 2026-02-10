'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Code, Zap, Brain, Users, MessageSquare, Target, Sparkles, Rocket, Heart } from 'lucide-react';

const technicalSkills = [
  { 
    name: 'React & Next.js', 
    icon: Code, 
    level: 95,
    description: 'Expert in building scalable React applications with Next.js SSR/SSG',
    experience: '5+ years'
  },
  { 
    name: 'TypeScript', 
    icon: Code, 
    level: 90,
    description: 'Strong typing, advanced patterns, and type-safe application architecture',
    experience: '4+ years'
  },
  { 
    name: 'Performance Optimization', 
    icon: Zap, 
    level: 85,
    description: 'Code splitting, lazy loading, and Core Web Vitals optimization',
    experience: '4+ years'
  },
  { 
    name: 'AI Integrations', 
    icon: Brain, 
    level: 80,
    description: 'OpenAI, Claude, and custom AI model integration expertise',
    experience: '2+ years'
  },
  { 
    name: 'Node.js & APIs', 
    icon: Rocket, 
    level: 85,
    description: 'RESTful and GraphQL API development with Node.js and Express',
    experience: '4+ years'
  },
  { 
    name: 'UI/UX Design', 
    icon: Sparkles, 
    level: 75,
    description: 'Modern design systems, animations, and user-centric interfaces',
    experience: '5+ years'
  },
];

const softSkills = [
  { 
    name: 'Leadership', 
    icon: Users, 
    level: 90,
    description: 'Leading development teams and mentoring junior developers',
    impact: 'Led 5+ teams'
  },
  { 
    name: 'Communication', 
    icon: MessageSquare, 
    level: 95,
    description: 'Clear technical communication with stakeholders and team members',
    impact: 'Cross-functional collaboration'
  },
  { 
    name: 'Product Thinking', 
    icon: Target, 
    level: 85,
    description: 'Understanding user needs and translating them into technical solutions',
    impact: '10+ successful products'
  },
  { 
    name: 'Passion', 
    icon: Heart, 
    level: 100,
    description: 'Deep commitment to code quality and continuous learning',
    impact: 'Always improving'
  },
];

function SkillCard({ skill, index, isTechnical }: { skill: any; index: number; isTechnical: boolean }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000 h-64"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-6 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex flex-col items-center justify-center h-full text-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 border border-primary/30"
            >
              <skill.icon className="w-10 h-10 text-primary" />
            </motion.div>
            
            <h3 className="text-xl mb-4">{skill.name}</h3>
            
            {/* Progress bar */}
            <div className="w-full">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Proficiency</span>
                <span className="text-sm text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4">Hover to see details</p>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-primary/50 rounded-2xl p-6 backface-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex flex-col justify-center h-full">
            <skill.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl mb-3">{skill.name}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {skill.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-primary">
              <Sparkles className="w-4 h-4" />
              <span>{isTechnical ? skill.experience : skill.impact}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Skills & Expertise</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl mb-6">
            What I{' '}
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              Bring
            </motion.span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hover over each card to explore my expertise in detail
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="text-3xl mb-8 flex items-center gap-3"
          >
            <Code className="w-8 h-8 text-primary" />
            <span>Technical Mastery</span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} isTechnical={true} />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl mb-8 flex items-center gap-3"
          >
            <Users className="w-8 h-8 text-primary" />
            <span>Personal Strengths</span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} isTechnical={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
