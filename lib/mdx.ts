import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updatedAt?: string;
  category: string;
  image: string;
  author: { name: string; avatar: string };
  tags: string[];
  readingTime: string;
  content: string;
}

export function getAllBlogPosts(): BlogPost[] {
  const blogDir = path.join(CONTENT_DIR, 'blog');

  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));

  return files
    .map(filename => {
      const filePath = path.join(blogDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      const slug = filename.replace('.mdx', '');

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        updatedAt: data.updatedAt,
        category: data.category,
        image: data.image,
        author: data.author || { name: 'Owly Team', avatar: '/images/logo/owly-logo.svg' },
        tags: data.tags || [],
        readingTime: readingTime(content).text,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find(p => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return getAllBlogPosts().map(p => p.slug);
}
