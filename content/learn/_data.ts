export interface LearnPage {
  slug: string;
  term: string;
  metaTitle: string;
  metaDescription: string;
  definition: string;
  body: string;
  sources: { title: string; url: string }[];
  relatedTerms: string[];
}

export const learnPages: LearnPage[] = [
  {
    slug: 'ugc-video-ads',
    term: 'UGC Video Ads',
    metaTitle: 'What Are UGC Video Ads?',
    metaDescription: 'Learn what UGC video ads are, why they outperform polished ads, and how marketing teams use them to drive conversions.',
    definition: 'User-generated content (UGC) video ads are advertisements that mimic the look and feel of content created by real users rather than brands. They use casual filming styles, authentic testimonials, and relatable scenarios to build trust and drive engagement.',
    body: `<h2 class="text-2xl font-semibold mt-10 mb-4 tracking-[-1px]">Why UGC Video Ads Work</h2>
<p class="text-[16px] leading-[28px] text-[#3a3a3a] mb-5">UGC-style video ads consistently outperform polished brand content on platforms like TikTok, Instagram Reels, and YouTube Shorts. According to a 2024 report by Stackla, <strong>79% of consumers say UGC highly impacts their purchasing decisions</strong>, and UGC ads see 4x higher click-through rates compared to traditional studio-produced ads (Source: <a href="https://www.tintup.com/blog/user-generated-content-statistics/" class="underline">TINT, 2024</a>).</p>
<p class="text-[16px] leading-[28px] text-[#3a3a3a] mb-5">The reason is straightforward: people trust people. A Nielsen study found that <strong>92% of consumers trust organic, user-generated content more than traditional advertising</strong> (Source: <a href="https://www.nielsen.com/insights/2021/beyond-martech-building-trust/" class="underline">Nielsen, 2021</a>). When an ad looks like it was made by a real person sharing their genuine experience, viewers are more likely to engage, watch longer, and take action.</p>
<h2 class="text-2xl font-semibold mt-10 mb-4 tracking-[-1px]">How Marketing Teams Create UGC Ads</h2>
<p class="text-[16px] leading-[28px] text-[#3a3a3a] mb-5">Traditionally, brands hire creators to film UGC-style content - a process that involves briefing, filming, editing, and multiple revision rounds. This can take 2-4 weeks and cost $500-$5,000 per video depending on the creator (Source: <a href="https://influencermarketinghub.com/ugc-creator-rates/" class="underline">Influencer Marketing Hub, 2024</a>). AI-powered tools like Owly allow marketing teams to generate UGC-style video ads directly from a product description or creative brief, cutting production time from weeks to minutes.</p>
<p class="text-[16px] leading-[28px] text-[#3a3a3a] mb-3"><em>Last updated: February 2026</em></p>`,
    sources: [
      { title: 'TINT - User-Generated Content Statistics', url: 'https://www.tintup.com/blog/user-generated-content-statistics/' },
      { title: 'Nielsen - Building Trust Beyond Martech', url: 'https://www.nielsen.com/insights/2021/beyond-martech-building-trust/' },
      { title: 'Influencer Marketing Hub - UGC Creator Rates', url: 'https://influencermarketinghub.com/ugc-creator-rates/' },
    ],
    relatedTerms: ['performance-creative'],
  },
  {
    slug: 'performance-creative',
    term: 'Performance Creative',
    metaTitle: 'What Is Performance Creative?',
    metaDescription: 'Learn what performance creative means, how it differs from brand creative, and why data-driven video ads outperform gut-feel campaigns.',
    definition: 'Performance creative refers to ad creative - typically video - that is designed, tested, and optimized specifically to drive measurable business outcomes like clicks, conversions, and revenue, rather than purely brand awareness or aesthetic goals.',
    body: `<h2 class="text-2xl font-semibold mt-10 mb-4 tracking-[-1px]">Performance Creative vs. Brand Creative</h2>
<p class="text-[16px] leading-[28px] text-[#3a3a3a] mb-5">Brand creative focuses on storytelling, emotional connection, and long-term brand building. Performance creative focuses on immediate, measurable results. According to a 2024 survey by Motion (formerly Foreplay), <strong>72% of DTC brands now allocate over 60% of their ad budget to performance creative</strong> rather than brand campaigns (Source: <a href="https://motionapp.com/creative-trends-2024" class="underline">Motion, 2024</a>).</p>
<p class="text-[16px] leading-[28px] text-[#3a3a3a] mb-5">A performance creative workflow involves rapid ideation, fast production, A/B testing multiple variations, analyzing results, and iterating on winners. Speed matters - Meta's own research shows that <strong>refreshing ad creative every 2-4 weeks reduces cost-per-acquisition by up to 20%</strong> compared to running the same creative for months (Source: <a href="https://www.facebook.com/business/help/202195703544438" class="underline">Meta Business Help Center</a>).</p>
<h2 class="text-2xl font-semibold mt-10 mb-4 tracking-[-1px]">Why Video Dominates Performance Creative</h2>
<p class="text-[16px] leading-[28px] text-[#3a3a3a] mb-5">Video ads consistently outperform static image ads across platforms. According to Wyzowl's 2024 Video Marketing Statistics report, <strong>91% of businesses use video as a marketing tool</strong>, and video marketers report that video directly increases sales for 87% of them (Source: <a href="https://www.wyzowl.com/video-marketing-statistics/" class="underline">Wyzowl, 2024</a>). Teams that can produce and test video variations quickly have a significant competitive advantage.</p>
<p class="text-[16px] leading-[28px] text-[#3a3a3a] mb-3"><em>Last updated: February 2026</em></p>`,
    sources: [
      { title: 'Motion - Creative Trends 2024', url: 'https://motionapp.com/creative-trends-2024' },
      { title: 'Meta Business Help Center - Ad Creative Best Practices', url: 'https://www.facebook.com/business/help/202195703544438' },
      { title: 'Wyzowl - Video Marketing Statistics 2024', url: 'https://www.wyzowl.com/video-marketing-statistics/' },
    ],
    relatedTerms: ['ugc-video-ads'],
  },
];
