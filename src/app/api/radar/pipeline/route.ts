import { NextResponse } from 'next/server';
import { radarPipelineStats } from '../../../../data/radarPipelineStats';

export async function GET() {
  return NextResponse.json(radarPipelineStats);
}
