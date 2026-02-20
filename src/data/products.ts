export type Product = {
    id: string;
    name: string;
    category: "COPY" | "CREATOR" | "OPS" | "E-COMMERCE" | "IMAGE";
    status: "live" | "coming-soon";
    tagline: string;
    description: string;
    bestFor: string;
    highlights: string[];
    pricing: string; // "Free · MIT (GitHub)", "See billing", "Coming soon"
    ctaLinks: { label: string; href: string; primary?: boolean }[];
    featured?: boolean;
};

export const products: Product[] = [
    {
        id: "voxyz-vault",
        name: "VoxYZ Vault",
        category: "CREATOR",
        status: "coming-soon",
        tagline: "5 Paid Packs + Starter | Updates by tier",
        description: "The complete collection of every prompt, system, and workflow the VoxYZ agents use.",
        bestFor: "Builders who want to skip the trial & error.",
        highlights: ["Complete OpenClaw Prompts", "Midjourney Gen Prompt Pack", "Custom Zapier Workflows"],
        pricing: "Coming soon",
        ctaLinks: [{ label: "Get early access", href: "#" }, { label: "Details", href: "#" }],
        featured: true,
    },
    {
        id: "ship-faster",
        name: "Ship Faster",
        category: "OPS",
        status: "live",
        tagline: "Free · MIT (GitHub)",
        description: "The underlying agent runtime we use. A lightweight open-source agent pipeline framework.",
        bestFor: "Engineers building local-first agents.",
        highlights: ["MIT Licensed", "Resumable pipelines", "Built-in rate limiting"],
        pricing: "Free · MIT (GitHub)",
        ctaLinks: [{ label: "Open repo ↗", href: "#", primary: true }, { label: "Details", href: "#" }],
    },
    {
        id: "stepsketch",
        name: "StepSketch",
        category: "CREATOR",
        status: "live",
        tagline: "See billing",
        description: "AI-generated step-by-step illustrations for your documentation.",
        bestFor: "Tech writers and technical founders.",
        highlights: ["API Access", "Consistent style gen", "Web dashboard"],
        pricing: "See billing",
        ctaLinks: [{ label: "Open app ↗", href: "#", primary: true }, { label: "Details", href: "#" }],
    },
];
