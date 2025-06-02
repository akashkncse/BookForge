'use client';

import Image from 'next/image';
import { Book } from '@/types/book';
import Rating from '@/components/Rating';

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-200">
      <figure className="px-4 pt-4">
        <Image
          src={book.image}
          width={160}
          height={240}
          alt={`Cover of ${book.title}`}
          className="rounded-lg object-cover"
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title text-lg font-semibold">{book.title}</h2>
        <p className="text-sm text-gray-500">{book.desc}</p>
        <Rating val={3} />
        <div className="card-actions pt-2">
          <button className="btn btn-outline btn-sm">Learn More</button>
          <button
            className="btn btn-primary btn-sm"
            disabled={!book.available}
          >
            {book.available ? 'Rent' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
}
