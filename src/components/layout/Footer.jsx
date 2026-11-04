import { Terminal } from 'lucide-react';
import { personal } from '../../data/personal';

export default function Footer() {
  return <footer className="relative z-10 border-t border-white/5 bg-[#0b0b0b] px-6 py-10">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">
      <div><h2 className="mb-1 flex items-center gap-2 font-bold tracking-tight"><Terminal className="h-4 w-4 text-[var(--color-accent)]" /> {personal.name.toUpperCase()}</h2><p className="text-sm text-[#777]">{personal.title} • AI Builder</p></div>
      <p className="font-mono text-sm text-[#777]">© {new Date().getFullYear()} {personal.name}. Built with React.</p>
    </div>
  </footer>;
}
