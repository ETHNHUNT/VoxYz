import Link from 'next/link';
import { Github, Mail, Twitter } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="mx-auto max-w-4xl px-4 pb-20 pt-10 text-center">
      <div className="mb-6 flex justify-center gap-4">
        <a
          href="https://x.com/Voxyz_AI"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-white shadow-hard-sm transition hover:bg-sunshine"
          aria-label="Twitter"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/Heyvhuang"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-white shadow-hard-sm transition hover:bg-sunshine"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="mailto:voxyz.developer@gmail.com"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-white shadow-hard-sm transition hover:bg-sunshine"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
      <p className="mb-4 font-display text-sm font-semibold text-ink/50">
        © 2026 VoxYZ Space. Built with Next.js &amp; Tailwind.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-ink/40">
        <Link href="/insights" className="transition hover:text-ink">
          Insights
        </Link>
        <Link href="/privacy" className="transition hover:text-ink">
          Privacy
        </Link>
        <Link href="/terms" className="transition hover:text-ink">
          Terms
        </Link>
      </div>
    </footer>
  );
}
