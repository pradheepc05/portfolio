import { useEffect, useState } from 'react';
import { Menu, Terminal, X } from 'lucide-react';
import { navigation } from '../../data/navigation';
import { useScroll } from '../../hooks/useScroll';

export default function Navbar() {
  const scrolled = useScroll();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const close = () => setOpen(false);
  return <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'liquid-glass py-4' : 'bg-transparent py-6'}`}>
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
      <a href="#top" onClick={close} className="group flex items-center gap-2 rounded text-xl font-bold tracking-tighter" aria-label="Pradheep home"><Terminal className="h-5 w-5 text-[var(--color-accent)] transition-transform group-hover:rotate-12" /> PRADHEEP<span className="text-[var(--color-accent)]">.</span></a>
      <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
        {navigation.map((item) => <a key={item.href} href={item.href} className="rounded px-2 py-1 text-sm font-medium text-[#c2c2c2] transition-colors hover:text-white">{item.label}</a>)}
        <a href="#contact" className="rounded-lg bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-gray-200">Contact Me</a>
      </nav>
      <button type="button" className="rounded p-2 text-[#c2c2c2] hover:text-white md:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation">
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute left-0 top-full flex w-full flex-col items-center gap-2 border-b border-white/10 liquid-glass py-4 md:hidden">
      {[...navigation, { label: 'Contact Me', href: '#contact' }].map((item) => <a key={item.href} href={item.href} onClick={close} className="w-full py-3 text-center text-lg font-medium text-[#c2c2c2] hover:text-white">{item.label}</a>)}
    </nav>}
  </header>;
}
