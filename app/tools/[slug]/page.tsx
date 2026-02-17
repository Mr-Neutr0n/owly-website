import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { toolPages } from '@/content/tools/_data';
import { makePages } from '@/content/make/_data';
import { createMetadata } from '@/lib/metadata';
import { faqSchema } from '@/lib/schema';
import ToolPageClient from './ToolPageClient';

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
    .filter((p): p is NonNullable<typeof p> => p != null)
    .map(p => ({ slug: p.slug, title: p.title }));

  const relatedMakePages = page.relatedMakeSlugs
    .map(s => makePages.find(p => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => p != null)
    .map(p => ({ slug: p.slug, title: p.title }));

  return (
    <>
      {page.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(page.faqs)) }}
        />
      )}
      <ToolPageClient page={page} relatedTools={relatedTools} relatedMakePages={relatedMakePages} />
    </>
  );
}
