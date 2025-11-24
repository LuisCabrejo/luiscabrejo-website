# Logos LC - Luis Cabrejo

Colección de logos vectoriales SVG con las iniciales **LC** para Luis Cabrejo / CreaTuActivo.com

## 📁 Archivos Disponibles

### 1. **LC-circular.svg** - Minimalista Circular
- ✅ Perfecto para: Favicon, iconos circulares, redes sociales
- 🎨 Color: Morado (#667eea)
- 📐 Tamaño: 180x180px

### 2. **LC-gradient.svg** - Cuadrado con Gradiente
- ✅ Perfecto para: Logo principal, headers, hero sections
- 🎨 Gradiente: Morado a Púrpura (#667eea → #764ba2)
- 📐 Tamaño: 180x180px

### 3. **LC-hexagon.svg** - Hexágono Moderno
- ✅ Perfecto para: Branding tech, diferenciación visual
- 🎨 Gradiente: Azul tech (#4f46e5 → #06b6d4)
- 📐 Tamaño: 180x180px

### 4. **LC-shield.svg** - Escudo Profesional
- ✅ Perfecto para: Marca premium, confianza, autoridad
- 🎨 Gradiente vertical morado
- 📐 Tamaño: 180x200px

### 5. **LC-minimal.svg** - Minimalista Negro ⭐ RECOMENDADO FAVICON
- ✅ Perfecto para: Favicon, contextos oscuros
- 🎨 Negro sólido (#1a202c)
- 📐 Tamaño: 180x180px

### 6. **LC-gold.svg** - Premium Gold
- ✅ Perfecto para: Versión premium, exclusividad
- 🎨 Dorado sobre negro
- 📐 Tamaño: 180x180px

### 7. **LC-square.svg** - Cuadrado Simple ⭐ RECOMENDADO GENERAL
- ✅ Perfecto para: Uso general, favicon, logos pequeños
- 🎨 Morado sólido (#667eea)
- 📐 Tamaño: 180x180px

### 8. **LC-tech.svg** - Tech Startup Style
- ✅ Perfecto para: Branding moderno, startups
- 🎨 Gradiente multicolor tech (cyan → blue → purple)
- 📐 Tamaño: 180x180px

---

## 🚀 Cómo Usar

### Favicon en Next.js 15 (Automático)

El favicon ya está configurado en `/src/app/icon.svg`. Next.js 15 lo genera automáticamente.

No necesitas hacer nada adicional. El favicon aparecerá en:
- Pestaña del navegador
- Marcadores
- Accesos directos móviles

### Logo en Componentes React/Next.js

```tsx
import Image from 'next/image'

// Ejemplo 1: Logo en Header
<Image
  src="/logos/LC-gradient.svg"
  alt="Luis Cabrejo"
  width={50}
  height={50}
/>

// Ejemplo 2: Logo grande en Hero
<Image
  src="/logos/LC-shield.svg"
  alt="LC"
  width={200}
  height={200}
  priority
/>
```

### Logo como SVG inline (más control)

```tsx
export default function Logo() {
  return (
    <svg width="50" height="50" viewBox="0 0 180 180">
      <rect x="5" y="5" width="170" height="170" rx="25" fill="#667eea"/>
      <text x="90" y="125" fontFamily="Arial" fontSize="85" fontWeight="700" fill="white" textAnchor="middle">LC</text>
    </svg>
  )
}
```

### Logo en Footer/Navigation

```tsx
import Link from 'next/link'
import Image from 'next/image'

<Link href="/">
  <Image
    src="/logos/LC-square.svg"
    alt="Luis Cabrejo"
    width={40}
    height={40}
  />
</Link>
```

---

## 🎨 Generador Interactivo

Abre `scripts/generate-logos.html` en tu navegador para:
- 👀 Ver todos los logos en preview
- 📥 Descargar individualmente
- 📋 Copiar código SVG al portapapeles
- 🎨 Comparar diseños lado a lado

```bash
# Abrir generador
open scripts/generate-logos.html
```

---

## 📐 Tamaños Recomendados por Uso

| Uso | Tamaño | Archivo Recomendado |
|-----|--------|---------------------|
| **Favicon (navegador)** | 32x32, 64x64 | `LC-square.svg` o `LC-minimal.svg` |
| **Logo Header** | 40-60px altura | `LC-gradient.svg` |
| **Logo Hero (grande)** | 200-400px | `LC-shield.svg` o `LC-gradient.svg` |
| **Logo Footer** | 30-40px | `LC-circular.svg` |
| **Social Media (OpenGraph)** | 1200x1200px | Exportar a PNG desde SVG |
| **App Icon (móvil)** | 512x512px | Exportar a PNG desde `LC-square.svg` |

---

## 🔧 Personalización

Todos los logos están en formato SVG vectorial. Puedes personalizarlos fácilmente:

### Cambiar Colores

```svg
<!-- Ejemplo: Cambiar de morado a azul -->
<rect fill="#667eea"/>  <!-- Original: Morado -->
<rect fill="#3b82f6"/>  <!-- Nuevo: Azul -->
```

### Cambiar Tamaño

Los SVG son escalables. Simplemente cambia `width` y `height`:

```tsx
<Image src="/logos/LC-square.svg" width={100} height={100} />
```

### Crear Variantes

Edita los archivos SVG con:
- Figma (importar SVG)
- Adobe Illustrator
- Inkscape (gratis)
- Editor de código (son texto plano)

---

## 💡 Tips de Uso

1. **Favicon**: Usa `LC-square.svg` o `LC-minimal.svg` (mejor contraste en pestañas pequeñas)
2. **Logo principal**: Usa `LC-gradient.svg` (más impacto visual)
3. **Contextos oscuros**: Usa `LC-gold.svg` (mejor contraste)
4. **Mobile**: Todos los SVG se ven perfectos en móviles
5. **Performance**: Los SVG son livianos (~1-2KB cada uno)

---

## 🎯 Branding Consistency

Todos los logos usan la paleta de colores de CreaTuActivo.com:

- **Morado principal**: `#667eea` (color primario del sitio)
- **Morado oscuro**: `#5568d3` (hover states)
- **Púrpura**: `#764ba2` (gradientes)
- **Negro**: `#1a202c` (versión oscura)
- **Dorado**: `#ffd700` (versión premium)

---

## 📝 Licencia

© 2025 Luis Cabrejo - CreaTuActivo.com
Uso exclusivo para el ecosistema CreaTuActivo.com

---

**¿Necesitas otro formato o tamaño?**
Todos los logos son SVG vectoriales y se pueden exportar a PNG/JPG en cualquier tamaño sin pérdida de calidad usando herramientas como:
- [Convertio](https://convertio.co/es/svg-png/)
- [CloudConvert](https://cloudconvert.com/svg-to-png)
- Figma (gratis, exportación profesional)
