import Image from 'next/image';
import { CopperLine } from './copper-line';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({ eyebrow, title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt || ''}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/50" />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <p className="mb-4 text-sm uppercase tracking-widest text-copper">{eyebrow}</p>
        <CopperLine className="mb-6" />
        <h1 className="text-white">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-concrete">{subtitle}</p>
      </div>
    </section>
  );
}
