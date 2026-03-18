"use client";

import Link from "next/link";
import { FileText } from "lucide-react";

export default function FloatingQuoteButton() {
  return (
    <Link
      href="#cotizacion"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all hover:scale-105"
      aria-label="Solicitar cotización"
    >
      <FileText className="w-6 h-6" aria-hidden="true" />
    </Link>
  );
}
