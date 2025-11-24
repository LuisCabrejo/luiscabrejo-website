# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**luiscabrejo.com** - Next.js 15 website featuring NEXUS 4.0, an AI chatbot for Gano Excel network marketing distribution. The site serves as the digital brand for Luis Cabrejo and Liliana Moreno's "Sistema 4M" targeting the Colombian market.

**Key Technologies:** Next.js 15 (App Router), TypeScript (strict), Anthropic Claude API (claude-3-5-sonnet-20241022), Supabase, Resend, Tailwind CSS, Vercel

## Development Commands

```bash
# Development (increased memory allocation for large build)
npm run dev
# Runs on http://localhost:3000
# Main NEXUS entry: /fundadores

# Build (increased memory allocation)
npm run build

# Production server
npm start

# Lint
npm run lint

# Deploy
bash scripts/deploy.sh

# Critical tests post-deploy
bash scripts/test-critical.sh

# Health monitoring
bash scripts/health-check.sh

# Diagnose NEXUS issues
bash scripts/diagnose-nexus.sh
```

## NEXUS Chatbot - Core Architecture

NEXUS is a modular, emotionally intelligent AI system for MLM conversations. **This is the most complex part of the codebase.**

### Modular Structure (1,855 lines in 5 files)

Located in `src/app/api/claude-chat/`:

**1. route.ts (428 lines)** - Main orchestration
- API endpoint: POST `/api/claude-chat`
- Conversation flow with profile detection
- Retry logic for Anthropic API (handles 529 overload errors with exponential backoff)
- Coordinates all modules

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

### UI Component

`src/components/NexusChat.tsx` - Expandable chat interface
- Fixed positioning prevents viewport overflow
- Mobile-optimized expand/collapse
- Real-time typing indicators
- Connection status monitoring
- Profile/package selection UI

## API Routes

### `/api/claude-chat` (POST)
NEXUS chatbot endpoint (30s timeout configured in vercel.json)

**Request:**
```typescript
{
  message: string,
  conversationHistory: Array<{role: string, content: string}>
}
```

**Response:**
```typescript
{
  message: string,
  emotion?: string,
  responseType?: 'strategic' | 'natural' | 'fallback',
  profile?: string
}
```

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

## Database

Supabase table: `contacts_luiscabrejo`
- Stores: name, email, phone, country, message, form_type, source
- Tracks: email_sent_to_luis, email_sent_to_user (Resend IDs)
- Schema: `supabase-contact-table.sql`

## Build Configuration

- TypeScript errors ignored in prod (`ignoreBuildErrors: true`)
- ESLint ignored during builds (`ignoreDuringBuilds: true`)
- Memory increased to 4GB (`--max-old-space-size=4096`)
- API routes: 30s timeout (vercel.json)
- Region: `iad1` (US East - optimal for Colombia latency)

## Path Alias

`@/*` → `./src/*` (tsconfig.json)

Example: `import NexusChat from '@/components/NexusChat'`

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

## Footer Component

`src/components/Footer.tsx` - Unified footer across all pages
- Brand: Luis Cabrejo, Co-Fundador CreaTuActivo.com
- Ecosystem links: luiscabrejo.com, app.creatuactivo.com, creatuactivo.com, ganocafe.online
- Contact: luiscabrejo@creatuactivo.com, LinkedIn, Instagram
- Scope: 11 años Diamante, 16 países, +2,847 vidas transformadas

## Important Development Notes

- **Never break NEXUS identity** - Most critical rule for chatbot functionality
- **Maintain Gano Excel accuracy** - Leow Soon Seng = products; Luis = distribution system
- **Mobile-first** - Colombian users primarily mobile
- **Performance critical** - Sub-3s response time required
- **Modular architecture** - Keep 5-module NEXUS structure clean
- **Email design** - Always use HTML with inline styles, test on Gmail/Outlook/Apple Mail

## Business Context

- **Target:** 3,000 "inconformes inteligentes" (intelligent nonconformists) in Colombia
- **Founders:** Luis Cabrejo & Liliana Moreno (Diamond rank Gano Excel)
- **Packages:** $200 (EMPRENDEDOR), $500 (EMPRESARIAL), $1000 (VISIONARIO)
- **Brand hierarchy:** CreaTuActivo.com (main) → luiscabrejo.com (personal brand) → ganocafe.online (products)
- **User flow:** luiscabrejo.com → contact form → email with ecosystem CTA → creatuactivo.com

## Debugging Logs

All critical events logged with Colombia timezone (UTC-5) and emojis:
- 🚀 INICIO - Process start
- ✅ Success checkpoints
- ❌ Errors
- 💥 Critical failures

View in Vercel: Deployments → Click deployment → View Function Logs

## Recent Important Commits

```
ec1f984 🎨 Apply professional HTML email design from CreaTuActivo.com
be93b15 ✨ Improve auto-response email with CreaTuActivo.com ecosystem link
eb57502 🔧 Fix contact form: Use verified creatuactivo.com domain
fbca452 📝 Add Vercel environment variables setup guide
868ccf6 📧 Update contact email to luiscabrejo@creatuactivo.com
```
