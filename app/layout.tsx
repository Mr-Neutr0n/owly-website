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
  title: 'Owly - Innovative Solutions for Your Business',
  description: 'Empowering businesses with innovative solutions for a better tomorrow. Discover our features, pricing, and more.',
  keywords: ['business solutions', 'innovation', 'technology', 'productivity'],
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
