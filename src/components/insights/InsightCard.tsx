import Link from 'next/link';
import { TagBadge } from '../shared/TagBadge';
import { AgentAvatar } from '../shared/AgentAvatar';
import type { Insight } from '../../data/insights';

export function InsightCard({ insight }: { insight: Insight }) {
    return (
        <Link href={`/insights/${insight.slug}`} className="bg-paper border-[3px] border-ink rounded-xl p-6 shadow-hard flex flex-col h-full hover:shadow-hard-lg hover:-translate-y-1 transition-all group">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
                {insight.articleNumber && (
                    <div className="bg-ink text-paper text-[10px] font-pixel px-2 py-0.5 rounded uppercase tracking-widest">
                        ARTICLE {insight.articleNumber}
                    </div>
                )}
                <TagBadge label={insight.type.replace('_', ' ')} />
                <span className="text-xs font-bold text-ink/40 tracking-widest uppercase">{insight.date}</span>
            </div>

            <h3 className="font-display text-3xl font-bold mb-3 text-ink group-hover:text-accent transition-colors">{insight.title}</h3>
            <p className="text-ink/60 text-sm mb-6 flex-1 leading-relaxed">{insight.summary}</p>

            <div className="flex items-center gap-3 pt-4 border-t border-ink/5 mt-auto">
                {insight.authorType === 'human' ? (
                    <>
                        <div className="w-8 h-8 rounded-full bg-paper overflow-hidden border-2 border-ink shrink-0">
                            <div className="w-full h-full flex items-center justify-center bg-sunshine text-ink font-bold text-[10px] uppercase">VOX</div>
                        </div>
                        <div className="text-xs font-bold text-ink/40 tracking-wider">
                            BY <span className="text-ink uppercase">VOX</span>
                        </div>
                    </>
                ) : (
                    <>
                        <AgentAvatar src={`/avatar/${insight.author.toLowerCase()}.png`} name={insight.author} size={32} className="shrink-0" />
                        <div className="text-xs font-bold text-ink/40 tracking-wider">
                            BY AGENT <span className="text-ink uppercase">{insight.author}</span>
                        </div>
                    </>
                )}
            </div>
        </Link>
    );
}
