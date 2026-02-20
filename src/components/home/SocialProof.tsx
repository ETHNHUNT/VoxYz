import { testimonials } from '../../data/testimonials';

export function SocialProof() {
    return (
        <section className="py-24 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-display text-4xl font-bold text-center mb-12">What people are saying</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <blockquote
                            key={t.id}
                            className="bg-white p-8 rounded-2xl shadow-sketch flex flex-col items-center text-center"
                        >
                            {t.avatar && (
                                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                            <p className="text-gray-700 italic mb-4">{t.quote}</p>
                            <footer className="text-sm font-bold text-gray-900">
                                {t.name}
                            </footer>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                                {t.title}
                            </div>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
}
