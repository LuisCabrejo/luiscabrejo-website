# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**luiscabrejo.com** - Next.js 16 website featuring NEXUS 4.0, an AI chatbot for Gano Excel network marketing distribution. The site serves as the digital brand for Luis Cabrejo and Liliana Moreno's "Sistema 4M" targeting the Colombian market.

**Tech Stack:** Next.js 16 (App Router), TypeScript (strict), Anthropic Claude API, Supabase, Resend, Tailwind CSS, Framer Motion, Vercel

**Claude Models:**
- `/api/claude-chat`: claude-3-5-sonnet-20241022 (main NEXUS)
- `/api/nexus`: claude-sonnet-4-20250514 (vector search variant)

**Path Alias:** `@/*` → `./src/*`

## Development Commands

```bash
npm run dev        # Development server (http://localhost:3000, main NEXUS entry: /fundadores)
npm run build      # Production build (4GB memory allocation)
npm start          # Production server
npm run lint       # ESLint

# Scripts
bash scripts/deploy.sh          # Deploy to Vercel
bash scripts/test-critical.sh   # Critical tests post-deploy
bash scripts/health-check.sh    # Health monitoring
bash scripts/diagnose-nexus.sh  # Diagnose NEXUS issues
bash scripts/monitor.sh         # Launch day monitoring
bash scripts/backup.sh          # Backup automation
bash scripts/verify-logos.sh    # Verify logo assets
```

## NEXUS Chatbot - Core Architecture

NEXUS is a modular, emotionally intelligent AI system for MLM conversations. **This is the most complex part of the codebase.**

### Modular Structure (1,176 lines main route + 4 support modules)

Located in `src/app/api/claude-chat/`:

**1. route.ts (1,176 lines)** - Main orchestration with streaming
- API endpoint: POST `/api/claude-chat`
- **Native streaming implementation** using ReadableStream (NO AI SDK dependency)
- Manual text streaming from Anthropic API events
- Conversation flow with profile detection
- Retry logic for Anthropic API (handles 529 overload errors with exponential backoff)
- Returns `text/plain` streaming response

**2. nexus-content.ts (587 lines)** - Strategic content
- 24 pre-programmed strategic responses for common MLM questions
- System prompts for Claude API
- Package definitions: EMPRENDEDOR ($200), EMPRESARIAL ($500), VISIONARIO ($1000)
- Welcome messages and conversation patterns

**3. nexus-profiles.ts (299 lines)** - User profiling
- 6 user profiles: Health Professional, Corporate Employee, Entrepreneur, Homemaker, Independent Professional, Other
- Profile detection from message patterns
- Personalized responses per profile
- Profile transition logic

**4. nexus-utils.ts (415 lines)** - Core utilities
- `findStrategicResponse()` - Pattern matching for strategic responses
- `validateNexusIdentity()` - **Critical: Ensures NEXUS never speaks as Luis**
- `validateGanoExcelInfo()` - Validates company facts
- `analyzeEmotionalState()` - Detects 6 emotional patterns
- `detectConversionSignals()` - Identifies purchase intent
- Retry logic with exponential backoff

**5. nexus-types.ts (126 lines)** - TypeScript definitions

### Frontend Streaming Integration

**`src/components/useNexusChat.ts` (294 lines)** - Custom React hook
- Real-time streaming with character-by-character typing effect
- Progressive message building from streaming chunks
- Error handling with WhatsApp escalation (+573203415438)
- Session/fingerprint tracking
- Integration with `/api/claude-chat` endpoint

**`src/components/NexusChat.tsx` (289 lines)** - UI Component
- ReactMarkdown rendering for formatted messages
- Expandable chat interface (desktop/mobile)
- Real-time typing indicators during streaming
- Connection status monitoring
- Profile/package selection UI

**`src/lib/vectorSearch.ts` (260 lines)** - Vector search utility
- Voyage AI embedding generation
- Cosine similarity computation
- Document search with configurable threshold
- Used by `/api/nexus` for semantic search

