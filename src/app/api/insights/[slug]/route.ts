import { NextResponse } from 'next/server';
import { InsightResponse } from '../../../../types/api';
import { getInsightBySlug } from '../../../../data/insights';

interface Params {
  params: { slug: string };
}

export async function GET(_request: Request, { params }: Params) {
  const insight = getInsightBySlug(params.slug);
  const res: InsightResponse = {
    ok: true,
    insight,
  };
  return NextResponse.json(res);
}
