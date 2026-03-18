import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Post Not Found | Todd Harris Company Blog',
  description: 'This blog post could not be found.',
};

export default function BlogPostPage() {
  return (
    <section className="bg-navy py-24 md:py-32 px-6 min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-widest text-copper mb-4">Blog</p>
        <div className="h-[2px] w-12 bg-copper mx-auto mb-6" />
        <h1 className="text-white">Post not found</h1>
        <p className="mt-4 text-lg text-concrete/80">
          This blog post doesn&apos;t exist or may have been removed.
        </p>
        <Link href="/blog" className="mt-6 inline-block text-copper hover:text-copper-dark font-medium">
          Back to blog
        </Link>
      </div>
    </section>
  );
}
