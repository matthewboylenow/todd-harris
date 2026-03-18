'use client';

import { AnimatedCounter } from '@/components/shared/animated-counter';

export function StatsBar() {
  return (
    <section className="bg-concrete py-16 md:py-20 px-6">
      <div className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-8">
        <AnimatedCounter target={50} label="Years in Business" />
        <AnimatedCounter target={40} suffix="+" label="Employees" />
        <AnimatedCounter target={4} label="Divisions" />
        <div className="text-center">
          <span className="block font-mono text-4xl md:text-5xl font-bold text-copper">Tri-State</span>
          <span className="mt-2 block text-sm uppercase tracking-wider text-gray-medium">Service Area</span>
        </div>
      </div>
    </section>
  );
}
