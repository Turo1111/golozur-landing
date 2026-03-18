"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data/landing";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft py-4"
          : "bg-transparent py-5"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-primary hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          aria-label="GOLOZUR - Inicio"
        >
          GOLOZUR
        </Link>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text text-sm font-medium hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/catalogo"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Ver catálogo"
          >
            Ver catálogo
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-text hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-border"
          >
            <nav
              className="px-4 py-4 flex flex-col gap-4"
              aria-label="Menú móvil"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-text font-medium hover:text-primary py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark"
                onClick={() => setIsOpen(false)}
              >
                Ver catálogo
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
