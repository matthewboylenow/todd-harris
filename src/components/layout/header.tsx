'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { COMPANY, NAV_ITEMS } from '@/lib/constants';
import { MobileNav } from './mobile-nav';
import { Phone, ChevronDown } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur-sm shadow-lg py-3' : 'bg-navy py-4'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <Image
            src="/todd-harris-logo.png"
            alt="Todd Harris Company"
            width={160}
            height={48}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm text-concrete hover:text-copper transition-colors"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>

              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-0 w-56 rounded-md bg-navy-light border border-white/10 py-2 shadow-xl">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-concrete hover:text-copper hover:bg-white/5 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Phone + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={COMPANY.phone.mainTel}
            className="hidden md:flex items-center gap-2 text-sm text-copper hover:text-copper-light transition-colors"
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phone.main}
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
