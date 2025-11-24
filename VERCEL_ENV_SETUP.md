# Configuración de Variables de Entorno en Vercel

## ❌ Problema Actual

El formulario de contacto arroja error 500 porque faltan las variables de entorno en Vercel:

```
Error: Error en el servidor
/api/contact:1  Failed to load resource: the server responded with a status of 500 ()
```

## ✅ Solución: Configurar Variables de Entorno

### Paso 1: Ir a Vercel Dashboard

1. Abre [vercel.com](https://vercel.com)
2. Ve a tu proyecto **luiscabrejo-website**
3. Click en **Settings** (Configuración)
4. Click en **Environment Variables** (Variables de Entorno)

### Paso 2: Copiar variables desde .env.local

**IMPORTANTE:** Las API keys y valores sensibles están en tu archivo local `.env.local`

Copia las siguientes variables de tu `.env.local` a Vercel:

#### 🔐 Supabase Configuration

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

#### 📧 Resend Email Configuration (CRÍTICO para el formulario)

```
RESEND_API_KEY
```

#### 🤖 Anthropic API (para NEXUS)

```
ANTHROPIC_API_KEY
```

#### 🌐 Site Configuration

```
NODE_ENV=production
```

```
NEXT_PUBLIC_SITE_URL=https://luiscabrejo.com
```

```
NEXT_PUBLIC_WHATSAPP_NUMBER=+573203415438
```

#### 💬 NEXUS Configuration

```
NEXUS_ESCALATION_PHONE=+573203415438
```

```
NEXT_PUBLIC_CHATBOT_ENABLED=true
```

```
NEXT_PUBLIC_CHATBOT_MAX_MESSAGES=100
```

```
NEXT_PUBLIC_SHOW_CHATBOT=true
```

### Paso 3: Configurar el Environment

Para cada variable, asegúrate de seleccionar:
- ✅ **Production**
- ✅ **Preview**
- ✅ **Development**

### Paso 4: Guardar y Re-deploy

1. Click en **Save** para cada variable
2. Ve a **Deployments** (Implementaciones)
3. Click en los 3 puntos (...) del último deploy
4. Click en **Redeploy** para aplicar las variables

## 🔍 Verificación

Después del deploy, verifica:

1. **Formulario de contacto**: Debería enviar emails sin error 500
2. **Logs en Vercel**: Ve a **Deployments** → Click en el deployment → **View Function Logs**
3. Deberías ver logs como:
   ```
   🔧 [timestamp] 🚀 INICIO - Procesando formulario luiscabrejo.com
   🔧 [timestamp] ✅ RESEND_API_KEY encontrada correctamente
   🔧 [timestamp] ✅ Email a Luis enviado exitosamente
   ```

## 📋 Checklist

- [ ] Todas las variables agregadas en Vercel
- [ ] Seleccionado Production, Preview, Development para cada variable
- [ ] Guardadas todas las variables
- [ ] Re-deploy ejecutado
- [ ] Formulario probado en producción
- [ ] Email recibido en luiscabrejo@creatuactivo.com

## 🆘 Si sigue fallando

1. Verifica los **Function Logs** en Vercel
2. Busca el error específico con el emoji ❌
3. Verifica que la API key de Resend no haya expirado
4. Verifica que el dominio send@luiscabrejo.com esté verificado en Resend

## 📚 Documentación Adicional

- [Resend Dashboard](https://resend.com/dashboard)
- [Supabase Dashboard](https://supabase.com/dashboard)
- [Vercel Environment Variables Docs](https://vercel.com/docs/environment-variables)
