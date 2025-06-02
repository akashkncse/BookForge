import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Book Rental',
  description: 'Hackathon project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="sunset">
      <body className="min-h-screen bg-base-200 text-base-content">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
