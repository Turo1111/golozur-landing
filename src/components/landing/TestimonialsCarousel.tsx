"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/landing";

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const goTo = (i: number) => {
    setCurrent((i + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="testimonios-title"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="testimonios-title"
          className="text-3xl md:text-4xl font-bold text-text text-center mb-12"
        >
          Lo que dicen nuestros clientes
        </h2>

        <div className="relative bg-primary rounded-2xl p-8 md:p-12 shadow-card min-h-[280px]">
          {/* <div
            className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 opacity-30"
            aria-hidden="true"
          >
            <Image
              src={decor.src}
              alt=""
              width={decor.width}
              height={decor.height}
              className="object-contain w-full h-full"
              aria-hidden
            />
          </div> */}
          <AnimatePresence mode="wait">
            <motion.article
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-white relative z-10"
              aria-live="polite"
              aria-atomic="true"
            >
              <blockquote className="space-y-6">
                <p className="text-xl md:text-2xl font-medium leading-relaxed">
                  &ldquo;{TESTIMONIALS[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-2" aria-hidden="true">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-white text-white"
                        aria-hidden="true"
                      />
                    )
                  )}
                </div>
                <footer>
                  <cite className="not-italic font-semibold">
                    {TESTIMONIALS[current].author}
                  </cite>
                  <p className="text-white/90 text-sm mt-1">
                    {TESTIMONIALS[current].role}
                  </p>
                </footer>
              </blockquote>
            </motion.article>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8 relative z-10">
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </button>

            <div
              className="flex gap-2"
              role="tablist"
              aria-label="Navegación de testimonios"
            >
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Ver testimonio ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40 hover:bg-white/60"
                    }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(current + 1)}
              className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
