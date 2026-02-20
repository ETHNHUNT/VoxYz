"use client";

import { products } from '../../data/products';
import { TagBadge } from '../shared/TagBadge';
import { StatusBadge } from '../shared/StatusBadge';
import { motion } from 'framer-motion';

export function ProductGrid() {
    const featured = products.find(p => p.featured);
    const gridProducts = products.filter(p => !p.featured);

    return (
        <section id="products" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <div>
                    <h2 className="font-display text-5xl font-bold mb-4">Products & Services</h2>
                    <p className="text-gray-600">The tools, packs, and platforms we build.</p>
                </div>
            </div>
            {/* FREE – START HERE divider */}
            <div className="flex items-center justify-center mb-8">
                <span className="text-xs font-bold text-ink/50 bg-white px-3 py-1 border border-ink rounded-full">
                    FREE – START HERE
                </span>
            </div>

            {featured && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full bg-vox-dark rounded-2xl border-2 border-vox-dark shadow-sketch p-8 md:p-12 mb-12 text-white flex flex-col md:flex-row gap-8"
                >
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="bg-coral text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-widest uppercase">
                                ⚡ FEATURED
                            </span>
                            <StatusBadge status={featured.status} />
                        </div>
                        <h3 className="font-display text-4xl font-bold">{featured.name}</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">{featured.description}</p>
                        <p className="italic text-gray-400">Best for: {featured.bestFor}</p>
                    </div>
                    <div className="flex-1 bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-between">
                        <div className="mb-6">
                            <div className="font-bold text-coral mb-4">{featured.tagline}</div>
                            <ul className="space-y-3">
                                {featured.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-200">
                                        <span className="text-vox-green font-bold text-lg leading-none">✓</span> <span className="pt-0.5">{h}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            {featured.ctaLinks.map((cta, i) => (
                                <button key={i} className={`flex-1 py-3 px-4 rounded-lg font-bold text-center border-2 border-transparent transition-all ${featured.status === 'coming-soon' ? 'opacity-50 cursor-not-allowed bg-white/10 text-gray-400' : 'bg-white text-vox-dark hover:bg-gray-100'
                                    }`}>
                                    {cta.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}


            <div className="grid md:grid-cols-2 gap-8">
                {gridProducts.map((p, idx) => {
                    // choose gradient based on tier/status
                    const isPremium = p.status === 'coming-soon' || p.pricing.includes('See billing');
                    const gradientClass = isPremium
                        ? 'bg-gradient-to-br from-amber-50 via-white to-yellow-50'
                        : 'bg-gradient-to-br from-emerald-50 via-white to-teal-50';
                    return (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`${gradientClass} rounded-2xl border-2 border-vox-dark p-8 flex flex-col hover:-translate-y-1 transition-transform`}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <TagBadge label={p.category} />
                                <StatusBadge status={p.status} />
                            </div>
                            <h3 className="font-display text-3xl font-bold mb-3">{p.name}</h3>
                            <p className="text-gray-600 mb-4 pb-4 border-b border-dashed border-gray-300 flex-1">{p.description}</p>
                            <p className="italic text-sm text-gray-500 mb-6 flex-1">Best for: {p.bestFor}</p>

                            <div className="bg-cream/50 p-5 rounded-xl border border-gray-200 mb-6">
                                <div className="font-bold text-sm mb-3 text-vox-dark">{p.pricing}</div>
                                <ul className="space-y-2">
                                    {p.highlights.map((h, i) => (
                                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600 font-medium">
                                            <span className="text-vox-green font-bold text-base leading-none translate-y-[2px]">✓</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex gap-3 mt-auto">
                                {p.ctaLinks.map((cta, i) => (
                                    <button key={i} className={`flex-1 py-3 px-4 rounded-lg font-bold text-center border-2 border-vox-dark text-sm transition-all ${cta.primary ? 'bg-vox-green shadow-sketch-sm hover:-translate-y-0.5' : 'bg-white hover:bg-gray-50'
                                        }`}>
                                        {cta.label}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
