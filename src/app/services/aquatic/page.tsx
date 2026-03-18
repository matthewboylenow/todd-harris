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
  title: 'Pool Service & Repair Edison NJ | Aquatic Division',
  description: 'Pool equipment service, repair, leak detection, automation, openings and closings in Edison, NJ. Serving Central NJ since 1975. Call 732-287-4443.',
};

const services = [
  { title: 'Equipment repair and installation', description: 'Filters, pumps, motors, heaters, salt systems, and chlorine generators. If a part needs replacing, we carry it or we\u2019ll get it. If the whole unit needs upgrading, we\u2019ll recommend what makes sense for your setup and your budget.' },
  { title: 'Automation and control systems', description: 'Pool automation lets you manage filtration, heating, lighting, and chemical dosing from one controller (or your phone). We install, program, and service automation systems for both residential and commercial pools.' },
  { title: 'Leak detection and repair', description: 'If your water level keeps dropping and it\u2019s not evaporation, we\u2019ll find the leak. Our team uses pressure testing and other diagnostic methods to locate leaks in plumbing, fittings, shells, and equipment.' },
  { title: 'Chemical controllers and feeders', description: 'Automated chemical dosing keeps your water balanced without guesswork. We install and maintain controllers and feeder systems that monitor and adjust chlorine, pH, and ORP levels.' },
  { title: 'Anodes and cathodic protection', description: 'Metal components in your pool system corrode over time, especially in salt water environments. We install sacrificial anodes and cathodic protection systems to extend the life of your equipment.' },
  { title: 'Openings and closings', description: 'We handle seasonal openings in the spring and closings in the fall. Equipment is inspected, water is balanced, covers go on or come off, and your pool is set for the season.' },
  { title: 'Safety and automatic covers', description: 'We install and service both manual safety covers and automatic pool covers. If you have kids or pets, a safety cover is one of the most important additions you can make.' },
  { title: 'Pool consulting and evaluations', description: 'Buying a property with a pool? Not sure what condition your equipment is in? We\u2019ll come out and do an honest evaluation. We\u2019ll tell you what\u2019s working, what\u2019s not, and what you should plan for.' },
];

export default function AquaticPage() {
  return (
    <>
      <PageHero
        eyebrow="Services / Aquatic Division"
        title="Keeping your pool running right."
        subtitle="Filters, pumps, heaters, automation, leak detection, covers, and more. If it&apos;s part of your pool system, our technicians work on it."
        image={IMAGES.serviceAquatic}
        imageAlt="Pool equipment and filtration system"
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Overview</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              The Aquatic Division is the backbone of Todd Harris Company. This is where the day-to-day work happens: the service calls, the equipment installs, the seasonal openings and closings that keep pools across Central New Jersey in working order year after year.
            </p>
            <p>
              Our technicians handle everything from a routine filter cleaning to a full automation system upgrade. We work on residential pools, commercial facilities, and institutional aquatic centers. Whatever the size of the job, the approach is the same. Diagnose the problem, explain what needs to happen, get it done.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <CopperLine className="mb-6" />
        <h2>What we service</h2>
        <div className="mt-10 space-y-8 max-w-3xl">
          {services.map((item) => (
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
          <h2>Who this is for</h2>
          <p className="mt-4 text-gray-medium">
            Homeowners with residential pools, property managers overseeing commercial or community pools, hotel and gym operators, and anyone who needs reliable pool service in Central New Jersey. We service both in-ground and above-ground pools.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>How it works</h2>
          <p className="mt-4 text-gray-medium">
            Call us at {COMPANY.phone.main} or submit a service request online. Let us know what&apos;s going on with your pool and we&apos;ll schedule a visit. Our tech will diagnose the issue on site, explain what needs to happen, and give you a clear price before any work starts. No surprises.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2 className="text-white">Get started</h2>
          <p className="mt-4 text-concrete/80">
            Call us or submit a service request. We&apos;ll get back to you promptly and schedule a visit.
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
