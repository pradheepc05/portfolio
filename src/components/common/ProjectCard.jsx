import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  const Icon = project.icon;
  const safeLinks = Object.entries(project.links || {}).filter(([, url]) => typeof url === 'string' && /^https?:\/\//i.test(url));
  return <article className="group flex h-full flex-col rounded-2xl p-6 liquid-glass interactive-element">
    <div className="mb-6 flex items-start justify-between"><div className="rounded-xl border border-white/5 bg-[#171717] p-3 text-[var(--color-accent)]"><Icon aria-hidden="true" className="h-5 w-5" /></div><div className="flex gap-2">{safeLinks.map(([type, url]) => <a key={type} href={url} target="_blank" rel="noreferrer" aria-label={`${type === 'github' ? 'GitHub repository' : 'Live demo'} for ${project.title}`} className="rounded-lg p-2 text-[#c2c2c2] transition hover:bg-white/10 hover:text-white">{type === 'github' ? <Github className="h-5 w-5" /> : <ExternalLink className="h-5 w-5" />}</a>)}</div></div>
    <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">{project.type}</p><h3 className="mb-2 text-xl font-medium text-white">{project.title}</h3><p className="mb-6 flex-grow text-sm font-light leading-relaxed text-[#a0a0a0]">{project.description}</p>
    <ul className="mt-auto flex flex-wrap gap-2" aria-label="Technologies">{project.tech.map((tech) => <li key={tech} className="rounded bg-[rgba(255,87,34,.1)] px-2 py-1 font-mono text-xs text-[var(--color-accent)]">{tech}</li>)}</ul>
  </article>;
}
