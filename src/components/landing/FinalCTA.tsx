"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus("error");
      setMessage("Ingresá tu email.");
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      setMessage("El email no es válido.");
      return;
    }
    setStatus("success");
    setMessage("¡Gracias! Te enviaremos novedades y lista de precios.");
    setEmail("");
  };

  return (
    <section
      id="cotizacion"
      className="py-32 md:py-40 px-4 sm:px-6 lg:px-8 bg-primary"
      aria-labelledby="cta-title"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          id="cta-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Conectemos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/90 text-lg mb-8"
        >
          Recibí lista de precios y novedades.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 items-center justify-center"
        >
          {/* <div className="relative w-full max-w-[200px] md:max-w-[240px] aspect-[320/200] flex-shrink-0">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="object-contain w-full h-full"
              sizes="(max-width: 768px) 200px, 240px"
            />
          </div> */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto flex-1"
          >
            <label htmlFor="cta-email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="cta-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              aria-label="Correo electrónico"
              aria-invalid={status === "error"}
              aria-describedby={status === "error" ? "cta-error" : undefined}
              className="flex-1 px-4 py-3 rounded-xl border-2 border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 font-medium text-primary bg-white rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary transition-colors"
            >
              Recibir info
            </button>
          </form>
        </motion.div>

        {message && (
          <p
            id="cta-error"
            role="alert"
            className={`mt-4 text-sm ${status === "success" ? "text-white" : "text-white/90"
              }`}
          >
            {message}
          </p>
        )}

        <p className="text-white/70 text-xs mt-6 max-w-md mx-auto">
          Tus datos son privados. No compartimos tu información con terceros.
          Solo te enviaremos novedades y lista de precios de GOLOZUR.
        </p>
      </div>
    </section>
  );
}
