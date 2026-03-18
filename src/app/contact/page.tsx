import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/page-hero';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { CopperLine } from '@/components/shared/copper-line';
import { ContactForm } from '@/components/forms/contact-form';
import { ServiceRequestForm } from '@/components/forms/service-request-form';
import { COMPANY } from '@/lib/constants';
import { Phone, Mail, MapPin } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Contact Todd Harris Company | Edison, NJ | 732-287-4443',
  description: 'Contact Todd Harris Company in Edison, NJ. Pool service, construction, chemicals, and supplies. Call 732-287-4443 or visit us at 2 Sutton Place.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        subtitle="Call us or send a message. Whatever works for you."
        image={IMAGES.contact}
        imageAlt="Todd Harris Company team"
      />

      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <CopperLine className="mb-4" />
            <h2 className="text-2xl">Contact information</h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-copper mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-navy">Phone</p>
                  <a href={COMPANY.phone.mainTel} className="text-gray-medium hover:text-copper transition-colors">
                    {COMPANY.phone.main}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-copper mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-navy">Email</p>
                  <a href={`mailto:${COMPANY.email}`} className="text-gray-medium hover:text-copper transition-colors">
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-copper mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-navy">Address</p>
                  <p className="text-gray-medium">{COMPANY.address.full}</p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-gray-medium">
              Looking for pool supplies and retail products? Visit the{' '}
              <a href={COMPANY.storeWebsite} target="_blank" rel="noopener noreferrer" className="text-copper hover:text-copper-dark">
                Spa & Pool Store
              </a>.
            </p>
          </div>

          <div className="lg:col-span-2">
            <CopperLine className="mb-4" />
            <h2 className="text-2xl">Send us a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="service-request" className="bg-concrete">
        <div className="max-w-3xl mx-auto">
          <CopperLine className="mb-4" />
          <h2>Request service</h2>
          <p className="mt-2 text-gray-medium">
            Need to schedule a specific service call? Fill out the form below with details about the issue and we&apos;ll get back to you within one business day.
          </p>
          <div className="mt-8">
            <ServiceRequestForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
