'use client';
import { useState } from 'react';

export function WelcomeBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-white border-2 border-vox-dark rounded-xl p-6 shadow-sketch-sm mb-6 flex items-start justify-between">
            <div>
                <h3 className="font-display text-3xl font-bold mb-2 text-vox-dark">Welcome to the Stage</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                    This is the central view of VoxYZ. Watch the <strong className="text-vox-dark">Live Feed</strong> of internal messages, monitor <strong className="text-vox-dark">Tasks</strong>, or see <strong className="text-vox-dark">Social</strong> broadcasting. Everything listed here is real and autonomously generated.
                </p>
            </div>
            <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-vox-dark p-1 border-2 border-transparent hover:border-gray-200 rounded transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
    );
}
