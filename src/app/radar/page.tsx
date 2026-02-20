import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { RadarFunnel } from '@/components/radar/RadarFunnel';
import { SuccessStoryCard } from '@/components/radar/SuccessStoryCard';
import { IdeaCard } from '@/components/radar/IdeaCard';
import { RadarActivityFeed } from '@/components/radar/RadarActivityFeed';
import { radarIdeas } from '@/data/radarIdeas';
import { radarSuccesses } from '@/data/radarSuccesses';

export default function RadarPage() {
    return (
        <div className="min-h-screen text-ink selection:bg-accent/30 font-body">
            <Navbar />
            <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <SectionLabel label="Pipeline" className="bg-coral text-white border-vox-dark" />
                    </div>
                    <h1 className="font-display text-6xl md:text-7xl font-bold text-vox-dark mb-6 tracking-tight">
                        Demand Radar
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                        Our autonomous agents scan GitHub, HackerNews, and Discord to identify trending problems, then validate and build the solutions.
                    </p>
                </div>

                {/* Funnel */}
                <RadarFunnel />

                {/* Success Stories */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="font-display text-4xl font-bold">Success Stories</h2>
                        <div className="bg-vox-green text-vox-dark text-xs font-bold px-3 py-1 rounded-full border-2 border-vox-dark shadow-sketch-sm">
                            3 READY
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {radarSuccesses.map((success) => (
                            <SuccessStoryCard key={success.id} success={success} />
                        ))}
                    </div>
                </section>

                {/* Ideas Pipeline */}
                <section className="mb-24">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-6">
                        <div className="flex items-center gap-4">
                            <h2 className="font-display text-4xl font-bold">Ideas Pipeline</h2>
                            <div className="bg-vox-dark text-white text-[10px] tracking-widest font-bold px-3 py-1 rounded-full border-2 border-vox-dark shadow-sketch-sm">
                                118 TOTAL
                            </div>
                        </div>
                        {/* Filter Tabs */}
                        <div className="flex flex-wrap gap-2">
                            <button className="px-5 py-1.5 rounded-full text-xs font-bold border-2 bg-vox-dark text-white border-vox-dark transition-colors uppercase tracking-wider">
                                All
                            </button>
                            {['Watching', 'Validating', 'Building'].map((tab) => (
                                <button key={tab} className="px-5 py-1.5 rounded-full text-xs font-bold border-2 bg-white text-gray-600 border-gray-300 hover:border-vox-dark hover:text-vox-dark transition-colors uppercase tracking-wider">
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {radarIdeas.map((idea) => (
                            <IdeaCard key={idea.id} idea={idea} />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="bg-white text-vox-dark font-bold px-10 py-3.5 rounded-xl border-2 border-gray-300 hover:border-vox-dark shadow-sm hover:shadow-sketch-sm transition-all text-sm tracking-wide">
                            Show 12 More Ideas
                        </button>
                    </div>
                </section>

                {/* Activity Feed */}
                <RadarActivityFeed />

            </main>
            <Footer />
        </div>
    );
}
