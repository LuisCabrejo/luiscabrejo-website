/**
 * Archivo robots.txt dinámico para LuisCabrejo.com
 * Configura el comportamiento de los crawlers de motores de búsqueda
 */

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://luiscabrejo.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // Bloquear APIs
          '/_next/',         // Archivos internos de Next.js
          '/static/',        // Archivos estáticos internos
        ],
      },
      // Reglas específicas para Google
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
      // Reglas específicas para Bing
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
