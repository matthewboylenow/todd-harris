import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/lib/constants';
import { Phone } from 'lucide-react';

export function CtaStrip() {
  return (
    <section className="bg-copper py-16 md:py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-white">Need something for your pool?</h2>
        <p className="mt-4 text-white/90 text-lg">
          Call us or send us a message. Whatever it is, we can help.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="bg-navy hover:bg-navy-light text-white font-sans text-base px-8">
            <a href={COMPANY.phone.mainTel}>
              <Phone className="mr-2 h-4 w-4" />
              Call {COMPANY.phone.main}
            </a>
          </Button>
          <Button asChild size="lg" className="border border-white/30 bg-transparent text-white hover:bg-white/20 font-sans text-base px-8">
            <Link href="/contact#service-request">Request Service Online</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
