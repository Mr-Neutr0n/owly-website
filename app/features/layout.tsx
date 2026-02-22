import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Features',
  description: 'Explore Owly features for ideation, video creation, iteration, and campaign analysis in one workflow.',
  path: '/features',
});

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
