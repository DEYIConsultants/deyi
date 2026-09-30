'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [{ href: '/expertise', label: 'Services' }, { href: '/about', label: 'About Us' }, { href: '/procedure', label: 'Our Process' }, { href: '/contact', label: 'Contact' }];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [pathname]);

  return <header className="site-header" onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); } }}>
    <div className="site-container header-inner"><Link href="/" className="brand" aria-label="DEYI Consultants home" onClick={() => setOpen(false)}><Image src="/images/logo.png" alt="DEYI Consultants" width={220} height={58} priority /></Link>
      <button className="menu-toggle" ref={toggleRef} onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation">{open ? <X /> : <Menu />}</button>
      <nav id="main-navigation" aria-label="Main navigation" className={`main-navigation ${open ? 'is-open' : ''}`}>{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link href="/appointment" className="nav-cta" aria-current={pathname === '/appointment' ? 'page' : undefined} onClick={() => setOpen(false)}>Free Consultation <ArrowUpRight size={16} aria-hidden="true" /></Link></nav>
    </div>
  </header>;
}
