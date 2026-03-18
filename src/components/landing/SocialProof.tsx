"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

const DELIVERY_DEPARTMENTS = [
  "Tafi del Valle",
  "Monteros",
  "Chicligasta",
  "Río Chico",
  "J.B. Alberdi",
];

export default function SocialProof() {
  return (
    <section
      id="cobertura"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
      /* style={{ backgroundImage: "url(/images/mejores-lugares-turisticos-tucuman.webp)" }} */
      aria-labelledby="cobertura-title"
    >
      <div className="absolute inset-0 bg-white/60" aria-hidden="true" />
      <div className="relative z-10 max-w-[1600px] mx-auto w-full">
        <div className="grid md:grid-cols-[minmax(280px,400px)_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 md:order-1"
          >
            <h2
              id="cobertura-title"
              className="text-3xl md:text-4xl font-bold text-text"
            >
              Zonas de cobertura
            </h2>
            <p className="text-gray-soft text-lg">
              Más de 300 comercios abastecidos en la región. Realizamos delivery
              en los siguientes departamentos:
            </p>
            <div className="rounded-2xl border border-gray-border bg-white p-6 shadow-soft">
              <p className="text-gray-soft text-sm font-medium mb-4">
                Departamentos con delivery
              </p>
              <ul className="space-y-3" role="list">
                {DELIVERY_DEPARTMENTS.map((dept) => (
                  <li
                    key={dept}
                    className="flex items-center gap-3 text-text font-medium"
                  >
                    <span
                      className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                      aria-hidden
                    >
                      <MapPin className="w-4 h-4 text-primary" aria-hidden />
                    </span>
                    {dept}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <div className="relative w-full min-w-0 overflow-hidden">
              <Image
                src="/images/tucuman-delivery2.png"
                alt="Mapa de departamentos con cobertura de delivery: Tafi del Valle, Monteros, Chicligasta, Río Chico, J.B. Alberdi"
                width={800}
                height={1067}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
