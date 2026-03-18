"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/data/landing";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      aria-labelledby="faq-title"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          id="faq-title"
          className="text-3xl md:text-4xl font-bold text-text text-center mb-12"
        >
          Preguntas frecuentes
        </h2>
        <div
          className="space-y-2"
          role="region"
          aria-labelledby="faq-title"
        >
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-gray-border bg-white shadow-soft overflow-hidden"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${item.id}`}
                    id={`faq-trigger-${item.id}`}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-medium text-text hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                  >
                    {item.question}
                    <span
                      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4 text-gray-soft" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-4 text-gray-soft">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
