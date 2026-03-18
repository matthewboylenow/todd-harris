import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/shared/page-hero';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { CopperLine } from '@/components/shared/copper-line';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/lib/constants';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Salt vs Chlorine Pools NJ | Pros, Cons & Real Costs',
  description: 'Salt water vs. chlorine pools: real differences, costs, and maintenance for NJ pool owners. Expert breakdown from Todd Harris Company, Edison NJ. Since 1975.',
};

export default function SaltVsChlorinePoolsNJPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Salt vs. chlorine pools: what NJ pool owners should know"
        subtitle="The real differences, costs, and maintenance considerations for each system."
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <div className="space-y-4 text-gray-medium">
            <p>
              This is one of the most common questions we get from pool owners: should I switch to salt, or should I stick with traditional chlorine? The short answer is that both systems work well. The right choice depends on your priorities, your budget, and how much hands-on maintenance you want to do.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>How they work</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <h3 className="text-lg font-semibold text-foreground pt-2">Traditional chlorine</h3>
            <p>
              With a traditional chlorine pool, you add chlorine directly to the water. This can be done with tablets in a feeder, liquid chlorine, granular shock, or an automated chemical feeder. You&apos;re responsible for testing the water regularly and adding the right amount to keep levels consistent.
            </p>
            <h3 className="text-lg font-semibold text-foreground pt-2">Saltwater</h3>
            <p>
              A saltwater pool uses a salt chlorine generator (also called a salt cell) to convert dissolved salt into chlorine. The pool still uses chlorine to sanitize the water. It just makes its own instead of you adding it manually. Salt is added to the water at a low concentration (about 3,200 ppm, which is roughly one-tenth the salinity of ocean water), and the generator does the rest.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>The real differences</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <h3 className="text-lg font-semibold text-foreground pt-2">Day-to-day maintenance</h3>
            <p>
              Saltwater pools require less frequent chemical additions because the generator produces chlorine continuously. You&apos;ll still need to test the water, monitor salt levels, and balance pH (salt systems tend to push pH up), but the day-to-day chlorine management is more hands-off. Traditional chlorine pools require more regular attention to maintain proper sanitizer levels.
            </p>

            <h3 className="text-lg font-semibold text-foreground pt-2">Water feel</h3>
            <p>
              Most people find saltwater pools feel softer on the skin and are less irritating to the eyes. The salt concentration is low enough that you won&apos;t taste it, but swimmers often describe the water as feeling smoother. This is one of the biggest reasons people make the switch.
            </p>

            <h3 className="text-lg font-semibold text-foreground pt-2">Equipment costs</h3>
            <p>
              A salt chlorine generator system costs $1,000 to $2,500 installed. The salt cell inside the unit is a consumable part that lasts 3 to 7 years and costs $400 to $900 to replace. Traditional chlorine systems don&apos;t have this additional equipment cost, though automated feeders and controllers add to the price.
            </p>

            <h3 className="text-lg font-semibold text-foreground pt-2">Ongoing chemical costs</h3>
            <p>
              Saltwater pools save you the cost of buying chlorine regularly, but you&apos;ll spend more on salt, pH reducers (muriatic acid), and occasional cell cleaning solutions. Traditional chlorine pools have higher chlorine costs but lower overall chemical complexity. Over the course of a season, chemical spending tends to be roughly similar.
            </p>

            <h3 className="text-lg font-semibold text-foreground pt-2">Corrosion concerns</h3>
            <p>
              Salt is corrosive. Over time, it can affect metal components around the pool including ladders, handrails, light fixtures, heater heat exchangers, and even natural stone decking and coping. In New Jersey, where freeze-thaw cycles are part of every winter, this corrosion concern is amplified. Proper bonding, sacrificial anodes, and equipment selection can mitigate this, but it&apos;s something to be aware of.
            </p>

            <h3 className="text-lg font-semibold text-foreground pt-2">Cold weather considerations</h3>
            <p>
              Salt cells should not run when the water temperature drops below 60 degrees Fahrenheit. In New Jersey, that means the cell is off for a good portion of the shoulder season and the entire winter. During those periods, you&apos;ll need to add chlorine manually just like a traditional pool. This is a detail that surprises some first-time salt pool owners.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Which one is actually cheaper?</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Over a 10-year period, the total cost of ownership is roughly comparable. Salt systems have higher upfront equipment costs and periodic cell replacements. Traditional chlorine systems have higher ongoing chemical costs but lower equipment investment. The biggest variable in either system is how well it&apos;s maintained. A neglected pool costs more no matter what sanitizer you use.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Our take</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              We service both systems every day, and we don&apos;t push one over the other. Both work well when properly maintained. If you value the softer water feel and want less hands-on chlorine management, salt is a good fit. If you prefer a simpler system with lower equipment costs and don&apos;t mind the regular chemical routine, traditional chlorine works great.
            </p>
            <p>
              The best system is the one that matches how you actually use and maintain your pool. We&apos;re happy to walk through the specifics of your setup and help you decide.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2 className="text-white">Have questions about your pool system?</h2>
          <p className="mt-4 text-concrete/80">
            Whether you&apos;re thinking about switching to salt or just want to get the most out of your current setup, give us a call. We&apos;ll talk through what makes sense for your pool.
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
            <Button asChild size="lg" variant="outline" className="border-concrete/30 text-concrete hover:bg-white/10 hover:text-white font-sans">
              <Link href="/services/chemical">Chemical Division</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
