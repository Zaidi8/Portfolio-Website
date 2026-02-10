import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Content Platform',
    summary: 'An AI-powered content generation platform serving 50K+ users',
    description:
      'Led the frontend development of a comprehensive AI content platform. Implemented real-time streaming responses, optimized performance for large datasets, and built a component library used across the product.',
    tech: ['React', 'Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
    impact: '50K+ active users, 40% reduction in load times',
  },
  {
    title: 'E-Commerce Dashboard',
    summary: 'Real-time analytics dashboard for enterprise e-commerce',
    description:
      'Designed and built a comprehensive dashboard for monitoring e-commerce metrics. Integrated multiple data sources, implemented advanced filtering and visualization, and ensured real-time data updates.',
    tech: ['React', 'Redux', 'D3.js', 'Node.js', 'WebSockets'],
    impact: 'Reduced reporting time by 70%',
  },
  {
    title: 'Collaborative Design Tool',
    summary: 'Real-time collaborative design and prototyping platform',
    description:
      'Developed core features for a collaborative design tool with real-time multiplayer editing. Implemented canvas rendering optimizations, undo/redo systems, and conflict resolution for concurrent edits.',
    tech: ['React', 'Canvas API', 'WebRTC', 'CRDTs', 'PostgreSQL'],
    impact: 'Supported 100+ concurrent users per session',
  },
  {
    title: 'Mobile Banking App',
    summary: 'Progressive web app for digital banking services',
    description:
      'Built a secure, accessible PWA for digital banking. Implemented biometric authentication, offline-first architecture, and ensured compliance with financial regulations and accessibility standards.',
    tech: ['React', 'PWA', 'Service Workers', 'IndexedDB', 'WCAG 2.1'],
    impact: '99.9% uptime, AAA accessibility rating',
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-16 text-center"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all shadow-lg hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl">{project.title}</h3>
                <div className="flex gap-2">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5 text-primary" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </motion.a>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 italic">{project.summary}</p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-primary">{project.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
