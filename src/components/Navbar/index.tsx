import Link from 'next/link';

import { NavLink } from './NavLink';

export function Navbar() {
  return (
    <nav className="h-[60px] w-full">
      <div className="container flex h-full items-center justify-between">
        <Link href="/" className="text-xl font-extrabold text-pink-600">
          😎AIRTIP
        </Link>
        <div className="flex items-center space-x-3">
          <NavLink href="/" title="Home" exact />
          <NavLink href="/topics" title="Topics" />
        </div>
      </div>
    </nav>
  );
}
