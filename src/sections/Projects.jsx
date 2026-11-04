import Section from '../components/layout/Section';
import SectionHeader from '../components/common/SectionHeader';
import ProjectCard from '../components/common/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() { return <Section id="projects" className="relative z-10 border-t border-white/5"><SectionHeader title="Technical Arsenal" subtitle="Selected robust applications and utility software." /><div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div></Section>; }
