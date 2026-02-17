import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Didact_Gothic } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const didactGothic = Didact_Gothic({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-didact',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://owly.studio'),
  title: {
    default: 'Owly | One Workspace for Ad Campaigns',
    template: '%s | Owly',
  },
  description: 'One workspace where marketing teams make ad campaigns together. Storyboard, script, AI video generation, review, all in one place.',
  keywords: ['video ad creation', 'AI video ads', 'marketing team collaboration', 'video ad campaign tool'],
  authors: [{ name: 'Owly' }],
  openGraph: {
    title: 'Owly | One Workspace for Ad Campaigns',
    description: 'Storyboard, script, AI video generation, review. All in one place for marketing teams.',
    siteName: 'Owly',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://owly.studio/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Owly | One Workspace for Ad Campaigns',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Owly | One Workspace for Ad Campaigns',
    description: 'Storyboard, script, AI video generation, review. All in one place.',
    images: ['https://owly.studio/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${didactGothic.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Owly',
              url: 'https://owly.studio',
              description: 'One workspace where marketing teams make ad campaigns together. Storyboard, script, AI video generation, review, all in one place.',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                description: 'Free trial available',
              },
            }),
          }}
        />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
