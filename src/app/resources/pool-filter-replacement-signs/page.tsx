import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/shared/page-hero';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { CopperLine } from '@/components/shared/copper-line';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/lib/constants';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Signs Your Pool Filter Needs Replacing | Pool Maintenance Tips',
  description: 'How to tell if your pool filter needs replacing. Pressure readings, water clarity issues, and age guidelines. Expert advice from Todd Harris Company, Edison NJ.',
};

export default function PoolFilterReplacementSignsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Signs your pool filter needs replacing"
        subtitle="Pressure readings, water clarity, and age guidelines to know when it&apos;s time."
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <div className="space-y-4 text-gray-medium">
            <p>
              Pool filters don&apos;t last forever. They wear out gradually, which means most pool owners don&apos;t notice the decline until water quality has already suffered. Knowing what to look for helps you stay ahead of the problem and avoid a mid-season breakdown.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Check your pressure gauge first</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Your filter has a pressure gauge on top for a reason. When the filter is clean and running normally, note the PSI reading. That&apos;s your baseline. Every filter has a different normal range, so knowing yours is important.
            </p>
            <p>
              When the pressure climbs 8 to 10 PSI above that baseline, the filter media is clogged and needs cleaning or replacing. If you clean or backwash the filter and the pressure doesn&apos;t drop back to normal, the media is spent. It&apos;s time for new cartridges, new sand, or new DE grids.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Water clarity problems</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              If your water is cloudy or hazy despite balanced chemistry, the filter is the first place to look. A filter that can&apos;t trap fine particles anymore will let them pass right through and back into the pool.
            </p>
            <p>
              This is especially common with overused cartridge elements. The fabric breaks down over time, and the pleats lose their ability to catch small debris. With sand filters, the sand grains become smooth and rounded after years of use, reducing their ability to trap contaminants. If you&apos;ve balanced your chemicals and the water still doesn&apos;t clear up, your filter media is likely the culprit.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Age guidelines</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Different filter types have different lifespans. These are general guidelines, and your actual mileage will vary based on usage, pool size, and how well the filter has been maintained:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cartridge filters:</strong> Replace the cartridge elements every 1 to 3 years. Higher-use pools and smaller filters will be on the shorter end.</li>
              <li><strong>Sand filters:</strong> The sand media typically lasts 5 to 7 years before it needs replacing. You&apos;ll notice reduced water clarity and higher pressure as the sand wears out.</li>
              <li><strong>DE (diatomaceous earth) filters:</strong> The grids inside a DE filter usually last 5 to 10 years. Torn or deteriorated grids will let DE powder pass through into the pool.</li>
            </ul>
            <p>
              If you&apos;re not sure how old your filter media is, that alone is a reason to have it inspected.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Other signs to watch for</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Beyond pressure and water clarity, there are a few other indicators that your filter is on its way out:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Short filter cycles:</strong> If you&apos;re cleaning or backwashing the filter much more frequently than you used to, the media isn&apos;t holding up.</li>
              <li><strong>Visible damage:</strong> Cracked cartridge end caps, torn pleats, broken grid fingers, or sand coming back into the pool are all clear signs.</li>
              <li><strong>Increased chemical usage:</strong> When the filter isn&apos;t removing contaminants effectively, you end up using more chlorine and other chemicals to compensate. If your chemical costs have crept up, the filter may be to blame.</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>When to replace vs. when to repair</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              There&apos;s a difference between the filter media and the filter housing. Media (cartridges, sand, DE grids) is a consumable. It gets replaced periodically as part of normal maintenance.
            </p>
            <p>
              The housing (the tank itself) lasts much longer, often 15 to 20 years or more. If the tank is cracked, leaking from the body, or the internal manifold is damaged, that&apos;s a housing issue. At that point, replacing the entire filter unit usually makes more sense than trying to patch an aging tank.
            </p>
            <p>
              A quick assessment from a technician can tell you whether you need new media, a new unit, or if a simple repair will get you through the season.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2 className="text-white">Not sure about your filter?</h2>
          <p className="mt-4 text-concrete/80">
            Give us a call. We&apos;ll take a look at your filter system, tell you what shape it&apos;s in, and recommend the right fix. No guesswork.
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
