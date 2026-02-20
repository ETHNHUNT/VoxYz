import { NextResponse } from 'next/server';
import { AuthMeResponse } from '../../../../types/api';

export async function GET() {
  // stub: return null user
  const res: AuthMeResponse = {
    ok: true,
    user: null,
    isAdmin: false,
  };
  return NextResponse.json(res);
}
