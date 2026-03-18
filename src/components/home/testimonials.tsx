'use client';

import { ScrollReveal } from '@/components/shared/scroll-reveal';

const testimonials = [
  {
    quote: 'Time and time again they provide a concise method to obtain the results you are looking for. I have used their services for several years and have referred my friends and family to them.',
    attribution: 'Residential customer',
  },
  {
    quote: 'His guidance and teaching have helped us understand what it takes to connect with people. Not only has his work directly benefitted us, but he goes above and beyond.',
    attribution: 'Commercial client',
  },
  {
    quote: "Some of the most incredibly talented people I've worked with. They go above and beyond for their clients at all times.",
    attribution: 'Industry partner',
  },
];

export function Testimonials() {
  return (
    <section className="bg-navy py-16 md:py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-widest text-copper mb-2">Testimonials</p>
          <h2 className="text-white">What people say</h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <blockquote className="rounded-lg border border-white/10 p-8 h-full flex flex-col">
                <span className="text-5xl leading-none text-copper font-serif">&ldquo;</span>
                <p className="mt-2 text-base text-concrete/90 leading-relaxed flex-1">{t.quote}</p>
                <cite className="mt-6 block text-sm text-copper not-italic">{t.attribution}</cite>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
