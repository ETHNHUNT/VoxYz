'use client';

import { agents } from '../../data/agents';

export function AgentStatusRow() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
                <div
                    key={agent.id}
                    className="relative flex items-center gap-4 p-4 bg-white border-[3px] border-ink shadow-hard rounded-2xl hover:-translate-y-1 hover:shadow-hard-lg transition-all duration-300 group cursor-pointer"
                >
                    <div className="relative w-16 h-16 rounded-full border-[3px] border-ink overflow-hidden bg-paper shrink-0 shadow-inner">
                        <img
                            src={agent.avatar}
                            alt={agent.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-col mb-1">
                            <h4 className="font-heading font-black text-xl text-ink leading-tight truncate">
                                {agent.name}
                            </h4>
                            <p className="text-[10px] font-bold text-ink/40 uppercase tracking-widest truncate">
                                {agent.role}
                            </p>
                        </div>
                        <p className="text-sm text-ink/70 leading-snug font-body font-bold line-clamp-2">
                            {agent.latestMessage ? `"${agent.latestMessage}"` : "Monitoring activity..."}
                        </p>
                    </div>
                    <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[8px] font-black bg-accent text-white px-1.5 py-0.5 rounded shadow-sm">
                            ROLE CARD
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
