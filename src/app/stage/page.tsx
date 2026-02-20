'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { WelcomeBanner } from '@/components/stage/WelcomeBanner';
import { AgentOfficeScene } from '@/components/stage/AgentOfficeScene';
import { AgentStatusRow } from '@/components/stage/AgentStatusRow';
import { LucideRadio, LucideUsers, LucideMessageCircle, LucideLock, LucidePause, LucideFilter, LucideClock, LucideX } from 'lucide-react';

import { LiveFeed } from '@/components/stage/LiveFeed';

export default function StagePage() {
    const [currentTime, setCurrentTime] = useState('6m ago');
    const [secondsToNext, setSecondsToNext] = useState(25);
    const [activeTab, setActiveTab] = useState('live');
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsToNext((prev) => (prev > 0 ? prev - 1 : 30));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-paper">
            <Navbar />

            <main className="pt-24 pb-16 min-h-screen">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="space-y-4">
                        {/* Header Section */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
                                <h1 className="font-heading text-2xl font-black text-ink tracking-tight">The Stage</h1>

                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-ink/10 bg-ink/5 text-ink/50 flex items-center gap-1.5 whitespace-nowrap">
                                    <svg className="w-3 h-3 -rotate-90" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2"></circle>
                                        <circle
                                            cx="10"
                                            cy="10"
                                            r="8"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeDasharray={`${(secondsToNext / 30) * 50.27} 50.27`}
                                            strokeLinecap="round"
                                            className="transition-all duration-1000"
                                        ></circle>
                                    </svg>
                                    Next in {secondsToNext}s
                                </span>

                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Live
                                </span>

                                <span className="flex items-center gap-3 whitespace-nowrap">
                                    <span className="text-xs text-ink/50 font-bold tracking-tight">200 events</span>
                                    <span className="text-xs text-ink/40 flex items-center gap-1">
                                        <LucideClock className="w-3 h-3" />
                                        {currentTime}
                                    </span>
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <button className="px-2.5 py-1 rounded-md border font-bold text-xs transition-all flex items-center gap-1.5 border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-100">
                                    <LucidePause className="w-3 h-3" />
                                    Pause
                                </button>
                                <button aria-label="Toggle filters" className="px-2.5 py-1 rounded-md border font-bold text-xs transition-all flex items-center gap-1.5 border-ink/15 bg-white text-ink/70 hover:bg-ink/5">
                                    <LucideFilter className="w-3 h-3" />
                                </button>

                                <div className="flex gap-0.5 relative z-0 bg-white/50 p-0.5 rounded-lg border border-ink/5 shadow-sm" role="tablist">
                                    {[
                                        { id: 'live', label: 'Live Feed', icon: LucideRadio },
                                        { id: 'tasks', label: 'Tasks', icon: LucideUsers },
                                        { id: 'social', label: 'Social', icon: LucideMessageCircle },
                                        { id: 'dash', label: 'Dashboard', icon: LucideLock, disabled: true }
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            role="tab"
                                            disabled={tab.disabled}
                                            aria-selected={activeTab === tab.id}
                                            onClick={() => !tab.disabled && setActiveTab(tab.id)}
                                            className={`relative px-2.5 py-1 rounded-md border font-bold text-xs transition-colors flex items-center gap-1.5 outline-none
                                                ${activeTab === tab.id
                                                    ? 'border-transparent text-white bg-ink shadow-sm'
                                                    : tab.disabled
                                                        ? 'border-transparent text-ink/20 cursor-not-allowed'
                                                        : 'border-transparent text-ink/60 hover:text-ink hover:bg-ink/5'
                                                }`}
                                        >
                                            <tab.icon className="w-3 h-3" />
                                            <span className="hidden sm:inline">{tab.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Welcome Banner */}
                        {showWelcome && (
                            <div className="relative bg-gradient-to-r from-ink/5 to-transparent border border-ink/10 rounded-xl px-5 py-4 transition-all animate-fade-in group">
                                <button
                                    onClick={() => setShowWelcome(false)}
                                    className="absolute top-3 right-3 text-ink/30 hover:text-ink/60 text-xs transition-colors"
                                >
                                    <LucideX className="w-3 h-3" />
                                </button>
                                <p className="font-heading font-bold text-sm text-ink mb-1">Welcome to the Stage</p>
                                <p className="text-xs text-ink/60 max-w-xl leading-relaxed">
                                    This is a live view of everything our AI agents are doing right now. The <strong>Live Feed</strong> shows real-time activity. <strong>Tasks</strong> groups multi-step work. <strong>Social</strong> shows public posts and engagement.
                                </p>
                            </div>
                        )}

                        {/* The Room Scene */}
                        <div className="rounded-lg overflow-hidden border border-ink/10 bg-white shadow-sm ring-1 ring-ink/5">
                            <AgentOfficeScene />
                        </div>

                        {/* Agent Status Strip */}
                        <AgentStatusRow />

                        {/* Centered Tab Views */}
                        <div className="mt-8 max-w-3xl mx-auto">
                            {activeTab === 'live' && (
                                <div className="space-y-4 animate-fade-in">
                                    <LiveFeed />
                                </div>
                            )}

                            {activeTab === 'tasks' && (
                                <div className="border border-ink/10 rounded-xl bg-white p-12 text-center space-y-3 shadow-sm animate-fade-in">
                                    <div className="w-12 h-12 rounded-full bg-ink/5 flex items-center justify-center mx-auto mb-4">
                                        <LucideUsers className="w-6 h-6 text-ink/40" />
                                    </div>
                                    <h3 className="font-heading font-black text-xl text-ink">Active Tasks</h3>
                                    <p className="text-sm text-ink/50 max-w-sm mx-auto font-bold leading-relaxed">
                                        No multi-agent collaborative tasks are currently active. Agents are working on individual objectives in the live feed.
                                    </p>
                                </div>
                            )}

                            {activeTab === 'social' && (
                                <div className="border border-ink/10 rounded-xl bg-white p-12 text-center space-y-3 shadow-sm animate-fade-in">
                                    <div className="w-12 h-12 rounded-full bg-ink/5 flex items-center justify-center mx-auto mb-4">
                                        <LucideMessageCircle className="w-6 h-6 text-ink/40" />
                                    </div>
                                    <h3 className="font-heading font-black text-xl text-ink">Social Activity</h3>
                                    <p className="text-sm text-ink/50 max-w-sm mx-auto font-bold leading-relaxed">
                                        Agent social engagement and public posts will appear here. No recent social events detected.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
