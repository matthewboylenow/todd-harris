'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { CopperLine } from '@/components/shared/copper-line';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '@/lib/images';

const services = [
  {
    title: 'Aquatic Division',
    href: '/services/aquatic',
    image: IMAGES.aquatic,
    imageAlt: 'Commercial indoor pool facility',
    description: 'Filters, pumps, heaters, automation systems, leak detection, openings and closings, safety covers, waterproofing, and CPO servicing for commercial pools and spas.',
    tags: ['Equipment Repair', 'Leak Detection', 'Waterproofing', 'CPO Services'],
  },
  {
    title: 'Chemical Division',
    href: '/services/chemical',
    image: IMAGES.chemical,
    imageAlt: 'Clear pool water with chemical balance',
    description: 'Liquid chlorine by carboy or tank truck. Granular chlorines, bromine tablets, salt generators, pH products, clarifiers, and ice melt. Scheduled delivery for commercial facilities.',
    tags: ['Tank Truck Delivery', 'Water Analyzers', 'Chlorine Generators', 'Ice Melt'],
  },
  {
    title: 'Renovation Division',
    href: '/services/renovation',
    image: IMAGES.construction,
    imageAlt: 'Commercial pool renovation',
    description: 'Major renovations for commercial and institutional aquatic facilities. Structural repairs, hydroblasting, coping, tile, plaster, fiberglass, steel pools, and deck resurfacing.',
    tags: ['Major Renovations', 'Structural Repairs', 'Steel Pools', 'Deck Resurfacing'],
  },
  {
    title: 'Sauna & Steam',
    href: '/services/sauna-steam',
    image: IMAGES.saunaSteam,
    imageAlt: 'Commercial sauna interior',
    description: 'Custom-built and panel-built rooms, infrared heat therapy, and steam rooms. Design, installation, service, and accessories for commercial facilities.',
    tags: ['Custom Rooms', 'Infrared Therapy', 'Commercial Install', 'Service & Repair'],
  },
];

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-widest text-copper mb-2">What we do</p>
          <h2>One company for the full lifecycle of your commercial aquatic facility.</h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <Link
                href={service.href}
                className="group block rounded-lg border border-concrete-dark bg-white overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors" />
                </div>
                <div className="p-8">
                  <CopperLine className="mb-4" />
                  <h3 className="group-hover:text-copper transition-colors">{service.title}</h3>
                  <p className="mt-3 text-base text-gray-medium leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-concrete text-charcoal font-sans">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm text-copper font-medium">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
