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
  title: 'ADA Pool Lifts & Spa Access NJ',
  description: 'ADA-compliant pool and spa lifts for commercial and residential properties in NJ. Aqua Creek products. Installation and service. Call 732-287-4443.',
};

const offerings = [
  { title: 'Pool lifts', description: 'Battery-powered and water-powered lifts for in-ground pools. Wall-mounted, deck-mounted, and portable options. Weight capacities to accommodate various needs.' },
  { title: 'Spa lifts', description: 'Lifts designed specifically for raised spas and hot tubs. Allows safe entry and exit for individuals with mobility limitations.' },
  { title: 'Installation', description: 'We handle mounting, anchoring, and setup. For deck-mounted lifts, we ensure proper anchoring to meet ADA and safety requirements.' },
  { title: 'Service and maintenance', description: 'Battery replacement, hydraulic service, operational checks, and repairs. We keep your lift in working condition so it\u2019s ready when it\u2019s needed.' },
];

export default function PoolLiftsPage() {
  return (
    <>
      <PageHero
        eyebrow="Services / Pool Lifts"
        title="Pool and spa access for everyone."
        subtitle="ADA-compliant pool lifts and spa lifts for commercial facilities and residential properties. We sell, install, and service Aqua Creek products."
        image={IMAGES.servicePoolLifts}
        imageAlt="Accessible pool with ADA-compliant lift"
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Overview</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Pool access should be available to everyone. We carry and install a range of ADA-compliant pool and spa lifts from Aqua Creek Products, one of the leading manufacturers in the industry.
            </p>
            <p>
              Whether you&apos;re a commercial facility meeting ADA requirements or a homeowner who needs accessible pool entry, we can help you find the right lift and get it installed properly.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <CopperLine className="mb-6" />
        <h2>What we offer</h2>
        <div className="mt-10 space-y-8 max-w-3xl">
          {offerings.map((item) => (
            <div key={item.title}>
              <h3 className="text-lg">{item.title}</h3>
              <p className="mt-1 text-gray-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>ADA compliance</h2>
          <p className="mt-4 text-gray-medium">
            Commercial pools and spas are required to provide accessible means of entry under the Americans with Disabilities Act. The specific requirements depend on the size and type of your facility. We can help you determine what you need and get it installed correctly.
          </p>
          <p className="mt-4 text-gray-medium">
            If you manage a hotel, apartment complex, gym, municipal pool, or any commercial aquatic facility, ADA-compliant pool access isn&apos;t optional. Let us help you get it sorted.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2 className="text-white">Get started</h2>
          <p className="mt-4 text-concrete/80">
            Call us to discuss your pool or spa accessibility needs. We&apos;ll help you find the right solution.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white font-sans">
              <a href={COMPANY.phone.mainTel}>
                <Phone className="mr-2 h-4 w-4" />
                Call {COMPANY.phone.main}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-concrete/30 text-concrete hover:bg-white/10 hover:text-white font-sans">
              <Link href="/contact#service-request">Request Service</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
