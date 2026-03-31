import Link from 'next/link';
import Image from 'next/image';
import { COMPANY } from '@/lib/constants';
import { Phone, Mail, MapPin } from 'lucide-react';

const serviceLinks = [
  { label: 'Aquatic Division', href: '/services/aquatic' },
  { label: 'Chemical Division', href: '/services/chemical' },
  { label: 'Construction', href: '/services/construction' },
  { label: 'Sauna & Steam', href: '/services/sauna-steam' },
  { label: 'Pool Lifts', href: '/services/pool-lifts' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Commercial', href: '/commercial' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

const serviceAreaLinks = [
  { label: 'Edison, NJ', href: '/service-areas/edison-nj' },
  { label: 'Middlesex County', href: '/service-areas/middlesex-county' },
];

export function Footer() {
  return (
    <footer className="bg-navy text-concrete">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/todd-harris-logo.png"
                alt="Todd Harris Company"
                width={140}
                height={42}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-concrete/80 mb-4">
              Pool service, construction, chemicals, and supplies. Family-operated in Edison, NJ since 1975.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href={COMPANY.phone.mainTel} className="flex items-center gap-2 hover:text-copper transition-colors">
                <Phone className="h-4 w-4 text-copper" />
                {COMPANY.phone.main}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-copper transition-colors">
                <Mail className="h-4 w-4 text-copper" />
                {COMPANY.email}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-copper shrink-0" />
                {COMPANY.address.full}
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-sans font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-concrete/80 hover:text-copper transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-sans font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-concrete/80 hover:text-copper transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white text-sm font-sans font-semibold uppercase tracking-wider mb-4">Service Areas</h4>
            <ul className="flex flex-col gap-2">
              {serviceAreaLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-concrete/80 hover:text-copper transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-concrete/60">
              For retail chemicals and supplies, visit the{' '}
              <a href={COMPANY.storeWebsite} target="_blank" rel="noopener noreferrer" className="text-copper hover:text-copper-light transition-colors">
                Spa & Pool Store
              </a>.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-concrete/60">
          <p>&copy; {new Date().getFullYear()} {COMPANY.legalName} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
