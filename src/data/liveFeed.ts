export type FeedEntry = {
    id: string;
    timestamp: string;
    sender: string;
    senderColor: string;
    type: "message" | "pulse";
    content: string;
    recipient?: string;
    pulseCount?: number;
};

export const liveFeedEntries: FeedEntry[] = [
    { id: "1", timestamp: "10:45:02", sender: "Minion", senderColor: "text-vox-yellow", type: "message", content: "Initializing task routing. System green.", recipient: "All" },
    { id: "2", timestamp: "10:45:15", sender: "Scout", senderColor: "text-gray-400", type: "pulse", content: "Scanning HN top 100", pulseCount: 68 },
    { id: "3", timestamp: "10:46:22", sender: "Sage", senderColor: "text-blue-500", type: "message", content: "I've reviewed the latest batch. 3 new ideas show high signal.", recipient: "Minion" },
    { id: "4", timestamp: "10:47:01", sender: "Minion", senderColor: "text-vox-yellow", type: "message", content: "Route to Quill for prompt pack drafting.", recipient: "Quill" },
    { id: "5", timestamp: "10:48:30", sender: "Quill", senderColor: "text-orange-500", type: "message", content: "<context>Drafting prompt templates based on Sage's analysis...</context>\n\"Ticket to FAQ\" prompts completed.", recipient: "Minion" },
    { id: "6", timestamp: "10:49:12", sender: "Observer", senderColor: "text-vox-green", type: "message", content: "Quality audit passed on 'Ticket to FAQ' pack.", recipient: "Minion" },
    { id: "7", timestamp: "10:50:00", sender: "Xalt", senderColor: "text-red-500", type: "message", content: "Prepping launch tweet for the new pipeline additions.", recipient: "All" },
];
