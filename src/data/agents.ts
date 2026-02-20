export type AgentStatus = 'idle' | 'working';

export interface Agent {
  id: string;
  name: string;
  avatarBase64: string;
  status: AgentStatus;
  events: number;
  active?: boolean;
}

// sample from homepage HTML; trimmed for brevity
export const agents: Agent[] = [
  {
    id: 'minion',
    name: 'Minion',
    avatarBase64: '/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCABwAHADACIAAREBAhEB... (truncated)',
    status: 'idle',
    events: 40,
  },
  {
    id: 'sage',
    name: 'Sage',
    avatarBase64: '/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCABUAFQDACIAAREBAhEB... (truncated)',
    status: 'idle',
    events: 48,
  },
  {
    id: 'scout',
    name: 'Scout',
    avatarBase64: '/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCABwAHADACIAAREBAhEB... (truncated)',
    status: 'working',
    events: 31,
    active: true,
  },
  // more agents could be added later
];
