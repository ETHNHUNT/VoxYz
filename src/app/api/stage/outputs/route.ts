import { NextResponse } from 'next/server';
import { StageOutputsResponse } from '../../../../types/api';
import { stageOutputs } from '../../../../data/stageOutputs';

export async function GET() {
  return NextResponse.json(stageOutputs as StageOutputsResponse);
}
