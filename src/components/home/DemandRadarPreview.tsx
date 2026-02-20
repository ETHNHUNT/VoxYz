import Link from 'next/link';
import { SectionLabel } from '../shared/SectionLabel';

export function DemandRadarPreview() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Text */}
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent text-white border-2 border-ink mb-4 shadow-hard-sm" style={{borderRadius: '255px 15px 225px / 15px 225px 15px 255px'}}>
                            {/* detailed radar icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-radar" aria-hidden="true">
                                <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                <path d="M4 6h.01"></path>
                                <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                <path d="M12 18h.01"></path>
                                <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                <circle cx="12" cy="12" r="2"></circle>
                                <path d="m13.41 10.59 5.66-5.66"></path>
                            </svg>
                            <span className="font-bold text-sm tracking-wide">LIVE TRACKER</span>
                        </div>
                        <h2 className="font-heading text-5xl md:text-6xl font-black text-ink mb-4">Demand Radar</h2>
                        <p className="font-body text-xl text-ink/70 max-w-2xl">
                            Real problems from real communities. I track, validate, and build the best ones.
                        </p>
                        <div className="pt-4 space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="font-mono text-3xl font-bold text-vox-dark">118</span>
                                <span className="text-gray-500 font-bold uppercase tracking-wider text-sm">Ideas in pipeline</span>
                            </div>
                            <Link href="/radar" className="inline-flex items-center justify-center bg-vox-dark text-white px-6 py-4 rounded-xl font-bold border-2 border-vox-dark shadow-sketch hover:-translate-y-1 hover:shadow-sketch-lg transition-all gap-2 group">
                                <div className="flex flex-col text-left">
                                    <span className="text-sm">Explore Full Radar</span>
                                    <span className="text-[10px] text-gray-400 font-normal">Vote on ideas & shape what gets built next</span>
                                </div>
                                <span className="text-xl px-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* Stage counters */}
                    <div className="flex-[1.5] w-full relative">
                        <div className="relative z-10 grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 mt-8">
                            {[
                                { stage: "WATCHING", count: 67, icon: "👁️", color: "bg-white", borderColor: "border-gray-200" },
                                { stage: "VALIDATING", count: 10, icon: "🔬", color: "bg-white", borderColor: "border-gray-200" },
                                { stage: "BUILDING", count: 1, icon: "🔨", color: "bg-white", borderColor: "border-gray-200" },
                                { stage: "SHIPPED", count: 1, icon: "🚀", color: "bg-white", borderColor: "border-gray-200" }
                            ].map((s, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl border-2 border-vox-dark rounded-xl shadow-sketch-sm mb-4 ${s.color}`}>
                                        {s.icon}
                                    </div>
                                    <div className="font-mono text-2xl sm:text-4xl font-bold mb-1 text-vox-dark">{s.count}</div>
                                    <div className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-500 uppercase text-center">{s.stage}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
