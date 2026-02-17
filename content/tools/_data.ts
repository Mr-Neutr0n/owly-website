export interface ToolPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  description: string;
  features: { title: string; description: string }[];
  steps: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
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
    steps: [
      { step: '01', title: 'Enter your product', description: 'Paste a product URL or describe what you are advertising. The tool extracts key selling points automatically.' },
      { step: '02', title: 'Choose format', description: 'Select your platform (Instagram, TikTok, YouTube), ad length (15s, 30s, 60s), and tone (professional, casual, urgent).' },
      { step: '03', title: 'Get your script', description: 'Receive a structured script with hook, value proposition, social proof, and CTA. Copy, edit, or generate variations.' },
    ],
    features: [
      { title: 'Platform-Optimized', description: 'Scripts tailored to each platform. TikTok scripts feel native, Instagram scripts are visual-first, YouTube scripts hold attention longer.' },
      { title: 'Multiple Hooks', description: 'Generate 3-5 hook variations per script so you can A/B test the opening that captures the most attention.' },
      { title: 'Structured Format', description: 'Every script follows a proven structure: hook, problem, solution, proof, CTA. No guesswork about what to say when.' },
      { title: 'Brand Voice Match', description: 'Describe your brand tone and the generator adapts. From playful DTC to enterprise B2B, the output matches your voice.' },
    ],
    faqs: [
      { question: 'Is this tool really free?', answer: 'Yes. The video ad script generator is completely free to use with no account required. Generate as many scripts as you need.' },
      { question: 'What makes a good video ad script?', answer: 'A strong hook in the first 3 seconds, a clear value proposition, social proof or credibility, and a specific call-to-action. Our generator structures every script this way.' },
      { question: 'Can I use the generated scripts commercially?', answer: 'Yes. All scripts generated are yours to use however you want, including for paid advertising campaigns.' },
      { question: 'How is this different from ChatGPT?', answer: 'This tool is specifically trained on high-performing video ad scripts. It understands platform-specific pacing, hook formats, and ad structures that general AI tools miss.' },
    ],
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
    steps: [
      { step: '01', title: 'Describe your product', description: 'Tell us what you are selling, who your audience is, and what problem you solve.' },
      { step: '02', title: 'Pick hook types', description: 'Choose from question hooks, stat hooks, controversy hooks, before/after hooks, or let the tool suggest the best formats.' },
      { step: '03', title: 'Generate hooks', description: 'Get 10+ hook variations ready to test. Each one is designed to stop the scroll in the first 3 seconds.' },
    ],
    features: [
      { title: 'Proven Hook Formats', description: 'Based on analysis of thousands of high-performing video ads. Every hook follows patterns that actually stop the scroll.' },
      { title: 'Platform-Specific', description: 'TikTok hooks are different from YouTube hooks. The generator adapts pacing, length, and style for each platform.' },
      { title: 'Bulk Generation', description: 'Generate 10+ variations at once. Test multiple hooks to find the one that performs best for your specific audience.' },
      { title: 'Category Templates', description: 'Question hooks, stat hooks, controversy hooks, pain point hooks, transformation hooks. Pick your format or mix them.' },
    ],
    faqs: [
      { question: 'Why do the first 3 seconds matter so much?', answer: 'On platforms like TikTok and Instagram Reels, users decide to watch or scroll within 1-3 seconds. A strong hook is the single biggest factor in whether your ad gets watched or ignored.' },
      { question: 'What types of hooks can I generate?', answer: 'Question hooks, statistic hooks, controversy hooks, before/after hooks, pain point hooks, and transformation hooks. Each type works best for different products and audiences.' },
      { question: 'How many hooks should I test per campaign?', answer: 'Most performance marketing teams test 5-10 hook variations per campaign. The top 1-2 performers typically drive 80% of results.' },
      { question: 'Is this tool free?', answer: 'Yes. The hook generator is completely free with no account required.' },
    ],
    relatedToolSlugs: ['video-ad-script-generator'],
    relatedMakeSlugs: ['tiktok-video-ads'],
  },
];
