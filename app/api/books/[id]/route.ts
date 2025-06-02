import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const book = await prisma.book.findUnique({
    where: { id: params.id },
  });

  if (!book) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json(book);
}
