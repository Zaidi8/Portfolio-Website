import { useEffect } from 'react';
import { Navigation } from '@/app/components/navigation';
import { AnimatedBackground } from '@/app/components/animated-background';
import { HeroSection } from '@/app/components/hero-section';
import { AboutSection } from '@/app/components/about-section';
import { SkillsSection } from '@/app/components/skills-section';
import { ProjectsCarousel } from '@/app/components/projects-carousel';
import { ExperienceTimeline } from '@/app/components/experience-timeline';
import { ContactSection } from '@/app/components/contact-section';
import { Footer } from '@/app/components/footer';

export default function App() {
  useEffect(() => {
    // Enable dark mode by default
    document.documentElement.classList.add('dark');

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsCarousel />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}