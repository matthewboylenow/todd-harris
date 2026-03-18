'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { COMPANY, NAV_ITEMS } from '@/lib/constants';
import { Menu, Phone } from 'lucide-react';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="lg:hidden text-white p-2" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="right" className="w-full bg-navy border-navy-light p-8">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="mt-12 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-2xl font-serif text-white hover:text-copper transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-base text-concrete hover:text-copper transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-12 border-t border-white/10 pt-8">
            <a
              href={COMPANY.phone.mainTel}
              className="flex items-center gap-3 text-copper text-xl"
            >
              <Phone className="h-5 w-5" />
              {COMPANY.phone.main}
            </a>
            <p className="mt-4 text-sm text-concrete">{COMPANY.address.full}</p>
          </div>
        </SheetContent>
      </Sheet>

      {/* Sticky mobile call button */}
      <a
        href={COMPANY.phone.mainTel}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-copper text-white shadow-lg lg:hidden hover:bg-copper-dark transition-colors"
        aria-label="Call Todd Harris Company"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
}
