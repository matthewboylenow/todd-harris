import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export default function NotFound() {
  return (
    <section className="bg-navy py-24 md:py-32 px-6 min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-widest text-copper mb-4">404</p>
        <div className="h-[2px] w-12 bg-copper mx-auto mb-6" />
        <h1 className="text-white">This page doesn&apos;t exist.</h1>
        <p className="mt-4 text-lg text-concrete/80">
          The page you&apos;re looking for may have been moved or no longer exists. Here are some places to start.
        </p>
        <nav className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="text-copper hover:text-copper-dark font-medium">Home</Link>
          <Link href="/services/aquatic" className="text-copper hover:text-copper-dark font-medium">Services</Link>
          <Link href="/commercial" className="text-copper hover:text-copper-dark font-medium">Commercial</Link>
          <Link href="/contact" className="text-copper hover:text-copper-dark font-medium">Contact</Link>
        </nav>
        <p className="mt-6 text-concrete/80">
          Or call us:{' '}
          <a href={COMPANY.phone.mainTel} className="text-copper hover:text-copper-dark font-medium">
            {COMPANY.phone.main}
          </a>
        </p>
      </div>
    </section>
  );
}
