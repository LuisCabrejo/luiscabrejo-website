/**
 * LuisCabrejo.com - Service Worker v1.0.0
 *
 * Estrategia Híbrida para Next.js App Router:
 * - Cache-first para navegación (HTML)
 * - Cache-first para assets estáticos (JS, CSS, imágenes)
 * - Network-first para datos dinámicos
 * - Auto-cache HTML cuando se detecta navegación cliente (?_rsc= para App Router)
 */

const CACHE_VERSION = '1.0.0';
const CACHE_NAME = `luiscabrejo-v${CACHE_VERSION}`;

// Assets críticos que SIEMPRE deben estar en cache
const CRITICAL_ASSETS = [
  '/',
  '/site.webmanifest',
  '/offline'
];

// Patrones a ignorar (nunca cachear)
const BYPASS_PATTERNS = [
  /^\/api\//,           // APIs
  /^\/auth\//,          // Autenticación
  /\/_next\/webpack/,   // HMR de desarrollo
  /\/tracking\.js/,     // Tracking
  /supabase\.co/,       // Supabase
  /anthropic\.com/,     // Anthropic API
  /googleapis\.com/,    // Google APIs
  /googletagmanager/,   // GTM
  /google-analytics/,   // GA
  /facebook\.net/,      // Facebook
  /hotjar\.com/,        // Hotjar
];

// Instalación: Pre-cachear assets críticos
self.addEventListener('install', (event) => {
  console.log('[SW] Installing v' + CACHE_VERSION);

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Pre-caching critical assets');
        return cache.addAll(CRITICAL_ASSETS);
      })
      .then(() => {
        console.log('[SW] Skip waiting');
        return self.skipWaiting();
      })
  );
});

// Activación: Limpiar caches antiguos
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating v' + CACHE_VERSION);

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => {
        console.log('[SW] Claiming clients');
        return self.clients.claim();
      })
  );
});

// Fetch: Estrategia híbrida
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Solo manejar GET requests
  if (request.method !== 'GET') return;

  // Solo manejar same-origin o CDNs conocidos
  if (url.origin !== self.location.origin &&
      !url.hostname.includes('vercel') &&
      !url.hostname.includes('cloudflare')) {
    return;
  }

  // Bypass para patrones específicos
  for (const pattern of BYPASS_PATTERNS) {
    if (pattern.test(url.pathname) || pattern.test(url.href)) {
      return;
    }
  }

  // Detectar tipo de request
  const isNavigationRequest = request.mode === 'navigate';
  const isRSCRequest = url.searchParams.has('_rsc');
  const isStaticAsset = /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/i.test(url.pathname);
  const isNextStatic = url.pathname.startsWith('/_next/static/');

  // Estrategia según tipo
  if (isNavigationRequest || isRSCRequest) {
    // HTML y RSC: Network-first con fallback a cache
    event.respondWith(networkFirstWithCache(request));
  } else if (isStaticAsset || isNextStatic) {
    // Assets estáticos: Cache-first
    event.respondWith(cacheFirstWithNetwork(request));
  } else {
    // Todo lo demás: Network-first
    event.respondWith(networkFirstWithCache(request));
  }
});

// Network-first con fallback a cache
async function networkFirstWithCache(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const networkResponse = await fetch(request);

    // Cachear respuestas exitosas
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);

    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Fallback a página offline para navegación
    if (request.mode === 'navigate') {
      const offlineResponse = await cache.match('/offline');
      if (offlineResponse) {
        return offlineResponse;
      }
    }

    throw error;
  }
}

// Cache-first con fallback a network
async function cacheFirstWithNetwork(request) {
  const cache = await caches.open(CACHE_NAME);

  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.log('[SW] Cache and network failed:', request.url);
    throw error;
  }
}
