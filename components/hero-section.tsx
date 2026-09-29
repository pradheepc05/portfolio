import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.18),transparent_45%)]" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Software Engineering Student</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building meaningful digital products with modern engineering.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            I&apos;m Pradheep C, an MSc Software Engineering student at Annamalai University (2022–2027), focused on robust web
            applications, clean architecture, and user-first design.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-[0_0_35px_rgba(56,189,248,0.45)]"
            >
              View My Work
            </a>
            <a
              href="/Pradheep_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto w-full max-w-sm">
          <div className="relative rounded-3xl border border-white/20 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
            <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400/30 to-violet-500/30 blur-xl" />
            <Image
              src="/profile.jpg"
              alt="Pradheep C portrait"
              width={480}
              height={580}
              priority
              className="relative h-auto w-full rounded-[1.2rem] object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
