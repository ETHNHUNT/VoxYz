import { NextResponse } from 'next/server';
import { RadarActivityResponse } from '../../../../types/api';
import { radarActivity } from '../../../../data/radarActivity';

export async function GET() {
  const res: RadarActivityResponse = {
    ok: true,
    events: radarActivity,
  };
  return NextResponse.json(res);
}
