// app/api/submit/route.ts
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, mobile, issue } = await request.json();

    // టేబుల్ లేకపోతే క్రియేట్ చేస్తుంది (First time run కోసం)
    await sql`CREATE TABLE IF NOT EXISTS feedback (
        id SERIAL PRIMARY KEY, 
        name VARCHAR(255), 
        mobile VARCHAR(20), 
        issue TEXT, 
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;

    // డేటా ఇన్సర్ట్ చేయడం
    await sql`INSERT INTO feedback (name, mobile, issue) VALUES (${name}, ${mobile}, ${issue});`;

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}