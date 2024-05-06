'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLink({
  title,
  href,
  exact = false,
}: {
  title: string;
  href: string;
  exact?: boolean;
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  return (
    <Link
      className={`text-sm font-medium transition-colors hover:text-gray-800 ${isActive ? 'text-gray-800' : 'text-gray-400'}`}
      href={href}
    >
      {title}
    </Link>
  );
}
