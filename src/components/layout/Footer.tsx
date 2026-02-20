import Link from 'next/link';
import { WaveDivider } from '../shared/WaveDivider';
import { LucideStar } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full mt-24">
            <WaveDivider />
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-10 text-center flex flex-col items-center">
            {/* decorative stars */}
            <div className="absolute left-4 bottom-4 opacity-20 hidden md:block">
                <LucideStar className="w-6 h-6 text-ink" />
            </div>
            <div className="absolute right-4 bottom-4 opacity-20 hidden md:block">
                <LucideStar className="w-5 h-5 text-ink" />
            </div>
                <div className="flex items-center justify-center gap-6 mb-8">
                    <a href="https://x.com/Voxyz_AI" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-vox-dark bg-white shadow-sketch-sm hover:-translate-y-1 hover:shadow-sketch transition-all text-vox-dark">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </a>
                    <a href="https://github.com/Heyvhuang" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-vox-dark bg-white shadow-sketch-sm hover:-translate-y-1 hover:shadow-sketch transition-all text-vox-dark">
                        <span className="sr-only">GitHub</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    </a>
                    <a href="mailto:voxyz.developer@gmail.com" className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-vox-dark bg-white shadow-sketch-sm hover:-translate-y-1 hover:shadow-sketch transition-all text-vox-dark">
                        <span className="sr-only">Email</span>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </a>
                </div>
                <p className="text-gray-500 mb-6">
                    © {new Date().getFullYear()} VoxYZ Space. Built with Next.js & Tailwind.
                </p>
                <div className="flex items-center justify-center gap-6 text-xs font-bold tracking-widest text-gray-500">
                    <Link href="/insights" className="hover:text-coral">INSIGHTS</Link>
                    <Link href="/privacy" className="hover:text-coral">PRIVACY</Link>
                    <Link href="/terms" className="hover:text-coral">TERMS</Link>
                    <Link href="/products" className="hover:text-coral">PRODUCTS</Link>
                    <Link href="/radar" className="hover:text-coral">RADAR</Link>
                    <Link href="/stage" className="hover:text-coral">STAGE</Link>
                </div>
            </div>
        </footer>
    );
}
