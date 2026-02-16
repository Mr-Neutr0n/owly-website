import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllBlogSlugs, getBlogPostBySlug } from '@/lib/mdx';
import { createMetadata } from '@/lib/metadata';
import { blogPostSchema } from '@/lib/schema';
import BlogPostClient from './BlogPostClient';

const mdxComponents = {
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="text-2xl font-semibold mt-10 mb-4 tracking-[-1px] text-black" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="text-xl font-semibold mt-8 mb-3 text-black" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<'p'>) => (
    <p className="text-[16px] leading-[28px] text-[#3a3a3a] mb-5" {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => (
    <ul className="list-disc pl-6 mb-5 space-y-2 text-[#3a3a3a] text-[16px] leading-[28px]" {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<'ol'>) => (
    <ol className="list-decimal pl-6 mb-5 space-y-2 text-[#3a3a3a] text-[16px] leading-[28px]" {...props} />
  ),
  a: (props: React.ComponentPropsWithoutRef<'a'>) => (
    <a className="text-black underline underline-offset-4 hover:text-gray-600 transition-colors" {...props} />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote className="border-l-4 border-black pl-4 italic text-[#6b6b6b] my-6" {...props} />
  ),
  code: (props: React.ComponentPropsWithoutRef<'code'>) => (
    <code className="bg-[#f5f5f5] px-1.5 py-0.5 rounded text-[14px]" {...props} />
  ),
  pre: (props: React.ComponentPropsWithoutRef<'pre'>) => (
    <pre className="bg-[#f5f5f5] rounded-[12px] p-4 overflow-x-auto mb-5 text-[14px]" {...props} />
  ),
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    image: post.image,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.updatedAt,
    tags: post.tags,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = blogPostSchema(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="bg-white min-h-screen pt-[100px] pb-[80px]">
        <div className="max-w-[720px] mx-auto px-6">
          <BlogPostClient post={post} />
          <div className="mt-8">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </div>
      </article>
    </>
  );
}
