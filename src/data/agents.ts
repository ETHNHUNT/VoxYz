export type AgentStatus = 'idle' | 'working';

export interface Agent {
  id: string;
  name: string;
  avatarUrl: string;
  status: AgentStatus;
  events: number;
  active?: boolean;
  crowned?: boolean;
}

// updated to include full roster; images are served from /agents in public/
export const agents: Agent[] = [
  {
    id: 'minion',
    name: 'Minion',
    avatarUrl: '/agents/minion.webp',
    status: 'idle',
    events: 40,
  },
  {
    id: 'sage',
    name: 'Sage',
    avatarUrl: '/agents/sage.webp',
    status: 'idle',
    events: 48,
  },
  {
    id: 'scout',
    name: 'Scout',
    avatarUrl: '/agents/scout.webp',
    status: 'working',
    events: 31,
    active: true,
  },
  {
    id: 'quill',
    name: 'Quill',
    avatarUrl: '/agents/quill.webp',
    status: 'idle',
    events: 35,
  },
  {
    id: 'xalt',
    name: 'Xalt',
    avatarUrl: '/agents/xalt.webp',
    status: 'idle',
    events: 39,
  },
  {
    id: 'observer',
    name: 'Company Observer',
    avatarUrl: '/agents/observer-optimised.webp',
    status: 'idle',
    events: 95,
    crowned: true,
  },
];
