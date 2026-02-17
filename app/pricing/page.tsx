'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Check, X, Zap, Users, Building2 } from 'lucide-react';
import NumberFlow from '@number-flow/react';
import ScrollFAQAccordion from '@/components/ui/scroll-faq-accordion';

// Types
type BillingCycle = 'monthly' | 'annually';

interface Feature {
  name: string;
  starter: boolean | string;
  growth: boolean | string;
  enterprise: boolean | string;
}

// Pricing Data
const pricingTiers = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for individuals and small teams getting started with AI video.',
    icon: Zap,
    priceMonthly: 980,
    priceAnnually: 784, // 20% discount
    credits: '3,500',
    buttonLabel: 'Start Free Trial',
    popular: false,
    features: [
      '7 high-performing 25-second videos',
      'Unlimited storyboard creation & edits',
      '5 video clip regenerations/month',
      'Brand memory (logo, colors, fonts, tone)',
      'Priority render queue',
      'Email support',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'For growing teams that need advanced automation and integrations.',
    icon: Users,
    priceMonthly: 1980,
    priceAnnually: 1584, // 20% discount
    credits: '10,000',
    buttonLabel: 'Start Free Trial',
    popular: true,
    features: [
      'Everything in Starter, plus:',
      '20 high-performing videos/month',
      'Automated UI motion graphics for SaaS',
      'Agentic editor with simple instructions',
      'Google Ads & Meta Ads integration',
      'Ad analytics feedback loop',
      'Competitor content analysis',
      '15 video clip regenerations/month',
      'Dedicated customer support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Advanced features and dedicated support for large organizations.',
    icon: Building2,
    priceMonthly: null,
    priceAnnually: null,
    credits: 'Custom',
    buttonLabel: 'Contact Sales',
    popular: false,
    features: [
      'Everything in Growth, plus:',
      'Unlimited videos/month',
      'Custom integrations & API access',
      'Dedicated account manager',
      'Custom onboarding & training',
      'SLA guarantee (99.9% uptime)',
      'Advanced security & compliance',
      'White-label options',
      'Priority feature requests',
    ],
  },
];

// Feature comparison data
const comparisonFeatures: Feature[] = [
  { name: 'Monthly video credits', starter: '3,500', growth: '10,000', enterprise: 'Custom' },
  { name: 'Videos per month', starter: '7', growth: '20', enterprise: 'Unlimited' },
  { name: 'Video length', starter: '25 seconds', growth: '60 seconds', enterprise: 'Custom' },
  { name: 'Storyboard creation', starter: true, growth: true, enterprise: true },
  { name: 'Video regenerations', starter: '5/month', growth: '15/month', enterprise: 'Unlimited' },
  { name: 'Brand memory', starter: true, growth: true, enterprise: true },
  { name: 'Priority render queue', starter: true, growth: true, enterprise: true },
  { name: 'UI motion graphics (SaaS)', starter: false, growth: true, enterprise: true },
  { name: 'Agentic editor', starter: false, growth: true, enterprise: true },
  { name: 'Google & Meta Ads integration', starter: false, growth: true, enterprise: true },
  { name: 'Ad analytics feedback loop', starter: false, growth: true, enterprise: true },
  { name: 'Competitor analysis', starter: false, growth: true, enterprise: true },
  { name: 'API access', starter: false, growth: false, enterprise: true },
  { name: 'Dedicated account manager', starter: false, growth: false, enterprise: true },
  { name: 'SLA guarantee', starter: false, growth: false, enterprise: true },
  { name: 'Custom integrations', starter: false, growth: false, enterprise: true },
];

