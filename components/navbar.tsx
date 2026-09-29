"use client";

import { useState } from "react";
import { navigation } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#home" className="text-lg font-semibold tracking-wide text-white">
          Pradheep C
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center rounded-lg border border-white/20 p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <span className="text-base font-semibold">{open ? "✕" : "☰"}</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <a className="text-sm font-medium text-slate-200 transition hover:text-cyan-300" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
          <ul className="space-y-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="block text-base font-medium text-slate-100 transition hover:text-cyan-300"
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
