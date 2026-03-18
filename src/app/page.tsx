import { Hero } from '@/components/home/hero';
import { ServicesGrid } from '@/components/home/services-grid';
import { StatsBar } from '@/components/home/stats-bar';
import { WhyToddHarris } from '@/components/home/why-todd-harris';
import { CommercialPreview } from '@/components/home/commercial-preview';
import { Testimonials } from '@/components/home/testimonials';
import { CtaStrip } from '@/components/home/cta-strip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <StatsBar />
      <WhyToddHarris />
      <CommercialPreview />
      <Testimonials />
      <CtaStrip />
    </>
  );
}
