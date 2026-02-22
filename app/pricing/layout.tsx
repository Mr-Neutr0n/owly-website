import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Pricing',
  description: 'Compare Owly plans and choose the right setup for your team, from starter workflows to enterprise scale.',
  path: '/pricing',
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
