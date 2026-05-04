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
  title: 'Commercial Pool Renovation NJ & NYC | Renovation Division',
  description: 'Commercial pool renovation and structural repairs in NJ and NYC. Indoor, rooftop, penthouse, and steel pools. Coping, tile, plaster, deck resurfacing. Since 1975.',
};

const services = [
  { title: 'Major renovations', description: 'Full-scale renovations for commercial aquatic facilities. New coping, new tile, new plaster, new equipment. We take aging pools and restore them to peak performance.' },
  { title: 'Structural repairs', description: 'Cracks, settling, shifting, spalling. If the pool shell or deck has structural damage, our team has the diagnostic ability and the equipment to address it. This includes hydroblasting (high-pressure water removal of deteriorated concrete or plaster).' },
  { title: 'Steel pool renovation', description: 'We specialize in carbon and stainless steel pool renovation for commercial facilities. Structural welding, panel replacement, waterproofing, and surface refinishing for steel pool systems.' },
  { title: 'Coping, tile, and plaster', description: 'Surface finishes wear out over time. We replace pool coping (the cap around the pool edge), waterline tile, and interior plaster. Multiple finish options available.' },
  { title: 'Fiberglass and gel-coating', description: 'For fiberglass pools and spas, we do structural fiberglass repair and gel-coat resurfacing to restore the surface and stop leaks.' },
  { title: 'Deck resurfacing', description: 'Concrete pool decks crack, stain, and weather over the years. We resurface, repair, and refinish pool decks to restore both appearance and safety.' },
  { title: 'Waterproofing', description: 'Professional waterproofing for commercial pools, spas, saunas, and related structures to protect against leaks and structural deterioration.' },
];

/* Process steps: Permits step removed per client direction. Construction renamed to Renovation. */
const steps = [
  { number: 1, title: 'Consultation', description: 'We visit the site, discuss your goals and budget, and evaluate conditions.' },
  { number: 2, title: 'Proposal', description: 'You get a clear, written proposal with scope, timeline, and pricing.' },
  { number: 3, title: 'Renovation', description: 'Our crew does the work with in-house teams. We keep you updated throughout.' },
  { number: 4, title: 'Completion', description: 'Final walkthrough, equipment orientation, and handoff.' },
];

export default function RenovationPage() {
  return (
    <>
      <PageHero
        eyebrow="Services / Renovation Division"
        title="Renovated to perform."
        subtitle="Major renovations for commercial and institutional aquatic facilities. We&apos;ve been renovating pools for property managers, hotels, and municipalities since 1975."
        image={IMAGES.serviceRenovation}
        imageAlt="Commercial pool renovation"
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Overview</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              The Renovation Division handles the big work. Full-scale renovations, structural repairs, steel pool overhauls, and waterproofing projects that other companies don&apos;t have the crew or the equipment to take on.
            </p>
            <p>
              We specialize in high-end in-ground pools and spas, including indoor, rooftop, penthouse, and steel pool renovations for commercial facilities. Our crew handles the work in-house. That means consistent quality, direct communication, and a team that knows what they&apos;re doing because they do it every day.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <CopperLine className="mb-6" />
        <h2>What we do</h2>
        <div className="mt-10 space-y-8 max-w-3xl">
          {services.map((item) => (
            <div key={item.title}>
              <h3 className="text-lg">{item.title}</h3>
              <p className="mt-1 text-gray-medium">{item.description}</p>
            </div>
          ))}
        </div>
        {/* TODO: Waterproofing verbiage subject to refinement when Ben sends final description. */}
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Commercial and institutional</h2>
          <p className="mt-4 text-gray-medium">
            We renovate pools for hotels, apartment complexes, community pools, gyms, municipal facilities, schools, universities, and rehabilitation facilities. Our crew is sized for large-scale work, and we carry the licensing and insurance that commercial clients require.
          </p>
          <p className="mt-4 text-gray-medium">
            If you&apos;re a property manager or facility director planning a renovation, call us. We&apos;ll do a site visit and give you an honest assessment of what&apos;s needed.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <CopperLine className="mb-6" />
        <h2>The process</h2>
        <div className="mt-10 space-y-6 max-w-3xl">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-copper text-white text-sm font-semibold">
                {step.number}
              </span>
              <div>
                <h3 className="text-lg">{step.title}</h3>
                <p className="mt-1 text-gray-medium">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2 className="text-white">Get started</h2>
          <p className="mt-4 text-concrete/80">
            Call us to schedule a consultation. We&apos;ll visit your site and give you an honest assessment.
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
