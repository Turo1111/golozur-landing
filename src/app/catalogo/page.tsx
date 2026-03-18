import Link from "next/link";
import Header from "@/components/landing/Header";

export const metadata = {
  title: "Catálogo | GOLOZUR",
  description: "Catálogo de productos GOLOZUR - próximamente",
};

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white pt-24">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-text mb-4">
          Catálogo
        </h1>
        <p className="text-gray-soft mb-8">
          Estamos trabajando en el catálogo online. Pronto vas a poder consultar
          productos por categorías y marcas. Mientras tanto, contactanos por
          WhatsApp o teléfono para recibir la lista de precios.
        </p>
        <Link
          href="/#cotizacion"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary rounded-xl hover:bg-primary-dark"
        >
          Solicitar lista de precios
        </Link>
        <Link
          href="/"
          className="block mt-4 text-primary hover:underline"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
    </>
  );
}
