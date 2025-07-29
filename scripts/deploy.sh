#!/bin/bash
echo "🚀 NEXUS 4.0 - DEPLOY A PRODUCCIÓN"
echo "=================================="
echo "Fecha: $(date)"
echo "Target: luiscabrejo.com/fundadores"
echo ""

# Verificar prerequisites
echo "🔍 PASO 1 - Verificando prerequisites..."

# Check if git is clean
if [[ -n $(git status --porcelain) ]]; then
    echo "⚠️  Git status no está limpio. Archivos pendientes:"
    git status --short
    echo ""
    read -p "¿Continuar con deploy? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deploy cancelado por usuario"
        exit 1
    fi
fi

# Check critical files exist
echo "📋 Verificando archivos críticos..."
CRITICAL_FILES=(
    "src/app/api/claude-chat/route.ts"
    "src/components/NexusChat.tsx"
    "src/app/fundadores/page.tsx"
    ".env.local"
    "package.json"
)

for file in "${CRITICAL_FILES[@]}"; do
    if [[ -f "$file" ]]; then
        echo "✅ $file"
    else
        echo "❌ FALTA: $file"
        echo "🚨 CRITICAL ERROR: Deploy cancelado - archivo crítico faltante"
        exit 1
    fi
done

# Verify .env.local has API key
if grep -q "ANTHROPIC_API_KEY=sk-" .env.local; then
    echo "✅ ANTHROPIC_API_KEY configurada"
else
    echo "❌ ANTHROPIC_API_KEY faltante o inválida en .env.local"
    exit 1
fi

echo ""
echo "🔧 PASO 2 - Build test..."
npm run build
if [[ $? -ne 0 ]]; then
    echo "❌ Build failed - Deploy cancelado"
    exit 1
fi
echo "✅ Build successful"

echo ""
echo "📤 PASO 3 - Git commit y push..."
git add .
git commit -m "NEXUS 4.0 - Production deploy $(date '+%Y-%m-%d %H:%M')"
git push origin main

if [[ $? -ne 0 ]]; then
    echo "❌ Git push failed - Deploy cancelado"
    exit 1
fi
echo "✅ Git push successful"

echo ""
echo "🌐 PASO 4 - Vercel deploy..."
vercel --prod

if [[ $? -ne 0 ]]; then
    echo "❌ Vercel deploy failed"
    echo "🔧 Troubleshooting:"
    echo "1. Check: vercel --version"
    echo "2. Login: vercel login"
    echo "3. Setup: vercel (primera vez)"
    echo "4. Retry: vercel --prod"
    exit 1
fi

echo ""
echo "✅ DEPLOY COMPLETADO!"
echo "===================="
echo "🌐 URL Principal: https://luiscabrejo.com/fundadores"
echo "🤖 API Endpoint: https://luiscabrejo.com/api/claude-chat"
echo ""
echo "🧪 SIGUIENTE PASO:"
echo "Ejecutar: bash scripts/test-critical.sh"
echo ""
