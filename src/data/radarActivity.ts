import { RadarActivityEvent } from '../types/api';

// minimal example events
export const radarActivity: RadarActivityEvent[] = [
  {
    id: 'example1',
    type: 'hotspot',
    created_at: new Date().toISOString(),
  },
];
