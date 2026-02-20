import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  // return base64 payload from data file
  try {
    const filePath = path.resolve(process.cwd(), 'src/data/agentFeed.txt');
    const feed = fs.readFileSync(filePath, 'utf8');
    return NextResponse.json({ ok: true, feed });
  } catch (err) {
    console.error('agent feed read error', err);
    return NextResponse.json({ ok: true, feed: '' });
  }
}
