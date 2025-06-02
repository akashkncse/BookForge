import BookCard from '@/components/BookCard';
import { prisma } from '@/lib/prisma';
import { Book } from '@prisma/client';

export default async function BookListPage() {
    const books = await prisma.book.findMany();
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book: Book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
}