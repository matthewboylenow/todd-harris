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
  title: 'Pool Service in Edison, NJ | Todd Harris Company | Since 1975',
  description: 'Pool service, construction, chemicals, and supplies in Edison, NJ. Located at 2 Sutton Place. Family-operated since 1975. Call 732-287-4443.',
};

export default function EdisonNJPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas / Edison, NJ"
        title="Pool services in Edison, NJ."
        subtitle="Our headquarters and our team are right here in Edison. We&apos;ve been part of this community for 50 years."
        image={IMAGES.edison}
        imageAlt="Residential pool in Edison, New Jersey"
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Your local pool company</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Todd Harris Company has been based in Edison, New Jersey since 1975. Our headquarters at {COMPANY.address.street} is where our fleet launches every morning and where our team plans every job. Edison isn&apos;t just a service area for us. It&apos;s home.
            </p>
            <p>
              When you call us from Edison, you&apos;re calling the company down the road. Our technicians know the neighborhoods, the soil conditions, the local codes, and the quickest routes to your backyard.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <CopperLine className="mb-6" />
        <h2>What we offer Edison pool owners</h2>
        <div className="mt-10 space-y-6 max-w-3xl">
          <div>
            <h3 className="text-lg">Service and repair</h3>
            <p className="mt-1 text-gray-medium">Filters, pumps, heaters, automation systems, leak detection, safety covers, and full equipment overhauls. If it&apos;s part of your pool, we service it.</p>
          </div>
          <div>
            <h3 className="text-lg">Seasonal openings and closings</h3>
            <p className="mt-1 text-gray-medium">We handle the full seasonal transition so your pool is ready when you are and properly winterized when the season ends.</p>
          </div>
          <div>
            <h3 className="text-lg">Chemical supply and delivery</h3>
            <p className="mt-1 text-gray-medium">Residential and commercial chemical supply. Retail chemicals are available through our sister operation, the <a href={COMPANY.storeWebsite} target="_blank" rel="noopener noreferrer" className="text-copper hover:text-copper-dark">Spa &amp; Pool Store</a>.</p>
          </div>
          <div>
            <h3 className="text-lg">Construction and renovation</h3>
            <p className="mt-1 text-gray-medium">New pool construction, structural repairs, resurfacing, coping, tile, plaster, and deck work. Residential and commercial.</p>
          </div>
          <div>
            <h3 className="text-lg">Spas, saunas, and steam rooms</h3>
            <p className="mt-1 text-gray-medium">Custom design, installation, and service for saunas and steam rooms. Panel-built, custom-built, outdoor, and infrared options.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>About Edison</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Edison is home to more than 100,000 residents, making it one of the largest townships in New Jersey. The community includes neighborhoods like North Edison, Menlo Park, Oak Tree, and the area surrounding Raritan Center. With a mix of established residential neighborhoods and newer developments, there are pools all over this township, and we&apos;ve worked on a lot of them.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2 className="text-white">Talk to your neighbors&apos; pool company</h2>
          <p className="mt-4 text-concrete/80">
            We&apos;re right here in Edison. If you need pool service, chemicals, construction, or just want an honest evaluation, give us a call.
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
