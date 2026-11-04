import { ArrowRight } from 'lucide-react';
import { personal } from '../data/personal';
import { RESUME_PATH } from '../utils/constants';
import RevealText from '../components/common/RevealText';

export default function Hero() {
  return <section id="top" className="relative z-10 flex min-h-[90vh] items-center justify-center px-6 pt-24"><div className="mx-auto flex w-full max-w-5xl flex-col md:items-center md:text-center">
    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(255,87,34,.3)] px-4 py-2 font-mono text-xs text-[var(--color-accent)] liquid-glass"><span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-accent)]" />Open to internships & technical collaboration</div>
    <h1 className="mb-6 text-6xl font-bold leading-[1.05] tracking-tighter text-white md:text-8xl lg:text-9xl"><RevealText delay={.1}>Software Engineer.</RevealText><RevealText delay={.2}><span className="bg-gradient-to-br from-white via-[#c2c2c2] to-[#555] bg-clip-text text-transparent">AI Builder.</span></RevealText></h1>
    <p className="fade-in mb-12 max-w-2xl text-lg font-light leading-relaxed text-[#a0a0a0] md:text-xl" style={{ animationDelay: '.4s' }}>{personal.bio}</p>
    <div className="fade-in flex flex-wrap items-center gap-4 md:justify-center" style={{ animationDelay: '.6s' }}><a href="#projects" className="tactile-btn flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-black hover:bg-gray-100">Explore Projects <ArrowRight className="h-4 w-4" /></a><a href={RESUME_PATH} target="_blank" rel="noreferrer" className="rounded-xl px-8 py-4 text-sm font-medium text-white liquid-glass transition hover:bg-white/10">View Resume</a></div>
  </div></section>;
}
