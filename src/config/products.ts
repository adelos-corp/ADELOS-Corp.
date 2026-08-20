import { Terminal, BookOpen, Code, Shield, Bot, Sparkles, LucideIcon } from "lucide-react";
import { GlowColor, ThemeMode } from "@/components/providers/ThemeProvider";

export interface ProductLaunchOption {
  name: string;
  url: string;
}

export interface ProductConfig {
  title: string;
  slug: string;
  category: string;
  description: string;
  badge?: string;
  badgeClassName?: string;
  tag?: string;
  icon: LucideIcon;
  glow: GlowColor;
  mode: ThemeMode;
  website?: string;
  launchOptions?: ProductLaunchOption[];
}

export const products: ProductConfig[] = [
  {
    title: "William Graham",
    slug: "william-graham",
    category: "Personalized AI Platform",
    description: "Privacy-first artificial intelligence running on local architecture with secure cloud synchronization. Built for the modern enterprise.",
    badge: "Working",
    badgeClassName: "text-emerald-700 bg-emerald-500/15",
    icon: Terminal,
    glow: "purple",
    mode: "light",
    website: "/page.tsx"
  },
  {
    title: "Studenthome",
    slug: "studenthome",
    category: "Education Platform",
    description: "A seamless, unified destination for global students. Bridging the gap between distributed education systems and continuous learning.",
    badge: "Beta",
    icon: BookOpen,
    glow: "blue",
    mode: "light",
    launchOptions: [
      {
        name: "Modern Interface",
        url: "https://studenthome-v2.vercel.app/"
      },
      {
        name: "Simplified Interface",
        url: "https://studenthome-1.vercel.app/"
      }
    ]
  },
  {
    title: "CODELOS",
    slug: "codelos",
    category: "Engineering Platform",
    description: "The next evolution of the integrated development environment. Intelligent, distributed, and engineered for high-performance programming.",
    badge: "Beta",
    icon: Code,
    glow: "indigo",
    mode: "dark"
  },
  {
    title: "HISA",
    slug: "hisa",
    category: "Hybrid Intelligence Systems Architecture",
    description: "Trust-based intelligence architectures prioritizing continuity and absolute privacy in the most demanding environments.",
    tag: "Under active development",
    icon: Sparkles,
    glow: "teal",
    mode: "light"
  },
  {
    title: "QESA",
    slug: "qesa",
    category: "Quantum Encryption Systems Architecture",
    description: "Future enterprise cybersecurity. Quantum-ready networking and secure infrastructure with AI-assisted monitoring.",
    tag: "Under active development",
    icon: Shield,
    glow: "emerald",
    mode: "dark"
  },
  {
    title: "TENSA",
    slug: "tensa",
    category: "Tendon Engineered Natural Systems Architecture",
    description: "Mechanically intelligent robotics. Advanced biomechanics research enabling true physical intelligence through artificial tendon systems.",
    tag: "Coming soon",
    icon: Bot,
    glow: "crimson",
    mode: "dark"
  }
];
