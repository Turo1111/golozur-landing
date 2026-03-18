"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { landingImages } from "./assets";

const WHATSAPP_LINK = "https://wa.me/XXXXXXXXXXX";

export default function EmergencyBlock() {
  const img = landingImages.emergencyUrgent;
  return (
    <section
      className="pt-16 md:pt-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="emergency-title"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="relative flex-shrink-0 w-[250px] h-[250px] rounded-2xl overflow-hidden bg-primary/20 min-w-[128px] min-h-[128px]">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex-1 text-center md:text-left space-y-4">
            <h2
              id="emergency-title"
              className="text-2xl md:text-3xl font-bold text-text"
            >
              ¿Necesitás reposición urgente?
            </h2>
            <p className="text-gray-soft text-lg">
              Coordinamos entrega o retiro según tu zona. Escribinos por WhatsApp
              y te respondemos lo antes posible.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-primary rounded-xl hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
              aria-label="Hablar por WhatsApp"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Hablar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
