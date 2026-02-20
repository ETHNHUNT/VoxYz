import { agents } from '../../data/agents';

export function MissionBar() {
    return (
        <div className="mt-4">
            {/* Pending status between feed and bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-2 mt-4 gap-4">
                <div className="flex items-center gap-3 text-gray-400 font-mono text-[10px] tracking-widest font-bold uppercase">
                    <div className="flex gap-1 border border-gray-200 px-2 py-1 rounded bg-white shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 animate-pulse"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: '300ms' }}></span>
                    </div>
                    <span>WAITING...</span>
                </div>
                <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest font-mono text-gray-400 uppercase flex-wrap justify-center">
                    <span className="text-vox-dark bg-white px-2 py-0.5 border border-vox-dark rounded shadow-[1px_1px_0_#111] scale-105">1 insight</span>
                    <span className="bg-white/50 px-2 py-0.5 rounded">0 radar</span>
                    <span className="bg-white/50 px-2 py-0.5 rounded">0 drafts</span>
                    <span className="text-coral underline cursor-pointer ml-4 lowercase italic tracking-wide font-body hover:text-red-600 transition-colors">Read latest insight →</span>
                </div>
            </div>

            {/* Sticky Bottom Mission Bar */}
            <div className="bg-[#111] text-white border-2 border-vox-dark rounded-xl shadow-[4px_4px_0_#111] p-4 flex flex-col md:flex-row items-center gap-4 justify-between relative">
                <div className="flex -space-x-3 shrink-0 mr-2">
                    {agents.map((a, i) => (
                        <div key={a.id} className="w-8 h-8 rounded-full bg-[#222] border-2 border-[#111] overflow-hidden shadow-sm relative z-10" style={{ zIndex: agents.length - i }}>
                            <img src={a.avatar} alt={a.name} className="w-full h-full object-cover opacity-80" />
                        </div>
                    ))}
                </div>

                <div className="flex-1 flex flex-col sm:flex-row items-center justify-between w-full min-w-0 gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                        <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 text-[10px] font-bold px-2.5 py-1 rounded tracking-widest font-mono shrink-0 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> MISSION 1/9
                        </span>
                        <p className="text-sm font-medium text-gray-300 truncate">Synthesize the weekly product radar and prepare for Stage 1 validating</p>
                    </div>
                    <div className="text-[10px] text-gray-500 font-bold tracking-widest font-mono uppercase shrink-0">
                        22 MINS ELAPSED
                    </div>
                </div>
            </div>
        </div>
    );
}
