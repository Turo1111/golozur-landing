"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { landingImages } from "./assets";

export default function Hero() {
  const hero = landingImages.hero;
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${hero.src})` }}
      aria-labelledby="hero-title"
      aria-label={hero.alt}
    >
      {/* Overlay para legibilidad del texto */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl space-y-6"
        >
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg"
          >
            Abastecé tu comercio con entrega confiable y catálogo amplio.
          </h1>
          <p className="text-lg text-white/90 max-w-xl drop-shadow-md">
            Distribuimos productos de múltiples proveedores; venta por unidad
            y por bulto; cobertura por localidades; retiro o entrega a domicilio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#catalogo"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-xl hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
            >
              Ver catálogo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
