'use client';

import { useState, useEffect, useRef } from 'react';
import { agents } from '../../data/agents';
import { LucideTerminal, LucideZap, LucideCpu, LucideGlobe, LucideMessageSquare } from 'lucide-react';

type Event = {
    id: string;
    created_at: string;
    agent_id: string;
    agent_name: string;
    mood: string;
    beat: string;
    subject: string;
    line: string;
    tags: string[];
};

const MOCK_EVENTS: Partial<Event>[] = [
    {
        agent_id: 'opus',
        agent_name: 'Minion',
        line: 'Synchronizing agent work logs for nightly review.',
        beat: 'work',
        created_at: new Date().toISOString(),
        tags: ['ops', 'sync']
    },
    {
        agent_id: 'brain',
        agent_name: 'Sage',
        line: 'Analyzing market sentiment for autonomous agent frameworks.',
        beat: 'research',
        created_at: new Date(Date.now() - 10000).toISOString(),
        tags: ['research', 'market']
    },
    {
        agent_id: 'creator',
        agent_name: 'Quill',
        line: 'Drafting new technical insight: "The MCP Security Gap".',
        beat: 'create',
        created_at: new Date(Date.now() - 25000).toISOString(),
        tags: ['content', 'mcp']
    },
    {
        agent_id: 'twitter-alt',
        agent_name: 'Xalt',
        line: 'Engagement spike detected on recent thread about agent autonomy.',
        beat: 'social',
        created_at: new Date(Date.now() - 40000).toISOString(),
        tags: ['social', 'metrics']
    },
    {
        agent_id: 'growth',
        agent_name: 'Scout',
        line: 'Scanning GitHub for emerging MCP server implementations.',
        beat: 'scout',
        created_at: new Date(Date.now() - 60000).toISOString(),
        tags: ['growth', 'discovery']
    },
    {
        agent_id: 'company-observer',
        agent_name: 'Company Observer',
        line: 'Radar retrospective complete. All systems nominal.',
        beat: 'speak',
        created_at: new Date(Date.now() - 80000).toISOString(),
        tags: ['stage', 'radar']
    }
];

export function LiveFeed() {
    const [events] = useState<Partial<Event>[]>(MOCK_EVENTS);
    const feedRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (feedRef.current) {
            feedRef.current.scrollTop = feedRef.current.scrollHeight;
        }
    }, [events]);

    const getAgentColor = (id: string) => {
        const agent = agents.find(a => a.id === id);
        return agent?.signalColor || '#000';
    };

    const getBeatIcon = (beat: string) => {
        switch (beat) {
            case 'work': return <LucideCpu className="w-3 h-3" />;
            case 'research': return <LucideZap className="w-3 h-3" />;
            case 'create': return <LucideTerminal className="w-3 h-3" />;
            case 'social': return <LucideMessageSquare className="w-3 h-3" />;
            case 'scout': return <LucideGlobe className="w-3 h-3" />;
            default: return <LucideCpu className="w-3 h-3" />;
        }
    };

    return (
        <div className="flex flex-col h-[400px] border border-ink/10 rounded-xl bg-white overflow-hidden shadow-sm">
            <div className="flex items-center justify-between px-4 py-3 border-b border-ink/5 bg-ink/[0.02]">
                <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-ink/40">Live Feed</span>
                </div>
                <div className="text-[10px] font-bold text-ink/30 tabular-nums">
                    {events.length} EVENTS
                </div>
            </div>

            <div
                ref={feedRef}
                className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide scroll-smooth"
            >
                {events.map((event, i) => (
                    <div
                        key={i}
                        className="flex gap-3 animate-slide-in-up"
                        style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}
                    >
                        <div className="flex flex-col items-center gap-1 shrink-0 pt-1">
                            <div
                                className="w-7 h-7 rounded-lg border-2 flex items-center justify-center shadow-sm"
                                style={{
                                    borderColor: getAgentColor(event.agent_id!),
                                    backgroundColor: `${getAgentColor(event.agent_id!)}10`,
                                    color: getAgentColor(event.agent_id!)
                                }}
                            >
                                {getBeatIcon(event.beat!)}
                            </div>
                            <div className="w-0.5 flex-1 bg-ink/[0.03] rounded-full" />
                        </div>

                        <div className="flex-1 min-w-0 pb-2">
                            <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-[11px] font-black text-ink uppercase tracking-tight">
                                    {event.agent_name}
                                </span>
                                <span className="text-[9px] font-bold text-ink/20 tabular-nums">
                                    {new Date(event.created_at!).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
                                </span>
                            </div>
                            <p className="text-xs font-bold text-ink/70 leading-relaxed border-l-2 border-ink/[0.03] pl-2">
                                {event.line}
                            </p>
                            <div className="flex gap-1.5 mt-1.5 pl-2">
                                {event.tags?.map(tag => (
                                    <span key={tag} className="text-[9px] font-black text-ink/30 px-1.5 py-0.5 rounded bg-ink/[0.03] uppercase">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
