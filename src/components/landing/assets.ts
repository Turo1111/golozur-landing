/**
 * Imágenes de la landing GOLOZUR.
 * Rutas web desde /images/... (Next.js sirve public/ como raíz).
 */
export interface LandingImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

export const landingImages = {
  hero: {
    src: "/images/golozur-hero-warehouse.png",
    alt: "Depósito y logística GOLOZUR: abastecimiento para comercios",
    width: 800,
    height: 600,
    priority: true,
  },
  serviceDelivery: {
    src: "/images/golozur-service-delivery.png",
    alt: "Entrega a domicilio y en ruta",
    width: 150,
    height: 150,
  },
  servicePickup: {
    src: "/images/golozur-service-pickup.png",
    alt: "Retiro en depósito",
    width: 150,
    height: 150,
  },
  serviceUnitBulk: {
    src: "/images/golozur-service-unit-bulk.png",
    alt: "Venta por unidad y por bulto",
    width: 150,
    height: 150,
  },
  serviceCatalog: {
    src: "/images/golozur-service-catalog.png",
    alt: "Ver catálogo de productos",
    width: 150,
    height: 150,
  },
  solutionPicking: {
    src: "/images/golozur-solution-picking.png",
    alt: "Logística y preparación de pedidos para tu comercio",
    width: 560,
    height: 420,
  },
  featureTracking: {
    src: "/images/golozur-feature-tracking.png",
    alt: "Seguimiento y disponibilidad de stock",
    width: 480,
    height: 360,
  },
  emergencyUrgent: {
    src: "/images/golozur-emergency-urgent.png",
    alt: "Reposición urgente por WhatsApp",
    width: 420,
    height: 420,
  },
  howItWorksSelect: {
    src: "/images/golozur-howitworks-select.png",
    alt: "Paso 1: Elegir productos del catálogo",
    width: 120,
    height: 120,
  },
  howItWorksPack: {
    src: "/images/golozur-howitworks-pack.png",
    alt: "Paso 2: Armado del pedido",
    width: 120,
    height: 120,
  },
  howItWorksDeliver: {
    src: "/images/golozur-howitworks-deliver.png",
    alt: "Paso 3: Entrega o retiro",
    width: 120,
    height: 120,
  },
  ctaNewsletter: {
    src: "/images/golozur-cta-newsletter.png",
    alt: "Recibí lista de precios y novedades por email",
    width: 320,
    height: 200,
  },
  testimonialDecor: {
    src: "/images/golozur-testimonial-decor.png",
    alt: "",
    width: 80,
    height: 80,
  },
} as const satisfies Record<string, LandingImage>;
