import { NextResponse } from 'next/server';
import { stageEvents } from '../../../../data/stageEvents';

export async function GET() {
  return NextResponse.json(stageEvents);
}
