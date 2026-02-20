import { NextResponse } from 'next/server';

export async function GET() {
  // return a static count
  return NextResponse.json({ count: 5 });
}
