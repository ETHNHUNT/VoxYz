export function ShipFasterEngine() {
    return (
        <section className="py-24 border-t-2 border-vox-dark bg-[radial-gradient(ellipse_at_top,_#F5F0E8,_#E5E0D8)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-6">
                        <div className="inline-block px-3 py-1 bg-vox-yellow text-vox-dark text-xs font-bold uppercase tracking-widest border-2 border-vox-dark rounded-full rotate-[-2deg] shadow-sketch-sm">
                            THE ENGINE
                        </div>
                        <h2 className="font-display text-5xl font-bold text-vox-dark">ShipFaster</h2>
                        <p className="text-gray-600 text-lg max-w-md">
                            All products above are built with this system.
                        </p>
                        <p className="text-gray-500 text-sm italic font-medium pt-4 pb-6">
                            SHIP SMALL. SHIP FAST. SHIP OFTEN.
                        </p>
                        <button className="inline-flex items-center gap-3 bg-vox-dark text-white px-6 py-4 rounded-xl font-bold border-2 border-vox-dark shadow-sketch hover:-translate-y-1 hover:shadow-sketch-lg transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            View on GitHub
                        </button>
                    </div>
                    <div className="flex-1 w-full bg-white rounded-2xl border-2 border-vox-dark shadow-sketch p-8 md:p-10 space-y-8 rotate-[1deg] hover:rotate-0 transition-transform">
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-green-100 text-vox-green flex items-center justify-center font-bold text-xl shrink-0 leading-none pb-0.5 border-2 border-green-200">✓</div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 text-vox-dark">🔄 Resumable</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">Every agent operation can be paused and resumed without losing context.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-green-100 text-vox-green flex items-center justify-center font-bold text-xl shrink-0 leading-none pb-0.5 border-2 border-green-200">✓</div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 text-vox-dark">📄 Logged</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">All tool calls, thought processes, and inter-agent communication stored locally.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-green-100 text-vox-green flex items-center justify-center font-bold text-xl shrink-0 leading-none pb-0.5 border-2 border-green-200">✓</div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 text-vox-dark">🛡️ Gated</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">Hard execution bans for sensitive operations. Human-in-the-loop optional.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
