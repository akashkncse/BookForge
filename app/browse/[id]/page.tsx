import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

export default async function BookDetailsPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  
  const book = await prisma.book.findUnique({
    where: { id },
  });
  
  if (!book) return notFound();
  
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p className="text-gray-600 mb-2">{book.author}</p>
      <img src={book.image} alt={book.title} className="w-64 rounded mb-4" />
      <p className="text-lg">{book.desc}</p>
      <p className="mt-4">
        <strong>Status:</strong> {book.available ? 'Available' : 'Unavailable'}
      </p>
    </div>
  );
}