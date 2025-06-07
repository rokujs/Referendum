# Referendo Constitucional: Por un Trabajo Digno en Colombia

Este proyecto es una página web informativa sobre la iniciativa ciudadana de referendo constitucional en Colombia, orientada a proteger los derechos laborales de los trabajadores informales, enfrentar los retos de la automatización y promover la equidad social.

## Tecnologías utilizadas

- **Astro**: Framework principal para la construcción del sitio web.
- **Tailwind CSS**: Utilizado para el diseño y estilos responsivos.
- **Vite**: Herramienta de desarrollo y bundler (integrado con Astro).
- **Cloudflare**: Adaptador para despliegue en Cloudflare.
- **pnpm**: Gestor de paquetes utilizado en el proyecto.

## Estructura del proyecto

- `src/components/`: Componentes reutilizables de la página.
- `src/layouts/`: Plantillas de layout para las páginas.
- `src/pages/`: Páginas principales del sitio.
- `src/content/`: Colecciones de contenido dinámico (puntos, claves, etc).
- `public/`: Archivos estáticos (imágenes, íconos, etc).
- `styles/`: Archivos CSS globales.

## Comandos disponibles

- `pnpm install`: Instala las dependencias del proyecto.
- `pnpm dev`: Inicia el servidor de desarrollo en modo local.
- `pnpm build`: Genera la versión de producción del sitio.
- `pnpm preview`: Previsualiza el sitio generado tras el build.

## Cómo iniciar el proyecto

1. Clona el repositorio y entra en la carpeta del proyecto.
2. Instala las dependencias:
   ```sh
   pnpm install
   ```
3. Inicia el servidor de desarrollo:
   ```sh
   pnpm dev
   ```
4. Abre tu navegador en `http://localhost:4321` (o el puerto indicado en consola).

## Despliegue

El proyecto está preparado para ser desplegado en Cloudflare utilizando el adaptador oficial de Astro.

## Notas adicionales

- El contenido principal se gestiona mediante archivos Markdown en la carpeta `src/content/`.
- El diseño es completamente responsivo y accesible.
- Para modificar los estilos globales, edita `src/styles/global.css`.
