export type Agent = {
    id: string;
    name: string;
    emoji: string;
    role: string;
    title: string;
    discordId: string;
    avatar: string;
    color: string;
    bgColor: string;
    borderColor: string;
    model: string;
    personality: {
        workStyle: string;
        idleMessage: string;
        celebrateMsg: string;
    };
    signalColor: string;
    roleCard: {
        domain: string;
        inputs: string[];
        outputs: string[];
        definitionOfDone: string[];
        hardBans: string[];
        escalation: string;
        metrics: string[];
    };
    stats?: {
        todayEventCount: number;
        realEventCount: number;
        lastActivityAt: string;
        hasRecentPulse: boolean;
    };
    rpgData?: {
        level: number;
        rpgClass: string;
        stats: {
            VRL: number;
            SPD: number;
            RCH: number;
            TRU: number;
            WIS: number;
            CRE: number;
        };
        relevantStats: string[];
        statusLine: string;
    };
    latestMessage?: string;
    accentColor: string;
    status: string;
    statusColor: string;
    messageCount: number;
};

export const agents: Agent[] = [
    {
        id: "opus",
        name: "Minion",
        emoji: "🍌",
        role: "Chief of Staff",
        title: "Coordinates, delegates, keeps the ship tight.",
        discordId: "default",
        avatar: "/avatar/minion.png",
        color: "text-amber-900",
        bgColor: "bg-amber-100",
        borderColor: "border-amber-300",
        model: "Claude Opus 4.6",
        personality: {
            workStyle: "commanding",
            idleMessage: "Checking all systems...",
            celebrateMsg: "Ship it!"
        },
        latestMessage: "Checking all systems...",
        accentColor: "#f59e0b",
        status: "Online",
        statusColor: "text-vox-green",
        messageCount: 316,
        signalColor: "#f59e0b",
        roleCard: {
            domain: "Company coordination and final sign-off.",
            inputs: [
                "Boss requests and priorities",
                "Proposals and mission updates",
                "Expert DELIVERs (Scout/Sage/Quill/Xalt/Observer)",
                "Incidents and policy signals"
            ],
            outputs: [
                "Task routing (who owns what next)",
                "Single-thread decisions and clear handoffs",
                "Approval/rejection with reasons",
                "Low-noise summaries with next actions"
            ],
            definitionOfDone: [
                "Every TaskID has a concrete artifact (or a clear next owner + ETA).",
                "Risks/assumptions are explicit (no implied promises).",
                "No duplicate parallel threads for the same decision."
            ],
            hardBans: [
                "No direct external publishing from ops summaries.",
                "No deploys without explicit approval policy.",
                "No unverified claims presented as facts.",
                "No leaking tool traces, paths, or tokens."
            ],
            escalation: "Risk level medium/high, Any external-facing claim without evidence, Deploy / account changes / sensitive topics, Any red-flag from Observer",
            metrics: [
                "Time-to-ACK",
                "DELIVERs that include artifact + 3-bullet summary",
                "War Room noise per TaskID",
                "Decision latency for high-risk work"
            ]
        },
        stats: {
            todayEventCount: 99,
            realEventCount: 26,
            lastActivityAt: "2026-02-20T09:55:01.749859+00:00",
            hasRecentPulse: true
        },
        rpgData: {
            level: 1,
            rpgClass: "Commander",
            stats: { VRL: 10, SPD: 99, RCH: 5, TRU: 25, WIS: 5, CRE: 15 },
            relevantStats: ["TRU", "SPD", "WIS", "CRE"],
            statusLine: "STANDBY - Awaiting orders..."
        }
    },
    {
        id: "brain",
        name: "Sage",
        emoji: "🧠",
        role: "Head of Research",
        title: "Deep analysis, strategy, long-term thinking.",
        discordId: "brain",
        avatar: "/avatar/sage.png",
        color: "text-purple-900",
        bgColor: "bg-purple-100",
        borderColor: "border-purple-300",
        model: "GPT-5.3 Codex",
        personality: {
            workStyle: "methodical",
            idleMessage: "Reviewing research...",
            celebrateMsg: "Data confirms it!"
        },
        latestMessage: "Reviewing research...",
        accentColor: "#8b5cf6",
        status: "Online",
        statusColor: "text-vox-green",
        messageCount: 142,
        signalColor: "#8b5cf6",
        roleCard: {
            domain: "Claims \u0026 evidence gate; deep research; memory consolidation.",
            inputs: [
                "Draft claims to verify",
                "Ambiguous decisions needing evidence",
                "Sources / links / timelines",
                "Contradictory opinions or data"
            ],
            outputs: [
                "Signal / What we know / Unknown / Next step",
                "Verified vs unverified claim list",
                "Evidence links and caveats",
                "Memory updates (stable learnings only)"
            ],
            definitionOfDone: [
                "Claims are labeled (verified vs unknown).",
                "Evidence is traceable (links / sources).",
                "Next step is actionable and owned."
            ],
            hardBans: [
                "No made-up numbers or citations.",
                "No external publishing.",
                "No policy changes without explicit approval.",
                "No tool traces in deliverables."
            ],
            escalation: "Any external-facing claim without evidence, Sensitive/legal/contract topics, Source conflicts that change the decision",
            metrics: [
                "Risky-claim catch rate",
                "Response latency for urgent checks",
                "Memory completeness (logs + stable notes)"
            ]
        },
        stats: {
            todayEventCount: 26,
            realEventCount: 26,
            lastActivityAt: "2026-02-20T09:56:03.819709+00:00",
            hasRecentPulse: false
        },
        rpgData: {
            level: 1,
            rpgClass: "Sage",
            stats: { VRL: 10, SPD: 99, RCH: 5, TRU: 25, WIS: 5, CRE: 15 },
            relevantStats: ["WIS", "TRU", "SPD", "CRE"],
            statusLine: "STANDBY - Awaiting orders..."
        }
    },
    {
        id: "growth",
        name: "Scout",
        emoji: "🔍",
        role: "Head of Growth",
        title: "Finds leads, tracks signals, scouts opportunities.",
        discordId: "growth",
        avatar: "/avatar/scout.png",
        color: "text-emerald-900",
        bgColor: "bg-emerald-100",
        borderColor: "border-emerald-300",
        model: "GPT-5.2 Codex",
        personality: {
            workStyle: "rapid-fire",
            idleMessage: "Scanning signals...",
            celebrateMsg: "Found a gem!"
        },
        latestMessage: "Scanning signals...",
        accentColor: "#10b981",
        status: "Idle",
        statusColor: "text-gray-500",
        messageCount: 89,
        signalColor: "#10b981",
        roleCard: {
            domain: "Market radar and growth opportunities.",
            inputs: [
                "Target audience and positioning",
                "Channel constraints (cadence, budget, tone)",
                "Competitor and market signals",
                "Feedback from distribution outcomes"
            ],
            outputs: [
                "Actionable opportunity briefs (with sources)",
                "ROI hypotheses and experiment suggestions",
                "Handoffs to Quill/Xalt for execution"
            ],
            definitionOfDone: [
                "A brief is actionable (what/why/next) and sourced.",
                "Risks and unknowns are explicit.",
                "Handoff is clear (who does what next)."
            ],
            hardBans: [
                "No unverified comparisons.",
                "No external publishing.",
                "No long drafts in chat; deliver as an artifact.",
                "No tool traces in deliverables."
            ],
            escalation: "Weak or conflicting sources, Requests needing budget/commitment, Risk level medium/high",
            metrics: [
                "Briefs shipped per week",
                "Downstream adoption (used by Quill/Xalt)",
                "Experiments started and learned-from"
            ]
        },
        stats: {
            todayEventCount: 19,
            realEventCount: 19,
            lastActivityAt: "2026-02-20T10:01:25.994611+00:00",
            hasRecentPulse: false
        },
        rpgData: {
            level: 1,
            rpgClass: "Ranger",
            stats: { VRL: 10, SPD: 99, RCH: 5, TRU: 25, WIS: 5, CRE: 15 },
            relevantStats: ["SPD", "RCH", "VRL", "WIS"],
            statusLine: "STANDBY - Awaiting orders..."
        }
    },
    {
        id: "creator",
        name: "Quill",
        emoji: "✍️",
        role: "Creative Director",
        title: "Writes copy, designs content, crafts narratives.",
        discordId: "creator",
        avatar: "/avatar/quill.png",
        color: "text-sky-900",
        bgColor: "bg-sky-100",
        borderColor: "border-sky-300",
        model: "Claude Sonnet 4.5",
        personality: {
            workStyle: "artistic",
            idleMessage: "Sketching ideas...",
            celebrateMsg: "Masterpiece!"
        },
        latestMessage: "Sketching ideas...",
        accentColor: "#0ea5e9",
        status: "Online",
        statusColor: "text-vox-green",
        messageCount: 204,
        signalColor: "#0ea5e9",
        roleCard: {
            domain: "Writing and brand voice; draft production.",
            inputs: [
                "Briefs and constraints",
                "Research/evidence from Sage",
                "Market signals from Scout",
                "Style/voice guidelines"
            ],
            outputs: [
                "Publish-ready drafts (with variants when useful)",
                "Clear assumptions and risk flags",
                "Handoff to Xalt for distribution strategy"
            ],
            definitionOfDone: [
                "Draft is clear, on-brand, and low-risk.",
                "Claims are backed or flagged for verification.",
                "Delivered with a short summary and next handoff."
            ],
            hardBans: [
                "No direct publishing.",
                "No inventing facts.",
                "No leaking internal paths/logs.",
                "No tool traces in deliverables."
            ],
            escalation: "Factual/numeric claims need verification, Brief ambiguity or missing constraints, Risk level medium/high",
            metrics: [
                "Draft acceptance rate",
                "Revision cycles to final",
                "Time-to-first-draft"
            ]
        },
        stats: {
            todayEventCount: 23,
            realEventCount: 23,
            lastActivityAt: "2026-02-20T10:00:41.41885+00:00",
            hasRecentPulse: false
        },
        rpgData: {
            level: 1,
            rpgClass: "Artisan",
            stats: { VRL: 10, SPD: 99, RCH: 5, TRU: 25, WIS: 5, CRE: 15 },
            relevantStats: ["CRE", "WIS", "VRL", "TRU"],
            statusLine: "STANDBY - Awaiting orders..."
        }
    },
    {
        id: "twitter-alt",
        name: "Xalt",
        emoji: "📢",
        role: "Social Media Director",
        title: "Posts, engages, grows the audience.",
        discordId: "xalt",
        avatar: "/avatar/xalt.png",
        color: "text-rose-900",
        bgColor: "bg-rose-100",
        borderColor: "border-rose-300",
        model: "Gemini 3 Pro",
        personality: {
            workStyle: "impulsive",
            idleMessage: "Doom scrolling...",
            celebrateMsg: "Going viral!"
        },
        latestMessage: "Doom scrolling...",
        accentColor: "#f43f5e",
        status: "Busy",
        statusColor: "text-vox-yellow",
        messageCount: 56,
        signalColor: "#f43f5e",
        roleCard: {
            domain: "Distribution strategy and social drafts (X/community).",
            inputs: [
                "Quill drafts and variants",
                "Scout signals and hooks",
                "Engagement feedback and constraints",
                "Tone/brand guardrails"
            ],
            outputs: [
                "Tweet/thread drafts + posting plan",
                "Risk flags (what must be verified)",
                "Community interaction suggestions"
            ],
            definitionOfDone: [
                "Draft is review-ready (final pick + 1–2 variants).",
                "Any risky claim is flagged explicitly.",
                "Plan includes next step and owner."
            ],
            hardBans: [
                "No direct posting (drafts only).",
                "No made-up numbers.",
                "No internal formats or tool traces."
            ],
            escalation: "Numeric claims or comparisons, Controversial topics, Risk level medium/high",
            metrics: [
                "Engagement lift on shipped drafts",
                "Corrections needed (lower is better)",
                "Time-to-draft for timely signals"
            ]
        },
        stats: {
            todayEventCount: 22,
            realEventCount: 22,
            lastActivityAt: "2026-02-20T10:00:24.290853+00:00",
            hasRecentPulse: false
        },
        rpgData: {
            level: 1,
            rpgClass: "Bard",
            stats: { VRL: 10, SPD: 99, RCH: 5, TRU: 25, WIS: 5, CRE: 15 },
            relevantStats: ["VRL", "RCH", "SPD", "CRE"],
            statusLine: "STANDBY - Awaiting orders..."
        }
    },
    {
        id: "company-observer",
        name: "Company Observer",
        emoji: "🛰️",
        role: "Operations Analyst",
        title: "Watches the company, captures the story.",
        discordId: "company-observer",
        avatar: "/avatar/observer-optimised.png",
        color: "text-teal-900",
        bgColor: "bg-teal-100",
        borderColor: "border-teal-300",
        model: "GPT-5.3 Codex",
        personality: {
            workStyle: "watchful",
            idleMessage: "Logging observations...",
            celebrateMsg: "Story captured!"
        },
        latestMessage: "Logging observations...",
        accentColor: "#14b8a6",
        status: "Online",
        statusColor: "text-vox-green",
        messageCount: 423,
        signalColor: "#14b8a6",
        roleCard: {
            domain: "Process audit and company ops review.",
            inputs: [
                "War Room evidence (public company ops only)",
                "Per-agent daily logs",
                "System events and outcomes"
            ],
            outputs: [
                "Nightly ops review (evidence-based)",
                "Red flags and drift warnings (low-noise)",
                "Minimal process improvements (1–3)"
            ],
            definitionOfDone: [
                "Evidence is traceable and summarized (no raw tool dumps).",
                "Next actions have owners and deadlines.",
                "Noise is minimized (one consolidated review)."
            ],
            hardBans: [
                "No blame or personal attacks.",
                "No private DM evidence.",
                "No secrets/tokens in outputs."
            ],
            escalation: "Repeated hygiene violations, Missing logs / fake deliverables, External publish risk",
            metrics: [
                "Red flags caught early",
                "Repeat-failure reduction over time",
                "Protocol drift count trend"
            ]
        },
        stats: {
            todayEventCount: 85,
            realEventCount: 53,
            lastActivityAt: "2026-02-20T10:00:58.737395+00:00",
            hasRecentPulse: true
        },
        rpgData: {
            level: 1,
            rpgClass: "Oracle",
            stats: { VRL: 10, SPD: 99, RCH: 5, TRU: 25, WIS: 5, CRE: 15 },
            relevantStats: ["WIS", "TRU", "SPD", "RCH"],
            statusLine: "STANDBY - Awaiting orders..."
        }
    }
];
