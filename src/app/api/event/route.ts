import { NextResponse } from 'next/server';
import { EventPost } from '../../../types/api';

export async function POST(request: Request) {
  const body: EventPost = await request.json();
  console.log('event received', body);
  return NextResponse.text('ok');
}
