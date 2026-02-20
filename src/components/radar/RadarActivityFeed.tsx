import { radarActivity } from '../../data/radarActivity';

export function RadarActivityFeed() {
    return (
        <div className="bg-paper rounded-2xl border-[3px] border-ink shadow-hard p-6 sm:p-10 mb-24 max-w-3xl">
            <h3 className="font-display text-4xl font-bold mb-8 flex items-center gap-4">
                Radar Activity
                <span className="flex h-3 w-3 rounded-full bg-secondary animate-pulse border-2 border-ink"></span>
            </h3>
            <div className="space-y-8">
                {radarActivity.map((activity) => (
                    <div key={activity.id} className="flex gap-5 items-start group">
                        <div className="w-12 h-12 rounded-xl bg-white border-[3px] border-ink flex items-center justify-center text-2xl shrink-0 group-hover:-rotate-6 transition-transform shadow-hard-sm">
                            {activity.emoji}
                        </div>
                        <div className="flex-1 pt-1">
                            <p className="text-ink/80 text-sm leading-relaxed">
                                <span className="font-display font-bold text-ink mr-2 text-lg">{activity.agent}</span>
                                {activity.text}
                            </p>
                            <div className="text-[10px] text-ink/30 font-pixel tracking-widest mt-2 uppercase">
                                {activity.timestamp}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
