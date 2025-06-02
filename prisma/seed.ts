import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.book.createMany({
    data: [
      {
        title: "1984",
        author: "George Orwell",
        desc: "A dystopian novel set in a totalitarian society under constant surveillance.",
        image: "/images/1984.jpg",
        available: true
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        desc: "A critique of the American Dream set in the Roaring Twenties.",
        image: "/images/gatsby.jpg",
        available: true
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        desc: "A deep look into racial injustice in the Deep South.",
        image: "/images/mockingbird.jpg",
        available: false
      },
      {
        title: "Brave New World",
        author: "Aldous Huxley",
        desc: "A futuristic world driven by technology, pleasure, and control.",
        image: "/images/brave.jpg",
        available: true
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        desc: "A teenager’s cynical view of the adult world.",
        image: "/images/catcher.jpg",
        available: true
      }
    ]
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
