export interface AuthMeResponse {
  ok: boolean;
  user: null | { id: string; email?: string; avatarUrl?: string };
  isAdmin: boolean;
}

export interface RadarActivityEvent {
  id: string;
  type: string;
  created_at: string;
  // add other properties as needed
}

export interface RadarActivityResponse {
  ok: boolean;
  events: RadarActivityEvent[];
}

export interface StageOutputsResponse {
  ok: true;
  outputs: {
    latestPublishedInsight: {
      id: string;
      title: string;
      slug: string;
      status: string;
      created_at: string;
      published_at: string;
      meta: Record<string, unknown>;
      tags: string[];
    } | null;
    todaysPipelineInsight: unknown | null;
    counts: {
      insightsPublishedToday: number;
      radarHotspotsToday: number;
      tweetDraftsToday: number;
    };
  };
}

export interface StageEventsResponse {
  ok: true;
  events: unknown[];
  meta: {
    delaySeconds: number;
    cutoff: string;
    hasMore: boolean;
  };
}

export interface GenericOk { ok: true; }

export interface AgentFeedResponse {
  ok: true;
  feed: string; // base64
}

export interface EventPost {
  n: string;
  [key: string]: unknown;
}

export interface InsightSummary {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  tags: string[];
}

export interface InsightDetail extends InsightSummary {
  body: string;
}

export interface InsightsResponse {
  ok: true;
  insights: InsightSummary[];
}

export interface InsightResponse {
  ok: true;
  insight: InsightDetail | null;
}

export type RadarIdeaStatus = 'watching' | 'validating' | 'building' | 'shipped';

export interface RadarIdea {
  id: string;
  title: string;
  status: RadarIdeaStatus;
  signals: number;
  votes: number;
  summary: string;
  updated_at: string;
}

export interface RadarPipelineStats {
  totalIdeas: number;
  watching: number;
  validating: number;
  building: number;
  shipped: number;
}
