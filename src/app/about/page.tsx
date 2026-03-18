import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/page-hero';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { CopperLine } from '@/components/shared/copper-line';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/lib/constants';
import { Phone } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'About Todd Harris Company | Pool Services Since 1975 | Edison, NJ',
  description: 'Todd Harris Company was founded in 1975 in Edison, NJ. 50 years later, we\'re still family-operated with 40+ employees and four service divisions. Learn our story.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="One truck. One dream. Fifty years later."
        subtitle="Todd Harris Company started in 1975 and never stopped growing. Here's how a one-man operation became one of Central New Jersey's most established pool companies."
        image={IMAGES.about}
        imageAlt="Pool service team at work"
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2>Our story</h2>
          <div className="mt-6 space-y-4 text-gray-medium">
            <p>
              Todd Harris Applebaum started this company in 1975 with one truck and a home office in Edison, New Jersey. The idea was simple: show up on time, do the work right, and treat people honestly. That&apos;s it. No complicated business model. Just a guy who knew pools and wanted to build something.
            </p>
            <p>It worked.</p>
            <p>
              Over the next five decades, that one truck became a fleet. The home office became a headquarters at 2 Sutton Place. The one-man operation grew into a team of over 40 employees covering the tri-state area. And the services expanded from basic pool maintenance into four full divisions: aquatic service, chemical supply, construction, and sauna and steam room work.
            </p>
            <p>
              Through all of that, the company stayed family-operated. The work stayed local. And the approach stayed the same: show up, do the work, be straight with people.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-concrete">
        <CopperLine className="mb-6" />
        <h2>What we&apos;ve built</h2>
        <div className="mt-6 space-y-4 text-gray-medium max-w-3xl">
          <p>Today, Todd Harris Company operates four divisions out of our Edison headquarters.</p>
          <p>
            The <strong className="text-navy">Aquatic Division</strong> handles everything mechanical and operational. Filters, pumps, heaters, automation, leak detection, openings and closings, safety covers, and consulting. If your pool has equipment, our technicians service it.
          </p>
          <p>
            The <strong className="text-navy">Chemical Division</strong> supplies pool chemicals at both residential and commercial scale. Carboy and tank truck delivery to facilities, plus a full inventory of granular chlorines, bromine tablets, salt generators, pH products, clarifiers, and seasonal ice melt. Retail chemical sales are available through our sister operation, the <a href={COMPANY.storeWebsite} target="_blank" rel="noopener noreferrer" className="text-copper hover:text-copper-dark">Spa & Pool Store</a>.
          </p>
          <p>
            The <strong className="text-navy">Construction Division</strong> builds new pools and handles major renovations. Commercial, institutional, and residential. Structural repairs, hydroblasting, coping, tile, plaster, fiberglass, gel-coating, and deck resurfacing.
          </p>
          <p>
            The <strong className="text-navy">Sauna & Steam Room Division</strong> designs, builds, and services custom saunas and steam rooms. Panel-built, custom-built, outdoor, and infrared. Residential and commercial.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-8 grid-cols-2 md:grid-cols-4 max-w-3xl">
          {[
            { value: '1975', label: 'Founded' },
            { value: '40+', label: 'Employees' },
            { value: '4', label: 'Divisions' },
            { value: 'Tri-state', label: 'NJ, NY, CT' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block font-mono text-3xl font-bold text-copper">{stat.value}</span>
              <span className="text-sm text-gray-medium uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl">
          <CopperLine className="mb-6" />
          <h2 className="text-white">What hasn&apos;t changed</h2>
          <div className="mt-6 space-y-4 text-concrete/80">
            <p>
              The company is bigger now. The capabilities are wider. But the basics are the same as they were in 1975.
            </p>
            <p>
              We still show up on time. We still do the work right. We&apos;re still honest about what your pool needs and what it doesn&apos;t. And we&apos;re still here in Edison, where it all started.
            </p>
            <p>
              If that sounds like the kind of company you want taking care of your pool, give us a call.
            </p>
          </div>
          <Button asChild size="lg" className="mt-8 bg-copper hover:bg-copper-dark text-white font-sans">
            <a href={COMPANY.phone.mainTel}>
              <Phone className="mr-2 h-4 w-4" />
              Call {COMPANY.phone.main}
            </a>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
