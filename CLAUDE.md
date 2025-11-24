# CLAUDE.md - Documentación del Proyecto luiscabrejo.com

**Última actualización:** 24 de noviembre de 2025
**Versión:** 2.0 - Sistema de emails HTML profesionales implementado

---

## 📋 Índice

1. [Resumen del Proyecto](#resumen-del-proyecto)
2. [Stack Tecnológico](#stack-tecnológico)
3. [Sistema de Emails HTML](#sistema-de-emails-html)
4. [Configuración de Vercel](#configuración-de-vercel)
5. [Branding y Posicionamiento](#branding-y-posicionamiento)
6. [Estructura del Proyecto](#estructura-del-proyecto)
7. [Commits Importantes](#commits-importantes)

---

## Resumen del Proyecto

**luiscabrejo.com** es el sitio personal de Luis Cabrejo, Co-Fundador de CreaTuActivo.com y Diamante de Gano Excel con 11 años de experiencia en 16 países.

### Objetivo Principal
Posicionar a **CreaTuActivo.com** como el ecosistema tecnológico líder en América para construcción de activos, aprovechando la marca personal y trayectoria de Luis Cabrejo en Gano Excel.

### Páginas Principales
- **Home** (`/`) - Presentación de Luis y su trayectoria
- **Historia** (`/historia`) - De la quiebra a construir un activo en 16 países
- **Ecosistema** (`/ecosistema`) - Herramientas tecnológicas y plataforma
- **Visión** (`/vision`) - Plan 2025-2032 para transformar 4 millones de vidas
- **Fundadores** (`/fundadores`) - Programa de fundadores con paquetes de inversión

---

## Stack Tecnológico

### Frontend
- **Next.js 15.4.2** - App Router
- **React 19** con TypeScript
- **Tailwind CSS** - Diseño responsive
- **Lucide React** - Iconos

### Backend & Services
- **Resend** - Servicio de emails transaccionales
  - Dominio verificado: `creatuactivo.com`
  - From: `contacto@creatuactivo.com`
  - Reply-to: `luiscabrejo@creatuactivo.com`

- **Supabase** - Base de datos y almacenamiento
  - Tabla: `contacts_luiscabrejo`
  - Compartido con CreaTuActivo.com

- **Anthropic Claude** - IA conversacional (NEXUS)
  - Modelo: Claude Sonnet
  - Contextos personalizados por página

### Deploy
- **Vercel** - Hosting y deployment automático
- **GitHub** - Control de versiones
- **Push Protection** - Activado para prevenir leaks de API keys

---

## Sistema de Emails HTML

### 🎨 Diseño Profesional Implementado

Todos los emails usan el **diseño HTML de CreaTuActivo.com** con:
- Fondo oscuro (#0f172a)
- Cards con transparencias y colores (púrpura, azul, verde, dorado)
- Tipografía System Fonts (-apple-system, BlinkMacSystemFont, Segoe UI)
- Mobile responsive con media queries

### 📧 Email de Confirmación (al Usuario)

**Archivo:** `src/app/api/contact/route.ts` (líneas 210-366)

**Estructura:**
```
┌─────────────────────────────────────┐
│   ¡Gracias, [Nombre]!              │ ← Header (#0f172a)
├─────────────────────────────────────┤
│  ┌───────────────────────────────┐ │
│  │ ✅ Recibí tu mensaje          │ │ ← Card Verde
│  │ Te responderé en <24h         │ │   (rgba(34, 197, 94, 0.1))
│  └───────────────────────────────┘ │
│                                     │
│  Hola [Nombre],                    │ ← Texto (#e2e8f0)
│  Gracias por contactarme...        │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ 🚀 RECOMENDADO                │ │
│  │ Conoce CreaTuActivo.com →     │ │ ← Card Púrpura
│  │ La plataforma tecnológica...  │ │   CLICKEABLE
│  └───────────────────────────────┘ │   creatuactivo.com/ecosistema
│                                     │
│  📖 Mi Historia Completa →         │ ← Cards Azules
│  🎯 La Visión 4 Millones →         │
├─────────────────────────────────────┤
│  Luis Cabrejo                      │ ← Footer
│  Co-Fundador CreaTuActivo.com      │
│  11 años Diamante | 16 países     │
└─────────────────────────────────────┘
```

**CTA Principal:**
- Link destacado a `https://creatuactivo.com/ecosistema`
- Badge "🚀 RECOMENDADO"
- Card púrpura con mayor jerarquía visual

**Paleta de Colores:**
```css
--card-verde-success:  rgba(34, 197, 94, 0.1)   /* Confirmación */
--card-purpura-cta:    rgba(124, 58, 237, 0.1)  /* RECOMENDADO */
--card-azul-links:     rgba(30, 64, 175, 0.1)   /* Links secundarios */
--texto-claro:         #e2e8f0                  /* Contenido */
--texto-gris:          #94a3b8                  /* Secundario */
--dorado-highlight:    #F59E0B                  /* Labels */
```

### 📬 Email de Notificación (a Luis)

**Estructura:**
```
┌─────────────────────────────────────┐
│ 📬 Nuevo Contacto desde            │ ← Header
│    luiscabrejo.com                 │
│    [Tipo de formulario]            │
├─────────────────────────────────────┤
│  ┌───────────────────────────────┐ │
│  │ 👤 DATOS DEL CONTACTO         │ │ ← Card Púrpura
│  │ Nombre: [...]                 │ │   Datos del usuario
│  │ Email: [clickeable]           │ │
│  │ Teléfono: [...]               │ │
│  │ País: [...]                   │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ 💬 MENSAJE                    │ │ ← Card Azul
│  │ [Mensaje del usuario]         │ │   Mensaje completo
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ 💡 INSTRUCCIONES              │ │ ← Card Dorado
│  │ • Responder desde: [...]      │ │   Instrucciones
│  │ • Tiempo: 24h                 │ │
│  └───────────────────────────────┘ │
├─────────────────────────────────────┤
│  [Fecha/Hora Colombia UTC-5]       │ ← Footer
│  Sistema automático CreaTuActivo   │
└─────────────────────────────────────┘
```

**Características:**
- Email del usuario es **clickeable** (mailto:)
- Campos condicionales (teléfono, país solo si existen)
- Timestamp en zona horaria Colombia (UTC-5)
- Reply-to apunta directamente al email del usuario

---

## Configuración de Vercel

### Variables de Entorno Requeridas

Ver archivo completo: `VERCEL_ENV_SETUP.md`

**Críticas (sin estas el formulario falla):**
```bash
RESEND_API_KEY                    # API de Resend para envío de emails
NEXT_PUBLIC_SUPABASE_URL          # URL proyecto Supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY     # Clave pública Supabase
SUPABASE_SERVICE_ROLE_KEY         # Clave privada Supabase
```

**Para NEXUS (chatbot IA):**
```bash
ANTHROPIC_API_KEY                 # API de Claude
NEXT_PUBLIC_CHATBOT_ENABLED=true
NEXT_PUBLIC_CHATBOT_MAX_MESSAGES=100
NEXT_PUBLIC_SHOW_CHATBOT=true
```

**Configuración del sitio:**
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://luiscabrejo.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+573102066593
NEXUS_ESCALATION_PHONE=+573102066593
```

### Dominios en Resend

**Dominio Verificado:** `creatuactivo.com`
**From address:** `contacto@creatuactivo.com`
**Reply-to:** `luiscabrejo@creatuactivo.com`

**Nota:** `luiscabrejo.com` NO está verificado en Resend, por eso usamos `creatuactivo.com`

### Destinatarios de Emails

Cuando alguien envía el formulario:
1. **Email a Luis** → `luiscabrejo@creatuactivo.com` + `luiscabrejo7@gmail.com`
2. **Email al usuario** → Confirmación automática con diseño HTML

---

## Branding y Posicionamiento

### Estrategia de Marca

**Objetivo:** Posicionar CreaTuActivo.com aprovechando la credibilidad de Luis Cabrejo

**Mensajes Clave:**
- Luis Cabrejo como **Co-Fundador de CreaTuActivo.com** (junto con Liliana Moreno)
- **11 años Diamante Gano Excel** (autoridad en el sector)
- **16 países** (presencia internacional)
- **+2,847 vidas transformadas** (impacto medible)

### Jerarquía de Plataformas

1. **CreaTuActivo.com** - Ecosistema tecnológico principal
2. **luiscabrejo.com** - Marca personal que dirige a CreaTuActivo
3. **ganocafe.online** - Tienda de productos

### Flujo de Usuario

```
Usuario visita luiscabrejo.com
    ↓
Lee historia/visión/ecosistema
    ↓
Envía formulario de contacto
    ↓
Recibe email con diseño profesional
    ↓
CTA principal: "Conoce CreaTuActivo.com →"
    ↓
Usuario visita creatuactivo.com/ecosistema
    ↓
Se registra en la plataforma
```

---

## Estructura del Proyecto

### Rutas Principales

```
src/
├── app/
│   ├── page.tsx                    # Home - Presentación Luis
│   ├── historia/page.tsx           # Historia personal
│   ├── ecosistema/page.tsx         # Plataforma tecnológica
│   ├── vision/page.tsx             # Visión 4 Millones
│   ├── fundadores/page.tsx         # Programa fundadores
│   ├── privacidad/page.tsx         # Política de privacidad
│   ├── sitemap.ts                  # Sitemap SEO
│   ├── robots.ts                   # Robots.txt SEO
│   └── api/
│       ├── contact/route.ts        # ✨ API formulario contacto
│       ├── nexus/route.ts          # API NEXUS chatbot
│       └── claude-chat/
│           ├── route.ts            # Claude chat legacy
│           ├── nexus-content.ts    # Contenido NEXUS
│           ├── nexus-profiles.ts   # Perfiles NEXUS
│           ├── nexus-types.ts      # Tipos TypeScript
│           └── nexus-utils.ts      # Utilidades
├── components/
│   ├── Footer.tsx                  # ✨ Footer unificado
│   ├── ContactModal.tsx            # Modal de contacto
│   └── nexus/
│       ├── NEXUSFloatingButton.tsx # Botón flotante IA
│       ├── NEXUSWidget.tsx         # Widget NEXUS
│       ├── Chat.tsx                # Interfaz chat
│       └── useNEXUSChat.ts         # Hook chat
└── types/
    └── nexus.ts                    # Tipos NEXUS
```

### Archivos de Configuración

```
/
├── next.config.ts              # Config Next.js
├── tailwind.config.ts          # Config Tailwind
├── tsconfig.json               # Config TypeScript
├── package.json                # Dependencias
├── .env.local                  # Variables entorno (local)
├── .gitignore                  # Git ignore
├── CLAUDE.md                   # 📄 Este archivo
├── VERCEL_ENV_SETUP.md         # Guía variables Vercel
└── supabase-contact-table.sql  # Schema tabla contactos
```

---

## Commits Importantes

### Última Sesión (24 Nov 2025)

```bash
ec1f984 🎨 Apply professional HTML email design from CreaTuActivo.com
        - Emails con diseño HTML matching CreaTuActivo.com
        - Cards con colores: púrpura, azul, verde, dorado
        - CTA destacado a creatuactivo.com/ecosistema
        - Mobile responsive

be93b15 ✨ Improve auto-response email with CreaTuActivo.com ecosystem link
        - Link destacado a ecosistema
        - Descripción mejorada

eb57502 🔧 Fix contact form: Use verified creatuactivo.com domain
        - Cambio de send@luiscabrejo.com a contacto@creatuactivo.com
        - Fix error 403: domain not verified
        - Todas las referencias actualizadas

868ccf6 📧 Update contact email to luiscabrejo@creatuactivo.com
        - Email fallback actualizado
        - Confirmado funcionando

fbca452 📝 Add Vercel environment variables setup guide
        - Guía completa configuración Vercel
        - Sin API keys por seguridad GitHub

efd90fb 🔧 Fix Footer component - Recreate corrupted file
        - Footer.tsx recreado
        - Fix build error en Vercel

67dc65e ✨ Add unified Footer to fundadores page
        - Footer importado en fundadores
        - Consistencia branding
```

### Sesiones Anteriores

```bash
0950743 🔧 NEXUS: Fix TypeScript compilation errors - Production ready
7fedc50 [Otras mejoras NEXUS y SEO]
```

---

## API de Contacto - Referencia Rápida

### Endpoint POST `/api/contact`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, validated)",
  "phone": "string (optional)",
  "country": "string (optional)",
  "message": "string (optional)",
  "formType": "string (conectar|historia|ecosistema|vision|fundadores)"
}
```

**Response Success (200):**
```json
{
  "success": true,
  "message": "Tu mensaje ha sido enviado exitosamente",
  "data": {
    "timestamp": "ISO-8601",
    "emailsSent": {
      "toLuis": "resend-id",
      "toUser": "resend-id",
      "destinations": [
        "luiscabrejo@creatuactivo.com",
        "luiscabrejo7@gmail.com"
      ]
    },
    "nextSteps": "Luis te responderá desde..."
  }
}
```

**Response Error (400/500):**
```json
{
  "success": false,
  "error": "Error description",
  "message": "User-friendly message",
  "fallback": "luiscabrejo@creatuactivo.com"
}
```

### Endpoint GET `/api/contact`

Verificación de estado del servicio:

**Response:**
```json
{
  "status": "API Contact funcionando correctamente",
  "service": "luiscabrejo.com contact form",
  "emailDestinations": [
    "luiscabrejo@creatuactivo.com",
    "luiscabrejo7@gmail.com"
  ],
  "timestamp": "ISO-8601",
  "timezone": "America/Bogota",
  "environment": "production",
  "resendConfigured": true,
  "version": "2.1",
  "author": "Luis Cabrejo - Arquitecto de Ecosistemas Digitales"
}
```

---

## Logs y Debugging

### Debug Logs en Producción

Todos los eventos importantes se loguean con timestamps en Colombia (UTC-5):

```javascript
debugLog('🔧 [timestamp] 🚀 INICIO - Procesando formulario')
debugLog('✅ RESEND_API_KEY encontrada')
debugLog('✅ Datos del formulario recibidos', { name, email, ... })
debugLog('✅ Validaciones completadas')
debugLog('📤 Enviando notificación a...')
debugLog('✅ Email a Luis enviado exitosamente')
debugLog('✅ Confirmación al usuario enviada')
debugLog('💾 Guardando contacto en Supabase')
debugLog('🎉 ÉXITO - Formulario procesado completamente')
```

### Cómo Ver Logs en Vercel

1. Ve a **Vercel Dashboard**
2. Selecciona proyecto **luiscabrejo-website**
3. Click en **Deployments**
4. Click en el deployment activo
5. Click en **View Function Logs**
6. Busca los emojis: ✅ (éxito), ❌ (error), 💥 (error crítico)

---

## Footer Unificado

### Componente Footer

**Archivo:** `src/components/Footer.tsx`

**Contenido:**
- Logo/Nombre: Luis Cabrejo
- Descripción: "CreaTuActivo.com - Arquitecto de Ecosistemas Digitales"
- Links Ecosistema:
  - luiscabrejo.com
  - app.creatuactivo.com
  - creatuactivo.com
  - ganocafe.online
- Conecta:
  - Email: luiscabrejo@creatuactivo.com
  - LinkedIn, Instagram
  - Comunidad (app.creatuactivo.com)
- Países Activos: 16 países en América
- Copyright: © 2025 CreaTuActivo.com

**Páginas con Footer:**
- ✅ Home (`/`)
- ✅ Historia (`/historia`)
- ✅ Ecosistema (`/ecosistema`)
- ✅ Visión (`/vision`)
- ✅ Fundadores (`/fundadores`)

---

## ContactModal - Configuraciones

### Tipos de Formulario

```typescript
type FormType =
  | 'conectar'      // Formulario genérico (home)
  | 'historia'      // Desde página historia
  | 'ecosistema'    // Desde página ecosistema
  | 'vision'        // Desde página visión
  | 'fundadores';   // Desde página fundadores
```

### Configuraciones por Tipo

```typescript
'conectar': {
  title: 'Conéctate conmigo',
  subtitle: 'Luis Cabrejo',
  description: 'para explorar oportunidades empresariales',
  showPhone: false,
  showCountry: false
}

'historia': {
  title: 'Conversemos',
  subtitle: 'Luis Cabrejo',
  description: 'historia te inspiró...',
  showPhone: true,
  showCountry: true
}

'ecosistema': {
  title: 'Accede al Ecosistema',
  subtitle: 'CreaTuActivo.com',
  description: 'herramientas tecnológicas...',
  showPhone: true,
  showCountry: true
}

'vision': {
  title: 'Visión 4 Millones',
  subtitle: 'Luis Cabrejo',
  description: 'transformar 4 millones de vidas...',
  showPhone: true,
  showCountry: true
}

'fundadores': {
  title: 'Programa Fundadores',
  subtitle: 'CreaTuActivo.com',
  description: 'parte del grupo élite...',
  showPhone: true,    // REQUERIDO
  showCountry: true
}
```

---

## SEO Implementado

### Sitemap
**Archivo:** `src/app/sitemap.ts`

Rutas incluidas:
- `/` - Priority 1.0
- `/historia` - Priority 0.9
- `/ecosistema` - Priority 0.9
- `/vision` - Priority 0.9
- `/fundadores` - Priority 0.8
- `/privacidad` - Priority 0.3

### Robots.txt
**Archivo:** `src/app/robots.ts`

```
User-agent: *
Allow: /
Sitemap: https://luiscabrejo.com/sitemap.xml
```

---

## Próximos Pasos Sugeridos

### Mejoras Pendientes

1. **Dominio luiscabrejo.com en Resend**
   - Verificar dominio en Resend
   - Cambiar from a `contacto@luiscabrejo.com`
   - Mantener Reply-to en `luiscabrejo@creatuactivo.com`

2. **Analytics**
   - Google Analytics 4
   - Tracking conversiones del formulario
   - Heatmaps de clicks en CTAs

3. **Tests**
   - Test de emails en múltiples clientes
   - Test de formulario en todos los navegadores
   - Test mobile responsive

4. **Funcionalidad Botones "Activar Ahora"**
   - Actualmente solo hover styles
   - Agregar onClick handlers
   - ¿Abrir ContactModal o redirect a checkout?

5. **Video en Fundadores Page**
   - Placeholder actual
   - Grabar video explicativo
   - Implementar reproductor

---

## Notas Importantes

### ⚠️ Seguridad

- **NUNCA** commitear `.env.local` a Git
- **SIEMPRE** usar variables de entorno en Vercel
- **GitHub Push Protection** está activo
- API keys en archivos MD causan rechazo del push

### 🎨 Diseño

- **Colores:** Sistema de colores consistente (#0f172a, #1e293b, rgba cards)
- **Tipografía:** System fonts para mejor rendimiento
- **Responsive:** Mobile-first con breakpoints sm:, md:, lg:
- **Icons:** Lucide React (Zap, Users, Target, Mail, etc.)

### 📧 Emails

- **Siempre HTML**, nunca solo texto plano
- **Inline styles** obligatorios (email clients)
- **Tablas** para layout (no flex/grid en emails)
- **Mobile responsive** con media queries
- **Test** en Gmail, Outlook, Apple Mail

---

## Contacto y Soporte

**Desarrollador:** Claude Code (Anthropic)
**Propietario:** Luis Cabrejo
**Email:** luiscabrejo@creatuactivo.com
**Sitio:** https://luiscabrejo.com
**Ecosistema:** https://creatuactivo.com

---

**Fin de CLAUDE.md**

_Este archivo debe actualizarse después de cada sesión importante de desarrollo._
