import BookCard from '@/components/BookCard';
import books from '@/data/books.json';

export default function BookListPage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grids-cols-4 gap-4">
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    )
}