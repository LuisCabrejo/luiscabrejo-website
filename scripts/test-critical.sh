#!/bin/bash
# NEXUS Critical Deploy - Claude API Fix
# Ejecutar inmediatamente después de aplicar artifacts

echo "🚨 NEXUS CRITICAL DEPLOY - Claude API Fix"
echo "========================================"

# 1. Backup del archivo actual
echo "📋 Creating backup..."
cp src/app/api/claude-chat/route.ts src/app/api/claude-chat/route.ts.backup.$(date +%Y%m%d_%H%M%S)

# 2. Verificar archivos están en lugar
echo "🔍 Verifying files..."
if [ ! -f "src/app/api/claude-chat/route.ts" ]; then
    echo "❌ ERROR: route.ts not found!"
    exit 1
fi

if [ ! -f "vercel.json" ]; then
    echo "❌ ERROR: vercel.json not found!"
    exit 1
fi

# 3. Verificar API key está configurada
if [ -z "$ANTHROPIC_API_KEY" ]; then
    echo "⚠️  WARNING: ANTHROPIC_API_KEY not set in environment"
    echo "Make sure it's configured in Vercel dashboard"
fi

# 4. Git add y commit
echo "📦 Staging changes..."
git add .
git status

echo "💾 Committing changes..."
git commit -m "🚨 NEXUS CRITICAL FIX: Claude API 100% failing - Implement 30s timeouts + circuit breaker + retry logic

- Increase timeout from 15s to 30s
- Add circuit breaker for rate limiting protection
- Implement exponential backoff retry (2 attempts)
- Enhance fallbacks with NEXUS-specific responses
- Add Gano Excel context to all fallback responses
- Circuit breaker tracks failures and auto-recovers
- Better error handling for Anthropic API issues

Ready for Colombia launch in 18 hours."

# 5. Push y deploy
echo "🚀 Pushing to production..."
git push origin main

echo "⏳ Waiting for Vercel deployment..."
echo "This may take 2-3 minutes..."

# 6. Verificar deployment
echo "🔍 Checking deployment status..."
sleep 120  # Esperar 2 minutos para deployment

# 7. Test básico
echo "🧪 Testing API endpoint..."
curl -s -X GET https://luiscabrejo.com/api/claude-chat | head -5

echo ""
echo "✅ DEPLOY COMPLETE!"
echo "================="
echo "Next steps:"
echo "1. Wait 2-3 minutes for full deployment"
echo "2. Test with: curl -X POST https://luiscabrejo.com/api/claude-chat -H 'Content-Type: application/json' -d '{\"message\":\"test\",\"conversationHistory\":[]}'"
echo "3. Visit https://luiscabrejo.com/fundadores to test UI"
echo "4. Monitor for next 30 minutes"
echo ""
echo "🎯 Expected result: >60% Claude API success rate"
echo "📊 Monitor circuit breaker at /api/claude-chat GET endpoint"
