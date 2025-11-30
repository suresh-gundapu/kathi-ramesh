import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // డేటా ఎప్పటికప్పుడు కొత్తది రావాలి

export async function GET() {
  try {
    // లేటెస్ట్ డేటా ముందు వచ్చేలా Query
    const result = await sql`SELECT * FROM feedback ORDER BY created_at DESC`;
    return NextResponse.json({ data: result.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}