# Google Search Console - Guía de Configuración para LuisCabrejo.com

**Fecha:** 20 Noviembre 2025
**Sitio:** https://luiscabrejo.com
**Autor:** Luis Cabrejo

---

## ✅ Pre-requisitos Completados

Los siguientes archivos SEO ya están desplegados en producción:

- ✅ **Sitemap XML**: https://luiscabrejo.com/sitemap.xml (25 URLs)
- ✅ **Robots.txt**: https://luiscabrejo.com/robots.txt
- ✅ **Metadata SEO**: Open Graph, Twitter Cards, canonical tags
- ✅ **JSON-LD**: Structured data (Person + WebSite schemas)

---

## 📋 Pasos para Configurar Google Search Console

### 1. Acceder a Google Search Console

1. Ir a: https://search.google.com/search-console
2. Iniciar sesión con tu cuenta de Google (luiscabrejo7@gmail.com)

### 2. Agregar Nueva Propiedad

**Opción A: Propiedad de Dominio (Recomendada)**
```
Dominio: luiscabrejo.com
```
- Incluye automáticamente: www.luiscabrejo.com, http://, https://
- Requiere verificación DNS

**Opción B: Prefijo de URL (Alternativa)**
```
URL: https://luiscabrejo.com
```
- Solo incluye la URL exacta
- Múltiples métodos de verificación disponibles

### 3. Verificar Propiedad del Sitio

Google Search Console ofrecerá varios métodos de verificación:

#### **Método 1: Etiqueta HTML (Recomendado para Next.js)**

1. Google te dará un código como:
   ```html
   <meta name="google-site-verification" content="CODIGO_AQUI" />
   ```

2. Agregar al archivo `src/app/layout.tsx`:
   ```typescript
   export const metadata: Metadata = {
     // ... metadata existente ...
     verification: {
       google: 'CODIGO_AQUI', // Reemplazar con tu código
     },
   };
   ```

3. Hacer commit y push:
   ```bash
   git add src/app/layout.tsx
   git commit -m "🔍 SEO: Agregar Google Search Console verification"
   git push origin main
   ```

4. Esperar deploy de Vercel (~1 minuto)

5. Volver a Google Search Console y hacer clic en "Verificar"

#### **Método 2: Registro DNS (Si controlas DNS en Vercel)**

1. Google te dará un registro TXT como:
   ```
   google-site-verification=CODIGO_LARGO_AQUI
   ```

2. En Vercel Dashboard:
   - Settings → Domains → luiscabrejo.com
   - Add DNS Record
   - Type: TXT
   - Name: @
   - Value: google-site-verification=CODIGO_LARGO_AQUI

3. Esperar propagación DNS (puede tomar hasta 24 horas, típicamente 5-10 min)

4. Volver a Google Search Console y hacer clic en "Verificar"

#### **Método 3: Archivo HTML (No recomendado para Next.js)**

No usar este método con Next.js App Router.

---

### 4. Enviar Sitemap

Una vez verificada la propiedad:

1. En Google Search Console, ir a: **Sitemaps** (menú izquierdo)

2. Agregar nuevo sitemap:
   ```
   https://luiscabrejo.com/sitemap.xml
   ```

3. Hacer clic en "Enviar"

4. Verificar estado:
   - ✅ Estado: **Correcto** (puede tardar unas horas)
   - URLs descubiertas: **25 páginas**

---

### 5. Verificar Configuración

Después de 24-48 horas, verificar en Google Search Console:

#### **Cobertura/Coverage**
- Páginas válidas indexadas
- Páginas excluidas (revisar si es intencional)
- Errores (corregir si hay)

#### **Rendimiento/Performance**
- Clics
- Impresiones
- CTR
- Posición promedio

#### **Experiencia/Experience**
- Core Web Vitals
- Mobile usability

#### **Mejoras/Enhancements**
- Structured data (Person, WebSite)
- Breadcrumbs (si aplica)

---

## 🎯 URLs Importantes en el Sitemap

El sitemap incluye 25 páginas organizadas por prioridad:

### **Prioridad Alta (0.95-1.0)**
- `/` - Homepage (priority: 1.0)
- `/fundadores` - Landing principal (priority: 0.95, changefreq: daily)
- `/sistema/productos` - Catálogo (priority: 0.95)

