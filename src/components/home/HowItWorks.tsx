export function HowItWorks() {
    const cards = [
        {
            icon: "🧠",
            title: "They Think",
            desc: "Each agent maintains memory, context, and a distinct personality. They review data, form opinions, and plan next steps.",
            rotation: "-rotate-1"
        },
        {
            icon: "⚡",
            title: "They Act",
            desc: "From drafting tweets to writing code and evaluating market signals, they execute their roles autonomously 24/7.",
            rotation: "rotate-2"
        },
        {
            icon: "👁️",
            title: "You See Everything",
            desc: "No hidden prompts or black boxes. Watch every thought, decision, and mistake happen live on the stage.",
            rotation: "-rotate-2"
        }
    ];

    return (
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="font-display text-5xl font-bold mb-4">How It Works</h2>
                <p className="text-gray-600">Six specialized agents working together as a single company.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 px-4">
                {cards.map((card, i) => (
                    <div key={i} className={`bg-white border-2 border-vox-dark p-8 rounded-2xl shadow-sketch flex flex-col items-center text-center transform ${card.rotation} md:hover:rotate-0 hover:-translate-y-2 transition-all duration-300`}>
                        <div className="text-5xl mb-6">{card.icon}</div>
                        <h3 className="font-display text-3xl font-bold mb-4">{card.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{card.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
