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
    // PÁGINAS DE ECOSISTEMA
    // ========================================
    {
      url: `${baseUrl}/ecosistema`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ecosistema/academia`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ecosistema/comunidad`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
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
    {
      url: `${baseUrl}/fundadores-network`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fundadores-profesionales`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // ========================================
    // PRESENTACIÓN EMPRESARIAL
    // ========================================
    {
      url: `${baseUrl}/presentacion-empresarial`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ========================================
    // MODELO DE VALOR Y PAQUETES
    // ========================================
    {
      url: `${baseUrl}/modelo-de-valor`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/paquetes`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/planes`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7, // Menor prioridad (similar a paquetes)
    },

    // ========================================
    // SISTEMA
    // ========================================
    {
      url: `${baseUrl}/sistema/framework-iaa`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/sistema/tecnologia`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sistema/productos`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/sistema/socio-corporativo`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ========================================
    // SOLUCIONES (6 arquetipos)
    // ========================================
    {
      url: `${baseUrl}/soluciones/profesional-con-vision`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/soluciones/emprendedor-negocio`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/soluciones/independiente-freelancer`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/soluciones/lider-del-hogar`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/soluciones/lider-comunidad`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/soluciones/joven-con-ambicion`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // ========================================
    // LEGAL
    // Privacidad tiene prioridad baja (no es contenido de conversión)
    // ========================================
    {
      url: `${baseUrl}/privacidad`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
