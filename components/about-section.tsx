'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-8 text-center">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg leading-relaxed text-muted-foreground"
            >
              <p>
                I'm a passionate Frontend / Full-Stack Engineer with over 5 years of experience
                building scalable, performant web applications. My expertise spans across modern
                JavaScript frameworks, with a particular focus on React and Next.js ecosystems.
              </p>

              <p>
                Throughout my career, I've led end-to-end development of multiple high-impact
                products, collaborating closely with design teams, product managers, and
                stakeholders to deliver exceptional user experiences. I'm deeply committed to
                performance optimization, accessibility, and writing clean, maintainable code.
              </p>

              <p>
                Currently, I'm exploring the intersection of web development and artificial
                intelligence, building AI-powered applications that push the boundaries of what's
                possible in the browser. When I'm not coding, you'll find me contributing to
                open-source projects and staying up-to-date with the latest web technologies.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
