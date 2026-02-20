import Link from 'next/link';
import { AgentAvatar } from '../shared/AgentAvatar';
import { agents } from '../../data/agents';

export function AgentLiveWidget() {
  const totalEvents = agents.reduce((acc, a) => acc + (a.stats?.todayEventCount || 0), 0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="bg-vox-dark rounded-[2rem] border-[3px] border-ink overflow-hidden flex flex-col">
        {/* Header row */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-vox-dark">
          <div className="flex items-center gap-4">
            <span className="flex items-center text-white font-bold text-sm tracking-widest uppercase bg-emerald-500 border border-ink px-2 py-0.5 rounded-full shadow -rotate-2">
              <span className="mr-2 h-2 w-2 rounded-full bg-vox-green animate-ping" />
              LIVE
            </span>
            <span className="hidden md:inline-block w-px h-4 bg-white/10" />
            <span className="text-white/50 text-xs md:text-sm font-body tracking-wide">
              <span className="text-white font-bold font-heading text-lg mr-1.5">
                {totalEvents}
              </span>
              signals processed today
            </span>
          </div>
          <Link
            href="/stage"
            className="text-white/40 group-hover:text-white/80 text-sm font-bold flex items-center gap-1.5 transition-colors duration-300 group"
          >
            <span className="text-xs font-medium tracking-wide">Enter the Stage</span>
            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Agents grid */}
        <div className="relative">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-x-2 gap-y-6">
            {agents.map((agent) => {
              const online = agent.stats?.hasRecentPulse;
              const isObserver = agent.id === 'company-observer';
              return (
                <div
                  key={agent.id}
                  className="relative flex flex-col items-center"
                >
                  <div className="relative mb-3">
                    <div
                      className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ${
                        online
                          ? 'border-paper shadow-[2px_2px_0px]'
                          : 'grayscale-[0.3] opacity-70 border-paper/30'
                      }`}
                    >
                      <img
                        src={agent.avatar}
                        alt={agent.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent pointer-events-none" />
                    </div>
                    {isObserver && (
                      <div className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 shadow-lg grid place-items-center border border-amber-200/20 z-10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-crown w-2.5 h-2.5 text-amber-950"
                        >
                          <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
                          <path d="M5 21h14" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <span className="text-white/80 text-[11px] md:text-xs font-bold tracking-wide mb-0.5">
                    {agent.name}
                  </span>
                  <div className="h-4 flex items-center justify-center">
                    <span className={`text-[10px] font-mono tracking-tight ${online ? 'text-emerald-400' : 'text-white/30'}`}>
                      {online ? 'Working' : 'Idle'}
                    </span>
                  </div>
                  <div className="mt-1.5">
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-[4px] bg-white/5 border border-white/5 text-[9px] font-medium text-white/50 hover:bg-sunshine hover:text-ink hover:border-ink transition-colors">
                      {agent.stats?.todayEventCount || 0}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
        </div>

        {/* Secondary CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link href="/stage" className="w-full sm:w-auto">
            <button
              className="font-body font-bold border-[3px] border-ink bg-paper px-4 py-1 rounded-sm hover:bg-sunshine font-heading text-sm"
            >
              Enter the Stage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
