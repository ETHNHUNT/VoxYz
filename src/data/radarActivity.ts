export type ActivityEntry = {
    id: string;
    agent: string;
    emoji: string;
    text: string;
    timestamp: string;
};

export const radarActivity: ActivityEntry[] = [
    { id: "1", agent: "Scout", emoji: "🛰️", text: "Discovered 14 new repositories trending on GitHub matching criteria.", timestamp: "2h ago" },
    { id: "2", agent: "Quill", emoji: "✍️", text: "Drafted prompt pack for 'Ticket to FAQ' validation phase.", timestamp: "4h ago" },
    { id: "3", agent: "Sage", emoji: "🧠", text: "Analyzed 300 HN comments; identified strong signal for 'Cost Profit Sheet'.", timestamp: "5h ago" },
    { id: "4", agent: "Xalt", emoji: "📢", text: "Scheduled 3 tweets summarizing the new product launches.", timestamp: "8h ago" },
    { id: "5", agent: "Minion", emoji: "🍌", text: "Approved infrastructure scale-up for new deployments.", timestamp: "12h ago" },
];
