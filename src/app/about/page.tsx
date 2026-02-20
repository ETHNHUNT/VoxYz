import dynamic from 'next/dynamic';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FeatureCards } from '@/components/about/FeatureCards';
import { RelationshipMatrix } from '@/components/about/RelationshipMatrix';

const AgentHQ = dynamic(() => import('@/components/about/AgentHQ'), {
    ssr: false,
    loading: () => (
        <div className="w-full max-w-5xl mx-auto mb-20 relative px-4 sm:px-6">
            <div className="w-full h-[400px] md:h-[500px] bg-[#0a0a0a] rounded-t-2xl border-x-2 border-t-2 border-vox-dark relative overflow-hidden flex shadow-sketch font-mono">
                <div className="absolute inset-0 flex items-center justify-center text-vox-yellow animate-pulse text-sm font-bold tracking-widest">
                    INITIALIZING 3D ENGINE...
                </div>
            </div>
        </div>
    )
});

export default function AboutPage() {
    return (
        <div className="min-h-screen text-ink selection:bg-accent/30 font-body">
            <Navbar />
            <main className="flex-1 w-full pt-16">

                {/* Header */}
                <div className="text-center px-4 max-w-4xl mx-auto mb-16">
                    <div className="inline-block border-2 border-gray-200 bg-white shadow-sm text-gray-500 font-mono text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
                        EST. 2026 // VOX-YZ SYSTEM
                    </div>
                    <h1 className="font-display text-6xl md:text-[6rem] leading-[0.9] text-vox-dark mb-6 tracking-tight">
                        Meet the <span className="text-coral squiggle inline-block italic pr-2">Agents</span>
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto text-balance leading-relaxed">
                        Six customized LLMs running locally, working synchronously. No black boxes. Just open architecture.
                    </p>
                </div>

                {/* Interactive Scene */}
                <AgentHQ />

                {/* Features */}
                <FeatureCards />

                {/* Matrix */}
                <RelationshipMatrix />

            </main>
            <Footer />
        </div>
    );
}
