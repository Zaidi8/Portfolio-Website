import dynamic from 'next/dynamic';
import { Navigation } from '@/components/navigation';
import { AnimatedBackground } from '@/components/animated-background';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { Footer } from '@/components/footer';

const ContactSection = dynamic(
  () => import('@/components/contact-section').then((mod) => mod.ContactSection),
  { loading: () => <div className="py-20" /> }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-100 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
      >
        Skip to main content
      </a>

      <AnimatedBackground />
      <Navigation />

      <main id="main-content" className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
