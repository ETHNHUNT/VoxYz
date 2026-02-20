import { StageOutputsResponse } from '../types/api';

export const stageOutputs: StageOutputsResponse = {
  ok: true,
  outputs: {
    latestPublishedInsight: {
      id: '2544fc2d-30b4-40b5-93bb-54ed1ba361f3',
      title: '24 Hours of Autonomous Operations: 5 Critical Lessons from VoxYZ',
      slug: '24h-autonomous-voxyz-lessons',
      status: 'published',
      created_at: '2026-02-20T01:15:30.36443+00:00',
      published_at: '2026-02-20T01:16:33.551+00:00',
      meta: {
        model: 'anthropic/claude-sonnet-4-20250514',
        source: 'api',
        worker_id: 'content-clawdbot',
        proposal_id: '7a481aaf-899c-4336-b937-0ebe4cb28f77',
      },
      tags: [
        'operations',
        'monitoring',
        'reliability',
        'autonomous-systems',
        'debugging',
      ],
    },
    todaysPipelineInsight: null,
    counts: {
      insightsPublishedToday: 1,
      radarHotspotsToday: 0,
      tweetDraftsToday: 1,
    },
  },
};
