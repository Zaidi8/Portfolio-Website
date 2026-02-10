'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, CheckCircle, Sparkles } from 'lucide-react';

const experiences = [
  {
    company: 'TechCorp Inc.',
    role: 'Senior Frontend Engineer',
    period: '2022 - Present',
    description:
      'Leading frontend architecture and development for AI-powered SaaS products. Mentoring junior developers and establishing best practices for scalable React applications.',
    responsibilities: [
      'Led end-to-end development of 3 major product features serving 100K+ users',
      'Reduced initial load time by 60% through code splitting and optimization',
      'Established component library and design system used across 5 products',
      'Collaborated with product and design teams to define technical requirements',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'StartupXYZ',
    role: 'Full-Stack Engineer',
    period: '2020 - 2022',
    description:
      'Built and scaled web applications from MVP to production. Worked across the entire stack with focus on React frontend and Node.js backend development.',
    responsibilities: [
      'Developed customer-facing dashboards with real-time data synchronization',
      'Implemented RESTful and GraphQL APIs serving 1M+ requests daily',
      'Improved test coverage from 30% to 85% and established CI/CD pipelines',
      'Collaborated with stakeholders to prioritize features and manage releases',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    company: 'Digital Agency Co.',
    role: 'Frontend Developer',
    period: '2018 - 2020',
    description:
      'Delivered high-quality web solutions for diverse clients across various industries. Specialized in creating responsive, accessible, and performant websites.',
    responsibilities: [
      'Built 20+ responsive websites and web applications for client projects',
      'Ensured WCAG 2.1 AA compliance for all projects',
      'Optimized SEO and performance metrics, achieving 90+ Lighthouse scores',
      'Worked directly with clients to understand requirements and deliver solutions',
    ],
    color: 'from-green-500 to-emerald-500',
  },
];

export function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
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
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Career Journey</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl mb-6">
            My{' '}
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              Experience
            </motion.span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.5 }}
                className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-purple-500 border-4 border-background shadow-lg z-10"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 rounded-full bg-primary"
                />
              </motion.div>

              {/* Content card */}
              <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all relative overflow-hidden group"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

                  {/* Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${exp.color} bg-opacity-10 rounded-full mb-4`}>
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary">{exp.period}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <Briefcase className="w-5 h-5" />
                    <span className="text-lg">{exp.company}</span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.2 + idx * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-3 text-muted-foreground group/item"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span className="leading-relaxed">{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
