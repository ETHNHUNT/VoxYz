'use client';
import { liveFeedEntries, FeedEntry } from '../../data/liveFeed';
import { useState, useEffect, useRef } from 'react';

export function LiveFeedPanel() {
    const [entries, setEntries] = useState<FeedEntry[]>(liveFeedEntries.slice(0, 3));
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let i = 3;
        const interval = setInterval(() => {
            const nextEntry = liveFeedEntries[i % liveFeedEntries.length];
            if (!nextEntry) return;

            if (i < liveFeedEntries.length) {
                setEntries(prev => [...prev, nextEntry]);
                i++;
            } else {
                // Mock infinite generation by cycling
                setEntries(prev => {
                    const safePrev = prev.filter(Boolean);
                    return [...safePrev.slice(1), {
                        ...nextEntry,
                        id: Math.random().toString(),
                        timestamp: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
                    }];
                });
                i++;
            }
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [entries]);

    return (
        <div className="w-full bg-[#111] rounded-2xl border-2 border-vox-dark shadow-sketch overflow-hidden font-mono text-sm leading-relaxed flex flex-col h-[550px] relative">
            <div className="flex items-center gap-3 px-5 py-3 bg-[#1a1a1a] border-b border-[#333] shrink-0 sticky top-0 z-10 shadow-sm">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-[#888] text-[10px] font-bold tracking-widest flex-1 text-center pr-8 border border-[#2a2a2a] bg-[#111] py-1 rounded shadow-inner">TERMINAL_OUTPUT.LOG</div>
            </div>

            <div
                ref={containerRef}
                className="flex-1 p-6 overflow-y-auto custom-scrollbar-dark space-y-5 scroll-smooth"
            >
                {entries.map((entry) => (
                    <div key={entry.id} className="animate-fade-in flex flex-col group">
                        <div className="flex items-start gap-4">
                            <div className="text-[#666] shrink-0 pt-0.5 text-xs">{entry.timestamp}</div>
                            <div className="text-[#333] shrink-0 pt-0.5 w-[14px]">|</div>
                            <div className={`font-bold shrink-0 pt-0.5 w-[84px] tracking-wide ${entry.senderColor}`}>
                                {entry.sender}
                            </div>
                            <div className="flex-1 text-gray-300">
                                {entry.type === 'pulse' ? (
                                    <div className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-1 -m-1 rounded transition-colors group/pulse">
                                        <span className="text-blue-400">⚡</span>
                                        <span className="text-gray-400 italic text-xs">{entry.content}</span>
                                        {entry.pulseCount && (
                                            <span className="ml-2 bg-white/5 text-gray-400 text-[9px] font-bold px-2 py-0.5 rounded border border-[#333] group-hover/pulse:bg-white/10 group-hover/pulse:text-white transition-colors uppercase tracking-widest">
                                                ↓ {entry.pulseCount} more pulses ▼
                                            </span>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-1.5">
                                        <span className="text-[#eee] font-body bg-white/5 px-3 py-2 border border-white/10 rounded-lg group-hover:bg-white/10 transition-colors shadow-sm">{entry.content}</span>
                                        {entry.recipient && (
                                            <span className="text-[#555] text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 mt-1 px-1">
                                                ↶ {entry.sender} <span className="text-[#444] text-[8px]">→</span> {entry.recipient}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Divider for pulses sometimes */}
                        {entry.type === 'pulse' && <div className="ml-[170px] my-3 h-px bg-transparent w-32 border-dashed border-[#222] border-b"></div>}
                    </div>
                ))}

                {/* Blinking cursor */}
                <div className="flex items-center gap-4 mt-6 pl-[170px]">
                    <div className="flex items-center gap-2 text-[#555] animate-pulse bg-white/5 px-3 py-1.5 rounded text-xs border border-white/5">
                        <span className="w-1.5 h-3 bg-white/50"></span> listening for activity...
                    </div>
                </div>
            </div>
        </div>
    );
}
