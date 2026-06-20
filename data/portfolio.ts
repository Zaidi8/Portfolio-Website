import type { LucideIcon } from 'lucide-react';
import {
  Code,
  Braces,
  LayoutGrid,
  Zap,
  LineChart,
  Brain,
  Sparkles,
  Server,
  Users,
  MessageSquare,
  Target,
  Github,
  Linkedin,
  Mail,
  Smartphone,
} from 'lucide-react';

// ── Types ────────────────────────────────────────────────────────────────────

export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface TechnicalSkill {
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface SoftSkill {
  name: string;
  icon: LucideIcon;
  description: string;
  impact: string;
}

export interface Project {
  title: string;
  summary: string;
  description: string;
  tech: string[];
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
  inProgress?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  description: string;
  responsibilities: string[];
}

// ── Site Config (Real Data) ──────────────────────────────────────────────────

export const siteConfig = {
  name: 'Zaid Zaheer',
  navLogo: 'Zaid',
  title: 'Lead Software Engineer (Frontend)',
  email: 'zaidzaheer410@gmail.com',
  tagline:
    'Building real-time, AI-powered web apps with React, Next.js, and TypeScript — owning delivery from architecture to production, with a growing backend skill set in Go.',
  aboutParagraphs: [
    "I'm a frontend-focused Software Engineer and the Lead Software Engineer (technical lead) at BlueSoft, building production web applications with React, Next.js, and TypeScript. I care about performance, scalability, and clean, user-centric interfaces.",
    "I own projects end to end — from architecture and development to deployment and post-launch iteration — working closely with clients and stakeholders to turn business requirements into reliable software.",
    "Lately I've focused on real-time, AI-powered products, and I'm growing a backend skill set in Go (Echo, PostgreSQL, WebSockets). I work with an AI-augmented toolchain — Claude Code, Playwright MCP for E2E testing, and Figma AI — to ship faster without cutting corners.",
  ],
} as const;

// ── Navigation ───────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

// ── Social Links ─────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { icon: Github, href: 'https://github.com/Zaidi8', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/zaidzaheer/', label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: 'Email' },
];

// ── Technical Skills ─────────────────────────────────────────────────────────

export const technicalSkills: TechnicalSkill[] = [
  {
    name: 'React & Next.js',
    icon: Code,
    description:
      'Architecting scalable frontends and full-stack apps with React and Next.js — App Router, SSR/SSG, and server components.',
  },
  {
    name: 'TypeScript & JavaScript',
    icon: Braces,
    description:
      'Type-safe, maintainable code across the stack — my primary production languages.',
  },
  {
    name: 'UI Engineering & Design Systems',
    icon: LayoutGrid,
    description:
      'Responsive, mobile-first interfaces with TailwindCSS, shadcn/ui, and accessible component patterns.',
  },
  {
    name: 'Web Performance Optimization',
    icon: Zap,
    description:
      'Caching, prefetching, and optimized data fetching for fast, smooth UIs — up to ~40–60% faster load times on Tradevo.',
  },
  {
    name: 'Data Visualization & Real-Time Data',
    icon: LineChart,
    description:
      'Interactive charts and live dashboards with ECharts and TradingView Lightweight Charts over real-time data.',
  },
  {
    name: 'AI Integration',
    icon: Brain,
    description:
      'Building AI-powered features with large language models and real-time voice/conversational AI, plus prompt engineering.',
  },
  {
    name: 'AI-Augmented Workflow',
    icon: Sparkles,
    description:
      'Shipping faster with Claude Code, Playwright MCP for E2E test automation, and Figma AI.',
  },
  {
    name: 'Go & Backend (growing)',
    icon: Server,
    description:
      'Backend services in Go (Echo, pgx, WebSockets) with PostgreSQL and Docker — a growing, hands-on skill set.',
  },
  {
    name: 'React Native (personal / learning)',
    icon: Smartphone,
    description:
      'Cross-platform mobile UIs and user flows — personal and learning projects, not production work.',
  },
];

// ── Soft Skills ──────────────────────────────────────────────────────────────

export const softSkills: SoftSkill[] = [
  {
    name: 'Technical Leadership & Architecture',
    icon: Users,
    description:
      'Leading technical direction end to end — architecture, code review, and delivery — and owning projects from planning to maintenance.',
    impact: 'Lead Software Engineer at BlueSoft',
  },
  {
    name: 'Stakeholder Communication',
    icon: MessageSquare,
    description:
      'Clear and effective communication with clients and non-technical stakeholders.',
    impact: 'Improved requirement clarity and delivery',
  },
  {
    name: 'Product-Oriented Thinking',
    icon: Target,
    description:
      'Building solutions with a strong focus on user experience and business value.',
    impact: 'Delivered real-world, scalable products',
  },
];

