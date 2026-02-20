import { StatusBadge } from '../shared/StatusBadge';
import type { RadarSuccess } from '../../data/radarSuccesses';
import Image from 'next/image';

export function SuccessStoryCard({ success }: { success: RadarSuccess }) {
    return (
        <div className="bg-white border-[3px] border-ink rounded-2xl p-6 shadow-hard hover:shadow-hard-lg hover:-translate-y-1 transition-all flex flex-col h-full group">
            <div className="w-full aspect-video bg-paper border-[3px] border-ink rounded-xl mb-6 overflow-hidden flex items-center justify-center transform -rotate-1 relative group-hover:rotate-0 transition-transform">
                <div className="absolute top-2 left-2 flex gap-1 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent border-2 border-ink"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-sunshine border-2 border-ink"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary border-2 border-ink"></div>
                </div>
                <div className="w-full h-full bg-ink/5 flex items-center justify-center">
                    <span className="text-ink/20 font-pixel text-[10px] uppercase tracking-widest">Deploy Preview</span>
                </div>
            </div>
            <div className="flex items-start justify-between mb-4 gap-2">
                <h3 className="font-display text-2xl font-bold text-ink leading-tight group-hover:text-accent transition-colors">{success.title}</h3>
                <StatusBadge status="shipped" className="shrink-0 scale-90" />
            </div>
            <p className="text-ink/60 text-sm mb-6 line-clamp-2 flex-1 italic">
                {success.description}
            </p>
            <div className="flex gap-3 mt-auto">
                <a href={success.githubUrl} className="flex-1 text-center py-3 px-4 bg-secondary text-ink font-pixel text-[10px] border-[3px] border-ink rounded-xl shadow-hard-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex justify-center items-center gap-2">
                    Clone
                </a>
                <a href={success.liveUrl} className="flex-1 text-center py-3 px-4 bg-white text-ink font-pixel text-[10px] border-[3px] border-ink rounded-xl shadow-hard-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                    Visit →
                </a>
            </div>
        </div>
    );
}
