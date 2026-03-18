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
  title: 'Sauna & Steam Room Installation NJ',
  description: 'Custom sauna and steam room design, construction, and service in NJ. Residential and commercial. Infrared, outdoor, panel-built, and custom-built rooms. Call 732-287-4443.',
};

const offerings = [
  { title: 'Custom-built rooms', description: 'Designed and built to your specifications. Custom sizing, wood selection, bench layout, heater placement, and ventilation. Residential or commercial.' },
  { title: 'Panel-built rooms', description: 'Pre-manufactured sauna panels assembled on site. A faster, more cost-effective option that still delivers a quality result. Multiple sizes and configurations available.' },
  { title: 'Outdoor saunas', description: 'Freestanding outdoor sauna structures for residential properties. Various styles from traditional barrel saunas to custom outdoor rooms.' },
  { title: 'Infrared heat therapy rooms', description: 'Infrared saunas use radiant heat instead of traditional convection. Lower operating temperatures, different therapeutic benefits. We install and service infrared units and rooms.' },
  { title: 'Steam rooms', description: 'Tile or acrylic steam rooms with commercial or residential steam generators. We handle waterproofing, ventilation, generator installation, and controls.' },
  { title: 'Accessories', description: 'Heaters, controls, lighting, benches, backrests, headrests, thermometers, and buckets. We stock accessories and replacement parts for existing installations.' },
  { title: 'Service and repair', description: 'Heater element replacements, control board repairs, steam generator maintenance, and wood refinishing. If your sauna or steam room isn\u2019t working right, call us.' },
];

export default function SaunaSteamPage() {
  return (
    <>
      <PageHero
        eyebrow="Services / Sauna & Steam Room Division"
        title="Saunas and steam rooms, built and serviced."
        subtitle="Custom-built, panel-built, outdoor, and infrared. Design, construction, repair, and accessories for homes and commercial facilities."
        image={IMAGES.serviceSauna}
        imageAlt="Wooden sauna interior"
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Overview</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Most pool companies don&apos;t offer sauna and steam room work. We do, and we&apos;ve been doing it for decades.
            </p>
            <p>
              Whether you&apos;re adding a sauna to your home, building a steam room for a gym or spa, or servicing an existing installation, our team handles the full scope. Design, construction, equipment, and ongoing maintenance.
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
          <h2>Residential and commercial</h2>
          <p className="mt-4 text-gray-medium">
            We build for homeowners adding a sauna to their basement or backyard, and for commercial clients outfitting gyms, spas, hotels, and wellness centers. The design and engineering requirements differ, and we have experience with both.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2 className="text-white">Get started</h2>
          <p className="mt-4 text-concrete/80">
            Call us to discuss your sauna or steam room project. We&apos;ll help you figure out the right approach for your space.
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
