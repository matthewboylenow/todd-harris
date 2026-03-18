import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/shared/page-hero';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { CopperLine } from '@/components/shared/copper-line';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/lib/constants';
import { Phone, Building2, Truck, Shield, Clock, Droplets, Wrench } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Commercial Pool Services NJ | Hotels, Gyms, Facilities',
  description: 'Commercial pool construction, renovation, service, and chemical delivery in NJ. Hotels, gyms, apartment complexes, municipal facilities. Licensed and insured. Since 1975.',
};

const capabilities = [
  { icon: Building2, title: 'New pool construction', description: "We've built pools for hotels, apartment complexes, community centers, municipal recreation departments, and private clubs. Our construction team handles projects from design through completion with in-house crews." },
  { icon: Wrench, title: 'Renovations and structural work', description: 'Aging commercial pools need structural repair, surface refinishing, equipment upgrades, and code compliance updates. We handle full-scale renovation projects including hydroblasting, plaster, coping, tile, deck work, and equipment overhaul.' },
  { icon: Clock, title: 'Ongoing service and maintenance', description: 'We offer service agreements for commercial facilities. Regular maintenance visits, equipment monitoring, seasonal openings and closings, and emergency service when something goes wrong.' },
  { icon: Droplets, title: 'Chemical automation and supply', description: 'Commercial pools require precise chemical management. We install and maintain automated chemical controllers and feeders. We also supply chemicals by tank truck delivery on a recurring schedule.' },
  { icon: Shield, title: 'ADA compliance', description: 'Pool lifts and accessible entry solutions to meet Americans with Disabilities Act requirements. We sell, install, and service ADA-compliant equipment.' },
  { icon: Truck, title: 'Sauna and steam rooms', description: 'Gyms, hotels, and wellness centers that need sauna or steam room installation, renovation, or service.' },
];

const advantages = [
  { title: 'One vendor for everything', description: "Construction, renovation, equipment service, chemical supply, and ADA compliance. You don't need to coordinate five different contractors. We handle the full scope." },
  { title: 'Licensed and insured', description: "We carry the licensing and insurance that commercial and institutional work requires. We're happy to provide documentation for your procurement team." },
  { title: 'Fleet and crew capacity', description: 'Our crew and fleet are sized for commercial operations. We show up with the people and equipment to get the job done on schedule.' },
  { title: '50 years of experience', description: "We've been doing this longer than most commercial pool companies have existed. That experience shows up in the quality of the work and the efficiency of the service." },
  { title: 'Scheduled chemical delivery', description: "Tank truck and carboy delivery on a schedule that works for your facility. You shouldn't be running out of chlorine because you forgot to reorder." },
];

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial & Institutional"
        title="Pool services at the commercial scale."
        subtitle="Hotels, gyms, apartment complexes, municipal facilities, and community centers. We build, service, and supply commercial aquatic facilities across the tri-state area."
        image={IMAGES.commercial}
        imageAlt="Commercial hotel pool facility"
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Overview</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Todd Harris Company has been working with commercial and institutional clients since 1975. While a lot of our neighbors know us from residential service calls, a significant part of our operation is dedicated to large-scale pool work.
            </p>
            <p>
              We&apos;re not a residential pool company that occasionally takes a commercial job. Our fleet, our crew, and our chemical supply infrastructure are built for facility-scale operations.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <CopperLine className="mb-6" />
        <h2>What we offer commercial clients</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div key={cap.title} className="bg-white rounded-lg p-6 border border-concrete-dark">
              <cap.icon className="h-6 w-6 text-copper mb-3" />
              <h3 className="text-lg">{cap.title}</h3>
              <p className="mt-2 text-base text-gray-medium leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <CopperLine className="mb-6" />
        <h2>Why facilities choose us</h2>
        <div className="mt-10 space-y-8 max-w-3xl">
          {advantages.map((adv) => (
            <div key={adv.title}>
              <h3 className="text-lg">{adv.title}</h3>
              <p className="mt-1 text-gray-medium">{adv.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Facility types we serve</h2>
          <p className="mt-4 text-gray-medium">
            Hotels and resorts. Apartment and condo complexes. Municipal recreation centers. Community pools. Fitness centers and gyms. Country clubs and swim clubs. Schools and universities. Rehabilitation facilities.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2 className="text-white">Get started</h2>
          <p className="mt-4 text-concrete/80">
            If you manage a commercial or institutional aquatic facility, we&apos;d like to talk. Call us or fill out our contact form and let us know about your facility, and we&apos;ll schedule a site visit.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white font-sans">
              <a href={COMPANY.phone.mainTel}>
                <Phone className="mr-2 h-4 w-4" />
                Call {COMPANY.phone.main}
              </a>
            </Button>
            <Button asChild size="lg" className="border border-concrete/30 bg-transparent text-concrete hover:bg-white/10 hover:text-white font-sans">
              <Link href="/contact">Contact Our Commercial Team</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
