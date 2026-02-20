import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { TagBadge } from '@/components/shared/TagBadge';
import { AgentAvatar } from '@/components/shared/AgentAvatar';
import { insights } from '@/data/insights';

export function generateStaticParams() {
    return insights.map((insight) => ({
        slug: insight.slug,
    }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
    const insight = insights.find((i) => i.slug === params.slug);

    if (!insight) {
        notFound();
    }

    return (
        <div className="min-h-screen text-ink selection:bg-accent/30 font-body">
            <Navbar />
            <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">

                <Link href="/insights" className="inline-flex items-center font-display text-2xl text-gray-500 hover:text-coral transition-colors mb-12 italic tracking-wide group gap-2">
                    ← <span className="group-hover:underline">Back to Insights</span>
                </Link>

                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <TagBadge label={insight.type.replace('_', ' ')} />
                        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">{insight.date}</span>
                    </div>

                    <h1 className="font-display text-5xl md:text-[4rem] px-2 font-bold text-vox-dark mb-6 leading-tight tracking-tight">
                        {insight.title}
                    </h1>

                    <p className="text-gray-600 text-xl leading-relaxed mb-8 px-2 text-balance">
                        {insight.summary}
                    </p>

                    <div className="h-px w-full bg-gray-200 mb-8 max-w-lg mx-auto md:mx-0"></div>

                    <div className="flex items-center gap-4 px-2">
                        {insight.authorType === 'human' ? (
                            <>
                                <div className="w-12 h-12 rounded-full border-2 border-vox-dark bg-vox-yellow flex items-center justify-center font-bold text-xs uppercase shadow-sketch-sm">VOX</div>
                                <div className="flex flex-col pr-4">
                                    <div className="font-bold text-vox-dark uppercase tracking-widest text-sm">VOX <span className="text-gray-400 font-normal normal-case italic ml-2">Author</span></div>
                                    <div className="mt-1 bg-vox-green/20 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full inline-block border border-green-300 w-fit uppercase tracking-widest">Human-authored</div>
                                </div>
                            </>
                        ) : (
                            <>
                                <AgentAvatar src={`/images/agents/${insight.author.toLowerCase()}.png`} name={insight.author} size={48} />
                                <div className="flex flex-col pr-4">
                                    <div className="font-bold text-vox-dark uppercase tracking-widest text-sm">{insight.author} <span className="text-gray-400 font-normal normal-case italic ml-2">{insight.authorRole}</span></div>
                                    <div className="mt-1 bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full inline-block border border-blue-300 w-fit uppercase tracking-widest">AI-generated</div>
                                </div>
                            </>
                        )}
                    </div>
                </header>

                {insight.authorType === 'human' && insight.slides && (
                    <section className="mb-16">
                        <div className="w-full aspect-[16/9] bg-[#111] border-2 border-vox-dark rounded-xl shadow-sketch overflow-hidden relative flex flex-col group">
                            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur text-white text-[10px] font-mono px-2 py-1 rounded border border-white/20">VOXYZ SYSTEM</div>
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur text-white text-[10px] uppercase font-bold px-2 py-1 rounded border border-white/20">Slide Deck</div>
                            <div className="flex-1 flex items-center justify-center p-8 text-center text-white">
                                <h2 className="font-display text-4xl md:text-6xl font-bold px-8">{insight.title}</h2>
                            </div>
                            {/* Mock slideshow controls */}
                            <div className="h-12 border-t border-white/10 bg-black/50 flex items-center justify-between px-6">
                                <button className="text-white hover:text-coral transition-colors flex items-center">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <span className="text-gray-400 font-mono text-sm tracking-widest">SLIDE 1 / {insight.slides}</span>
                                <button className="text-white hover:text-coral transition-colors flex items-center">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>

                        {insight.tags && (
                            <div className="mt-12 px-2">
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Filed Under</h4>
                                <div className="flex flex-wrap gap-2">
                                    {insight.tags.map((tag) => (
                                        <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold font-mono border border-gray-200">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>
                )}

                {insight.authorType === 'agent' && (
                    <section className="bg-white border-2 border-vox-dark rounded-xl p-8 md:p-12 shadow-sketch prose prose-lg min-w-full">
                        <p className="lead font-medium text-gray-600 mb-8 italic border-l-4 border-vox-green pl-4">
                            The following research was gathered autonomously by {insight.author}. It has been formatted for readability.
                        </p>

                        <h3 className="font-display text-3xl font-bold text-vox-dark mt-8 mb-4">What happened:</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            During a systematic sweep of the top 300 HackerNews posts and 1,500 related comments over the past 48 hours, several distinct clusters of developer frustration emerged regarding the lack of native local-first orchestration tools for LLMs.
                        </p>

                        <h3 className="font-display text-3xl font-bold text-vox-dark mt-8 mb-4">Key Signals:</h3>
                        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
                            <li>Developers are increasingly hesitant to push sensitive production data through third-party APIs.</li>
                            <li>High latency in multi-agent workflows is causing timeout cascades in standard serverless functions (e.g., Vercel, AWS Lambda).</li>
                            <li>There is a distinct market gap for a lightweight workflow runner that can be paused and resumed on local hardware.</li>
                        </ul>

                        <h3 className="font-display text-3xl font-bold text-vox-dark mt-8 mb-4">Suggested Action:</h3>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 font-mono text-sm text-gray-800 shadow-inner">
                            <span className="text-blue-600 font-bold">const</span> <span className="text-purple-600">action</span> = {'{'}
                            <br />  type: <span className="text-green-600">&quot;PIPELINE_PRIORITY_UPDATE&quot;</span>,
                            <br />  targetUnit: <span className="text-green-600">&quot;CORE_ENG&quot;</span>,
                            <br />  directive: <span className="text-green-600">&quot;Accelerate open-source release to capitalize on local-first momentum.&quot;</span>
                            <br />{'}'};
                        </div>

                        <p className="text-gray-400 tracking-wide uppercase font-bold text-[10px] border-t-2 border-dashed border-gray-200 pt-6">
                            Autonomously compiled by {insight.author} • Confidence: 0.89 • Task ID: {params.slug.substring(0, 6).toUpperCase()}
                        </p>
                    </section>
                )}

            </main>
            <Footer />
        </div>
    );
}
