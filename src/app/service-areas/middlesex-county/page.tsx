import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/shared/page-hero';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { CopperLine } from '@/components/shared/copper-line';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/lib/constants';
import { Phone } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Pool Service Middlesex County NJ | Todd Harris Company',
  description: 'Pool service, construction, and chemical supply throughout Middlesex County, NJ. Based in Edison. Family-operated since 1975. Call 732-287-4443.',
};

const communities = [
  'Edison',
  'Woodbridge',
  'Piscataway',
  'New Brunswick',
  'South Brunswick',
  'Old Bridge',
  'East Brunswick',
  'Perth Amboy',
  'Sayreville',
  'South Amboy',
  'Metuchen',
  'South Plainfield',
  'Highland Park',
  'Middlesex Borough',
  'North Brunswick',
  'Monroe Township',
  'Carteret',
];

export default function MiddlesexCountyPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas / Middlesex County"
        title="Pool services across Middlesex County."
        subtitle="Based in Edison, we service pools throughout Middlesex County. From Woodbridge to South Brunswick, our fleet covers the county."
        image={IMAGES.middlesex}
        imageAlt="Pool serviced in Middlesex County"
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Overview</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Todd Harris Company has been headquartered in Middlesex County since 1975. Our Edison location puts us in the center of the county, which means shorter drive times and faster response for every community we serve. Over 50 years, we&apos;ve built, serviced, and supplied pools in nearly every town in the county.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <CopperLine className="mb-6" />
        <h2>Communities we serve</h2>
        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-3 lg:grid-cols-4 max-w-3xl">
          {communities.map((town) => (
            <p key={town} className="text-gray-medium">{town}</p>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <CopperLine className="mb-6" />
        <h2>What we offer</h2>
        <div className="mt-10 space-y-6 max-w-3xl">
          <div>
            <h3 className="text-lg">Residential pool service</h3>
            <p className="mt-1 text-gray-medium">Equipment repair, seasonal openings and closings, leak detection, safety covers, automation, and full system overhauls for homeowners across Middlesex County.</p>
          </div>
          <div>
            <h3 className="text-lg">Commercial and institutional</h3>
            <p className="mt-1 text-gray-medium">Hotels, apartment complexes, municipal recreation centers, gyms, and swim clubs. We handle construction, renovation, ongoing service, and chemical supply at the commercial scale.</p>
          </div>
          <div>
            <h3 className="text-lg">Chemical supply and delivery</h3>
            <p className="mt-1 text-gray-medium">Tank truck and carboy delivery for commercial clients. Retail chemicals available through our sister operation, the <a href={COMPANY.storeWebsite} target="_blank" rel="noopener noreferrer" className="text-copper hover:text-copper-dark">Spa &amp; Pool Store</a>.</p>
          </div>
          <div>
            <h3 className="text-lg">Construction and renovation</h3>
            <p className="mt-1 text-gray-medium">New pool builds, structural repairs, resurfacing, hydroblasting, coping, tile, plaster, fiberglass, and deck work. Residential and commercial projects throughout the county.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2 className="text-white">Get in touch</h2>
          <p className="mt-4 text-concrete/80">
            Whether you&apos;re in Woodbridge, Old Bridge, Piscataway, or anywhere else in Middlesex County, we&apos;re just a phone call away.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white font-sans">
              <a href={COMPANY.phone.mainTel}>
                <Phone className="mr-2 h-4 w-4" />
                Call {COMPANY.phone.main}
              </a>
            </Button>
            <Button asChild size="lg" className="border border-concrete/30 bg-transparent text-concrete hover:bg-white/10 hover:text-white font-sans">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
