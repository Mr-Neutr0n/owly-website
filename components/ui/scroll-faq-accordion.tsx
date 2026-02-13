"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface ScrollFAQAccordionProps {
  data: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ScrollFAQAccordion({
  data,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our pricing, features, and services.",
  className,
}: ScrollFAQAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <section
      className={cn(
        "bg-[#0a0a0a] py-20 md:py-28 px-6",
        className
      )}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold tracking-[-2px] leading-[1.1] text-white mb-4">
            {title}
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[1.5] text-white/60 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Accordion */}
        <Accordion.Root
          type="single"
          collapsible
          value={openItem || ""}
          onValueChange={setOpenItem}
          className="space-y-4"
        >
          {data.map((item, index) => {
            const isOpen = openItem === item.id.toString();

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Accordion.Item
                  value={item.id.toString()}
                  className="group"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center gap-4 text-left cursor-pointer">
                      {/* Question pill */}
                      <div
                        className={cn(
                          "inline-flex items-center gap-3 rounded-full px-5 py-3.5 transition-all duration-300",
                          isOpen
                            ? "bg-[#2a2a2a] text-white"
                            : "bg-[#1a1a1a] text-white/80 hover:bg-[#222]"
                        )}
                      >
                        <span className="font-medium text-[15px] md:text-[16px] tracking-[-0.3px]">
                          {item.question}
                        </span>
                      </div>

                      {/* +/- icon */}
                      <div className={cn(
                        "text-white/60 transition-colors",
                        isOpen && "text-white"
                      )}>
                        {isOpen ? (
                          <Minus className="h-5 w-5" />
                        ) : (
                          <Plus className="h-5 w-5" />
                        )}
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <AnimatePresence>
                    {isOpen && (
                      <Accordion.Content forceMount asChild>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          {/* Answer bubble - positioned to the right */}
                          <div className="flex justify-end mt-4 ml-8 md:ml-16">
                            <div className="max-w-xl rounded-2xl px-6 py-4 bg-[#3b82f6] text-white text-[15px] md:text-[16px] leading-[1.6] shadow-lg shadow-blue-500/20">
                              {item.answer}
                            </div>
                          </div>
                        </motion.div>
                      </Accordion.Content>
                    )}
                  </AnimatePresence>
                </Accordion.Item>
              </motion.div>
            );
          })}
        </Accordion.Root>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-white/40 text-[14px] mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:support@owly.studio"
            className="inline-flex items-center gap-2 text-white font-medium text-[15px] hover:text-blue-400 transition-colors"
          >
            Contact our support team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
