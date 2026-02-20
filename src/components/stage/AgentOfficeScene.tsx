'use client';

import { useState, useEffect } from 'react';
import { agents } from '../../data/agents';

// Pre-calculated agent positions from voxyz.space/stage
const AGENT_POSITIONS: Record<string, { x: number, y: number }> = {
    xalt: { x: 574, y: 219 },
    sage: { x: 209, y: 226 },
    scout: { x: 349, y: 230 },
    minion: { x: 865, y: 271 },
    quill: { x: 913, y: 279 },
    observer: { x: 234, y: 285 },
};

// Map agent.id to target keys if needed, but they seem to match
const getPos = (id: string) => AGENT_POSITIONS[id.toLowerCase()] || { x: 0, y: 0 };

export function AgentOfficeScene() {
    // Interaction logic
    const [isMounted, setIsMounted] = useState(false);
    const [activeBubbles, setActiveBubbles] = useState<Record<string, string>>({});

    useEffect(() => {
        setIsMounted(true);

        const bubbleOptions: Record<string, string[]> = {
            sage: ["Data confirms it!", "Analyzing signals...", "Wait, this pattern..."],
            quill: ["Rewrite this part.", "Drafting narrative...", "Needs more punch."],
            minion: ["Checking systems...", "Ship it!", "Ops update pending."],
            xalt: ["Viral potential!", "Posting now...", "Check the feed."],
            scout: ["Found a gem!", "Scanning leads...", "New opportunity."],
            observer: ["Logging activity.", "All systems nominal.", "Observer audit."]
        };

        const interval = setInterval(() => {
            const agentIds = Object.keys(AGENT_POSITIONS);
            const randomAgent = agentIds[Math.floor(Math.random() * agentIds.length)];
            const options = bubbleOptions[randomAgent];
            const randomBubble = options[Math.floor(Math.random() * options.length)];

            setActiveBubbles(prev => ({
                ...prev,
                [randomAgent]: randomBubble
            }));

            setTimeout(() => {
                setActiveBubbles(prev => {
                    const next = { ...prev };
                    delete next[randomAgent];
                    return next;
                });
            }, 5000);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    if (!isMounted) return <div className="h-[123px] bg-vox-dark/5 animate-pulse" />;

    return (
        <div className="or-wrap" style={{ height: "123.2px" }}>
            <div className="or-frame" style={{ width: "313.6px", height: "123.2px", minWidth: "313.6px" }}>
                <div
                    className="or-room"
                    style={{
                        width: "1120px",
                        height: "440px",
                        transform: "scale(0.28)",
                        transformOrigin: "left top",
                        backgroundImage: 'url("data:image/png;base64,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")',
                        backgroundSize: "1120px 440px"
                    }}
                >
                    {/* Whiteboard Overlay */}
                    <div className="or-whiteboard-overlay" style={{ left: "26px", top: "22px", width: "78px", height: "64px" }}>
                        {[
                            { label: 'MSN', color: '#e74c3c', val: 0, bar: 0 },
                            { label: 'PRP', color: '#3498db', val: 0, bar: 0 },
                            { label: 'DPL', color: '#2ecc71', val: 0, bar: 0 },
                            { label: 'INS', color: '#f59e0b', val: 1, bar: 12 }
                        ].map(row => (
                            <div key={row.label} className="or-wb-row">
                                <span className="or-wb-dot" style={{ background: row.color }} />
                                <span className="or-wb-label">{row.label}</span>
                                <span className="or-wb-bar" style={{ width: `${row.bar}%`, background: row.color }} />
                                <span className="or-wb-val">{row.val}</span>
                            </div>
                        ))}
                    </div>

                    {/* Monitors */}
                    {[84, 224, 364, 504, 644].map(left => (
                        <div key={left} className="or-monitor-screen or-monitor-idle" style={{ left: `${left}px`, top: "158px", width: "32px", height: "24px" }} />
                    ))}

                    {/* Steam effects */}
                    <div className="or-steam" style={{ left: "856px", top: "240px", width: "20px", height: "16px" }}>
                        <span className="or-steam-p" style={{ animationDelay: "0s" }} />
                        <span className="or-steam-p" style={{ animationDelay: "0.6s" }} />
                        <span className="or-steam-p" style={{ animationDelay: "1.2s" }} />
                    </div>

                    {/* Fridge Light */}
                    <div className="or-fridge-light" style={{ left: "1052px", top: "132px", width: "6px", height: "6px" }} />

                    {/* SVG Lines */}
                    <svg className="or-lines">
                        {/* Static lines extracted from target HTML */}
                        <line x1="240.8" y1="258.4" x2="945.1" y2="310.8" />
                        <line x1="380.6" y1="261.8" x2="240.8" y2="258.4" />
                        <line x1="266.3" y1="317.2" x2="380.6" y2="261.8" />
                        {/* Dynamic interaction line (example) */}
                        <line className="or-collab-line" x1="605.6" y1="251.0" x2="945.1" y2="310.8" />
                    </svg>

                    {/* Agents */}
                    {agents.map(agent => (
                        <div
                            key={agent.id}
                            className="or-agent"
                            style={{
                                transform: `translate(${getPos(agent.id).x}px, ${getPos(agent.id).y}px)`
                            }}
                        >
                            <div className="or-bob" style={{
                                '--or-bob-delay': `${Math.random() * -5}s`,
                                '--or-bob-dur': `${3 + Math.random()}s`,
                                '--or-bob-amp': `${1.5 + Math.random()}px`
                            } as any}>
                                <div className="or-head" style={{ borderColor: agent.signalColor }}>
                                    <img src={agent.avatar} alt={agent.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="or-name" style={{ backgroundColor: agent.signalColor }}>
                                    {agent.name}
                                </div>
                                {/* Dynamic interaction bubble */}
                                {activeBubbles[agent.id.toLowerCase()] && (
                                    <div className="or-bubble animate-bubble-in">
                                        {activeBubbles[agent.id.toLowerCase()]}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="or-scroll-fade" />
        </div>
    );
}
