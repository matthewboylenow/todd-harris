'use client';

import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { MapPin, Wrench, Building2 } from 'lucide-react';

const reasons = [
  {
    number: '01',
    icon: MapPin,
    title: 'Based in Edison since 1975',
    description: 'Our team, our trucks, and our headquarters are all at 2 Sutton Place. When you call us, help is already close.',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'One company, everything you need',
    description: "We build pools, service them, deliver chemicals by the truckload, and stock the supplies to keep them running. You don't need four vendors. You need one.",
  },
  {
    number: '03',
    icon: Building2,
    title: 'Built for commercial work',
    description: 'Hotels, gyms, apartment complexes, municipal facilities. Our crew and fleet are sized for institutional projects. Licensed, insured, and equipped for the job.',
  },
];

export function WhyToddHarris() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-widest text-copper mb-2">Why us</p>
          <h2>Why our clients stay with us</h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.number} delay={i * 0.15}>
              <div className="relative">
                <span className="font-mono text-6xl font-bold text-concrete-dark">{reason.number}</span>
                <div className="mt-2">
                  <reason.icon className="h-6 w-6 text-copper mb-3" />
                  <h3 className="text-lg">{reason.title}</h3>
                  <p className="mt-2 text-base text-gray-medium leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
