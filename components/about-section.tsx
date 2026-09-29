import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading title="About Me" description="Education, background, and core technologies I use to build reliable software." />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">Education & Background</h3>
            <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-slate-900/70 p-5">
              <p className="text-lg font-semibold text-cyan-300">MSc Software Engineering</p>
              <p className="mt-1 text-slate-300">Annamalai University</p>
              <p className="text-sm text-slate-400">2022 – 2027</p>
            </div>
            <p className="mt-6 text-slate-300">
              I enjoy turning complex ideas into simple and practical products, with strong attention to code quality and user
              experience.
            </p>
            <p className="mt-4 text-slate-300">
              My focus areas include modern frontend development, full-stack architecture, and continuously learning tools that help
              ship better software.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">Technical Skills</h3>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:text-cyan-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