const faqs = [
  {
    id: 1,
    question: 'What are credits and how do they work?',
    answer: 'Credits are used to generate video content. Each video uses a certain number of credits based on length and complexity. Unused credits roll over for up to 3 months.',
  },
  {
    id: 2,
    question: 'Can I change plans later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. When upgrading, you get immediate access to new features. When downgrading, changes take effect at your next billing cycle.',
  },
  {
    id: 3,
    question: 'Is there a free trial?',
    answer: 'Yes! All plans come with a 14-day free trial with full access to features. No credit card required to start.',
  },
  {
    id: 4,
    question: 'What happens if I run out of credits?',
    answer: 'You can purchase additional credit packs anytime, or upgrade to a higher tier for more monthly credits. We\'ll notify you when you\'re running low.',
  },
  {
    id: 5,
    question: 'How does brand memory work?',
    answer: 'Once you upload your brand assets (logo, colors, fonts, tone guidelines), Owly remembers them and automatically applies your brand identity to all videos you create.',
  },
  {
    id: 6,
    question: 'What\'s included in the ad platform integrations?',
    answer: 'Growth and Enterprise plans include direct integration with Google Ads and Meta Ads, allowing you to publish and manage ad campaigns directly from Owly with performance tracking.',
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annually');

  const handleCycleChange = (value: string) => {
    if (value === 'monthly' || value === 'annually') {
      setBillingCycle(value);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] md:text-[12px] font-light uppercase tracking-[6px] text-[#6b6b6b]">
              Pricing
            </span>
            <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold tracking-[-2px] md:tracking-[-3px] leading-[1.05] text-[#0a0a0a] mt-4">
              Simple, Transparent
              <br />
              Pricing
            </h1>
            <p className="text-[16px] md:text-[20px] leading-[1.5] text-[#6b6b6b] max-w-2xl mx-auto mt-6">
              Choose the perfect plan for your video creation needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mt-10"
          >
            <ToggleGroup
              type="single"
              value={billingCycle}
              onValueChange={handleCycleChange}
              aria-label="Select billing cycle"
              className="border border-black/10 rounded-full p-1 bg-neutral-50"
            >
              <ToggleGroupItem
                value="monthly"
                aria-label="Monthly Billing"
                className="px-6 py-2 text-sm font-medium rounded-full transition-all data-[state=on]:bg-black data-[state=on]:text-white"
              >
                Monthly
              </ToggleGroupItem>
              <ToggleGroupItem
                value="annually"
                aria-label="Annual Billing"
                className="px-6 py-2 text-sm font-medium rounded-full transition-all data-[state=on]:bg-black data-[state=on]:text-white relative"
              >
                Annually
                <span className="absolute -top-3 -right-2 text-[10px] font-semibold text-white bg-black px-2 py-0.5 rounded-full">
                  -20%
                </span>
              </ToggleGroupItem>
            </ToggleGroup>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier, index) => {
              const Icon = tier.icon;
              const currentPrice = billingCycle === 'monthly' ? tier.priceMonthly : tier.priceAnnually;
              const isCustom = currentPrice === null;

              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    'relative flex flex-col rounded-2xl border p-8 transition-all duration-300',
                    tier.popular
                      ? 'border-black bg-black text-white shadow-2xl scale-[1.02] z-10'
                      : 'border-black/10 bg-white hover:border-black/30 hover:shadow-lg'
                  )}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                      tier.popular ? 'bg-white/10' : 'bg-black/5'
                    )}>
                      <Icon className={cn('w-6 h-6', tier.popular ? 'text-white' : 'text-black')} />
                    </div>
                    <h3 className="text-[24px] md:text-[28px] font-semibold tracking-[-1px]">{tier.name}</h3>
                    <p className={cn(
                      'text-[14px] md:text-[15px] leading-[1.5] mt-2',
                      tier.popular ? 'text-white/70' : 'text-[#6b6b6b]'
                    )}>
                      {tier.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    {isCustom ? (
                      <div className="text-4xl font-bold">Custom</div>
                    ) : (
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">$</span>
                        <NumberFlow
                          value={currentPrice}
                          className="text-5xl font-bold"
                          transformTiming={{ duration: 500, easing: 'ease-out' }}
                          spinTiming={{ duration: 500, easing: 'ease-out' }}
                        />
                        <span className={cn(
                          'text-base ml-2',
                          tier.popular ? 'text-white/60' : 'text-[#6b6b6b]'
                        )}>
                          /month
                        </span>
                      </div>
                    )}
                    {!isCustom && billingCycle === 'annually' && (
                      <p className={cn(
                        'text-sm mt-1',
                        tier.popular ? 'text-white/50' : 'text-[#6b6b6b]'
                      )}>
                        Billed annually (${currentPrice * 12}/year)
                      </p>
                    )}
                    <p className={cn(
                      'text-sm mt-2 font-medium',
                      tier.popular ? 'text-white/80' : 'text-black'
                    )}>
                      {tier.credits} credits/month
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className={cn(
                          'h-5 w-5 mr-3 flex-shrink-0 mt-0.5',
                          tier.popular ? 'text-white' : 'text-black'
                        )} />
                        <span className={cn(
                          'text-sm',
                          tier.popular ? 'text-white/90' : 'text-[#4a4a4a]'
                        )}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={tier.buttonLabel === 'Contact Sales' ? '/#contact' : 'https://app.owly.studio'}
                    className={cn(
                      'w-full py-3 rounded-full font-semibold transition-all duration-200 block text-center',
                      tier.popular
                        ? 'bg-white text-black hover:bg-neutral-100'
                        : 'bg-black text-white hover:bg-neutral-800'
                    )}
                  >
                    {tier.buttonLabel}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold tracking-[-2px] leading-[1.1] text-[#0a0a0a]">
              Compare Plans
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[1.5] text-[#6b6b6b] mt-4 max-w-2xl mx-auto">
              Find the perfect plan for your needs with our detailed feature comparison.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:block overflow-hidden rounded-2xl border border-black/10 bg-white"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="px-6 py-5 text-left text-sm font-semibold text-black w-[280px]">
                    Feature
                  </th>
                  {pricingTiers.map((tier) => (
                    <th
                      key={tier.id}
                      className={cn(
                        'px-6 py-5 text-center text-sm font-semibold',
                        tier.popular ? 'bg-black text-white' : 'text-black'
                      )}
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {comparisonFeatures.map((feature, index) => (
                  <tr key={feature.name} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}>
                    <td className="px-6 py-4 text-sm text-[#4a4a4a] font-medium">
                      {feature.name}
                    </td>
                    {(['starter', 'growth', 'enterprise'] as const).map((tierKey) => {
                      const value = feature[tierKey];
                      const tier = pricingTiers.find(t => t.id === tierKey);
                      const isPopular = tier?.popular;

                      return (
                        <td
                          key={tierKey}
                          className={cn(
                            'px-6 py-4 text-center',
                            isPopular && 'bg-black/[0.02]'
                          )}
                        >
                          {typeof value === 'boolean' ? (
                            value ? (
                              <Check className="h-5 w-5 mx-auto text-black" />
                            ) : (
                              <X className="h-5 w-5 mx-auto text-neutral-300" />
                            )
                          ) : (
                            <span className="text-sm font-medium text-black">{value}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile comparison - simplified */}
          <div className="md:hidden space-y-4">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={cn(
                  'rounded-xl border p-6',
                  tier.popular ? 'border-black bg-black text-white' : 'border-black/10 bg-white'
                )}
              >
                <h3 className="text-xl font-bold mb-4">{tier.name}</h3>
                <ul className="space-y-2">
                  {comparisonFeatures.slice(0, 8).map((feature) => {
                    const value = feature[tier.id as keyof typeof feature];
                    if (value === false) return null;
                    return (
                      <li key={feature.name} className="flex items-center text-sm">
                        <Check className={cn(
                          'h-4 w-4 mr-2',
                          tier.popular ? 'text-white' : 'text-black'
                        )} />
                        <span>{feature.name}: {typeof value === 'boolean' ? '✓' : value}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Scroll Animated */}
      <ScrollFAQAccordion
        data={faqs}
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our pricing, features, and services."
      />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold tracking-[-2px] leading-[1.1] mb-6">
              Ready to transform your video creation?
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[1.5] text-white/70 mb-10 max-w-2xl mx-auto">
              Join thousands of marketing teams creating better ads in less time. Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.owly.studio" className="bg-white text-black px-8 py-3.5 rounded-full font-semibold text-[15px] hover:bg-neutral-100 transition-colors">
                Start Free Trial
              </a>
              <a href="/#contact" className="border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold text-[15px] hover:bg-white/10 transition-colors">
                Talk to Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
