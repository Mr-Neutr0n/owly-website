import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Didact_Gothic } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { organizationSchema, softwareApplicationSchema, websiteSchema } from '@/lib/schema';

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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Owly | One Workspace for Ad Campaigns',
    description: 'Storyboard, script, AI video generation, review. All in one place for marketing teams.',
    url: 'https://owly.studio/',
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DC9CB1PFQ7" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DC9CB1PFQ7');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [organizationSchema(), websiteSchema(), softwareApplicationSchema()],
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
