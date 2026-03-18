import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GOLOZUR | Distribuidora con entrega confiable y catálogo amplio",
  description:
    "Abastecé tu comercio con entrega confiable. Distribuimos productos de múltiples proveedores; venta por unidad y por bulto; cobertura por localidades; retiro o entrega. Kioscos, almacenes y comercios minoristas.",
  openGraph: {
    title: "GOLOZUR | Distribuidora con entrega confiable y catálogo amplio",
    description:
      "Abastecé tu comercio con entrega confiable. Venta por unidad y por bulto. Cobertura por localidades. Retiro o entrega.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
