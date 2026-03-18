"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import {
  FOOTER_SERVICES,
  FOOTER_EMPRESA,
  CONTACT_PLACEHOLDERS,
} from "@/data/landing";

const PAYMENT_BADGES = ["Visa", "Mastercard", "Transferencia"];

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-text text-white py-16 px-4 sm:px-6 lg:px-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2" role="list">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2" role="list">
              {FOOTER_EMPRESA.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3" role="list">
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+540000000000" className="hover:text-white">
                  {CONTACT_PLACEHOLDERS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_PLACEHOLDERS.email}`}
                  className="hover:text-white"
                >
                  {CONTACT_PLACEHOLDERS.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>{CONTACT_PLACEHOLDERS.location}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {PAYMENT_BADGES.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/90"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-white/70 text-sm">
          <p>© {new Date().getFullYear()} GOLOZUR. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
