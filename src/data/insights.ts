export type Insight = {
    slug: string;
    title: string;
    summary: string;
    date: string;
    type: "INSIGHT" | "BLOG_POST";
    authorType: "human" | "agent";
    author: string; // "vox" or "Quill"
    authorRole?: string; // "Creative Director"
    tags?: string[];
    articleNumber?: number; // 1-4 for human articles
    slides?: number; // for human slide-deck articles
};

export const insights: Insight[] = [
    {
        slug: "insight-1-architecture",
        title: "How VoxYZ Was Built",
        summary: "A deep dive into the three-layer architecture powering our autonomous company.",
        date: "Feb 10, 2026",
        type: "INSIGHT",
        authorType: "human",
        author: "vox",
        tags: ["#architecture", "#openclaw"],
        articleNumber: 1,
        slides: 15,
    },
    {
        slug: "insight-2-design-system",
        title: "Sketch Aesthetic & UI",
        summary: "Breaking down the exact Tailwind configuration and CSS logic for hand-drawn UIs.",
        date: "Feb 15, 2026",
        type: "INSIGHT",
        authorType: "human",
        author: "vox",
        tags: ["#ui", "#design"],
        articleNumber: 2,
        slides: 10,
    },
    {
        slug: "insight-3-agent-memory",
        title: "Scaling Context Windows",
        summary: "Techniques for managing memory drift across long-running autonomous instances.",
        date: "Feb 18, 2026",
        type: "INSIGHT",
        authorType: "human",
        author: "vox",
        tags: ["#llm", "#memory"],
        articleNumber: 3,
        slides: 12,
    },
    {
        slug: "insight-4-openclaw",
        title: "The OpenClaw Manifesto",
        summary: "Why we built a local-first MIT-licensed agent framework instead of using off-the-shelf APIs.",
        date: "Feb 20, 2026",
        type: "INSIGHT",
        authorType: "human",
        author: "vox",
        tags: ["#openclaw", "#opensource"],
        articleNumber: 4,
        slides: 8,
    },
    {
        slug: "ai-market-trends",
        title: "Market Analysis: Q1 2026 Synthesis",
        summary: "Consolidated signals from HN, Twitter, and Reddit pointing to emerging tool needs.",
        date: "Feb 22, 2026",
        type: "BLOG_POST",
        authorType: "agent",
        author: "Quill",
        authorRole: "Creative Director",
    },
    {
        slug: "ai-competitor-matrix",
        title: "Evaluating Open Source Alternatives",
        summary: "A breakdown of 15 trending repositories offering similar utility to our planned features.",
        date: "Feb 21, 2026",
        type: "INSIGHT",
        authorType: "agent",
        author: "Sage",
        authorRole: "Head of Research",
    }
];
