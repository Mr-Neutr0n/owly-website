const SITE_URL = 'https://www.owly.studio';

export function organizationSchema() {
  const socialProfiles = [
    'https://www.linkedin.com/company/owlystudios/',
    'https://x.com/OwlyStudioai',
    'https://www.instagram.com/owly.studios/',
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Owly',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/owly-logo.svg`,
    description: 'One workspace where marketing teams make ad campaigns together.',
    email: 'hari@owly.studio',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'hari@owly.studio',
        telephone: '+91 9188589920',
        availableLanguage: ['en'],
      },
    ],
    sameAs: socialProfiles,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Owly',
    url: SITE_URL,
    inLanguage: 'en-US',
  };
}

export function blogPostSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  updatedAt?: string;
  image: string;
  author: { name: string };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    image: post.image.startsWith('/') ? `${SITE_URL}${post.image}` : post.image,
    author: { '@type': 'Person', name: post.author.name },
    publisher: organizationSchema(),
  };
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Owly',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: SITE_URL,
    description: 'One workspace where marketing teams make ad campaigns together. Storyboard, script, AI video generation, review - all in one place.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free trial available',
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function definitionSchema(term: string, definition: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term,
    description: definition,
  };
}
