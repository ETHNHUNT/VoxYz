'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/#products', label: 'Products' },
  { href: '/insights', label: 'Insights' },
  { href: '/radar', label: 'Radar' },
  { href: '/about', label: 'About' },
  { href: '/stage', label: 'Stage' },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'fixed left-0 right-0 top-0 z-50 transition-colors',
        isScrolled ? 'bg-paper/95 border-b border-ink/20 shadow-[0_2px_0_rgba(17,17,17,0.05)]' : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-5">
        <Link href="/" className="group flex items-center gap-3">
          <span
            className="relative grid h-12 w-12 place-items-center border-2 border-ink bg-white shadow-hard transition-transform group-hover:-rotate-2"
            style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-sm font-bold text-paper">
              V
            </span>
          </span>
          <span className="relative font-display text-2xl font-black tracking-tight text-ink">
            VoxYZ
            <span className="absolute -bottom-2 left-0 h-2 w-full text-accent opacity-0 transition-opacity group-hover:opacity-100">
              <svg viewBox="0 0 60 6" fill="none" aria-hidden>
                <path d="M2 3C15 5 45 -1 58 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-ink transition hover:text-accent hover:underline hover:decoration-wavy hover:underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            href="/signin"
            className="flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold text-ink/70 transition hover:bg-ink/5 hover:text-accent"
          >
            Sign In
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center rounded-md border border-transparent p-2 text-ink md:hidden"
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-paper px-6 py-6">
          <div className="mb-8 flex items-center justify-between">
            <span className="font-display text-2xl font-black">VoxYZ</span>
            <button
              type="button"
              aria-label="Close menu"
              className="rounded-md p-2"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-ink/10 py-3 font-display text-2xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/signin"
              className="border-b border-ink/10 py-3 font-display text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
