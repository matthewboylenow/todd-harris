import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/shared/page-hero';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { CopperLine } from '@/components/shared/copper-line';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/lib/constants';
import { Phone, CheckCircle } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Preventative Maintenance for Commercial Pools & Spas',
  description: 'Preventative maintenance services for commercial pools, steam rooms, and saunas. Certified pool operators providing weekly and monthly service. Todd Harris Company.',
};

const maintenanceBenefits = [
  {
    title: 'Ensures Safety',
    description: 'Regular maintenance helps identify and fix potential hazards, ensuring the safety of all users.',
  },
  {
    title: 'Extends Equipment Lifespan',
    description: 'Proper care and regular upkeep can significantly extend the life of your pool, steam room, and sauna equipment, saving you money in the long run.',
  },
  {
    title: 'Maintains Water Quality',
    description: 'Regular maintenance ensures that pool water remains clean, balanced, and free from harmful bacteria and algae.',
  },
  {
    title: 'Enhances Performance',
    description: 'Well-maintained equipment operates more efficiently, providing better heating, filtration, and overall performance.',
  },
  {
    title: 'Prevents Costly Repairs',
    description: 'Routine checks and maintenance can catch small issues before they become major, expensive problems.',
  },
  {
    title: 'Preserves Aesthetic Appeal',
    description: 'Regular cleaning and maintenance keep your pool, steam room, and sauna looking their best, enhancing the visual appeal of your wellness spaces.',
  },
  {
    title: 'Promotes Health and Hygiene',
    description: 'Regular upkeep ensures that your wellness facilities remain hygienic, reducing the risk of infections and promoting overall well-being.',
  },
  {
    title: 'Compliance with Regulations',
    description: 'Regular maintenance helps ensure that your pool, steam room, and sauna meet all local health and safety regulations.',
  },
  {
    title: 'Energy Efficiency',
    description: 'Proper maintenance ensures that equipment operates at optimal efficiency, reducing energy consumption and lowering utility bills.',
  },
  {
    title: 'Peace of Mind',
    description: 'Knowing that your equipment is well-maintained gives you confidence and peace of mind, allowing you to fully enjoy your wellness facilities.',
  },
];

export default function PreventativeMaintenancePage() {
  return (
    <>
      <PageHero
        eyebrow="Preventative Maintenance"
        title="Preventative maintenance for commercial pools &amp; spas"
        subtitle="Regular maintenance keeps your facility safe, compliant, and performing at its best. Our certified pool operators handle it all."
        image={IMAGES.preventativeMaintenance}
        imageAlt="Commercial pool facility"
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Why preventative maintenance matters</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Commercial aquatic facilities demand consistent care. Without regular preventative maintenance, small problems become expensive emergencies, water quality degrades, equipment life shortens, and compliance risks increase.
            </p>
            <p>
              Our certified pool operators provide weekly or monthly preventative maintenance for commercial pools, spas, saunas, and steam rooms, ensuring water quality, equipment reliability, and regulatory compliance.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <CopperLine className="mb-6" />
        <h2>What preventative maintenance covers</h2>
        <div className="mt-10 space-y-6 max-w-3xl">
          {maintenanceBenefits.map((item) => (
            <div key={item.title} className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-copper shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-1 text-gray-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>We are your one stop shop</h2>
          <p className="mt-4 text-gray-medium">
            For all of your pool, steam room, and sauna needs. Todd Harris Company provides comprehensive preventative maintenance services that keep your commercial facilities running safely and efficiently.
          </p>
          <p className="mt-4 text-gray-medium">
            Ask us about our preventative maintenance options. We&apos;ll tailor a program to your facility&apos;s specific needs and schedule.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2 className="text-white">Get started</h2>
          <p className="mt-4 text-concrete/80">
            Call us to discuss a preventative maintenance program for your facility.
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
