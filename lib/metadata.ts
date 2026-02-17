import { Metadata } from 'next';

const SITE_URL = 'https://owly.studio';
const SITE_NAME = 'Owly';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og/default.png`;

export function createMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  tags,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image
    ? image.startsWith('/') ? `${SITE_URL}${image}` : image
    : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(tags && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
