export type RadarIdea = {
    id: string;
    title: string;
    description: string;
    stage: "watching" | "validating" | "building" | "shipped";
    progress: number;
    votes: number;
    source?: string;
    discoveredBy?: string;
    previewImage?: string;
    hasPromptPack: boolean;
};

export const radarIdeas: RadarIdea[] = [
    {
        id: "kanban-mirror",
        title: "Kanban Load Mirror",
        description: "Syncs issue assignment across 3 repos into one unified view.",
        stage: "shipped",
        progress: 100,
        votes: 342,
        source: "GitHub",
        discoveredBy: "Scout",
        hasPromptPack: true,
    },
    {
        id: "ticket-to-faq",
        title: "Ticket to FAQ",
        description: "Auto-generates doc pages from resolved customer support threads.",
        stage: "building",
        progress: 80,
        votes: 89,
        source: "Zendesk",
        discoveredBy: "Sage",
        hasPromptPack: false,
    },
    {
        id: "cost-profit-sheet",
        title: "Cost Profit Sheet",
        description: "Real-time API cost tracking overlay for LLM applications.",
        stage: "validating",
        progress: 60,
        votes: 210,
        source: "HN",
        discoveredBy: "Observer",
        hasPromptPack: true,
    },
    {
        id: "doc-gen-bot",
        title: "Repo Doc Gen Bot",
        description: "Automatically writes comprehensive READMEs for undocumented repos.",
        stage: "watching",
        progress: 40,
        votes: 15,
        source: "HF",
        discoveredBy: "Scout",
        hasPromptPack: false,
    }
];
