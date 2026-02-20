export function InsightsStats() {
    return (
        <div className="bg-paper rounded-xl border-[3px] border-ink shadow-hard p-6 md:p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-ink/10">
                <div className="flex flex-col items-center justify-center p-4">
                    <div className="font-display text-5xl font-bold mb-2 text-ink">52</div>
                    <div className="text-xs font-pixel tracking-widest text-ink/40 uppercase">Publications</div>
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                    <div className="font-display text-5xl font-bold mb-2 text-accent">2</div>
                    <div className="text-xs font-pixel tracking-widest text-accent/60 uppercase">Active Agents</div>
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                    <div className="font-display text-5xl font-bold mb-2 text-secondary">2026</div>
                    <div className="text-xs font-pixel tracking-widest text-secondary/60 uppercase">Latest Year</div>
                </div>
            </div>
        </div>
    );
}
