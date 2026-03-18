"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { landingImages } from "./assets";

const BULLETS = [
  "Disponibilidad constante para que no te quedes sin stock.",
  "Reposición ordenada en función de tu demanda.",
  "Condiciones claras: precios, plazos y formas de pago.",
];

export default function SolutionSection() {
  const img = landingImages.solutionPicking;
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      aria-labelledby="solucion-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2
              id="solucion-title"
              className="text-3xl md:text-4xl font-bold text-text"
            >
              Logística ordenada para que no te falte stock.
            </h2>
            <ul className="space-y-4" role="list">
              {BULLETS.map((text, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5"
                    aria-hidden="true"
                  >
                    <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                  </span>
                  <span className="text-gray-soft">{text}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#cotizacion"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary rounded-xl hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
            >
              Conocer condiciones
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] max-w-md mx-auto rounded-2xl overflow-hidden bg-primary/5 min-h-[240px]">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="object-contain w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
