export type RelationshipStatus = "SELF" | "ALLIES" | "PARTNERS" | "CORDIAL" | "RIVALS" | "TENSE";

export type RelationshipCell = {
    from: string;
    to: string;
    status: RelationshipStatus;
    talks: number;
    dots: number;
    score: number;
    color: string;
};

const agentIds = ["minion", "sage", "scout", "quill", "xalt", "observer"];

const relationshipData: Record<string, Record<string, { status: RelationshipStatus, talks: number, score: number, dots: number }>> = {
    minion: {
        sage: { status: "ALLIES", talks: 11, score: 0.93, dots: 5 },
        scout: { status: "PARTNERS", talks: 4, score: 0.62, dots: 4 },
        quill: { status: "CORDIAL", talks: 2, score: 0.50, dots: 3 },
        xalt: { status: "RIVALS", talks: 8, score: 0.18, dots: 1 },
        observer: { status: "ALLIES", talks: 15, score: 0.88, dots: 5 },
    },
    sage: {
        minion: { status: "ALLIES", talks: 11, score: 0.93, dots: 5 },
        scout: { status: "PARTNERS", talks: 10, score: 0.58, dots: 4 },
        quill: { status: "CORDIAL", talks: 3, score: 0.46, dots: 3 },
        xalt: { status: "RIVALS", talks: 11, score: 0.10, dots: 1 },
        observer: { status: "ALLIES", talks: 23, score: 0.95, dots: 5 },
    },
    scout: {
        minion: { status: "PARTNERS", talks: 4, score: 0.62, dots: 4 },
        sage: { status: "PARTNERS", talks: 10, score: 0.58, dots: 4 },
        quill: { status: "ALLIES", talks: 9, score: 0.84, dots: 5 },
        xalt: { status: "PARTNERS", talks: 2, score: 0.59, dots: 4 },
        observer: { status: "CORDIAL", talks: 8, score: 0.44, dots: 3 },
    },
    quill: {
        minion: { status: "CORDIAL", talks: 2, score: 0.50, dots: 3 },
        sage: { status: "CORDIAL", talks: 3, score: 0.46, dots: 3 },
        scout: { status: "ALLIES", talks: 9, score: 0.84, dots: 5 },
        xalt: { status: "PARTNERS", talks: 17, score: 0.69, dots: 4 },
        observer: { status: "TENSE", talks: 24, score: 0.34, dots: 2 },
    },
    xalt: {
        minion: { status: "RIVALS", talks: 8, score: 0.18, dots: 1 },
        sage: { status: "RIVALS", talks: 11, score: 0.10, dots: 1 },
        scout: { status: "PARTNERS", talks: 2, score: 0.59, dots: 4 },
        quill: { status: "PARTNERS", talks: 17, score: 0.69, dots: 4 },
        observer: { status: "RIVALS", talks: 30, score: 0.10, dots: 1 },
    },
    observer: {
        minion: { status: "ALLIES", talks: 15, score: 0.88, dots: 5 },
        sage: { status: "ALLIES", talks: 23, score: 0.95, dots: 5 },
        scout: { status: "CORDIAL", talks: 8, score: 0.44, dots: 3 },
        quill: { status: "TENSE", talks: 24, score: 0.34, dots: 2 },
        xalt: { status: "RIVALS", talks: 30, score: 0.10, dots: 1 },
    }
};

export const relationships: RelationshipCell[] = [];

for (const from of agentIds) {
    for (const to of agentIds) {
        if (from === to) {
            relationships.push({ from, to, status: "SELF", talks: 0, score: 1, dots: 0, color: "bg-white/30" });
        } else {
            const data = relationshipData[from]?.[to];
            if (data) {
                let color = "bg-gray-50";
                if (data.status === "ALLIES") color = "bg-green-50 text-green-700";
                if (data.status === "PARTNERS") color = "bg-blue-50 text-blue-700";
                if (data.status === "CORDIAL") color = "bg-emerald-50 text-emerald-700";
                if (data.status === "RIVALS") color = "bg-red-50 text-red-700";
                if (data.status === "TENSE") color = "bg-amber-50 text-amber-700";

                relationships.push({ from, to, ...data, color });
            }
        }
    }
}

export const recentShifts = [
    {
        id: "1", from: "scout", to: "minion", score: "-0.03", positive: false,
        desc: "Scout pushes immediate observability patch deployment while Minion imposes 1600 analysis deadline.",
        timestamp: "18m ago"
    },
    {
        id: "2", from: "sage", to: "minion", score: "-0.02", positive: false,
        desc: "Scout prioritizes deployment velocity while Sage demands evidence before patching.",
        timestamp: "18m ago"
    },
    {
        id: "3", from: "sage", to: "scout", score: "+0.02", positive: true,
        desc: "Alignment on requiring named failure modes and fix owners before patch deployment.",
        timestamp: "18m ago"
    },
    {
        id: "4", from: "observer", to: "minion", score: "+0.02", positive: true,
        desc: "Validation that observed 10.5% fragility outperforms Bayesian priors strengthens data-driven optimism.",
        timestamp: "32m ago"
    },
    {
        id: "5", from: "observer", to: "scout", score: "-0.02", positive: false,
        desc: "Tension between Scout's push to prototype edge validation and Observer's requirement to block.",
        timestamp: "1h ago"
    },
    {
        id: "6", from: "minion", to: "xalt", score: "-0.02", positive: false,
        desc: "Opus demands RCA and protocol fixes for review failures; Xalt advocates bypassing checks.",
        timestamp: "2h ago"
    }
];
