export interface MakePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  features: { title: string; description: string }[];
  steps: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  ctaText: string;
  ctaHref: string;
  relatedSlugs: string[];
}

export const makePages: MakePage[] = [
  {
    slug: 'instagram-video-ads',
    title: 'Instagram Video Ads',
    metaTitle: 'Create Instagram Video Ads with AI',
    metaDescription: 'Create scroll-stopping Instagram video ads in minutes. AI-powered video creation for Reels, Stories, and Feed. No editing skills needed.',
    headline: 'Create Instagram Video Ads That Convert',
    subheadline: 'Generate high-performing Instagram Reels, Stories, and Feed video ads with AI. From concept to publish in minutes, not weeks.',
    steps: [
      { step: '01', title: 'Describe your ad', description: 'Enter your product URL or paste a brief. Owly extracts your brand context and generates a storyboard.' },
      { step: '02', title: 'Generate and edit', description: 'AI creates your video with hooks, transitions, and CTAs. Edit anything with simple text commands.' },
      { step: '03', title: 'Publish and test', description: 'Export in Reels, Stories, or Feed formats. Generate A/B variations and publish directly.' },
    ],
    features: [
      { title: 'Reels-Ready Formats', description: 'Auto-generate vertical 9:16 videos optimized for Instagram Reels with trending hooks and transitions.' },
      { title: 'Brand-Safe AI', description: 'Upload your brand guidelines once. Every video stays on-brand with your colors, fonts, and tone of voice.' },
      { title: 'A/B Variations', description: 'Generate multiple video variations from a single brief. Test different hooks, CTAs, and visuals to find what converts.' },
      { title: 'Team Review', description: 'Share drafts with your team for feedback. Comment, approve, and iterate, all in one place.' },
    ],
    faqs: [
      { question: 'How long does it take to create an Instagram video ad?', answer: 'Most users go from brief to finished video in under 10 minutes. AI handles the editing, transitions, and formatting so you can focus on the creative direction.' },
      { question: 'Do I need video editing experience?', answer: 'No. Owly is built for marketing teams, not video editors. You describe what you want in plain text and the AI generates a professional video ad.' },
      { question: 'Can I maintain my brand guidelines?', answer: 'Yes. Upload your brand colors, fonts, logo, and tone of voice once. Every video Owly generates stays within your brand guidelines automatically.' },
      { question: 'What Instagram formats are supported?', answer: 'Owly supports Reels (9:16), Stories (9:16), Feed posts (1:1 and 4:5), and carousel video ads. You can generate the same ad in multiple formats simultaneously.' },
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
    steps: [
      { step: '01', title: 'Input your brief', description: 'Paste your product link or describe your campaign. Owly analyzes your brand and suggests TikTok-native formats.' },
      { step: '02', title: 'AI generates your ad', description: 'Get UGC-style videos with authentic pacing, trending transitions, and platform-native text overlays.' },
      { step: '03', title: 'Test and iterate', description: 'Generate multiple hook variations. A/B test to find what drives the best engagement and conversions.' },
    ],
    features: [
      { title: 'UGC-Style Generation', description: 'AI creates authentic-looking creator-style videos that feel native to TikTok, not like polished ads.' },
      { title: 'Trending Formats', description: 'Stay on top of TikTok trends. Generate videos using proven ad formats that drive engagement.' },
      { title: 'Fast Iteration', description: 'Go from brief to finished ad in minutes. Test ideas quickly without waiting on editors or agencies.' },
      { title: 'Performance Analytics', description: 'Track which creative variations perform best and let data guide your next campaign.' },
    ],
    faqs: [
      { question: 'Can Owly make ads that look like real TikTok content?', answer: 'Yes. Owly generates UGC-style videos with casual pacing, native text overlays, and authentic transitions that blend into the TikTok feed rather than looking like traditional ads.' },
      { question: 'What TikTok ad formats does Owly support?', answer: 'Owly creates In-Feed ads, Spark Ads content, and TopView-ready videos. All in 9:16 vertical format optimized for TikTok specs.' },
      { question: 'How many variations can I create?', answer: 'Unlimited. Generate as many hook and creative variations as you need from a single brief. Most teams test 5-10 variations per campaign to find winners.' },
      { question: 'Does Owly integrate with TikTok Ads Manager?', answer: 'You can export videos in TikTok-optimized formats and upload directly. Direct API integration with TikTok Ads Manager is on our roadmap.' },
    ],
    ctaText: 'Try it free',
    ctaHref: 'https://app.owly.studio',
    relatedSlugs: ['instagram-video-ads'],
  },
];
