import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-auto w-full">
      <nav className="h-[60px] w-full">
        <div className="flex h-full items-center justify-center">
          <Link href="/" className="text-xl font-extrabold text-pink-600">
            AIRTIP
          </Link>
        </div>
      </nav>
      <main className="px-4 lg:px-16">{children}</main>
    </div>
  );
}
