import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/lib/data";

export function CertificationsSection() {
  return (
    <section id="certificates" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          title="Certifications"
          description="Professional credentials that validate my technical foundation and learning consistency."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certificate, index) => (
            <Reveal key={certificate.title} delay={index * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-white">{certificate.title}</h3>
                  <p className="mt-1 text-sm font-medium text-cyan-300">{certificate.provider}</p>
                  <p className="mt-3 text-sm text-slate-300">{certificate.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {certificate.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-violet-300/35 bg-violet-400/10 px-3 py-1 text-xs text-violet-200">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-max rounded-full bg-gradient-to-r from-violet-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-100"
                  >
                    View Certificate
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-slate-300">
          I continuously pursue new certifications and hands-on learning to stay current with emerging technologies.
        </p>
      </div>
    </section>
  );
}