### Critical Identity Rules - NEVER BREAK THESE

**NEXUS MUST:**
- Represent the "Sistema 4M" created by Luis and Liliana
- NEVER speak as Luis or claim personal experiences ("Yo soy Luis", "Mi experiencia de 11 años")
- Credit **Leow Soon Seng** for creating Gano Excel products (1995, Malaysia)
- Credit **Luis/Liliana** for creating the **distribution system**, NOT the products

**Validation:** `validateNexusIdentity()` flags forbidden phrases. If NEXUS breaks identity:
1. Check system prompt in nexus-content.ts
2. Verify ANTHROPIC_API_KEY is loaded
3. Review recent conversation history for confusion

### Emotional Intelligence Patterns

NEXUS detects 6 emotional states for MLM contexts:
1. **Skeptical/Defensive** - Past negative MLM experiences
2. **Analytical/Cautious** - Data-driven evaluation
3. **Excited/Impulsive** - High enthusiasm
4. **Worried/Concerned** - Financial fears
5. **Professional/Reserved** - Reputation concerns
6. **Frustrated/Impatient** - MLM fatigue

### Streaming Implementation

Uses **native ReadableStream** (NO AI SDK dependency):
- **Backend** (`route.ts`): Manual text streaming from Anthropic API events → `text/plain` response
- **Frontend** (`useNexusChat.ts`): Character-by-character rendering via `response.body.getReader()`

## API Routes

### `/api/claude-chat` (POST)
NEXUS chatbot endpoint (30s timeout configured in vercel.json)

**Request:**
```typescript
{
  messages: Array<{role: 'user' | 'assistant', content: string}>,
  fingerprint?: string,
  sessionId?: string
}
```

**Response:**
Streaming `text/plain` response (character-by-character)
- No JSON wrapper
- Direct text stream from Claude API
- Frontend handles progressive rendering

### `/api/contact` (POST)
Contact form with dual email delivery (Resend) + Supabase storage

**Request:**
```typescript
{
  name: string,
  email: string,
  phone?: string,
  country?: string,
  message?: string,
  formType?: string
}
```

**Sends to:**
- luiscabrejo@creatuactivo.com + luiscabrejo7@gmail.com
- Auto-response HTML email to user with CreaTuActivo.com ecosystem CTA

### `/api/nexus` (POST)
Alternative NEXUS endpoint with vector search + Supabase hybrid architecture (Edge runtime, 60s timeout)

**Features:**
- Uses `claude-sonnet-4-20250514` model
- Voyage AI embeddings for semantic document search
- Supabase `nexus_documents` table for arsenal content
- Supabase `system_prompts` table for dynamic system prompt management
- Hybrid classification: vector search → pattern matching fallback
- In-memory caching (5 min TTL)

**Document Categories:**
- `arsenal_inicial` - Getting started, packages, how it works
- `arsenal_avanzado` - Objection handling (pyramid, scam, etc.)
- `arsenal_compensacion` - Compensation plan, CV/PV, bonuses, Gen5
- `arsenal_reto` - 5-day challenge lead magnet
- `catalogo_productos` - Product catalog and pricing

**Additional Env Var Required:** `VOYAGE_API_KEY` for vector embeddings

## Email System - Professional HTML Design

