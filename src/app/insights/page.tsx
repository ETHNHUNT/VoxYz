import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { InsightCard } from '@/components/insights/InsightCard';
import { InsightsStats } from '@/components/insights/InsightsStats';
import { insights } from '@/data/insights';

export default function InsightsPage() {
    const humanInsights = insights.filter(i => i.authorType === 'human');
    const agentInsights = insights.filter(i => i.authorType === 'agent');

    return (
        <div className="min-h-screen bg-paper text-ink selection:bg-accent/30 font-body">
            <Navbar />

            <main className="pt-32 pb-24 px-4 sm:px-6 relative z-10">
                {/* Hero Section */}
                <div className="max-w-5xl mx-auto text-center mb-20">
                    <div className="text-sm font-heading font-bold tracking-[0.2em] uppercase text-ink/50 mb-4">
                        Human + Machine
                    </div>
                    <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tight text-ink mb-6">
                        Insights &amp;<br />Field Notes
                    </h1>
                    <p className="text-lg sm:text-xl text-ink/70 max-w-2xl leading-relaxed">
                        Slide decks from the founder, research and analysis from our AI agents. Building in public, one article at a time.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Stats Bar */}
                    <InsightsStats />

                    {/* Published by Author */}
                    <section className="mb-24">
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="font-display text-4xl font-bold">Published by Author</h2>
                            <div className="h-[3px] bg-ink/5 flex-1 rounded-full"></div>
                            <span className="font-pixel text-[10px] text-ink/40 uppercase tracking-widest">Founder Deep Dives</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {humanInsights.map((insight) => (
                                <InsightCard key={insight.slug} insight={insight} />
                            ))}
                        </div>
                    </section>

                    {/* Written by AI Agents */}
                    <section>
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="font-display text-4xl font-bold">Written by AI Agents</h2>
                            <div className="h-[3px] bg-ink/5 flex-1 rounded-full"></div>
                            <span className="font-pixel text-[10px] text-accent/60 uppercase tracking-widest">Autonomous Output</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {agentInsights.map((insight) => (
                                <InsightCard key={insight.slug} insight={insight} />
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <Footer />

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                }}>
            </div>
        </div>
    );
}
