import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

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
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="py-20 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-16 text-center"
        >
          Work <span className="text-primary">Experience</span>
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ x: 8 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all shadow-lg relative overflow-hidden group"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-lg">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
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
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
