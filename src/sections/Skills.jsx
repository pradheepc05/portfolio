import Section from '../components/layout/Section';
import SectionHeader from '../components/common/SectionHeader';
import { skills } from '../data/skills';

export default function Skills() { return <Section id="skills" className="relative z-10"><SectionHeader title="Engineering Stack" subtitle="Technologies I work with to build scalable, intelligent systems." /><div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{Object.entries(skills).map(([category, items]) => <article key={category} className="rounded-2xl p-6 liquid-glass"><h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">{category}</h3><ul className="flex flex-wrap gap-2">{items.map((skill) => <li key={skill} className="rounded border border-white/5 bg-[#171717] px-3 py-1.5 text-sm text-[#c2c2c2]">{skill}</li>)}</ul></article>)}</div></Section>; }
