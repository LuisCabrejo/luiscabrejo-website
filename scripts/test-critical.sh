#!/bin/bash
echo "🧪 NEXUS 4.0 - TESTS CRÍTICOS POST-DEPLOY"
echo "========================================"
echo "Target: https://luiscabrejo.com/fundadores"
echo "Fecha: $(date)"
echo ""

# Test 1: URL accessibility
echo "🔍 TEST 1 - Verificando accesibilidad URLs..."
if curl -sSf https://luiscabrejo.com/fundadores > /dev/null; then
    echo "✅ luiscabrejo.com/fundadores - ACCESIBLE"
else
    echo "❌ luiscabrejo.com/fundadores - NO ACCESIBLE"
    echo "🚨 CRITICAL ERROR: Página principal no carga"
fi

# Test 2: API endpoint basic check
echo ""
echo "🔍 TEST 2 - Verificando API endpoint..."
API_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -X POST https://luiscabrejo.com/api/claude-chat \
  -H "Content-Type: application/json" \
  -d '{"message":"health check","conversationHistory":[]}')

if [[ "$API_RESPONSE" == "200" ]]; then
    echo "✅ API endpoint - FUNCIONANDO (HTTP 200)"
else
    echo "❌ API endpoint - ERROR (HTTP $API_RESPONSE)"
    echo "🚨 CRITICAL: API no responde correctamente"
fi

echo ""
echo "📋 TESTS MANUALES REQUERIDOS:"
echo "=============================="
echo ""
echo "🎯 TEST CRÍTICO #1 - Identidad NEXUS"
echo "Pregunta: '¿Quién eres?'"
echo "✅ Debe contener: 'NEXUS', 'sistema 4M', 'Luis y Liliana'"
echo "❌ NO debe contener: 'Yo soy Luis', 'Mi experiencia'"
echo ""

echo "🎯 TEST CRÍTICO #2 - Strategic Response"
echo "Pregunta: '¿Qué significa ser fundador?'"
echo "✅ Debe contener: 'posicionamiento', 'participación', 'privilegio'"
echo "✅ Response time: <3 segundos"
echo ""

echo "🎯 TEST CRÍTICO #3 - Gano Excel Accuracy"
echo "Pregunta: 'Háblame del Ganoderma Lucidum'"
echo "✅ Debe contener: 'Leow Soon Seng', '1995', 'Malasia'"
echo "❌ NO debe contener: 'Luis creó', 'Luis integró'"
echo ""

echo "🎯 TEST CRÍTICO #4 - UI Expandible"
echo "Acción: Click expand chat button"
echo "✅ Chat debe expandirse sin salirse del viewport"
echo "✅ Botón collapse debe ser visible y funcional"
echo ""

echo "🎯 TEST CRÍTICO #5 - Mobile Responsive"
echo "Acción: Abrir en dispositivo móvil"
echo "✅ Chat debe funcionar smooth en mobile"
echo "✅ No scroll horizontal issues"
echo ""

echo "📊 MÉTRICAS OBJETIVO:"
echo "===================="
echo "⚡ Response time: <2.5s promedio"
echo "🎭 Identity consistency: >98%"
echo "🏢 Gano Excel accuracy: >95%"
echo "📱 UI functionality: 100%"
echo "❌ Error rate: <1%"
echo ""

echo "✅ Tests automáticos completados"
echo "🔧 Ejecutar tests manuales en: https://luiscabrejo.com/fundadores"
echo ""
