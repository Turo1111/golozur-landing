"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/landing";
import { landingImages, type LandingImage } from "./assets";

const serviceImages: Record<string, LandingImage> = {
  entrega: landingImages.serviceDelivery,
  retiro: landingImages.servicePickup,
  "unidad-bulto": landingImages.serviceUnitBulk,
  catalogo: landingImages.serviceCatalog,
};

export default function ServicesBlueSection() {
  return (
    <section
      id="servicios"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary overflow-visible"
      aria-labelledby="servicios-title"
    >
      <div className="max-w-7xl mx-auto overflow-visible">
        <motion.h2
          id="servicios-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-32"
        >
          Servicios
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-visible">
          {SERVICES.map((service, i) => {
            const img = serviceImages[service.id];
            const cardId = service.id === "catalogo" ? "catalogo" : undefined;
            const content = (
              <motion.div
                key={service.id}
                id={cardId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white/10 backdrop-blur rounded-2xl pt-24 pb-6 px-6 hover:bg-white/15 transition-colors h-full flex flex-col items-center overflow-visible min-h-[280px]"
              >
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-[150px] h-[150px] rounded-xl bg-white/50 flex items-center justify-center overflow-hidden z-10">
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
                <h3 className="text-lg font-semibold text-white mb-2 mt-6 text-center">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm flex-1 text-center">
                  {service.description}
                </p>
                {service.isLink && (
                  <Link
                    href={service.link ?? "#"}
                    className="mt-4 inline-flex items-center text-white font-medium text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded mx-auto"
                  >
                    Ir al catálogo →
                  </Link>
                )}
              </motion.div>
            );
            return service.isLink ? (
              <Link key={service.id} href={service.link ?? "#"} className="overflow-visible block">
                {content}
              </Link>
            ) : (
              <div key={service.id} className="overflow-visible">{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
