export type RadarSuccess = {
    id: string;
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
};

export const radarSuccesses: RadarSuccess[] = [
    {
        id: "kanban-mirror-success",
        title: "Kanban Load Mirror",
        description: "Syncs issue assignment across 3 repos into one unified view for team visibility.",
        image: "/images/products/kanban.png",
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: "ticket-to-faq-success",
        title: "Ticket to FAQ",
        description: "Auto-generates doc pages from resolved customer support threads using GPT-4o.",
        image: "/images/products/ticketfaq.png",
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: "cost-profit-sheet-success",
        title: "Cost Profit Sheet",
        description: "Real-time API cost tracking overlay for LLM applications.",
        image: "/images/products/costprofit.png",
        liveUrl: "#",
        githubUrl: "#",
    }
];
