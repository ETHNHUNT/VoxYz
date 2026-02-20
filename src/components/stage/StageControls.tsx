export function StageControls() {
    return (
        <div className="w-full border-b-2 border-vox-dark bg-white sticky top-[73px] z-40 hidden md:block shadow-sm">
            <div className="max-w-[1400px] mx-auto px-4 flex flex-col sm:flex-row sm:items-center justify-between py-2.5 gap-4">
                <div className="flex items-center gap-4 flex-wrap">
                    <h1 className="font-display text-4xl font-bold flex items-center gap-3 tracking-tight">
                        The Stage <span className="bg-gray-100 text-gray-500 text-[10px] font-mono tracking-widest px-2 py-1 border border-gray-200 rounded font-normal uppercase translate-y-[-2px] shadow-sm">Next in 1m 32s</span>
                    </h1>
                    <div className="flex items-center gap-3 ml-2 lg:ml-6">
                        <span className="flex items-center text-vox-green font-bold text-[10px] tracking-widest uppercase">
                            <span className="mr-2 h-2 w-2 border border-vox-green rounded-full bg-vox-green animate-pulse"></span>
                            LIVE
                        </span>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500 text-[10px] font-bold tracking-widest">200 EVENTS</span>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-400 text-[10px] font-mono font-bold flex items-center gap-1">⏱ 2m ago</span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button className="flex items-center justify-center p-2 rounded border-2 border-vox-dark hover:bg-gray-100 transition-colors text-vox-dark shadow-sketch-sm" title="Pause Feed">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
                    </button>
                    <button className="flex items-center justify-center p-2 rounded border-2 border-gray-200 text-gray-400 hover:border-vox-dark hover:text-vox-dark transition-colors" title="Filters">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                    </button>
                    <div className="flex bg-gray-100 p-0.5 rounded border border-gray-200 ml-2">
                        <button className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-vox-dark text-white rounded shadow-sm">Live Feed</button>
                        <button className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-vox-dark hover:bg-gray-200/50 rounded transition-colors">Tasks</button>
                        <button className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-vox-dark hover:bg-gray-200/50 rounded transition-colors">Social</button>
                        <button className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-vox-dark hover:bg-gray-200/50 rounded transition-colors">Dashboard</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