All emails use **CreaTuActivo.com HTML design**:
- Dark background (#0f172a)
- Color-coded cards: Purple (CTA), Blue (links), Green (success), Gold (alerts)
- System fonts for compatibility
- Mobile responsive with media queries
- Inline styles (required for email clients)

**Email to User** includes prominent CTA to `creatuactivo.com/ecosistema`

**Email to Luis** includes clickable user email, conditional fields, Colombia timezone

See `src/app/api/contact/route.ts` lines 210-366 for implementation.

## Environment Variables

Required in `.env.local` and Vercel (see VERCEL_ENV_SETUP.md for detailed setup):

```bash
# Anthropic (NEXUS)
ANTHROPIC_API_KEY=sk-ant-...

# Supabase (contacts)
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

# Resend (emails)
RESEND_API_KEY=re_...

# Site config
NEXT_PUBLIC_SITE_URL=https://luiscabrejo.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+573203415438
NODE_ENV=production

# NEXUS config
NEXUS_ESCALATION_PHONE=+573203415438
NEXT_PUBLIC_CHATBOT_ENABLED=true
NEXT_PUBLIC_CHATBOT_MAX_MESSAGES=100
NEXT_PUBLIC_SHOW_CHATBOT=true

# Vector search (optional, for /api/nexus)
VOYAGE_API_KEY=...
```

**Important:** After adding variables to Vercel, always redeploy.

## Key Pages & Routes

- `/` - Home (Luis intro)
- `/fundadores` - **Main NEXUS landing page** (primary entry)
- `/historia` - Personal story
- `/vision` - 4 million vision
- `/ecosistema` - CreaTuActivo.com platform
- `/privacidad` - Privacy policy
- `/test-api` - API testing
- `/blog` - Blog section (SEO optimized)
  - `/blog/testimonio-11-anos-diamante-gano-excel-colombia` - Testimonial (pillar content, priority 0.9)
  - `/blog/como-ser-distribuidor-gano-excel-colombia-2025` - Distributor guide (priority 0.85)
  - `/blog/el-fin-del-rechazo` - Rejection handling article

## Database

**Supabase table: `contacts_luiscabrejo`**
- Stores: name, email, phone, country, message, form_type, source
- Tracks: email_sent_to_luis, email_sent_to_user (Resend IDs)
- Schema: `supabase-contact-table.sql`

**Supabase table: `nexus_documents`** (for /api/nexus)
- Arsenal content with Voyage AI embeddings
- Columns: category, title, content, embedding, metadata
- Categories: arsenal_inicial, arsenal_avanzado, arsenal_compensacion, arsenal_reto, catalogo_productos

**Supabase table: `system_prompts`** (for /api/nexus)
- Dynamic system prompt management
- Columns: name, prompt, version
- Key row: `nexus_main`

## Build Configuration

- TypeScript errors ignored in prod (`ignoreBuildErrors: true`)
- ESLint ignored during builds (`ignoreDuringBuilds: true`)
- Memory increased to 4GB (`--max-old-space-size=4096`)
- API routes: 30s timeout (vercel.json)
- Region: `iad1` (US East - optimal for Colombia latency)

## Performance Requirements

- **Response time:** <2.5s average (NEXUS)
- **Identity accuracy:** >98% (NEXUS never confuses identity)
- **Information accuracy:** >95% (Gano Excel facts)
- **Error rate:** <1%

## Testing After Deploy

Run: `bash scripts/test-critical.sh`

**Critical manual tests:**
1. **Identity:** "¿Quién eres?" → Should respond as NEXUS representing Sistema 4M, NOT as Luis
2. **Strategic response:** "¿Qué significa ser fundador?" → Should contain key positioning terms
3. **Gano Excel accuracy:** Should credit Leow Soon Seng for products, Luis for distribution system
4. **UI:** Chat expand/collapse smooth on desktop/mobile
5. **Contact form:** Should send emails without 500 error

## Common Issues

### Error 529 - Anthropic API Overload
Auto-retry with exponential backoff (3 attempts). Check logs for "Attempt 1/3", "Attempt 2/3".

### NEXUS Identity Confusion
If NEXUS says "Yo soy Luis" or claims personal experience:
1. Restart server
2. Verify ANTHROPIC_API_KEY loaded
3. Check `validateNexusIdentity()` in nexus-utils.ts
4. Review system prompt in nexus-content.ts

### Contact Form 500 Error
Usually missing Vercel env vars:
1. Check RESEND_API_KEY configured
2. Verify domain `contacto@creatuactivo.com` verified in Resend
3. Check Vercel Function Logs for specific error

### Slow NEXUS Response
- Check Anthropic API latency
- Review conversation history length (context size)
- Verify Vercel region (should be iad1)

## Resend Email Configuration

**Verified domain:** `creatuactivo.com` (NOT luiscabrejo.com)
**From:** `contacto@creatuactivo.com`
**Reply-to:** `luiscabrejo@creatuactivo.com`

Why creatuactivo.com? Domain is verified in Resend; luiscabrejo.com is not.

## Important Development Notes

- **Never break NEXUS identity** - Most critical rule for chatbot functionality
- **Maintain Gano Excel accuracy** - Leow Soon Seng = products; Luis = distribution system
- **Mobile-first** - Colombian users primarily mobile
- **Performance critical** - Sub-3s response time required
- **Modular architecture** - Keep 5-module NEXUS structure clean
- **Email design** - Always use HTML with inline styles, test on Gmail/Outlook/Apple Mail
- **Business messaging accuracy:**
  - First 9 years: LOCAL operations only
  - Then: Digital transformation with ganocafe.online
  - Last 3 years: Expansion across América
  - Team focus: 15 Diamantes goal by 2026 (not just family)
  - Jieth & Liliana: Emphasize independent work ethic and service

## Business Context

- **Target:** 3,000 "inconformes inteligentes" (intelligent nonconformists) in Colombia
- **Founders:** Luis Cabrejo & Liliana Moreno (Diamond rank Gano Excel)
- **Packages:** $200 (EMPRENDEDOR), $500 (EMPRESARIAL), $1000 (VISIONARIO)
- **Brand hierarchy:** CreaTuActivo.com (main) → luiscabrejo.com (personal brand) → ganocafe.online (products)
- **User flow:** luiscabrejo.com → contact form → email with ecosystem CTA → creatuactivo.com
- **Business Timeline:**
  - First 9 years: Local operations in Colombia
  - Post-pandemic: Digital transformation with ganocafe.online launch
  - Last 3 years: Expansion across América (16 countries)
  - Key insight: Digital work achieved in 3 years what 9 years local couldn't
- **Team Goals 2026:** 15 new Diamantes from CreaTuActivo.com founder group

## Debugging Logs

All critical events logged with Colombia timezone (UTC-5) and emojis:
- 🚀 INICIO - Process start
- ✅ Success checkpoints
- ❌ Errors
- 💥 Critical failures

View in Vercel: Deployments → Click deployment → View Function Logs

## SEO Optimization - Blog Section

### Sitemap Configuration
All blog URLs included in `src/app/sitemap.ts`:
- `/blog` - Priority 0.8, updated weekly
- `/blog/testimonio-11-anos-diamante-gano-excel-colombia` - Priority 0.9 (pillar content)
- `/blog/como-ser-distribuidor-gano-excel-colombia-2025` - Priority 0.85

View sitemap: https://luiscabrejo.com/sitemap.xml

### Canonical URLs
Each blog page has proper canonical URL configuration:
- Blog index: `canonical: 'https://luiscabrejo.com/blog'` (in blog/layout.tsx)
- Individual posts: Set in each post's metadata

**Critical Fix (Nov 24, 2025):** Blog canonical URL was pointing to home page (`/`) - fixed to point to `/blog`

### OpenGraph Metadata
Complete OpenGraph setup in blog/layout.tsx:
```typescript
openGraph: {
  title: 'Blog Gano Excel y Network Marketing - Luis Cabrejo',
  description: '...',
  url: 'https://luiscabrejo.com/blog',
  type: 'website',
  locale: 'es_CO',
  siteName: 'Luis Cabrejo Blog',
}
```

### Google Search Console Readiness
✅ All optimizations completed (Nov 24, 2025):
1. Canonical URLs configured
2. OpenGraph metadata complete
3. Sitemap includes all blog URLs
4. robots.txt allows indexing
5. Ready for URL submission to GSC

## Build Gotchas

### Client Component Metadata Error
**Symptom:** Build error "You are attempting to export metadata from a component marked with 'use client'"

**Fix:** Remove metadata export from client components. Keep metadata only in layout.tsx files.
