# GOLOZUR Landing

Landing page institucional de GOLOZUR desarrollada con Next.js, TypeScript y Tailwind CSS. El sitio presenta la propuesta comercial de la distribuidora, sus servicios, preguntas frecuentes, prueba social y un acceso a la sección de catálogo.

## Tecnologias

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Secciones principales

- `Hero` con propuesta de valor principal
- `Servicios` con modalidades de entrega, retiro y acceso a catalogo
- `Testimonios` y bloque de confianza
- `Por que elegirnos`
- `Como funciona`
- `FAQ`
- `CTA final` y footer

## Rutas disponibles

- `/`: landing principal
- `/catalogo`: pagina informativa del catalogo

## Estructura del proyecto

```text
src/
  app/
    catalogo/
    layout.tsx
    page.tsx
  components/
    landing/
  data/
    landing.ts
public/
  images/
```

## Scripts

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

## Desarrollo local

1. Instalar dependencias con `npm install`.
2. Levantar el entorno con `npm run dev`.
3. Abrir `http://localhost:3000` en el navegador.

## Contenido editable

- Los textos y listas principales se centralizan en `src/data/landing.ts`.
- La composicion de la home vive en `src/app/page.tsx`.
- Los metadatos generales del sitio estan en `src/app/layout.tsx`.
- Los componentes visuales estan en `src/components/landing/`.

## Notas

- El proyecto usa App Router de Next.js.
- La ruta `/catalogo` actualmente funciona como placeholder informativo.
- Existe un archivo `public/images/mapa3d.html` para contenido auxiliar en la carpeta publica.

## Licencia

Este repositorio se distribuye bajo una licencia propietaria. Revisar el archivo `LICENSE` para mas informacion.
