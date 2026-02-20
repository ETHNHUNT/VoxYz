import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  console.log('telemetry', body);
  return NextResponse.json({ ok: true });
}
