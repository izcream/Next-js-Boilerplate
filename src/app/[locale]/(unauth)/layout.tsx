import { Navbar } from '@/components/Navbar';

export const dynamic = 'force-dynamic';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-auto w-full">
      <Navbar />
      <main className="container my-10">{children}</main>
    </div>
  );
}
