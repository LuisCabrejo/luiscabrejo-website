/**
 * Sitemap dinámico para LuisCabrejo.com
 * Generado automáticamente para Google Search Console
 *
 * Este sitemap incluye todas las páginas públicas del sitio de marca personal
 * de Luis Cabrejo, arquitecto de ecosistemas digitales.
 */

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://luiscabrejo.com';

  // Fecha de última modificación (actualizada Nov 20, 2025 - rebrand CreaTuActivo)
  const lastModified = new Date('2025-11-20');

  return [
    // ========================================
    // PÁGINA PRINCIPAL
    // ========================================
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // ========================================
    // HISTORIA
    // ========================================
    {
      url: `${baseUrl}/historia`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ========================================
    // ECOSISTEMA
    // ========================================
    {
      url: `${baseUrl}/ecosistema`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ========================================
    // VISIÓN 4M
    // ========================================
    {
      url: `${baseUrl}/vision`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // ========================================
    // FUNDADORES
    // ========================================
    {
      url: `${baseUrl}/fundadores`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.95,
    },
  ];
}
