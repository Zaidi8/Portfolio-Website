'use client';

import { Code, Briefcase, Lightbulb } from 'lucide-react';
import { siteConfig } from '@/data/portfolio';
import { FadeIn } from '@/components/fade-in';

const highlights = [
  {
    icon: Code,
    label: 'Frontend & Full-Stack',
    detail: 'React, Next.js, React Native',
  },
  {
    icon: Briefcase,
    label: 'End-to-End Delivery',
    detail: 'Architecture to deployment',
  },
  {
    icon: Lightbulb,
    label: 'AI & Real-Time Systems',
    detail: 'MCP, RAG, live data platforms',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl mb-4 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Engineer, builder, problem solver.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          {/* Left column: highlight cards */}
          <div className="md:col-span-2 space-y-4">
            {highlights.map((item, i) => (
              <FadeIn key={item.label} delay={0.1 + i * 0.1} direction="left">
                <div className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Right column: about text with accent bar */}
          <div className="md:col-span-3">
            <FadeIn delay={0.15} direction="right">
              <div className="relative pl-6 border-l-2 border-primary/40 hover:border-primary/70 transition-colors duration-300">
                <div className="space-y-5">
                  {siteConfig.aboutParagraphs.map((paragraph, i) => (
                    <FadeIn key={i} delay={0.2 + i * 0.08} direction="none">
                      <p
                        className={
                          i === 0
                            ? 'text-lg text-foreground leading-relaxed'
                            : 'text-base text-muted-foreground leading-relaxed'
                        }
                      >
                        {paragraph}
                      </p>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
