import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { learnPages } from '@/content/learn/_data';
import { createMetadata } from '@/lib/metadata';
import { definitionSchema } from '@/lib/schema';

export async function generateStaticParams() {
  return learnPages.map(page => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = learnPages.find(p => p.slug === slug);
  if (!page) return {};

  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/learn/${slug}`,
  });
}

export default async function LearnPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = learnPages.find(p => p.slug === slug);
  if (!page) notFound();

  const jsonLd = definitionSchema(page.term, page.definition);

  const relatedPages = page.relatedTerms
    .map(s => learnPages.find(p => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => p != null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white min-h-screen pt-[100px] pb-[80px]">
        <div className="max-w-[720px] mx-auto px-6">
          <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4 block">
            Learn
          </span>
          <h1 className="text-[36px] md:text-[48px] font-semibold leading-[1.1] tracking-[-2px] text-black mb-6">
            {page.term}
          </h1>
          <p className="text-lg text-[#3a3a3a] font-medium mb-10 border-l-4 border-black pl-4">
            {page.definition}
          </p>
          <div dangerouslySetInnerHTML={{ __html: page.body }} />

          {/* Sources - GEO: citing sources is the #1 strategy for AI engine visibility */}
          {page.sources && page.sources.length > 0 && (
            <div className="mt-12 pt-6 border-t border-[#e5e5e5]">
              <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-gray-500 mb-3">
                Sources
              </h3>
              <ol className="list-decimal pl-5 space-y-1 text-[14px] text-[#6b6b6b]">
                {page.sources.map((source, i) => (
                  <li key={i}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">
                      {source.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {relatedPages.length > 0 && (
            <div className="mt-16 pt-8 border-t border-[#e5e5e5]">
              <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-gray-500 mb-4">
                Related Terms
              </h3>
              <div className="flex flex-wrap gap-3">
                {relatedPages.map(rp => (
                  <Link
                    key={rp.slug}
                    href={`/learn/${rp.slug}`}
                    className="px-4 py-2 rounded-full border border-[#e0e0e0] text-sm text-gray-700 hover:border-black/50 hover:text-black transition-colors"
                  >
                    {rp.term}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
