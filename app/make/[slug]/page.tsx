import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { makePages } from '@/content/make/_data';
import { createMetadata } from '@/lib/metadata';
import { softwareApplicationSchema } from '@/lib/schema';
import MakePageClient from './MakePageClient';

export async function generateStaticParams() {
  return makePages.map(page => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = makePages.find(p => p.slug === slug);
  if (!page) return {};

  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/make/${slug}`,
  });
}

export default async function MakePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = makePages.find(p => p.slug === slug);
  if (!page) notFound();

  const relatedPages = page.relatedSlugs
    .map(s => makePages.find(p => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => p != null)
    .map(p => ({ slug: p.slug, title: p.title }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema()) }}
      />
      <MakePageClient page={page} relatedPages={relatedPages} />
    </>
  );
}
