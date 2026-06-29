import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const contratos = await db.contrato.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(contratos);
  } catch {
    return NextResponse.json({ error: 'Error al obtener contratos' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const contrato = await db.contrato.create({ data: body });
    return NextResponse.json(contrato, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Error al crear contrato' }, { status: 500 });
  }
}
