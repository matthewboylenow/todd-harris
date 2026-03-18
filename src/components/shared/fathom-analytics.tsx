'use client';

import { useEffect } from 'react';
import * as Fathom from 'fathom-client';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function FathomTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const siteId = process.env.NEXT_PUBLIC_FATHOM_SITE_ID;
    if (!siteId) return;

    Fathom.load(siteId, {
      includedDomains: ['toddharris.com', 'www.toddharris.com'],
    });
  }, []);

  useEffect(() => {
    Fathom.trackPageview();
  }, [pathname, searchParams]);

  return null;
}

export function FathomAnalytics() {
  return (
    <Suspense fallback={null}>
      <FathomTracker />
    </Suspense>
  );
}
