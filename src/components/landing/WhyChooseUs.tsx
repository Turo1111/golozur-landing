"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  MapPin,
  Package,
  DollarSign,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/landing";
import { landingImages } from "./assets";

const icons = [Heart, MapPin, Package, DollarSign];

export default function WhyChooseUs() {
  const img = landingImages.featureTracking;
  return (
    <section
      id="por-que-golozur"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/Gemini_Generated_Image_2qeipo2qeipo2qei.png)" }}
      aria-labelledby="por-que-title"
    >
      <div className="absolute inset-0 bg-white/85" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2
              id="por-que-title"
              className="text-3xl md:text-4xl font-bold text-text"
            >
              Por qué elegir GOLOZUR
            </h2>
            <p className="text-gray-soft text-lg">
              Somos una distribuidora con foco en la confianza, la cercanía
              y el orden. Trabajamos para que tu comercio tenga siempre
              lo que necesita para crecer.
            </p>
            {/* <Link
              href="#cotizacion"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary rounded-xl hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
            >
              Solicitar cotización
            </Link> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* <div className="relative aspect-[4/3] max-w-sm rounded-2xl overflow-hidden bg-primary/5">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="object-contain w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div> */}
            <div className="grid grid-cols-2 gap-4">
              {WHY_CHOOSE_US.map((item, i) => {
                const Icon = icons[i] ?? Package;
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-gray-border bg-white p-6 shadow-soft hover:shadow-card transition-shadow"
                  >
                    <div
                      className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3"
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-text mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-soft">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
