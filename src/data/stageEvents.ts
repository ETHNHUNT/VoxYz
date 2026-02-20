import { StageEventsResponse } from '../types/api';

export const stageEvents: StageEventsResponse = {
  ok: true,
  events: [],
  meta: {
    delaySeconds: 45,
    cutoff: new Date().toISOString(),
    hasMore: false,
  },
};
