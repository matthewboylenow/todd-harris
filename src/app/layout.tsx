import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FathomAnalytics } from '@/components/shared/fathom-analytics';
import { COMPANY } from '@/lib/constants';

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Pool and Spa Services in Edison, NJ | Todd Harris Company',
    template: '%s | Todd Harris Company',
  },
  description: 'Pool service, construction, chemicals, and supplies in Edison, NJ. Family-operated since 1975. Four divisions, 40+ employees. Call 732-287-4443.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://toddharris.com'),
  openGraph: {
    title: 'Todd Harris Company | Pool Services Since 1975',
    description: 'Service, construction, chemicals, and supplies in Edison, NJ. Family-operated since 1975.',
    url: 'https://toddharris.com',
    siteName: 'Todd Harris Company',
    locale: 'en_US',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY.name,
  description: 'Pool and spa services, construction, chemicals, and supplies in Edison, NJ. Family-operated since 1975.',
  url: COMPANY.website,
  telephone: '+1-732-287-4443',
  email: COMPANY.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.state,
    postalCode: COMPANY.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.5187,
    longitude: -74.3487,
  },
  foundingDate: '1975',
  numberOfEmployees: '40+',
  areaServed: ['Edison', 'Middlesex County', 'Union County', 'New Jersey'],
  serviceType: [
    'Pool Service',
    'Pool Construction',
    'Pool Chemical Supply',
    'Pool Equipment Repair',
    'Sauna Installation',
    'Steam Room Installation',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${dmSerif.variable} ${dmSans.variable} ${jetbrains.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <FathomAnalytics />
      </body>
    </html>
  );
}
