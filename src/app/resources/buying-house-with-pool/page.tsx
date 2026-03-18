import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/shared/page-hero';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { CopperLine } from '@/components/shared/copper-line';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/lib/constants';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Buying a House With a Pool in NJ | What to Check',
  description: 'What to look for when buying a house with a pool in New Jersey. Inspection tips, equipment checks, cost considerations, and what to ask. Expert advice since 1975.',
};

export default function BuyingHouseWithPoolPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="What to look for when buying a house with a pool"
        subtitle="Inspection tips, equipment age, cost expectations, and the questions you should be asking."
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <div className="space-y-4 text-gray-medium">
            <p>
              A house with a pool can be a great deal or an expensive surprise. The difference usually comes down to how carefully you evaluate the pool before you close. Most buyers focus on the house and treat the pool as a bonus. That&apos;s how people end up with $15,000 in unexpected repairs in their first year.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Get a dedicated pool inspection</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              General home inspectors look at the pool, but they don&apos;t specialize in it. They&apos;ll note whether the pump turns on and whether there&apos;s visible damage, but they typically won&apos;t pressure-test the plumbing, evaluate equipment age and condition in detail, or spot the early signs of structural problems.
            </p>
            <p>
              A dedicated pool inspection costs between $150 and $350 and covers the shell, equipment, plumbing, electrical, and decking. It&apos;s one of the best investments you can make during the buying process. The findings give you leverage in negotiations and a clear picture of what you&apos;re taking on.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Check the equipment</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Pool equipment has a finite lifespan. Knowing the age of each component tells you what&apos;s coming:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pumps:</strong> 8 to 12 years typical lifespan. Listen for grinding or screeching bearings.</li>
              <li><strong>Filters:</strong> The housing lasts 10 to 15 years. Media inside needs replacing more frequently.</li>
              <li><strong>Heaters:</strong> Gas heaters last 8 to 12 years. Look for rust, corrosion, and whether it actually heats the water efficiently.</li>
              <li><strong>Salt chlorine generators:</strong> The cell typically lasts 3 to 7 years and costs $400 to $900 to replace. The control unit lasts longer.</li>
              <li><strong>Automation systems:</strong> These can last a long time but replacement parts for older systems become hard to find.</li>
            </ul>
            <p>
              If most of the equipment is 10 or more years old, factor $5,000 to $15,000 into your budget for replacements over the next few years. That&apos;s not a reason to walk away, but it should be part of your decision.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Look at the shell and surfaces</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              The pool surface is one of the most expensive things to replace. Know what you&apos;re looking at:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Plaster:</strong> Rough, stained, or delaminating plaster means a replaster is coming. Budget $5,000 to $15,000 depending on pool size and finish.</li>
              <li><strong>Vinyl liner:</strong> Liners last 7 to 12 years. Fading, wrinkles, and patches are signs of age. Replacement runs $3,000 to $7,000.</li>
              <li><strong>Fiberglass:</strong> Look for blistering, fading, and spider cracks. Resurfacing a fiberglass pool costs $5,000 to $10,000.</li>
              <li><strong>Coping and tile:</strong> Cracked or loose coping and missing tile along the waterline can cost $2,000 to $8,000 to repair or replace.</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Check the deck</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Walk the entire deck and look for cracks, heaving, and settling. Concrete decks shift over time, especially in New Jersey where freeze-thaw cycles are part of every winter. Small cracks are cosmetic. Large cracks, sections that have risen or sunk, and areas where water pools against the pool edge are structural concerns.
            </p>
            <p>
              Poor drainage around the deck can undermine the pool structure over time. Water should flow away from the pool, not toward it.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Ask the right questions</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Before you close, get answers to these questions from the seller:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>How old is the pool?</li>
              <li>When was it last resurfaced or relined?</li>
              <li>What equipment has been replaced, and when?</li>
              <li>Has any structural work been done?</li>
              <li>Has the pool ever had a leak? Was it repaired?</li>
              <li>Who has been servicing the pool, and how often?</li>
              <li>Are there any known issues?</li>
            </ul>
            <p>
              If the seller can&apos;t answer these questions, that&apos;s useful information too. It usually means the pool hasn&apos;t been professionally maintained.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Factor in ongoing costs</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Owning a pool in New Jersey comes with annual costs that you should budget for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Opening and closing:</strong> $300 to $600 per year for professional seasonal service.</li>
              <li><strong>Chemicals:</strong> $500 to $1,200 per season depending on pool size and system type.</li>
              <li><strong>Electricity:</strong> Running a pump adds $50 to $150 per month during the season.</li>
              <li><strong>Routine maintenance:</strong> Weekly service runs $150 to $300 per month if you hire it out.</li>
              <li><strong>Repairs:</strong> Budget $500 to $1,500 per year on average for unexpected repairs.</li>
            </ul>
            <p>
              None of this should scare you away from buying a house with a pool. But going in with realistic expectations means no surprises.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2 className="text-white">We do pool evaluations</h2>
          <p className="mt-4 text-concrete/80">
            If you&apos;re buying a home with a pool in Central New Jersey, call us to schedule an evaluation before your inspection period expires. We&apos;ll give you an honest assessment of the pool&apos;s condition and what you should plan for.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white font-sans">
              <a href={COMPANY.phone.mainTel}>
                <Phone className="mr-2 h-4 w-4" />
                Call {COMPANY.phone.main}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-concrete/30 text-concrete hover:bg-white/10 hover:text-white font-sans">
              <Link href="/services/aquatic">Aquatic Services</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
