import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description: 'Read how Owly collects, uses, and protects personal information on owly.studio.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen pt-[100px] pb-[80px]">
      <div className="max-w-[820px] mx-auto px-6">
        <h1 className="text-[36px] md:text-[48px] font-semibold leading-[1.1] tracking-[-2px] text-black mb-6">
          Privacy Policy
        </h1>
        <p className="text-[16px] leading-[28px] text-[#3a3a3a] mb-4">
          We use this website to explain Owly products and collect inquiries from potential customers.
        </p>
        <p className="text-[16px] leading-[28px] text-[#3a3a3a] mb-4">
          We may collect contact details that you submit in forms, plus standard website analytics data used for product and marketing measurement.
        </p>
        <p className="text-[16px] leading-[28px] text-[#3a3a3a] mb-4">
          We do not sell personal data. We use trusted service providers for hosting, analytics, and communications.
        </p>
        <p className="text-[16px] leading-[28px] text-[#3a3a3a] mb-4">
          To request access, correction, or deletion of your data, contact us at support@owly.studio.
        </p>
      </div>
    </div>
  );
}