// ── Projects (Real Data) ─────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: 'Tradevo',
    summary: 'AI-powered crypto trading-journal platform — public beta',
    description:
      'I lead the frontend (architecture and build) for Tradevo, an AI-powered, real-time crypto trading-journal platform in public beta with live users. I built the Analytics, Markets, and Journal surfaces, onboarding, and auth/profile/settings — including a unified, cookie-persisted filtering system shared across Analytics and Journal. The Journal handles open/closed positions with list, grid, and detailed views; Analytics has live per-coin charts, a watchlist, KPI cards, and ECharts visualizations. Real-time Binance data flows through our own backend, and caching/prefetching cut load times by ~40–60%. I also rebuilt the marketing site pixel-perfect in Next.js.',
    tech: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'ECharts', 'TradingView', 'Firebase OTP', 'shadcn/ui'],
    impact: 'Public beta with live users · ~40–60% faster load times',
    liveUrl: 'https://tradevo.ai/',
  },
  {
    title: 'OfficeSolver',
    summary: 'All-in-one business-management platform',
    description:
      'A business-management platform covering projects, clients, payroll, and workflows. Built and maintained in production with continuous post-launch updates driven by client needs.',
    tech: ['React', 'Next.js', 'TypeScript'],
    impact: 'Production platform for multi-user teams',
    liveUrl: 'https://officesolver.com/',
  },
  {
    title: 'BlueSoft Website',
    summary: 'Company site — legacy React → Next.js migration',
    description:
      "Migrated BlueSoft's site from legacy React to Next.js with Ghost CMS as the content backend. I own and continuously evolve it — redesigns, restructures, new pages, and ongoing performance/SEO work.",
    tech: ['React', 'Next.js', 'Ghost CMS'],
    impact: 'Better performance, SEO, and content workflow',
    liveUrl: 'https://bluesoft.ai/',
  },
  {
    title: 'Aiva',
    summary: 'AI voice receptionist — final-year project',
    description:
      'An AI-powered voice receptionist that automates appointment booking and answers queries 24/7. Built with Next.js and LiveKit Agents for real-time voice, WhisperFlow for speech-to-text, ElevenLabs for text-to-speech, and Llama 70B via Groq for the LLM. Currently in development.',
    tech: ['Next.js', 'LiveKit Agents', 'WhisperFlow (STT)', 'ElevenLabs (TTS)', 'Llama 70B / Groq'],
    impact: 'Real-time, AI-driven voice automation',
    inProgress: true,
  },
  {
    title: 'Webhook Relay',
    summary: 'Backend webhook relay service in Go',
    description:
      'A Go backend service that receives, verifies (HMAC-SHA256), stores, and forwards webhooks with retries and exponential backoff, plus a real-time WebSocket relay. Includes an async delivery worker with dead-lettering and manual re-queue, graceful shutdown, and a clean layered architecture with tests. A personal project to grow my backend range.',
    tech: ['Go', 'Echo', 'PostgreSQL', 'WebSockets', 'Docker'],
    impact: 'Personal Go project — backend depth',
    githubUrl: 'https://github.com/Zaidi8/webhook-relay',
  },
  {
    title: 'React Native Mobile Apps',
    summary: 'Donation & Deals apps — personal / learning',
    description:
      'Personal mobile projects built with React Native — a donation platform and a wholesaler product-sharing/deals app — focused on mobile UI/UX and smooth user flows. Personal and learning work, not production.',
    tech: ['React Native', 'Expo'],
    impact: 'Personal / learning — mobile UI & UX',
    githubUrl: 'https://github.com/Zaidi8/DonationApplication',
  },
];

// ── Experience ───────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    company: 'BlueSoft',
    role: 'Lead Software Engineer (Frontend)',
    description:
      'Leading frontend architecture and delivery for production web apps — owning projects end to end from architecture through deployment and post-launch iteration, with a growing backend skill set in Go.',
    responsibilities: [
      'Lead the frontend architecture and build for Tradevo, an AI-powered real-time trading-journal platform in public beta',
      'Own end-to-end delivery across React, Next.js, and TypeScript — architecture, development, deployment, and post-launch updates',
      'Migrated the BlueSoft site to Next.js with Ghost CMS and continuously evolve it for performance and SEO',
      'Work with an AI-augmented toolchain (Claude Code, Playwright MCP for E2E testing, Figma AI)',
    ],
  },
];