### **Prioridad Media-Alta (0.85-0.9)**
- `/ecosistema` - Ecosistema digital (0.9)
- `/presentacion-empresarial` - Presentación (0.9)
- `/paquetes` - Inversión (0.9)
- `/modelo-de-valor` - Propuesta de valor (0.85)
- `/sistema/framework-iaa` - Metodología (0.85)
- 6 páginas de soluciones por arquetipo (0.85 cada una)

### **Prioridad Media (0.7-0.8)**
- `/planes` - Similar a paquetes (0.7)
- `/ecosistema/academia` - Academia (0.8)
- `/ecosistema/comunidad` - Comunidad (0.8)
- `/fundadores-network` - Red de fundadores (0.8)
- `/fundadores-profesionales` - Profesionales (0.8)
- `/sistema/tecnologia` - Stack tecnológico (0.8)
- `/sistema/socio-corporativo` - B2B (0.8)

### **Prioridad Baja (0.3)**
- `/privacidad` - Política de privacidad (0.3)

---

## 📊 Métricas Esperadas

### **Primeros 7 días**
- Indexación: 10-15 páginas
- Impresiones: 50-200
- Clics: 5-20

### **Primer mes**
- Indexación: 20-25 páginas (100%)
- Impresiones: 500-2,000
- Clics: 50-200
- CTR: 5-15%

### **3 meses**
- Posiciones promedio: Top 20-50 para keywords de marca
- Keywords indexadas: 100-300
- Tráfico orgánico: 500-1,500 visitas/mes

---

## 🔧 Troubleshooting Común

### **Problema: "URL no está en Google"**
**Solución:**
1. Usar herramienta "Inspección de URL"
2. Solicitar indexación manual
3. Esperar 1-7 días

### **Problema: "Sitemap no se puede leer"**
**Solución:**
1. Verificar https://luiscabrejo.com/sitemap.xml en navegador
2. Validar XML en https://www.xml-sitemaps.com/validate-xml-sitemap.html
3. Verificar que Vercel esté sirviendo el archivo correctamente

### **Problema: "Cobertura: Excluido por robots.txt"**
**Solución:**
1. Verificar https://luiscabrejo.com/robots.txt
2. Confirmar que la URL no esté en `Disallow`
3. Usar herramienta "Prueba de robots.txt" en GSC

### **Problema: "Datos estructurados con errores"**
**Solución:**
1. Validar JSON-LD en https://validator.schema.org/
2. Verificar que los schemas estén correctamente implementados en layout.tsx
3. Esperar 24-48 horas para re-crawling

---

## 📈 Optimizaciones Post-Configuración

### **Semana 1-2**
- [ ] Monitorear errores de cobertura
- [ ] Verificar indexación de páginas principales
- [ ] Revisar structured data en GSC

### **Mes 1**
- [ ] Analizar keywords con más impresiones
- [ ] Optimizar títulos/descripciones de páginas con bajo CTR
- [ ] Crear contenido para keywords relevantes

### **Mes 2-3**
- [ ] Link building interno (conectar páginas relacionadas)
- [ ] Crear backlinks desde CreaTuActivo.com
- [ ] Publicar contenido en blog (si se agrega)

---

## 🔗 Recursos Útiles

- **Google Search Console**: https://search.google.com/search-console
- **Schema.org Validator**: https://validator.schema.org/
- **Rich Results Test**: https://search.google.com/test/rich-results
- **PageSpeed Insights**: https://pagespeed.web.dev/?url=https://luiscabrejo.com
- **Sitemap Validator**: https://www.xml-sitemaps.com/validate-xml-sitemap.html

---

## 📝 Notas Importantes

1. **Verificación permanente**: Una vez verificado, Google recordará la propiedad
2. **Múltiples métodos**: Puedes usar varios métodos de verificación simultáneamente
3. **Datos históricos**: GSC solo muestra datos desde la fecha de verificación
4. **Paciencia**: La indexación completa puede tomar 1-4 semanas

---

## ✅ Checklist Final

- [ ] Propiedad verificada en Google Search Console
- [ ] Sitemap enviado (https://luiscabrejo.com/sitemap.xml)
- [ ] Verificar código de verificación en `layout.tsx` (si usaste método HTML)
- [ ] Confirmar que robots.txt permite crawling
- [ ] Revisar structured data en Rich Results Test
- [ ] Monitorear cobertura después de 48 horas
- [ ] Revisar rendimiento después de 7 días

---

**Última actualización:** 20 Noviembre 2025
**Próxima revisión:** 27 Noviembre 2025 (verificar indexación inicial)
