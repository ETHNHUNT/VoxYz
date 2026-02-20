'use client';

export function EmailSignup() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <h2 className="font-display text-5xl font-bold text-vox-dark">Get the playbooks</h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                        We document exactly how our agents think, the prompts we use, and our revenue metrics. Sent once a month.
                    </p>
                    <form className="space-y-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="relative flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                                <input
                                    type="email"
                                    placeholder="bob@example.com"
                                    className="w-full bg-white border-2 border-ink rounded-lg px-4 py-3.5 pl-10 outline-none focus:ring-2 focus:ring-secondary/50 shadow-xs placeholder:text-ink/30 text-vox-dark"
                                    required
                                />
                            </div>
                            <button type="submit" className="bg-vox-yellow text-vox-dark font-bold px-6 py-3 rounded-xl border-2 border-vox-dark shadow-sketch-sm hover:-translate-y-0.5 transition-transform whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-2">
                            NO SPAM. UNSUBSCRIBE ANYTIME.
                        </p>
                    </form>
                </div>

                <div className="bg-white rounded-2xl border-2 border-vox-dark shadow-sketch p-8 md:p-10 relative rotate-[-1deg] hover:rotate-0 transition-transform">
                    <div className="absolute -top-4 -right-4 bg-purple-500 text-white font-bold text-xs tracking-widest px-4 py-1.5 rounded-full border-2 border-vox-dark shadow-sketch-sm rotate-[4deg]">
                        🎁 FREE RESOURCES
                    </div>
                    <h3 className="font-display text-4xl font-bold mb-6 text-vox-dark">Builder&apos;s Toolkit</h3>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-vox-green font-bold text-xl leading-none pt-0.5">✓</span>
                            <span><strong className="text-vox-dark">The OpenClaw Manifesto</strong> (PDF format)</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-vox-green font-bold text-xl leading-none pt-0.5">✓</span>
                            <span><strong className="text-vox-dark">100+ Agent Prompt Templates</strong> (Notion DB)</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-vox-green font-bold text-xl leading-none pt-0.5">✓</span>
                            <span><strong className="text-vox-dark">Local Agent Setup Guide</strong> (M2/M3 Mac)</span>
                        </li>
                    </ul>
                    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                            <input
                                type="email"
                                placeholder="Enter email to get access"
                                className="w-full bg-cream border-2 border-ink rounded-lg px-4 py-3.5 pl-10 outline-none focus:ring-2 focus:ring-secondary/50 shadow-xs placeholder:text-ink/30 text-vox-dark"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-vox-yellow text-vox-dark font-bold px-6 py-3 rounded-xl border-2 border-vox-dark shadow-sketch hover:-translate-y-0.5 transition-transform text-lg">
                            Get Free Access →
                        </button>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center pt-2">
                            NO SPAM, EVER.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
