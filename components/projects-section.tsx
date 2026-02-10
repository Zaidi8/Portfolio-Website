'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import { FadeIn } from '@/components/fade-in';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { cn } from '@/components/ui/utils';

const DRAG_THRESHOLD = 50;

function ProjectCard({ project, isActive }: { project: Project; isActive: boolean }) {
  const href = project.liveUrl || project.githubUrl;

  return (
    <div
      className={cn(
        'bg-card border rounded-2xl p-8 transition-all duration-500 h-full',
        isActive
          ? 'border-primary/50 shadow-xl shadow-primary/10'
          : 'border-border shadow-lg opacity-80 scale-[0.97]'
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-2xl mb-2">{project.title}</h3>
          <p className="text-muted-foreground italic text-sm">{project.summary}</p>
        </div>

        <div className="flex gap-2 shrink-0 ml-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 hover:bg-primary/20 hover:scale-110 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`View ${project.title} on GitHub`}
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 text-primary" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 hover:bg-primary/20 hover:scale-110 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`View ${project.title} live`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4 text-primary" />
            </a>
          )}
        </div>
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary shrink-0" />
          <p className="text-xs text-primary">{project.impact}</p>
        </div>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={(e) => e.stopPropagation()}
          >
            View project
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}

const AUTO_SCROLL_INTERVAL = 2000;

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const isPaused = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSlides = projects.length;

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, totalSlides - 1));
      setCurrentIndex(clamped);
    },
    [totalSlides]
  );

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-scroll: advances every 5s, pauses on hover
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }
    }, AUTO_SCROLL_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalSlides]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      }
    },
    [goNext, goPrev]
  );

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that delivered real impact
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            className="relative overflow-hidden"
            role="region"
            aria-label="Project carousel"
            aria-roledescription="carousel"
            onKeyDown={handleKeyDown}
            onMouseEnter={() => (isPaused.current = true)}
            onMouseLeave={() => (isPaused.current = false)}
            tabIndex={0}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { type: 'spring', stiffness: 300, damping: 30 }
              }
              drag={reducedMotion ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(_, info) => {
                if (info.offset.x < -DRAG_THRESHOLD) {
                  goNext();
                } else if (info.offset.x > DRAG_THRESHOLD) {
                  goPrev();
                }
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="w-full shrink-0 px-2 md:px-4"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${totalSlides}: ${project.title}`}
                >
                  <ProjectCard
                    project={project}
                    isActive={index === currentIndex}
                  />
                </div>
              ))}
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={goPrev}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dot indicators */}
              <div className="flex gap-2" role="tablist" aria-label="Project slides">
                {projects.map((project, index) => (
                  <button
                    key={project.title}
                    onClick={() => goTo(index)}
                    role="tab"
                    aria-selected={index === currentIndex}
                    aria-label={`Go to ${project.title}`}
                    className={cn(
                      'h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                      index === currentIndex
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    )}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
