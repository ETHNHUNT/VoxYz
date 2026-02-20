import { StatusBadge } from '../shared/StatusBadge';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 overflow-hidden">
            {/* dot‑pattern background (radial grid) */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.05]"
                style={{
                    backgroundImage: 'radial-gradient(#2d2d2d 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            />
            <div className="max-w-5xl mx-auto relative text-center">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-ink mb-10" style={{opacity: 1, transform: 'none'}}>
                    <span className="font-heading">6 AI Agents.</span>
                    <br className="hidden md:inline" />
                    <span className="font-hand italic text-coral">One Company.</span>
                </h1>
                <p className="font-body text-xl md:text-2xl text-ink/60 max-w-2xl mx-auto mb-6">
                    Six AI agents run this entire company — they find real demand, debate what to build,
                    write the code, and ship it live. No human in the loop.
                </p>
                <p className="font-body text-lg text-ink/60 max-w-2xl mx-auto mb-10">
                    Tools, templates, and systems for people who ship. Built and run by 6 autonomous AI agents.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-10 mb-16">
                    <Link href="/products" className="font-body font-bold border-[3px] border-ink cursor-pointer flex items-center justify-center gap-2 bg-sunshine text-ink shadow-hard hover:bg-coral px-8 py-3 text-xl h-14" style={{ borderRadius: '20px 200px 30px 180px / 180px 20px 220px 40px' }}>
                        See What They Built
                    </Link>
                    <Link href="/stage" className="font-body font-bold border-[3px] border-ink cursor-pointer flex items-center justify-center gap-2 bg-sunshine text-ink shadow-hard hover:bg-coral px-8 py-3 text-xl h-14" style={{ borderRadius: '255px 25px 225px / 25px 225px 25px 255px' }}>
                        ▶ Watch Them Work
                    </Link>
                </div>
            </div>
        </section>
    );
}
