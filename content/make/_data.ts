export interface MakePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  features: { title: string; description: string }[];
  ctaText: string;
  ctaHref: string;
  relatedSlugs: string[];
}

export const makePages: MakePage[] = [
  {
    slug: 'instagram-video-ads',
    title: 'Instagram Video Ads',
    metaTitle: 'Create Instagram Video Ads with AI',
    metaDescription: 'Create scroll-stopping Instagram video ads in minutes. AI-powered video creation for Reels, Stories, and Feed - no editing skills needed.',
    headline: 'Create Instagram Video Ads That Convert',
    subheadline: 'Generate high-performing Instagram Reels, Stories, and Feed video ads with AI. From concept to publish in minutes, not weeks.',
    features: [
      { title: 'Reels-Ready Formats', description: 'Auto-generate vertical 9:16 videos optimized for Instagram Reels with trending hooks and transitions.' },
      { title: 'Brand-Safe AI', description: 'Upload your brand guidelines once. Every video stays on-brand with your colors, fonts, and tone of voice.' },
      { title: 'A/B Variations', description: 'Generate multiple video variations from a single brief. Test different hooks, CTAs, and visuals to find what converts.' },
      { title: 'Team Review', description: 'Share drafts with your team for feedback. Comment, approve, and iterate - all in one place.' },
    ],
    ctaText: 'Try it free',
    ctaHref: 'https://app.owly.studio',
    relatedSlugs: ['tiktok-video-ads'],
  },
  {
    slug: 'tiktok-video-ads',
    title: 'TikTok Video Ads',
    metaTitle: 'Create TikTok Video Ads with AI',
    metaDescription: 'Make native-feeling TikTok video ads that blend into the feed. AI-powered UGC-style ads, product demos, and trending formats.',
    headline: 'Make TikTok Ads That Feel Native',
    subheadline: 'Create UGC-style TikTok ads that blend into the feed. AI handles the editing so your team focuses on strategy.',
    features: [
      { title: 'UGC-Style Generation', description: 'AI creates authentic-looking creator-style videos that feel native to TikTok, not like polished ads.' },
      { title: 'Trending Formats', description: 'Stay on top of TikTok trends. Generate videos using proven ad formats that drive engagement.' },
      { title: 'Fast Iteration', description: 'Go from brief to finished ad in minutes. Test ideas quickly without waiting on editors or agencies.' },
      { title: 'Performance Analytics', description: 'Track which creative variations perform best and let data guide your next campaign.' },
    ],
    ctaText: 'Try it free',
    ctaHref: 'https://app.owly.studio',
    relatedSlugs: ['instagram-video-ads'],
  },
];
