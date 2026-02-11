import type { LucideIcon } from 'lucide-react';
import {
  Code,
  Zap,
  Brain,
  Rocket,
  Sparkles,
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
  experience: string;
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
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
}

// ── Site Config (Real Data) ──────────────────────────────────────────────────

export const siteConfig = {
  name: 'Zaid Zaheer',
  navLogo: 'Zaid',
  title: 'Frontend Engineer',
  email: 'zaidzaheer410@gmail.com',
  tagline:
    'Building high-performance web and mobile experiences with React-Native, React, Next.js, AI integrations, and secure authentication systems.',
  aboutParagraphs: [
    "I'm a Frontend Engineer with hands-on experience building production-grade web and mobile applications using React, React Native, and Next.js. I focus on performance, scalability, and delivering clean, user-centric interfaces.",
    "I’ve led projects end to end — from architecture and development to deployment and post-launch improvements — working closely with clients and stakeholders to translate business requirements into reliable technical solutions.",
    "Currently, I’m working on AI-powered products and real-time data platforms, integrating technologies such as MCP, RAG, Brevo email OTP, and Firebase phone authentication to build secure, intelligent, and scalable systems.",
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
      'Building scalable frontend and full-stack applications using React and Next.js (SSR, SSG, App Router).',
    experience: '1+ years',
  },
  {
    name: 'React Native Development',
    icon: Smartphone,
    description:
      'Building cross-platform mobile applications with smooth user flows and native-like performance.',
    experience: '1+ year',
  },
  {
    name: 'Performance Optimization',
    icon: Zap,
    description:
      'Caching, prefetching, optimized data fetching, and smooth UI interactions for high-performance apps.',
    experience: '1+ years',
  },
  {
    name: 'AI Integrations',
    icon: Brain,
    description:
      'Integrating MCP-driven AI workflows and Retrieval-Augmented Generation (RAG) into web applications.',
    experience: '1+ year',
  },
  {
    name: 'Authentication Systems',
    icon: Rocket,
    description:
      'Secure OTP-based authentication using Brevo (email) and Firebase (phone verification).',
    experience: '1+ year',
  },
  {
    name: 'Real-Time Data Visualization',
    icon: Sparkles,
    description:
      'Interactive charts and dashboards using TradingView Lightweight Charts and real-time data.',
    experience: '1+ years',
  },
];

// ── Soft Skills ──────────────────────────────────────────────────────────────

export const softSkills: SoftSkill[] = [
  {
    name: 'Technical Leadership & Ownership',
    icon: Users,
    description:
      'Owning projects end to end, from planning and architecture to delivery and maintenance.',
    impact: 'Led multiple production projects',
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
    title: 'Aiva',
    summary: 'AI-powered virtual receptionist (Final Year Project – In Progress)',
    description:
      'Leading the development of an AI-powered virtual receptionist that automates appointment booking and handles user queries 24/7. Built using Next.js as a full-stack framework with MCP-based AI-driven CRUD operations and planned RAG integration for context-aware responses.',
    tech: ['Next.js', 'React', 'MCP', 'RAG', 'AI Integrations'],
    impact: 'Demonstrates production-grade AI automation and full-stack ownership',
    liveUrl: 'https://aiva-fyp.vercel.app/',
  },
  {
    title: 'Tradevo',
    summary: 'AI-powered trading platform with real-time market data',
    description:
      'Developed a high-performance trading platform with real-time charts and indicators using TradingView Lightweight Charts. Implemented secure authentication with Brevo email OTP and Firebase phone OTP, along with caching and hover-based prefetching for near-instant UI interactions.',
    tech: ['Next.js', 'React', 'TradingView', 'Brevo', 'Firebase'],
    impact: 'Smooth, secure, and high-performance fintech user experience',
    liveUrl: 'https://stage.tradevo.ai/',
  },
  {
    title: 'OfficeSolver',
    summary: 'All-in-one business management platform',
    description:
    'Developed and deployed a scalable business management solution covering projects, clients, payroll, and workflows. Delivered continuous updates post-deployment based on client requirements.',
    tech: ['Next.js', 'React', 'Web Apps'],
    impact: 'Improved operational efficiency for multi-user teams',
    liveUrl: 'https://officesolver.com/',
  },
  {
    title: 'BlueSoft Website (Next.js Migration)',
    summary: 'Company website migration from React to Next.js',
    description:
    'Migrated the legacy React website to Next.js with a new theme while maintaining design consistency. Integrated Ghost CMS to allow non-technical content management.',
    tech: ['Next.js', 'React', 'Ghost CMS'],
    impact: 'Better performance, SEO, and content workflow',
    liveUrl:'https://bluesoft.ai/'
  },
  {
    title: 'React Native Mobile Apps',
    summary: 'Deals App & Donation App',
    description:
      'Built mobile applications using React Native, including a wholesaler product-sharing app and a donation platform focused on usability and smooth user flows.',
    tech: ['React Native'],
    impact: 'Improved customer engagement and accessibility',
  },
];

// ── Experience ───────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    company: 'Project-Based & Client Work',
    role: 'Frontend / Software Engineer',
    period: '2022 - Present',
    description:
      'Delivering production-ready web and mobile applications with a focus on performance, scalability, AI integration, and secure authentication.',
    responsibilities: [
      'Developed and maintained applications using React, React Native, and Next.js',
      'Led end-to-end development including architecture, deployment, and post-launch updates',
      'Implemented secure OTP authentication using Brevo and Firebase',
      'Collaborated with stakeholders to deliver business-focused solutions',
    ],
  },
];