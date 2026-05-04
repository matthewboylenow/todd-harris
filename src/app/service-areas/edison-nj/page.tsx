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
  title: 'Commercial Pool Service in Edison, NJ | Todd Harris Company | Since 1975',
  description: 'Commercial pool renovation, service, chemicals, and supplies in Edison, NJ. Located at 2 Sutton Place. Family-operated since 1975. Call 732-287-4443.',
};

export default function EdisonNJPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas / Edison, NJ"
        title="Commercial pool services in Edison, NJ."
        subtitle="Our headquarters and our team are right here in Edison. We&apos;ve been part of this community for 50 years."
        image={IMAGES.edison}
        imageAlt="Commercial pool facility"
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Your local commercial pool company</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Todd Harris Company has been based in Edison, New Jersey since 1975. Our headquarters at {COMPANY.address.street} is where our fleet launches every morning and where our team plans every job. Edison isn&apos;t just a service area for us. It&apos;s home.
            </p>
            <p>
              We serve commercial and institutional aquatic facilities throughout New Jersey and the five boroughs of New York City. Our technicians know the local codes, the regulations, and the fastest routes to your facility.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <CopperLine className="mb-6" />
        <h2>What we offer commercial clients</h2>
        <div className="mt-10 space-y-6 max-w-3xl">
          <div>
            <h3 className="text-lg">Service and repair</h3>
            <p className="mt-1 text-gray-medium">Filters, pumps, heaters, automation systems, leak detection, safety covers, waterproofing, and full equipment overhauls for commercial facilities.</p>
          </div>
          <div>
            <h3 className="text-lg">CPO servicing</h3>
            <p className="mt-1 text-gray-medium">Our certified pool operators provide weekly or monthly preventative maintenance for commercial pools and spas.</p>
          </div>
          <div>
            <h3 className="text-lg">Chemical supply and delivery</h3>
            <p className="mt-1 text-gray-medium">Commercial chemical supply by tank truck and carboy. Retail chemicals are available through our sister operation, the <a href={COMPANY.storeWebsite} target="_blank" rel="noopener noreferrer" className="text-copper hover:text-copper-dark">Spa &amp; Pool Store</a>.</p>
          </div>
          <div>
            <h3 className="text-lg">Renovation</h3>
            <p className="mt-1 text-gray-medium">Structural repairs, resurfacing, coping, tile, plaster, steel pool renovation, and deck work for commercial and institutional facilities.</p>
          </div>
          <div>
            <h3 className="text-lg">Saunas and steam rooms</h3>
            <p className="mt-1 text-gray-medium">Custom design, installation, and service for saunas and steam rooms in commercial facilities. Panel-built, custom-built, and infrared options.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2 className="text-white">Get in touch</h2>
          <p className="mt-4 text-concrete/80">
            We&apos;re right here in Edison. If you need commercial pool service, chemicals, renovation, or just want an honest evaluation, give us a call.
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
