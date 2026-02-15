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

    // ========================================
    // LEGAL
    // ========================================
    {
      url: `${baseUrl}/privacidad`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },

    // ========================================
    // BLOG
    // ========================================
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/testimonio-11-anos-diamante-gano-excel-colombia`,
      lastModified: new Date('2025-11-24'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/como-ser-distribuidor-gano-excel-colombia-2025`,
      lastModified: new Date('2025-11-24'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/el-fin-del-rechazo`,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ========================================
    // PRESENTACIONES
    // ========================================
    {
      url: `${baseUrl}/presentaciones/apalancamiento`,
      lastModified: new Date('2026-02-12'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/presentaciones/4-leyes-gano-excel`,
      lastModified: new Date('2026-02-13'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];
}
