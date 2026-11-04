import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Section from '../components/layout/Section';
import { personal } from '../data/personal';
import { CONTACT_ENDPOINT } from '../utils/constants';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!CONTACT_ENDPOINT) {
      const fields = new FormData(form);
      const subject = `Portfolio message from ${fields.get('name')}`;
      const body = `Name: ${fields.get('name')}\nEmail: ${fields.get('email')}\n\n${fields.get('message')}`;
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('email');
      return;
    }
    setStatus('sending');
    try {
      const response = await fetch(CONTACT_ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Contact endpoint rejected the request');
      form.reset(); setStatus('sent');
    } catch { setStatus('error'); }
  }
  return <Section id="contact" className="relative z-10 pb-32"><div className="rounded-3xl p-8 liquid-glass ai-glow md:p-12"><div className="grid grid-cols-1 gap-16 lg:grid-cols-2"><div><h2 className="mb-6 text-4xl font-bold tracking-tight">Let's build something useful.</h2><p className="mb-8 text-lg font-light leading-relaxed text-[#c2c2c2]">I'm interested in internships, technical collaborations, open-source projects, and opportunities to architect meaningful software.</p><div className="space-y-6"><a href={`mailto:${personal.email}`} className="group flex w-fit items-center gap-4 text-[#c2c2c2] transition-colors hover:text-[var(--color-accent)]"><span className="rounded-full border border-white/5 bg-[#171717] p-3"><Mail aria-hidden="true" className="h-5 w-5" /></span>{personal.email}</a><a href={personal.github} target="_blank" rel="noreferrer" className="group flex w-fit items-center gap-4 text-[#c2c2c2] transition-colors hover:text-white"><span className="rounded-full border border-white/5 bg-[#171717] p-3"><Github aria-hidden="true" className="h-5 w-5" /></span>{new URL(personal.github).hostname}/pradheepc05</a><a href={personal.linkedin} target="_blank" rel="noreferrer" className="group flex w-fit items-center gap-4 text-[#c2c2c2] transition-colors hover:text-[var(--color-accent)]"><span className="rounded-full border border-white/5 bg-[#171717] p-3"><Linkedin aria-hidden="true" className="h-5 w-5" /></span>linkedin.com/in/pradheepc05</a></div></div>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4"><label className="sr-only" htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" required placeholder="Name" className="w-full rounded-lg border border-white/10 bg-[#171717] p-4 text-white placeholder-[#777] focus:border-[var(--color-accent)] focus:outline-none" /><label className="sr-only" htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="Email Address" className="w-full rounded-lg border border-white/10 bg-[#171717] p-4 text-white placeholder-[#777] focus:border-[var(--color-accent)] focus:outline-none" /><label className="sr-only" htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" required placeholder="Message" rows="4" className="w-full resize-y rounded-xl border border-white/10 bg-[#171717] p-4 text-white placeholder-[#777] focus:border-[var(--color-accent)] focus:outline-none" /><button type="submit" disabled={status === 'sending'} className="tactile-btn mt-2 flex w-full items-center justify-center rounded-xl bg-white py-4 font-semibold text-black hover:bg-gray-100 disabled:cursor-wait disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Send Message'}</button><p role="status" aria-live="polite" className="min-h-6 text-sm text-[#c2c2c2]">{status === 'email' && 'Your email app should open with the message ready to send. If it does not, email me directly at the address shown.'}{status === 'sent' && 'Your message was submitted successfully.'}{status === 'error' && 'The message could not be submitted. Please email me directly.'}</p></form>
  </div></div></Section>;
}
