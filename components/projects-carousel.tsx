'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import Slider from 'react-slick';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'AI Content Platform',
    summary: 'An AI-powered content generation platform serving 50K+ users',
    description:
      'Led the frontend development of a comprehensive AI content platform. Implemented real-time streaming responses, optimized performance for large datasets, and built a component library used across the product.',
    tech: ['React', 'Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
    impact: '50K+ active users, 40% reduction in load times',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'E-Commerce Dashboard',
    summary: 'Real-time analytics dashboard for enterprise e-commerce',
    description:
      'Designed and built a comprehensive dashboard for monitoring e-commerce metrics. Integrated multiple data sources, implemented advanced filtering and visualization, and ensured real-time data updates.',
    tech: ['React', 'Redux', 'D3.js', 'Node.js', 'WebSockets'],
    impact: 'Reduced reporting time by 70%',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Collaborative Design Tool',
    summary: 'Real-time collaborative design and prototyping platform',
    description:
      'Developed core features for a collaborative design tool with real-time multiplayer editing. Implemented canvas rendering optimizations, undo/redo systems, and conflict resolution for concurrent edits.',
    tech: ['React', 'Canvas API', 'WebRTC', 'CRDTs', 'PostgreSQL'],
    impact: 'Supported 100+ concurrent users per session',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Mobile Banking App',
    summary: 'Progressive web app for digital banking services',
    description:
      'Built a secure, accessible PWA for digital banking. Implemented biometric authentication, offline-first architecture, and ensured compliance with financial regulations and accessibility standards.',
    tech: ['React', 'PWA', 'Service Workers', 'IndexedDB', 'WCAG 2.1'],
    impact: '99.9% uptime, AAA accessibility rating',
    gradient: 'from-orange-500 to-red-500',
  },
];

export function ProjectsCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <section id="projects" ref={ref} className="py-20 px-6 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />

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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Featured Projects</span>
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
              Work
            </motion.span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects that pushed boundaries and delivered real impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-12"
        >
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-4">
                <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-primary/20 transition-all">
                  {/* Gradient header */}
                  <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-8`} />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl mb-3">{project.title}</h3>
                      <p className="text-lg text-muted-foreground italic mb-4">{project.summary}</p>
                    </div>

                    <div className="flex gap-3 mt-4 md:mt-0">
                      <motion.a
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        href="#"
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors border border-primary/30"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5 text-primary" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        href="#"
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors border border-primary/30"
                        aria-label="View live project"
                      >
                        <ExternalLink className="w-5 h-5 text-primary" />
                      </motion.a>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-lg text-sm border border-primary/20 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <p className="text-lg text-primary">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
