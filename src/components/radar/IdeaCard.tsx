import type { RadarIdea } from '../../data/radarIdeas';
import { StatusBadge } from '../shared/StatusBadge';

export function IdeaCard({ idea }: { idea: RadarIdea }) {
    // Generate a random-ish blobby shape based on the id
    const getBlobStyle = (id: string) => {
        const seed = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const r1 = 60 + (seed % 20);
        const r2 = 40 + (seed % 15);
        const r3 = 30 + (seed % 25);
        const r4 = 70 - (seed % 20);
        return {
            borderRadius: `${r1}% ${100 - r1}% ${r3}% ${100 - r3}% / ${r2}% ${r4}% ${100 - r4}% ${100 - r2}%`
        };
    };

    return (
        <div
            className="bg-white border-[3px] border-ink p-6 shadow-hard flex flex-col relative h-full hover:shadow-hard-lg transition-all hover:-translate-y-1 group"
            style={getBlobStyle(idea.id)}
        >
            {idea.hasPromptPack && (
                <div className="absolute -top-3 -right-3 bg-sunshine text-ink font-pixel text-[8px] uppercase tracking-widest px-2 py-1.5 border-[3px] border-ink shadow-hard-sm rotate-6 z-10">
                    Prompt Pack
                </div>
            )}

            <div className="w-full aspect-video bg-paper border-[3px] border-ink rounded-xl mb-4 overflow-hidden flex items-center justify-center transform -rotate-1 relative group-hover:rotate-0 transition-transform">
                <div className="absolute top-2 left-2 flex gap-1 z-10">
                    <div className="w-2 h-2 rounded-full bg-accent border-2 border-ink"></div>
                    <div className="w-2 h-2 rounded-full bg-sunshine border-2 border-ink"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary border-2 border-ink"></div>
                </div>
                {/* Mock UI preview */}
                <div className="w-[85%] h-[65%] bg-white rounded-md border-[2px] border-ink/10 flex flex-col p-2 gap-1">
                    <div className="w-1/2 h-1 bg-ink/10 rounded"></div>
                    <div className="w-full h-1 bg-ink/5 rounded"></div>
                    <div className="w-3/4 h-1 bg-ink/5 rounded"></div>
                </div>
            </div>

            <div className="flex items-center justify-between mb-4">
                <StatusBadge status={idea.stage} className="scale-90 origin-left" />
                <span className="text-ink/40 font-mono text-[10px] font-bold tracking-widest">{idea.progress}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-ink/5 rounded-full mb-4 overflow-hidden p-[2px]">
                <div
                    className={`h-full rounded-full ${idea.stage === 'building' ? 'bg-accent' : idea.stage === 'validating' ? 'bg-sunshine' : idea.stage === 'watching' ? 'bg-ink/20' : 'bg-secondary'}`}
                    style={{ width: `${idea.progress}%` }}
                ></div>
            </div>

            <h3 className="font-display text-2xl font-bold mb-2 text-ink italic leading-tight group-hover:text-accent transition-colors">{idea.title}</h3>
            <p className="text-ink/60 text-sm mb-6 flex-1 italic">{idea.description}</p>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-ink/5">
                <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full border-2 border-ink bg-sunshine flex items-center justify-center text-[10px] font-bold">V</div>
                    </div>
                    <span className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">{idea.source} / {idea.discoveredBy}</span>
                </div>

                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 text-ink/40 hover:text-accent transition-colors group/vote">
                        <span className="font-bold text-xs">{idea.votes}</span>
                        <svg className="w-4 h-4 group-hover/vote:-translate-y-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
