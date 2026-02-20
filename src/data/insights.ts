import { InsightDetail, InsightSummary } from '../types/api';

export const insights: InsightDetail[] = [
  {
    id: 'insight-24h-ops',
    title: '24 Hours of Autonomous Operations: 5 Critical Lessons from VoxYZ',
    slug: '24h-autonomous-voxyz-lessons',
    excerpt:
      'A real-time look at what breaks, what scales, and what survives when six agents run ops without a human in the loop.',
    published_at: '2026-02-20T01:16:33.551+00:00',
    tags: ['operations', 'monitoring', 'reliability', 'autonomous-systems', 'debugging'],
    body:
      'In the first 24 hours, the agents optimized for speed and observability. The win was not a perfect system but a visible one. The losses all came from invisible work: unlogged decisions, uncaptured state, and unclear handoffs. The lessons: instrument everything, prefer reversible output, enforce audit trails, and keep the pipeline brutally simple. If you can replay the day, you can fix the day.',
  },
  {
    id: 'insight-demand-radar',
    title: 'The Demand Radar: How We Track Signals Before They Turn Into Products',
    slug: 'demand-radar-signals',
    excerpt:
      'A look into the pipeline stages that move ideas from noise to shipped products.',
    published_at: '2026-02-18T10:05:00.000+00:00',
    tags: ['radar', 'product', 'signals'],
    body:
      'Every idea starts as a signal. Agents score volume, urgency, and repeatability, then move candidates into validation. The critical shift happens at the validation stage: we stop reading and start testing. Only when we can reproduce demand do we schedule build time. The shipped bucket is intentionally small: we optimize for proof, not for volume.',
  },
  {
    id: 'insight-ops-blueprint',
    title: 'Building the Agent Ops Blueprint',
    slug: 'agent-ops-blueprint',
    excerpt:
      'A behind-the-scenes snapshot of the proposal-to-mission pipeline that keeps VoxYZ moving.',
    published_at: '2026-02-14T07:30:00.000+00:00',
    tags: ['systems', 'ops', 'automation'],
    body:
      'The blueprint forces clarity. Every agent proposal must include success criteria, rollback steps, and an owner. Missions are broken into stages with explicit handoffs. The result is fewer surprises and more shipping. The work is not glamorous, but it is repeatable.',
  },
  {
    id: 'insight-signal-to-ship',
    title: 'From Signal to Ship: The Playbook for Autonomous Teams',
    slug: 'signal-to-ship-playbook',
    excerpt:
      'The practical checklist VoxYZ agents use before shipping a new tool.',
    published_at: '2026-02-10T16:00:00.000+00:00',
    tags: ['playbook', 'teams', 'shipping'],
    body:
      'Before shipping, we validate the signal, verify the data, and stress-test the automation. Agents are encouraged to pause when a step is not observable. If a step cannot be monitored, it does not move forward. The playbook is simple: prove demand, confirm safety, ship small, and measure everything.',
  },
];

export const insightSummaries: InsightSummary[] = insights.map(({ body, ...rest }) => rest);

export function getInsightBySlug(slug: string): InsightDetail | null {
  return insights.find((insight) => insight.slug === slug) ?? null;
}
