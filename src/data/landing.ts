export const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#por-que-golozur", label: "Por qué GOLOZUR" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export const SERVICES = [
  {
    id: "entrega",
    title: "Entrega a domicilio / en ruta",
    description: "Llevamos tu pedido hasta tu comercio en las zonas de cobertura.",
  },
  {
    id: "retiro",
    title: "Retiro en depósito",
    description: "Retirá tu mercadería en nuestro depósito cuando te quede cómodo.",
  },
  {
    id: "unidad-bulto",
    title: "Venta por unidad y por bulto",
    description: "Flexibilidad para abastecerte según la necesidad de tu negocio.",
  },
  {
    id: "catalogo",
    title: "Ver catálogo",
    description: "Explorá nuestro amplio surtido de productos por categorías y marcas.",
    link: "/catalogo",
    isLink: true,
  },
];

export const WHY_CHOOSE_US = [
  {
    id: "atencion",
    title: "Atención cercana",
    description: "Trato directo y personalizado para resolver tus dudas rápido.",
  },
  {
    id: "cobertura",
    title: "Cobertura por localidades",
    description: "Operamos en múltiples ciudades y zonas de la región.",
  },
  {
    id: "stock",
    title: "Stock y reposición",
    description: "Control de inventario para que tengas disponibilidad constante.",
  },
  {
    id: "precios",
    title: "Precios por unidad/bulto",
    description: "Opciones claras para que elijas la forma que te conviene.",
  },
];

export const HOW_IT_WORKS = [
  {
    id: 1,
    title: "Elegís productos",
    description: "Consultá nuestro catálogo y elegí lo que necesitás para tu comercio.",
  },
  {
    id: 2,
    title: "Armamos tu pedido",
    description: "Coordinamos con vos y preparamos todo para entrega o retiro.",
  },
  {
    id: 3,
    title: "Entregamos o retirás",
    description: "Recibís la mercadería en tu local o pasás a buscarla al depósito.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    text: "Desde que trabajo con GOLOZUR la reposición es más ordenada. Me entregan en día y hora, y puedo pedir tanto por unidad como por bulto según la temporada.",
    author: "Roberto M.",
    role: "Dueño de Kiosco / Almacén",
    rating: 5,
  },
  {
    id: 2,
    text: "La atención es muy buena y el catálogo tiene de todo. Ya no tengo que ir a varios proveedores, con un solo pedido abastezco el local.",
    author: "María S.",
    role: "Comercio de barrio",
    rating: 5,
  },
  {
    id: 3,
    text: "Las condiciones son claras y la logística respeta los horarios. Muy conforme con el servicio.",
    author: "Carlos L.",
    role: "Almacén",
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    id: "unidad-bulto",
    question: "¿Venden por unidad y por bulto?",
    answer:
      "Sí. Ofrecemos ambas modalidades para que puedas adaptar tus compras a la demanda de tu comercio. Los precios y condiciones se informan según cada producto.",
  },
  {
    id: "lista-precios",
    question: "¿Cómo solicito la lista de precios?",
    answer:
      "Podés solicitar la lista de precios contactándonos por WhatsApp, por teléfono o completando el formulario de contacto. Te la enviamos actualizada según tu zona y condiciones.",
  },
  {
    id: "zonas",
    question: "¿En qué zonas entregan?",
    answer:
      "Tenemos cobertura en múltiples localidades de la región. Comunicate con nosotros para confirmar si atendemos tu zona y coordinar entregas o retiros en depósito.",
  },
  {
    id: "pagos",
    question: "¿Cuáles son los medios de pago?",
    answer:
      "Aceptamos transferencia bancaria, tarjetas de crédito y débito (Visa, Mastercard) y efectivo según las condiciones acordadas con cada cliente.",
  },
  {
    id: "retiro",
    question: "¿Puedo retirar en depósito?",
    answer:
      "Sí. Ofrecemos la opción de retiro en depósito para que puedas pasar a buscar tu pedido cuando te quede cómodo. Coordinamos horarios y disponibilidad.",
  },
];

export const SOCIAL_PROOF_LOGOS = [
  "Kiosco Norte",
  "Almacén Central",
  "Comercio Sur",
  "Minimercado Este",
  "Negocio Oeste",
  "Bodegón Centro",
];

export const FOOTER_SERVICES = [
  { label: "Entrega a domicilio", href: "#servicios" },
  { label: "Retiro en depósito", href: "#servicios" },
  { label: "Catálogo", href: "#catalogo" },
];

export const FOOTER_EMPRESA = [
  { label: "Quiénes somos", href: "#por-que-golozur" },
  { label: "Cómo funciona", href: "#como-funciona" },
];

export const CONTACT_PLACEHOLDERS = {
  phone: "+54 9 XXX XXX XXXX",
  email: "contacto@golozur.com",
  location: "Localidad, Región",
};
