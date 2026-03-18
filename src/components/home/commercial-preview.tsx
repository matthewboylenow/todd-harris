'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Button } from '@/components/ui/button';
import { CopperLine } from '@/components/shared/copper-line';
import { IMAGES } from '@/lib/images';

export function CommercialPreview() {
  return (
    <section className="bg-navy-light py-16 md:py-24 px-6">
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
        <ScrollReveal>
          <CopperLine className="mb-4" />
          <h2 className="text-white">Pool services at the commercial scale</h2>
          <p className="mt-4 text-concrete/80">
            Todd Harris has been building and servicing commercial pools since 1975. Hotels, apartment complexes, gyms, municipal facilities, and community centers. Our fleet and crew handle institutional-scale work, from new construction to chemical delivery by tank truck.
          </p>
          <p className="mt-4 text-concrete/80">
            If you manage a commercial aquatic facility, we&apos;d like to talk.
          </p>
          <Button asChild size="lg" className="mt-8 bg-copper hover:bg-copper-dark text-white font-sans">
            <Link href="/commercial">Learn About Commercial Services</Link>
          </Button>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={IMAGES.commercial}
              alt="Commercial hotel pool facility"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-navy/10" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
