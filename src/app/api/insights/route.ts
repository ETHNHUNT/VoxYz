import { NextResponse } from 'next/server';
import { InsightsResponse } from '../../../../types/api';
import { insightSummaries } from '../../../../data/insights';

export async function GET() {
  const res: InsightsResponse = {
    ok: true,
    insights: insightSummaries,
  };
  return NextResponse.json(res);
}
