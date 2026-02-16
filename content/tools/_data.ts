export interface ToolPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  description: string;
  relatedToolSlugs: string[];
  relatedMakeSlugs: string[];
}

export const toolPages: ToolPage[] = [
  {
    slug: 'video-ad-script-generator',
    title: 'Video Ad Script Generator',
    metaTitle: 'Free Video Ad Script Generator',
    metaDescription: 'Generate compelling video ad scripts in seconds. Enter your product details and get a ready-to-use script with hook, body, and CTA.',
    headline: 'Generate Video Ad Scripts in Seconds',
    description: 'Enter your product URL or description, choose your platform and ad length, and get a professional video ad script with a scroll-stopping hook, persuasive body, and clear call-to-action.',
    relatedToolSlugs: ['hook-generator'],
    relatedMakeSlugs: ['instagram-video-ads', 'tiktok-video-ads'],
  },
  {
    slug: 'hook-generator',
    title: 'Video Hook Generator',
    metaTitle: 'Free Video Hook Generator',
    metaDescription: 'Generate scroll-stopping video hooks that capture attention in the first 3 seconds. Proven hooks for TikTok, Instagram, and YouTube.',
    headline: 'Create Scroll-Stopping Video Hooks',
    description: 'The first 3 seconds decide if someone watches or scrolls. Generate proven hook formats tailored to your product, audience, and platform.',
    relatedToolSlugs: ['video-ad-script-generator'],
    relatedMakeSlugs: ['tiktok-video-ads'],
  },
];
