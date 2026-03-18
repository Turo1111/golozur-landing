"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HOW_IT_WORKS } from "@/data/landing";
import { landingImages } from "./assets";

const stepImages = [
  landingImages.howItWorksSelect,
  landingImages.howItWorksPack,
  landingImages.howItWorksDeliver,
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      aria-labelledby="como-funciona-title"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="como-funciona-title"
          className="text-3xl md:text-4xl font-bold text-text text-center mb-12"
        >
          Cómo funciona
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {HOW_IT_WORKS.map((step, i) => {
            const img = stepImages[i];
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="rounded-2xl border border-gray-border bg-white p-8 shadow-soft hover:shadow-card transition-shadow h-full flex flex-col items-center text-center">
                  <div className="w-32 h-32 md:w-64 md:h-40 rounded-xl flex items-center justify-center mb-4 overflow-hidden flex-shrink-0">
                    {img ? (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className="object-contain w-full h-full"
                      />
                    ) : null}
                  </div>
                  <div
                    className="text-4xl font-bold text-primary/30 mb-2"
                    aria-hidden="true"
                  >
                    {step.id}
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-soft text-sm">{step.description}</p>
                </div>
                {i < HOW_IT_WORKS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-border -translate-y-1/2 z-0"
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
