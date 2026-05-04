'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { IMAGES } from '@/lib/images';

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      {/* Background image */}
      <Image
        src={IMAGES.hero}
        alt="Commercial rooftop pool facility"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay with warm tone */}
      <div className="absolute inset-0 bg-navy/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm tracking-widest text-copper"
        >
          Serving New Jersey and New York City &middot; Since 1975
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-2 h-[2px] w-12 bg-copper"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl text-white"
        >
          Commercial pool experts for 50 years.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 max-w-xl text-lg text-concrete/90"
        >
          Renovation, service, chemicals, and supplies for commercial aquatic facilities. Four divisions under one roof, headquartered in Edison, NJ.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white font-sans text-base px-8">
            <Link href="/contact#service-request">Request Service</Link>
          </Button>
          <Button asChild size="lg" className="border border-concrete/30 bg-transparent text-concrete hover:bg-white/10 hover:text-white font-sans text-base px-8">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
