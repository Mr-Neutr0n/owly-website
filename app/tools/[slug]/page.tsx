import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { toolPages } from '@/content/tools/_data';
import { createMetadata } from '@/lib/metadata';

export async function generateStaticParams() {
  return toolPages.map(page => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = toolPages.find(p => p.slug === slug);
  if (!page) return {};

  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/tools/${slug}`,
  });
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = toolPages.find(p => p.slug === slug);
  if (!page) notFound();

  const relatedTools = page.relatedToolSlugs
    .map(s => toolPages.find(p => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => p != null);

  return (
    <div className="bg-white min-h-screen pt-[100px] pb-[80px]">
      <div className="max-w-[900px] mx-auto px-6">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4 block">
          Free Tool
        </span>
        <h1 className="text-[36px] md:text-[48px] font-semibold leading-[1.1] tracking-[-2px] text-black mb-6">
          {page.headline}
        </h1>
        <p className="text-lg text-gray-600 max-w-[600px] mb-12">
          {page.description}
        </p>

        {/* Tool placeholder — interactive components will be added in Phase 3 */}
        <div className="rounded-[20px] border border-[#e5e5e5] bg-[#fafafa] p-12 text-center mb-12">
          <p className="text-gray-500 text-lg mb-6">
            This tool is coming soon.
          </p>
          <a
            href="https://app.owly.studio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Try Owly instead
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {relatedTools.length > 0 && (
          <div className="mt-16 pt-8 border-t border-[#e5e5e5]">
            <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-gray-500 mb-4">
              Related Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {relatedTools.map(rt => (
                <Link
                  key={rt.slug}
                  href={`/tools/${rt.slug}`}
                  className="px-4 py-2 rounded-full border border-[#e0e0e0] text-sm text-gray-700 hover:border-black/50 hover:text-black transition-colors"
                >
                  {rt.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
