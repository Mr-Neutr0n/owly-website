import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'About',
  description: 'Learn how Owly brings performance and creative teams together to build better ad campaigns faster.',
  path: '/about',
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
