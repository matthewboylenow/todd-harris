import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/shared/page-hero';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Pool Care Resources & Tips | Todd Harris Company | Edison NJ',
  description: 'Pool care guides and tips from Todd Harris Company. Opening timing, filter replacement, home buying tips, salt vs chlorine. Expert advice since 1975.',
};

const resources = [
  {
    title: 'When to open your pool in New Jersey',
    href: '/resources/when-to-open-your-pool-nj',
    excerpt: 'Timing your pool opening matters more than most people think. Open too early and you waste chemicals. Open too late and you&apos;re fighting algae.',
    image: IMAGES.resourcePoolOpen,
    imageAlt: 'Pool being opened in spring',
  },
  {
    title: 'Signs your pool filter needs replacing',
    href: '/resources/pool-filter-replacement-signs',
    excerpt: 'If your filter pressure is climbing or your water clarity isn&apos;t what it used to be, it might be time for a replacement rather than another cleaning.',
    image: IMAGES.resourceFilter,
    imageAlt: 'Pool filtration equipment',
  },
  {
    title: 'What to look for when buying a house with a pool',
    href: '/resources/buying-house-with-pool',
    excerpt: 'A pool can be a selling point or a money pit. Before you close, here&apos;s what to inspect and what questions to ask about the pool equipment and structure.',
    image: IMAGES.resourceBuying,
    imageAlt: 'House with backyard pool',
  },
  {
    title: 'Salt vs. chlorine pools: what NJ pool owners should know',
    href: '/resources/salt-vs-chlorine-pools-nj',
    excerpt: 'Salt systems and traditional chlorine each have real tradeoffs. Here&apos;s an honest breakdown of cost, maintenance, and what works best in New Jersey.',
    image: IMAGES.resourceSaltChlorine,
    imageAlt: 'Pool water chemistry',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Pool care resources"
        subtitle="Practical information from 50 years of pool experience. No fluff, just what you need to know."
      />

      <SectionWrapper>
        <div className="grid gap-8 md:grid-cols-2">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="group block rounded-lg border border-concrete-dark bg-white overflow-hidden transition-shadow hover:shadow-md"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={resource.image}
                  alt={resource.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <div className="h-[2px] w-12 bg-copper mb-4" />
                <h3 className="text-lg group-hover:text-copper transition-colors">{resource.title}</h3>
                <p className="mt-2 text-base text-gray-medium leading-relaxed">{resource.excerpt}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-copper">
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
