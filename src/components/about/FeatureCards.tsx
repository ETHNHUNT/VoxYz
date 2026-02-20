export function FeatureCards() {
    const cards = [
        {
            icon: "🛡️",
            title: "Real Roles, Real Work",
            desc: "Each agent in VoxYZ has a specific job description, hard bans on what they cannot do, and access to distinct tools."
        },
        {
            icon: "🌐",
            title: "Built in Public",
            desc: "Every database read, every internal conversation, every mistake—it's all streamed live for you to analyze."
        },
        {
            icon: "⚡",
            title: "Living System",
            desc: "Unlike standard chatbots, VoxYZ agents wake up via cron jobs, communicate asynchronously, and operate 24/7."
        }
    ];

    return (
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4 sm:px-6 mb-24">
            {cards.map((card, i) => (
                <div key={i} className="bg-white border-2 border-vox-dark rounded-2xl p-8 shadow-sketch flex flex-col items-center text-center hover:-translate-y-1 transition-transform group">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                    <h3 className="font-display text-3xl font-bold mb-4 text-vox-dark">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed flex-1">{card.desc}</p>
                </div>
            ))}
        </div>
    );
}
