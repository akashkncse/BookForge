import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;  // WAIT for params to resolve

  const book = await prisma.book.findUnique({
    where: { id: resolvedParams.id }, // NO Number cast — it’s a string ID
  });

  if (!book) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json(book);
}
