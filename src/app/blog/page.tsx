import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pool Tips & News | Todd Harris Company Blog',
  description: 'Pool tips, news, and updates from Todd Harris Company in Edison, NJ.',
};

export default function BlogPage() {
  return (
    <section className="bg-navy py-24 md:py-32 px-6 min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-widest text-copper mb-4">Blog</p>
        <div className="h-[2px] w-12 bg-copper mx-auto mb-6" />
        <h1 className="text-white">Coming soon</h1>
        <p className="mt-4 text-lg text-concrete/80">
          We&apos;re working on pool care tips and industry updates. Check back soon.
        </p>
      </div>
    </section>
  );
}
