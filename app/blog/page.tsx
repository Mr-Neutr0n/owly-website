import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/mdx';
import { createMetadata } from '@/lib/metadata';
import BlogListClient from './BlogListClient';

export const metadata: Metadata = createMetadata({
  title: 'Blog',
  description: 'Stay up to date with the latest trends in AI video creation, performance marketing, and creative automation.',
  path: '/blog',
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return <BlogListClient posts={posts} />;
}
