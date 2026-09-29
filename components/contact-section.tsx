"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { contactLinks } from "@/lib/data";

type FormStatus = { type: "idle" | "success" | "error"; message: string };

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Please complete all required fields." });
      return;
    }

    try {
      setSubmitting(true);
      setStatus({ type: "idle", message: "" });

      const response = await fetch("https://formspree.io/f/mblkvajd", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed submission");
      }

      form.reset();
      setStatus({ type: "success", message: "Message sent successfully! I will get back to you soon." });
    } catch {
      setStatus({ type: "error", message: "Could not send message right now. Please try again later." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          title="Get In Touch"
          description="I am open to internships, collaborations, and project discussions in software and web development."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">Let&apos;s Connect</h3>
            <ul className="mt-5 space-y-4">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 transition hover:border-cyan-300/50"
                  >
                    <p className="text-xs uppercase tracking-wider text-cyan-300">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-200">{item.value}</p>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-sm text-slate-300">
              <p className="font-semibold text-white">Looking for opportunities in:</p>
              <ul className="mt-3 space-y-1">
                <li>• Software Development Internships</li>
                <li>• Web Development Projects</li>
                <li>• Open Source Collaborations</li>
                <li>• Technical Mentorship</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">Send a Message</h3>
            <p className="mt-2 text-sm text-slate-300">Fill the form and I&apos;ll respond as soon as possible.</p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none ring-cyan-400 transition focus:ring-2"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none ring-cyan-400 transition focus:ring-2"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none ring-cyan-400 transition focus:ring-2"
                  placeholder="Tell me about your project or say hello"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>

              {status.type !== "idle" ? (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl px-4 py-3 text-sm ${
                    status.type === "success" ? "bg-emerald-400/20 text-emerald-200" : "bg-red-400/20 text-red-200"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
