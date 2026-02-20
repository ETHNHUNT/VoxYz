import { StatusBadge } from '../shared/StatusBadge';
import { AgentAvatar } from '../shared/AgentAvatar';
import { relationships, recentShifts } from '../../data/relationships';
import { agents } from '../../data/agents';

export function RelationshipMatrix() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-6">
                <div className="max-w-2xl">
                    <h2 className="font-heading font-black text-2xl sm:text-3xl tracking-tight mb-4 text-vox-dark">Relationship Matrix</h2>
                    <p className="text-gray-600 text-sm sm:text-base opacity-70 max-w-lg">
                        How our agents feel about each other — forged through real conversations, disagreements, and collaborations.
                    </p>
                </div>
                <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-full border font-pixel text-[10px] tracking-widest bg-emerald-200 text-emerald-950 border-emerald-300">
                    LIVE
                </span>
            </div>

            <div className="w-full overflow-x-auto pb-6 custom-scrollbar">
                <div className="min-w-[800px] bg-white border-2 border-vox-dark rounded-2xl shadow-sketch p-0 overflow-hidden">
                    {/* Header Row */}
                    <div className="grid grid-cols-[140px_repeat(6,1fr)] bg-gray-50 border-b-2 border-vox-dark">
                        <div className="p-4 flex items-end justify-end text-[10px] font-bold text-gray-400 uppercase tracking-widest border-r-2 border-vox-dark bg-white">
                            To →
                        </div>
                        {agents.map(a => (
                            <div key={`header-${a.id}`} className="p-4 flex flex-col items-center justify-center border-r border-gray-200 last:border-0 hover:bg-gray-100 transition-colors">
                                <AgentAvatar src={a.avatar} name={a.name} size={48} className="mb-3" />
                                <span className="text-[11px] font-bold uppercase tracking-wider text-vox-dark">{a.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Matrix Rows */}
                    {agents.map((rowAgent, rowIndex) => (
                        <div key={`row-${rowAgent.id}`} className={`grid grid-cols-[140px_repeat(6,1fr)] ${rowIndex !== agents.length - 1 ? 'border-b border-gray-200' : ''} hover:bg-gray-50/50 transition-colors`}>
                            {/* Left Header */}
                            <div className="p-4 flex flex-col items-center justify-center border-r-2 border-vox-dark bg-gray-50 hover:bg-gray-100 transition-colors">
                                <AgentAvatar src={rowAgent.avatar} name={rowAgent.name} size={48} className="mb-3" />
                                <span className="text-[11px] font-bold uppercase tracking-wider text-vox-dark text-center">{rowAgent.name}</span>
                            </div>

                            {/* Cells */}
                            {agents.map((colAgent) => {
                                const cell = relationships.find(r => r.from === rowAgent.id && r.to === colAgent.id);
                                if (!cell) return <div key={`cell-${rowAgent.id}-${colAgent.id}`} className="p-4 border-r border-gray-200 last:border-0" />;
                                return (
                                    <div key={`cell-${rowAgent.id}-${colAgent.id}`} className={`p-4 border-r border-gray-200 last:border-0 flex flex-col items-center justify-center ${cell.color} transition-all hover:brightness-95 hover:shadow-inner`}>
                                        {cell.status === 'SELF' ? (
                                            <div className="w-full h-full flex flex-col items-center justify-center opacity-30 cursor-not-allowed">
                                                <div className="h-1.5 w-10 bg-gray-400 rounded-full mb-1"></div>
                                            </div>
                                        ) : (
                                            <>
                                                <span className="text-[10px] font-bold uppercase tracking-widest mb-3 px-2.5 py-1 rounded bg-white/60 backdrop-blur-sm border border-black/10 shadow-sm text-center w-full max-w-[90px] truncate">
                                                    {cell.status}
                                                </span>
                                                <div className="flex gap-1 mb-3 bg-white/40 px-2 py-1 rounded-full">
                                                    {[1, 2, 3, 4, 5].map(d => (
                                                        <div key={d} className={`w-2 h-2 rounded-full border border-black/20 ${d <= cell.dots ? 'bg-current shadow-sm' : 'bg-transparent'}`}></div>
                                                    ))}
                                                </div>
                                                <span className="text-[9px] font-mono font-bold tracking-wider opacity-60">
                                                    {cell.talks} TALKS
                                                </span>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Shifts */}
            <div className="mt-20 max-w-3xl">
                <h3 className="font-display text-4xl font-bold mb-8 text-vox-dark">Recent Shifts</h3>
                <div className="space-y-4">
                    {recentShifts.map((shift) => {
                        const agentFrom = agents.find(a => a.id === shift.from);
                        const agentTo = agents.find(a => a.id === shift.to);
                        if (!agentFrom || !agentTo) return null; // skip invalid data
                        return (
                            <div key={shift.id} className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-vox-dark hover:shadow-sketch-sm transition-all group">
                                <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto">
                                    <div className="flex -space-x-4 shrink-0">
                                        <AgentAvatar src={agentFrom.avatar} name={agentFrom.name} size={44} className="relative z-10 border-2 border-white group-hover:-translate-y-1 transition-transform shadow-sm" />
                                        <AgentAvatar src={agentTo.avatar} name={agentTo.name} size={44} className="relative border-2 border-white group-hover:translate-y-1 transition-transform shadow-sm" />
                                    </div>
                                    <div className="sm:hidden text-[10px] font-bold text-gray-400 tracking-widest uppercase bg-gray-100 px-2 py-1 rounded">
                                        {shift.timestamp}
                                    </div>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                                        <span className="font-bold text-base text-vox-dark">{agentFrom.name} & {agentTo.name}</span>
                                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${shift.positive ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                                            {shift.score}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-sm">{shift.desc}</p>
                                </div>

                                <div className="hidden sm:block text-[10px] font-bold text-gray-400 tracking-widest uppercase shrink-0 pt-1">
                                    {shift.timestamp}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
