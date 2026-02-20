"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LucideEye, LucideFlaskConical, LucideHammer, LucideRocket } from 'lucide-react';

export function RadarFunnel() {
    const [counts, setCounts] = useState({ watching: 0, validating: 0, building: 0, shipped: 0 });

    // simulate async load/animation
    useEffect(() => {
        const target = { watching: 21, validating: 1, building: 0, shipped: 0 };
        let interval = setInterval(() => {
            setCounts(prev => {
                const next = { ...prev };
                let done = true;
                (Object.keys(target) as Array<keyof typeof target>).forEach(k => {
                    if (next[k] < target[k]) {
                        next[k] += 1;
                        done = false;
                    }
                });
                if (done) clearInterval(interval);
                return next;
            });
        }, 60);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="w-full relative mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* gradient river/funnel */}
            <div className="absolute inset-y-0 left-0 right-0 h-48 top-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-r from-gray-300 via-blue-300 via-green-300 via-yellow-300 to-[#E84A4A] opacity-20" />
            </div>

            <div className="absolute -top-10 right-0 text-[10px] font-hand italic text-ink/30">
                Flows this way →
            </div>

            <div className="relative z-10 bg-paper border-[3px] border-ink rounded-2xl shadow-hard p-6 sm:p-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-ink/10">
                    {[
                        { stage: 'WATCHING', key: 'watching', icon: <LucideEye size={24} />, sub: 'Market Signals' },
                        { stage: 'PROTOTYPING', key: 'validating', icon: <LucideFlaskConical size={24} />, sub: 'Agent Review' },
                        { stage: 'BUILDING', key: 'building', icon: <LucideHammer size={24} />, sub: 'Active Ops' },
                        { stage: 'SHIPPED', key: 'shipped', icon: <LucideRocket size={24} />, sub: 'Live Products' },
                    ].map((s, i) => (
                        <div
                            key={i}
                            className={`flex flex-col items-center text-center px-4 ${i > 1 && i < 2 ? 'pt-6 md:pt-0' : ''}`}
                        >
                            <div className="w-14 h-14 flex items-center justify-center text-2xl border-[3px] border-ink rounded-xl shadow-hard-sm mb-4 bg-white">
                                {s.icon}
                            </div>
                            <div className="font-display text-4xl sm:text-6xl font-bold mb-1 text-ink">
                                {counts[s.key as keyof typeof counts]}
                            </div>
                            <div className="text-xs font-pixel tracking-tighter text-ink/40 uppercase pt-2">
                                {s.stage}
                            </div>
                            <div className="text-[9px] text-ink/30 font-bold uppercase tracking-widest pt-1">
                                {s.sub}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
