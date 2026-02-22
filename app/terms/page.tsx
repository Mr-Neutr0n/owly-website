import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Terms of Service',
  description: 'Read the terms that govern use of the Owly website and related services.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen pt-[100px] pb-[80px]">
      <div className="max-w-[820px] mx-auto px-6">
        <h1 className="text-[36px] md:text-[48px] font-semibold leading-[1.1] tracking-[-2px] text-black mb-6">
          Terms of Service
        </h1>
        <p className="text-[16px] leading-[28px] text-[#3a3a3a] mb-4">
          By using this website, you agree to use it lawfully and not misuse content, forms, or systems.
        </p>
        <p className="text-[16px] leading-[28px] text-[#3a3a3a] mb-4">
          All website content, brand assets, and software materials are owned by Owly or its licensors unless stated otherwise.
        </p>
        <p className="text-[16px] leading-[28px] text-[#3a3a3a] mb-4">
          We may update this website and these terms over time. Continued use after updates means you accept the latest version.
        </p>
        <p className="text-[16px] leading-[28px] text-[#3a3a3a] mb-4">
          For commercial or legal questions, contact support@owly.studio.
        </p>
      </div>
    </div>
  );
}
