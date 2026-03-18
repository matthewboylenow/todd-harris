import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/shared/page-hero';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { CopperLine } from '@/components/shared/copper-line';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/lib/constants';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'When to Open Your Pool in NJ | Timing, Tips & Checklist',
  description: 'When should you open your pool in New Jersey? Temperature guidelines, equipment checks, and what to expect. Edison pool experts since 1975.',
};

export default function WhenToOpenPoolNJPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="When to open your pool in New Jersey"
        subtitle="Temperature guidelines, equipment checks, and scheduling tips for NJ pool owners."
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <div className="space-y-4 text-gray-medium">
            <p>
              Most New Jersey pool owners open their pools somewhere between mid-April and mid-May. The exact timing depends on the weather, your schedule, and how early you want to start swimming. There&apos;s no single perfect date, but there are a few guidelines that make the decision easier.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Temperature is the key</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              The most important factor is air temperature. You want to wait until daytime temperatures are consistently hitting the 70s before you open. In Central New Jersey, that usually means late April or early May, though it shifts year to year.
            </p>
            <p>
              Opening too early means you&apos;re fighting algae in cold water that nobody&apos;s swimming in yet, burning through chemicals, and running equipment before you need to. Opening too late can mean algae has already taken hold under the cover, making your opening more expensive and time-consuming.
            </p>
            <p>
              A good rule of thumb: when daytime temperatures have been in the mid-70s for a week straight, it&apos;s time. If you&apos;re seeing consistent 70-degree days by late April, don&apos;t wait until Memorial Day weekend. By then, you may be dealing with green water under the cover.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>What happens during a pool opening</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              If you haven&apos;t been through a professional opening before, here&apos;s what the process looks like:
            </p>
            <h3 className="text-lg font-semibold text-foreground pt-2">Cover removal</h3>
            <p>
              The winter cover comes off first. Water and debris are pumped or drained off the top before it&apos;s removed, cleaned, folded, and stored. If you have a safety cover, the anchors are checked and the cover is carefully removed from the deck.
            </p>
            <h3 className="text-lg font-semibold text-foreground pt-2">Equipment reconnection and inspection</h3>
            <p>
              The pump, filter, heater, and any other equipment are reconnected. Drain plugs go back in. The system is primed and started up, and the technician checks for leaks, unusual noises, and proper flow. This is when problems from the winter usually show up, so catching them early saves you money.
            </p>
            <h3 className="text-lg font-semibold text-foreground pt-2">Water level</h3>
            <p>
              The water level is checked and adjusted. If it dropped over the winter, the pool is filled back up to the proper skimmer level so the system can circulate correctly.
            </p>
            <h3 className="text-lg font-semibold text-foreground pt-2">Chemical treatment</h3>
            <p>
              The water is tested and treated. Shock, algaecide, and balancing chemicals are added based on the test results. It usually takes a few days of filtration and follow-up testing before the water is swim-ready.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Can you do it yourself?</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Yes. Plenty of homeowners handle their own openings, and if you&apos;re comfortable with your equipment, there&apos;s nothing wrong with that approach. But a professional opening catches things you might miss:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Small leaks in plumbing connections that only show up under pressure</li>
              <li>Worn gaskets or o-rings that will fail mid-season</li>
              <li>A heater that fires but isn&apos;t heating efficiently</li>
              <li>Early signs of motor or pump bearing failure</li>
              <li>Cracked filter housings or damaged grids and cartridges</li>
              <li>Electrical issues with timers, automation, or GFCI protection</li>
            </ul>
            <p>
              A trained technician sees hundreds of pools a season. They know what early failure looks like, and catching a problem in April is almost always cheaper than dealing with a breakdown in July.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>When to schedule</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Spring is the busiest time of year for pool service companies. If you want your pool opened on your preferred date, book by early April. Waiting until the week before Memorial Day means you&apos;re competing with everyone else who waited, and availability gets tight fast.
            </p>
            <p>
              We start scheduling openings in March for the spring season. The earlier you call, the more flexibility you&apos;ll have.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2 className="text-white">Schedule your pool opening</h2>
          <p className="mt-4 text-concrete/80">
            Call us to get on the schedule. We&apos;ll handle the cover, the equipment, the chemicals, and make sure everything is running right before we leave.
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
