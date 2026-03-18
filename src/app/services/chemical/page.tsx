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
  title: 'Pool Chemical Supply & Delivery NJ | Chemical Division',
  description: 'Pool chemical supply and tank truck delivery in NJ. Liquid chlorine, granular chlorines, bromine, pH products, ice melt. Commercial and residential. Call 732-287-4443.',
};

const supplies = [
  { title: 'Liquid chlorine', description: 'Available by the carboy for residential customers or by tank truck for commercial facilities. Our liquid chlorine is the strongest grade allowed by law. No diluted product.' },
  { title: 'Granular chlorines', description: 'Calcium hypochlorite and dichlor products for shock treatments and regular dosing. Multiple strengths available depending on your needs.' },
  { title: 'Chlorine and bromine tablets', description: 'Standard 3-inch tablets, 1-inch tablets for feeders and floaters, and bromine tablets for spas and hot tubs.' },
  { title: 'Chlorine generators', description: 'Salt chlorine generators produce chlorine from dissolved salt in your pool water. We sell, install, and service salt systems.' },
  { title: 'Water analyzers and controllers', description: 'Digital testing equipment and automated chemical controllers that monitor and adjust water chemistry in real time. Essential for commercial facilities, useful for homeowners who want hands-off maintenance.' },
  { title: 'pH products, clarifiers, and cleaners', description: 'pH increaser, pH decreaser, alkalinity products, calcium hardness adjusters, clarifiers, algaecides, stain removers, and tile cleaners. Everything you need to keep your water balanced and clear.' },
  { title: 'Ice melting products', description: 'Rock salt, calcium chloride, magnesium chloride, and blended ice melt products. A seasonal offering that keeps our commercial and residential customers covered through winter.' },
];

export default function ChemicalPage() {
  return (
    <>
      <PageHero
        eyebrow="Services / Chemical Division"
        title="Chemicals supplied and delivered."
        subtitle="From a bottle of clarifier off our shelf to a tank truck of liquid chlorine at your facility. Whatever the scale, we&apos;ve got it in stock."
        image={IMAGES.serviceChemical}
        imageAlt="Crystal clear pool water"
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Overview</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              The Chemical Division handles pool and spa chemical supply at every scale. Residential customers can pick up what they need, and commercial clients schedule recurring deliveries by carboy or tank truck. Either way, you&apos;re getting the right products at the right concentration, from people who understand water chemistry.
            </p>
            <p>
              We don&apos;t sell watered-down product and we don&apos;t push chemicals you don&apos;t need. We test water and recommend exactly what your pool requires. That&apos;s how it works.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <CopperLine className="mb-6" />
        <h2>What we supply</h2>
        <div className="mt-10 space-y-8 max-w-3xl">
          {supplies.map((item) => (
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
          <h2>Commercial delivery</h2>
          <p className="mt-4 text-gray-medium">
            If you manage a commercial facility (hotel pool, apartment complex, municipal aquatic center, fitness club), we can set up scheduled chemical delivery on a recurring basis. Tank truck and carboy delivery available throughout the tri-state area.
          </p>
          <p className="mt-4 text-gray-medium">
            Contact us to set up a delivery schedule that fits your facility&apos;s needs.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Retail chemicals</h2>
          <p className="mt-4 text-gray-medium">
            For walk-in chemical purchases, free water testing, and pool supplies, visit our sister operation the{' '}
            <a href="https://njpoolstore.com" target="_blank" rel="noopener noreferrer" className="text-copper underline underline-offset-2 hover:text-copper-dark">
              Spa &amp; Pool Store
            </a>{' '}
            in Edison.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2 className="text-white">Get started</h2>
          <p className="mt-4 text-concrete/80">
            Call us to discuss your chemical supply needs or to set up a delivery schedule.
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
