'use client';

import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { experiences, type Experience } from '@/data/portfolio';
import { FadeIn } from '@/components/fade-in';

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <FadeIn delay={index * 0.15} direction="up">
      <article className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
        <div className="flex items-center gap-2 text-sm text-primary mb-4">
          <Calendar className="w-4 h-4" />
          <time>{experience.period}</time>
        </div>

        <h3 className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
          {experience.role}
        </h3>
        <div className="flex items-center gap-2 text-primary mb-4">
          <Briefcase className="w-4 h-4" />
          <span>{experience.company}</span>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {experience.description}
        </p>

        <ul className="space-y-3" role="list">
          {experience.responsibilities.map((responsibility, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
              <span className="leading-relaxed">{responsibility}</span>
            </li>
          ))}
        </ul>
      </article>
    </FadeIn>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline line — hidden on mobile */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-400 via-violet-400 to-purple-400" aria-hidden="true" />

          <div className="space-y-8 md:pl-20">
            {experiences.map((experience, index) => (
              <div key={experience.company} className="relative">
                {/* Timeline dot — hidden on mobile */}
                <FadeIn delay={index * 0.15} direction="none">
                  <div
                    className="hidden md:block absolute -left-20 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shadow-lg shadow-primary/30"
                    aria-hidden="true"
                  />
                </FadeIn>
                <ExperienceCard experience={experience} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
