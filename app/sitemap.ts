import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/mdx';
import { makePages } from '@/content/make/_data';
import { learnPages } from '@/content/learn/_data';
import { toolPages } from '@/content/tools/_data';

const SITE_URL = 'https://owly.studio';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/features`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map(post => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const makeEntries: MetadataRoute.Sitemap = makePages.map(page => ({
    url: `${SITE_URL}/make/${page.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const learnEntries: MetadataRoute.Sitemap = learnPages.map(page => ({
    url: `${SITE_URL}/learn/${page.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const toolEntries: MetadataRoute.Sitemap = toolPages.map(page => ({
    url: `${SITE_URL}/tools/${page.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogEntries, ...makeEntries, ...learnEntries, ...toolEntries];
}
