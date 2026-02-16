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
    default: 'Owly - One Workspace for Ad Campaigns',
    template: '%s | Owly',
  },
  description: 'One workspace where marketing teams make ad campaigns together. Storyboard, script, AI video generation, review - all in one place.',
  keywords: ['video ad creation', 'AI video ads', 'marketing team collaboration', 'video ad campaign tool'],
  openGraph: {
    siteName: 'Owly',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
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
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
