# 🎨 Brand Guidelines - Luis Cabrejo / CreaTuActivo.com

**Documento de Branding y Guía de Estilo Visual**

Este documento define la identidad visual, paleta de colores, tipografía, tono de voz y lineamientos de diseño para todo el ecosistema CreaTuActivo.com y la marca personal Luis Cabrejo.

---

## 📋 Tabla de Contenidos

1. [Identidad de Marca](#identidad-de-marca)
2. [Paleta de Colores](#paleta-de-colores)
3. [Tipografía](#tipografía)
4. [Logotipos](#logotipos)
5. [Gradientes y Efectos](#gradientes-y-efectos)
6. [Componentes UI](#componentes-ui)
7. [Tono de Voz](#tono-de-voz)
8. [Jerarquía de Marcas](#jerarquía-de-marcas)
9. [Aplicaciones Específicas](#aplicaciones-específicas)

---

## 🎯 Identidad de Marca

### **Esencia de Marca**

**Luis Cabrejo** es una marca personal que representa:
- 💎 Excelencia (11 años Diamante Gano Excel)
- 🚀 Innovación tecnológica (Next.js, IA, automatización)
- 🌎 Impacto continental (16 países)
- 🎓 Mentoría profesional (de cero a uno)
- 💼 Seriedad empresarial (no esquemas, negocios reales)

**Valores de Marca:**
- **Tecnología que sirve**: No tech por tech, sino herramientas que resuelven
- **Resultados demostrables**: 11 años, 16 países, 2,847 vidas
- **Profesionalismo**: Para personas educadas y ambiciosas
- **Simplicidad**: Hacer sencillo lo complejo (como Nequi)
- **Visión grande**: Meta de 4 millones de personas

**Audiencia Objetivo:**
- "Inconformes inteligentes" (30-50 años)
- Profesionales que buscan libertad financiera
- Ex-distribuidores MLM que quieren herramientas
- Personas que entienden que riqueza = activos + sistemas

---

## 🎨 Paleta de Colores

### **Colores Principales**

#### **1. Morado/Púrpura (Color Primario)**
```css
/* Morado Principal - Tecnología, Innovación */
--primary: #667eea;           /* rgb(102, 126, 234) */
--primary-hover: #5568d3;     /* rgb(85, 104, 211) */
--primary-dark: #764ba2;      /* rgb(118, 75, 162) */

/* Uso: Botones principales, logos, CTAs, highlights */
```

**Significado:** Innovación, tecnología, creatividad, premium
**Aplicación:** Botones CTA, logos, gradientes principales, acentos importantes

#### **2. Azul (Color Secundario)**
```css
/* Azul Tech - Confianza, Profesionalismo */
--blue-light: #3b82f6;        /* rgb(59, 130, 246) */
--blue: #2563eb;              /* rgb(37, 99, 235) */
--blue-dark: #1e40af;         /* rgb(30, 64, 175) */
--cyan: #06b6d4;              /* rgb(6, 182, 212) */

/* Uso: Links, iconos, gradientes secundarios */
```

**Significado:** Confianza, seriedad, profesionalismo, estabilidad
**Aplicación:** Links, gradientes con morado, elementos secundarios

#### **3. Verde (Éxito y Crecimiento)**
```css
/* Verde - Éxito, Validación, Growth */
--green: #10b981;             /* rgb(16, 185, 129) */
--green-dark: #059669;        /* rgb(5, 150, 105) */

/* Uso: Checks, estados de éxito, estadísticas positivas */
```

**Significado:** Crecimiento, éxito, validación, Go
**Aplicación:** Iconos de check, estados exitosos, métricas de crecimiento

#### **4. Dorado (Premium/Diamante)**
```css
/* Dorado - Premium, Exclusividad, Diamante */
--gold: #ffd700;              /* rgb(255, 215, 0) */
--gold-light: #ffed4e;        /* rgb(255, 237, 78) */

/* Uso: Versión premium, status Diamante, exclusividad */
```

**Significado:** Exclusividad, premium, status Diamante, élite
**Aplicación:** Logo premium, badges Diamante, elementos VIP

### **Colores Neutros**

#### **Grises y Negros**
```css
/* Background Oscuros */
--slate-900: #0f172a;         /* rgb(15, 23, 42) - Background principal */
--slate-800: #1e293b;         /* rgb(30, 41, 59) - Background secundario */
--gray-900: #111827;          /* rgb(17, 24, 39) - Background alternativo */
--gray-800: #1f2937;          /* rgb(31, 41, 55) - Cards */

/* Texto */
--gray-300: #d1d5db;          /* rgb(209, 213, 219) - Texto principal */
--gray-400: #9ca3af;          /* rgb(156, 163, 175) - Texto secundario */
--gray-500: #6b7280;          /* rgb(107, 114, 128) - Texto terciario */

/* Bordes */
--border-light: rgba(255, 255, 255, 0.1);  /* Bordes sutiles */
--border-medium: rgba(255, 255, 255, 0.2); /* Bordes visibles */
```

**Uso:**
- `slate-900`: Background principal del sitio
- `slate-800`: Cards, secciones destacadas
- `gray-300`: Texto principal (alta legibilidad)
- `gray-400`: Texto secundario, descripciones
- Bordes: Separadores sutiles entre secciones

### **Colores de Estado**

```css
/* Estados */
--error: #ef4444;             /* rgb(239, 68, 68) - Errores */
--warning: #f59e0b;           /* rgb(245, 158, 11) - Advertencias */
--info: #3b82f6;              /* rgb(59, 130, 246) - Información */
--success: #10b981;           /* rgb(16, 185, 129) - Éxito */
```

### **Colores en Tailwind CSS**

```js
// tailwind.config.js - Configuración actual
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#667eea',
          hover: '#5568d3',
          dark: '#764ba2'
        },
        slate: {
          // Ya incluidos por defecto en Tailwind
        }
      }
    }
  }
}
```

---

## 📝 Tipografía

### **Fuentes Actuales**

```css
/* Fuente Principal: System Fonts (Performance) */
body {
  font-family: 'Arial', 'Helvetica', sans-serif;
}

/* Recomendación: Inter para mejor legibilidad */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### **Jerarquía Tipográfica**

#### **Headings (Títulos)**

```css
/* H1 - Hero Principal */
h1, .text-h1 {
  font-size: 3rem;           /* 48px mobile */
  font-size: 4.5rem;         /* 72px desktop */
  font-weight: 700;          /* Bold */
  line-height: 1.1;
  letter-spacing: -0.02em;   /* Tight */
}

/* H2 - Secciones Principales */
h2, .text-h2 {
  font-size: 2rem;           /* 32px mobile */
  font-size: 3rem;           /* 48px desktop */
  font-weight: 700;
  line-height: 1.2;
}

/* H3 - Subsecciones */
h3, .text-h3 {
  font-size: 1.5rem;         /* 24px mobile */
  font-size: 2rem;           /* 32px desktop */
  font-weight: 600;
  line-height: 1.3;
}

/* H4 - Títulos de Cards */
h4, .text-h4 {
  font-size: 1.25rem;        /* 20px */
  font-weight: 600;
  line-height: 1.4;
}
```

#### **Body Text (Texto de Párrafos)**

```css
/* Párrafo Grande (Lead) */
.text-lead {
  font-size: 1.125rem;       /* 18px mobile */
  font-size: 1.25rem;        /* 20px desktop */
  line-height: 1.6;
  font-weight: 400;
}

/* Párrafo Normal */
body, p, .text-body {
  font-size: 0.875rem;       /* 14px mobile */
  font-size: 1rem;           /* 16px desktop */
  line-height: 1.6;
  font-weight: 400;
}

/* Texto Pequeño */
.text-small {
  font-size: 0.875rem;       /* 14px */
  line-height: 1.5;
}

/* Texto Muy Pequeño */
.text-xs {
  font-size: 0.75rem;        /* 12px */
  line-height: 1.4;
}
```

#### **Botones y CTAs**

```css
/* Botón Grande (Primary CTA) */
.btn-large {
  font-size: 1rem;           /* 16px mobile */
  font-size: 1.125rem;       /* 18px desktop */
  font-weight: 600;          /* Semibold */
  letter-spacing: 0.01em;
}

/* Botón Normal */
.btn {
  font-size: 0.875rem;       /* 14px mobile */
  font-size: 1rem;           /* 16px desktop */
  font-weight: 600;
}
```

### **Pesos de Fuente (Font Weight)**

```css
/* Uso por contexto */
--font-normal: 400;          /* Texto regular */
--font-medium: 500;          /* Énfasis ligero */
--font-semibold: 600;        /* Botones, subtítulos */
--font-bold: 700;            /* Títulos principales */
--font-extrabold: 800;       /* Hero statements */
```

**Aplicación:**
- `400`: Párrafos, texto descriptivo
- `500`: Énfasis sutil, navegación
- `600`: Botones, nombres de persona, CTAs secundarios
- `700`: Títulos H1-H3, CTAs principales
- `800`: Hero principal, statements importantes

---

## 🏷️ Logotipos

Ver documentación completa en: [LOGOS-IMPLEMENTACION.md](LOGOS-IMPLEMENTACION.md)

### **Logo Principal: LC (Luis Cabrejo)**

**8 Variantes Disponibles:**

1. **LC-square.svg** ⭐ **RECOMENDADO GENERAL**
   - Uso: General, favicon, headers
   - Color: Morado sólido (#667eea)

2. **LC-gradient.svg** ⭐ **RECOMENDADO HERO**
   - Uso: Hero sections, landing pages
   - Gradiente: Morado → Púrpura

3. **LC-circular.svg**
   - Uso: Footer, iconos circulares

4. **LC-shield.svg**
   - Uso: Confianza, autoridad, hero

5. **LC-minimal.svg**
   - Uso: Dark mode, contextos minimalistas

6. **LC-gold.svg**
   - Uso: Premium, status Diamante

7. **LC-hexagon.svg**
   - Uso: Tech branding

8. **LC-tech.svg**
   - Uso: Branding moderno

### **Uso del Logo**

```tsx
// Componente React
import Logo from '@/components/Logo'

// Header
<Logo variant="gradient" size={50} priority />

// Hero
<Logo variant="shield" size={200} />

// Footer
<Logo variant="circular" size={35} />
```

### **Logo con Texto**

```tsx
// Combinación logo + nombre
<div className="flex items-center gap-3">
  <Logo variant="gradient" size={45} />
  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
    Luis Cabrejo
  </span>
</div>
```

### **Espaciado del Logo**

- **Espacio mínimo alrededor:** 20% del tamaño del logo
- **Tamaño mínimo:** 24px (legibilidad)
- **Tamaño máximo:** 400px (hero sections)

---

## 🌈 Gradientes y Efectos

### **Gradientes Principales**

#### **1. Gradiente Purple-Blue (Principal)**
```css
/* Gradiente horizontal: Morado → Azul */
background: linear-gradient(to right, #667eea, #3b82f6);
/* Tailwind: bg-gradient-to-r from-purple-500 to-blue-600 */

/* Uso: Botones CTA, highlights, títulos importantes */
```

#### **2. Gradiente Purple-Darker (Secundario)**
```css
/* Gradiente: Morado claro → Morado oscuro */
background: linear-gradient(to right, #667eea, #764ba2);
/* Tailwind: bg-gradient-to-r from-blue-400 to-purple-400 */

/* Uso: Logos, texto destacado, backgrounds */
```

#### **3. Gradiente Tech (Moderno)**
```css
/* Gradiente triple: Cyan → Blue → Purple */
background: linear-gradient(to right, #06b6d4, #3b82f6, #8b5cf6);
/* Tailwind: bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 */

/* Uso: Elementos tech, innovación, futurista */
```

#### **4. Gradiente Radial (Backgrounds)**
```css
/* Fondo con gradiente radial (sutiles) */
background: radial-gradient(circle at top left, rgba(102, 126, 234, 0.1), transparent);

/* Uso: Fondos decorativos, secciones hero */
```

### **Texto con Gradiente**

```css
/* Texto con gradiente (effect moderno) */
.gradient-text {
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Tailwind: bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent */
```

**Aplicaciones:**
- Nombre "Luis Cabrejo" en navegación
- Títulos importantes
- CTAs secundarios
- Highlights en párrafos

### **Sombras y Efectos**

#### **Box Shadows**

```css
/* Shadow Sutil (Cards) */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

/* Shadow Media (Hover states) */
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

/* Shadow Grande (Modals, dropdowns) */
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

/* Glow Effect (Morado) */
box-shadow: 0 0 30px rgba(102, 126, 234, 0.5);

/* Glow Effect (Azul) */
box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
```

#### **Efectos de Blur**

```css
/* Backdrop Blur (Navegación, modals) */
backdrop-filter: blur(12px);
background: rgba(15, 23, 42, 0.5);

/* Glassmorphism Effect */
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

#### **Animaciones**

```css
/* Pulse Glow (NEXUS Chat) */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
  }
}

/* Fade In Up (Mensajes) */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover Scale */
.hover-scale:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease;
}
```

---

## 🧩 Componentes UI

### **Botones**

#### **Botón Primary (CTA Principal)**
```tsx
<button className="bg-gradient-to-r from-purple-500 to-blue-600 px-8 py-4 rounded-full font-semibold text-white hover:shadow-xl transition-all">
  Ver Programa Fundadores
</button>
```

**Especificaciones:**
- Background: Gradiente purple→blue
- Padding: 32px horizontal, 16px vertical
- Border-radius: Full (rounded-full)
- Font: Semibold (600)
- Hover: Shadow xl + scale

#### **Botón Secondary (Outline)**
```tsx
<button className="border border-purple-400/50 px-8 py-4 rounded-full font-semibold hover:bg-purple-500/10 transition-all">
  Conocer Más
</button>
```

**Especificaciones:**
- Border: Purple con 50% opacidad
- Hover: Background purple con 10% opacidad
- Mismo padding y font que primary

#### **Botón Small**
```tsx
<button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full text-sm font-semibold">
  Conectar
</button>
```

### **Cards**

#### **Card Standard**
```tsx
<div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
  <h3 className="text-xl font-semibold mb-4">Título</h3>
  <p className="text-gray-400">Contenido...</p>
</div>
```

**Especificaciones:**
- Background: gray-800 con 50% opacidad
- Border: gray-700
- Border-radius: 2xl (16px)
- Padding: 24px

#### **Card Hover Effect**
```tsx
<div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
  {/* Contenido */}
</div>
```

### **Inputs y Forms**

```tsx
<input
  type="text"
  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
  placeholder="Nombre completo"
/>
```

### **Badges y Pills**

```tsx
{/* Badge Purple */}
<span className="inline-block bg-purple-500/20 rounded-full px-4 py-2 text-sm border border-purple-500/30">
  💎 Diamante 11 años
</span>

{/* Badge Blue */}
<span className="inline-block bg-blue-500/20 rounded-full px-4 py-2 text-sm border border-blue-500/30">
  🚀 Nuevo
</span>
```

---

## 🗣️ Tono de Voz

### **Personalidad de Marca**

La comunicación de Luis Cabrejo debe reflejar:

1. **Profesional pero Cercano**
   - ✅ "Construye tu empresa de distribución con tecnología"
   - ❌ "Hazte rico rápido"

2. **Basado en Hechos y Resultados**
   - ✅ "11 años Diamante, 16 países, 2,847 vidas"
   - ❌ "El mejor del mundo", "número uno absoluto"

3. **Innovador y Tecnológico**
   - ✅ "Sistema con Next.js, IA y automatización"
   - ❌ "Herramientas tradicionales"

4. **Claro y Directo**
   - ✅ "De la quiebra a 4 millones"
   - ❌ Metáforas complicadas

5. **Aspiracional pero Realista**
   - ✅ "Visión: 4 millones de personas"
   - ❌ "Todos seremos millonarios"

### **Palabras Clave (Usar Frecuentemente)**

**Positivas:**
- Tecnología, sistema, activos, ecosistema
- Escalable, residual, automatización
- Profesional, inteligente, estratégico
- Visión, misión, impacto, transformación
- Diamante, excelencia, resultados

**Evitar:**
- Esquema, pirámide
- Fácil, rápido, sin esfuerzo
- Rico, millonario (sin contexto)
- Secreto, truco, hack

### **Estructura de Mensajes**

#### **Hero Statement (Titular Principal)**
```
[Problema] con [Solución]
[Resultado Deseado]

Ejemplo:
"Gano Excel con Tecnología e IA
Ingresos Residuales Escalables"
```

#### **CTA (Call to Action)**
```
[Verbo de Acción] + [Beneficio Específico]

Ejemplos:
✅ "Ver Programa Fundadores"
✅ "Conoce la Tecnología"
✅ "Únete al Ecosistema"

❌ "Haz clic aquí"
❌ "Más información"
```

#### **Social Proof**
```
[Métrica] + [Contexto] + [Validación]

Ejemplo:
"11 años Diamante | 16 países | +2,847 vidas transformadas"
```

---

## 🏢 Jerarquía de Marcas

### **1. Luis Cabrejo (Marca Personal - Nivel Superior)**

**Posicionamiento:** Mentor, Diamante 11 años, Arquitecto de Ecosistemas Digitales

**Uso:**
- Sitio principal: luiscabrejo.com
- Blog personal
- Contenido de autoridad
- Historia personal

**Colores:** Gradiente Blue-Purple (profesional)

### **2. CreaTuActivo.com (Plataforma Principal)**

**Posicionamiento:** Ecosistema tecnológico para construir activos empresariales

**Uso:**
- Plataforma principal: creatuactivo.com
- App: app.creatuactivo.com
- Sistema de distribución
- Comunidad

**Colores:** Full spectrum (Blue, Purple, Green, Gold)

### **3. Gano Excel (Partner/Producto)**

**Posicionamiento:** Compañía de productos (socio de distribución)

**Uso:**
- Tienda: ganocafe.online
- Referencia en contenido
- Productos específicos

**Colores:** Purple (MLM), Gold (Diamante)

### **Relación de Marcas**

```
Luis Cabrejo (Persona)
    ↓ crea
CreaTuActivo.com (Plataforma)
    ↓ distribuye
Gano Excel (Productos)
```

**Mensajes Clave:**
- Luis Cabrejo **creó** CreaTuActivo.com
- CreaTuActivo.com **distribuye** productos Gano Excel
- Luis es **Diamante** en Gano Excel (status, no creador de productos)

---

## 📱 Aplicaciones Específicas

### **Navegación**

```tsx
// Desktop
<nav className="bg-slate-900/50 backdrop-blur-md border-b border-white/10">
  <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
    Luis Cabrejo
  </Link>
  <Link href="/fundadores" className="text-gray-300 hover:text-white">
    Fundadores
  </Link>
  <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full">
    Conectar
  </button>
</nav>
```

### **Hero Section**

```tsx
<section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
  {/* Gradientes de fondo decorativos */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

  <h1 className="text-6xl font-bold">
    Gano Excel con
    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      Tecnología e IA
    </span>
  </h1>

  <button className="bg-gradient-to-r from-purple-500 to-blue-600 px-8 py-4 rounded-full font-semibold">
    Ver Programa Fundadores
  </button>
</section>
```

### **Footer**

```tsx
<footer className="py-12 border-t border-gray-800">
  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
    Luis Cabrejo
  </div>
  <p className="text-gray-400">
    CreaTuActivo.com - Arquitecto de Ecosistemas Digitales
  </p>
</footer>
```

### **Modal/Dialog**

```tsx
<div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 backdrop-blur-xl">
  <h3 className="text-2xl font-bold mb-4">Conecta con Luis</h3>
  {/* Form fields */}
</div>
```

---

## ✅ Checklist de Consistencia

Usa esta checklist al crear nuevo contenido:

### **Visual**
- [ ] Colores de la paleta oficial (#667eea, #3b82f6)
- [ ] Logo correcto según contexto
- [ ] Gradientes aplicados correctamente
- [ ] Tipografía Inter o Arial/Helvetica
- [ ] Espaciado consistente (múltiplos de 4px)

### **Tono de Voz**
- [ ] Profesional pero cercano
- [ ] Basado en hechos (11 años, 16 países)
- [ ] Evita palabras prohibidas (esquema, pirámide)
- [ ] CTAs claros y accionables

### **Jerarquía de Marca**
- [ ] Luis Cabrejo como mentor/persona
- [ ] CreaTuActivo.com como plataforma
- [ ] Gano Excel como productos (socio)
- [ ] No confundir roles (Luis NO creó los productos)

### **Componentes UI**
- [ ] Botones con rounded-full
- [ ] Cards con border-gray-700
- [ ] Hover states aplicados
- [ ] Mobile responsive

---

## 📚 Recursos

### **Archivos de Marca**
- Logos: `/public/logos/`
- Componente Logo: `/src/components/Logo.tsx`
- Favicon: `/src/app/icon.svg`
- Generador: `/scripts/generate-logos.html`

### **Documentación Relacionada**
- [LOGOS-IMPLEMENTACION.md](LOGOS-IMPLEMENTACION.md) - Guía completa de logos
- [CLAUDE.md](CLAUDE.md) - Documentación técnica del proyecto
- [README.md](README.md) - Información general del proyecto

### **Herramientas Recomendadas**
- **Colores:** [Coolors.co](https://coolors.co)
- **Gradientes:** [CSS Gradient](https://cssgradient.io)
- **Tipografía:** [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Exportar SVG → PNG:** [Convertio](https://convertio.co/es/svg-png/)

---

## 🔄 Versionado

**Versión:** 1.0.0
**Fecha:** Noviembre 2024
**Autor:** Luis Cabrejo + Claude Code
**Estado:** ✅ Aprobado y en uso

**Cambios futuros:**
- Considerar tipografía Inter (mejor legibilidad)
- Expandir paleta para secciones específicas
- Crear variantes de logo para casos especiales

---

**© 2025 Luis Cabrejo - CreaTuActivo.com**
*Transformando vidas en toda América con tecnología e inteligencia artificial*
