import { Cpu, Layers, Shield, Zap } from 'lucide-react';
import Section from '../components/layout/Section';
import SectionHeader from '../components/common/SectionHeader';

const areas = [
  { icon: Cpu, title: 'AI Applications', desc: 'LLM integrations, intelligent assistants, RAG architectures, and voice interfaces.', span: 'md:col-span-7 lg:col-span-8' },
  { icon: Layers, title: 'Full-Stack', desc: 'Modern, performant web applications.', span: 'md:col-span-5 lg:col-span-4' },
  { icon: Shield, title: 'Secure Engineering', desc: 'Security-aware applications with robust authentication.', span: 'md:col-span-5 lg:col-span-4' },
  { icon: Zap, title: 'Automation', desc: 'Tools and scripts that connect AI, software, and system workflows.', span: 'md:col-span-7 lg:col-span-8' },
];
export default function WhatIBuild() { return <Section id="about" className="relative z-10 border-t border-white/5 bg-gradient-to-b from-white/[.02] to-transparent"><SectionHeader title="What I Build" subtitle="Bridging the gap between intelligent models and practical, scalable software." /><div className="bento-grid">{areas.map(({ icon: Icon, title, desc, span }) => <article key={title} className={`bento-item col-span-12 flex flex-col justify-between p-8 md:p-10 liquid-glass interactive-element ${span}`}><div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#171717] text-[var(--color-accent)]"><Icon aria-hidden="true" /></div><div><h3 className="mb-3 text-2xl font-medium tracking-tight">{title}</h3><p className="font-light leading-relaxed text-[#a0a0a0]">{desc}</p></div></article>)}</div></Section>; }
