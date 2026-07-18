import {
  Zap,
  Globe,
  Cpu,
  Keyboard,
  Library,
  Rocket,
  Shield,
  Layers,
} from 'lucide-react';
import type { Feature, Screenshot } from '../types';

export const COLORS = {
  bg: '#09090B',
  surface: '#0F0F11',
  border: '#1F1F22',
  borderHover: '#2E2E33',
  text: '#FAFAFA',
  textMuted: '#A1A1AA',
  accentBlue: '#3B82F6',
  accentCyan: '#06B6D4',
  accentPurple: '#8B5CF6',
  glowBlue: 'rgba(59, 130, 246, 0.15)',
  glowCyan: 'rgba(6, 182, 212, 0.15)',
  glowPurple: 'rgba(139, 92, 246, 0.15)',
};

export const FEATURES: Feature[] = [
  {
    id: 'multi-provider',
    icon: <Globe className="w-5 h-5" />,
    title: 'Multiple AI Providers',
    description: 'Connect with ChatGPT, Gemini, Claude, Grok, DeepSeek and more from a single unified interface.',
    label: 'SYS.01',
  },
  {
    id: 'no-api',
    icon: <Shield className="w-5 h-5" />,
    title: 'No API Keys Required',
    description: 'Use the official platforms directly. No API costs, no configuration headaches, no credit cards.',
    label: 'SYS.02',
  },
  {
    id: 'stay-page',
    icon: <Layers className="w-5 h-5" />,
    title: 'Stay On Your Current Page',
    description: 'The sidebar slides in without disrupting your workflow. Research, code, and browse without context switching.',
    label: 'SYS.03',
  },
  {
    id: 'context',
    icon: <Cpu className="w-5 h-5" />,
    title: 'AI Context From Any Website',
    description: 'Automatically detects page content and prepares it for AI analysis. Ask questions about what you are reading.',
    label: 'SYS.04',
  },
  {
    id: 'streaming',
    icon: <Zap className="w-5 h-5" />,
    title: 'Streaming Responses',
    description: 'Watch answers appear in real-time. No loading spinners, no waiting. Just instant, fluid intelligence.',
    label: 'SYS.05',
  },
  {
    id: 'shortcuts',
    icon: <Keyboard className="w-5 h-5" />,
    title: 'Keyboard Shortcuts',
    description: 'Command + Shift + S to toggle. Full keyboard navigation for speed demons and power users.',
    label: 'SYS.06',
  },
  {
    id: 'prompts',
    icon: <Library className="w-5 h-5" />,
    title: 'Prompt Library',
    description: 'Create, edit, and organize custom prompt templates. Quick access to frequently used instructions.',
    label: 'SYS.07',
  },
  {
    id: 'automation',
    icon: <Rocket className="w-5 h-5" />,
    title: 'Fast Browser Automation',
    description: 'Send messages to multiple AI platforms simultaneously and compare responses side-by-side.',
    label: 'SYS.08',
  },
];

export const SCREENSHOTS: Screenshot[] = [
  { id: 'github', title: 'GitHub', subtitle: 'Review code with AI context', url: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=60' },
  { id: 'stackoverflow', title: 'Stack Overflow', subtitle: 'Debug faster with explanations', url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60' },
  { id: 'linkedin', title: 'LinkedIn', subtitle: 'Draft professional messages', url: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&auto=format&fit=crop&q=60' },
  { id: 'docs', title: 'Documentation', subtitle: 'Understand complex APIs instantly', url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60' },
];

export const COMPARISON_DATA = [
  { feature: 'Multiple AI Providers', traditional: false, sidegpt: true },
  { feature: 'No API Key Required', traditional: false, sidegpt: true },
  { feature: 'Side-by-Side Comparison', traditional: false, sidegpt: true },
  { feature: 'Context from Current Page', traditional: false, sidegpt: true },
  { feature: 'Keyboard Shortcuts', traditional: true, sidegpt: true },
  { feature: 'Open Source', traditional: false, sidegpt: true },
  { feature: 'Custom Prompt Library', traditional: false, sidegpt: true },
  { feature: 'Privacy First', traditional: false, sidegpt: true },
];
