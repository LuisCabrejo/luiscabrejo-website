#!/bin/bash
# scripts/diagnose-nexus.sh - Diagnóstico completo del sistema

echo "🔍 NEXUS 4.0 - DIAGNÓSTICO COMPLETO DEL SISTEMA"
echo "=============================================="
echo "Fecha: $(date)"
echo "Objetivo: Identificar causa de fallos 2/5 requests"
echo ""

# Función para test detallado
test_api_detailed() {
    local test_message="$1"
    local test_name="$2"

    echo "🧪 Testing: $test_name"
    echo "Mensaje: '$test_message'"

    # Capturar tiempo de inicio
    start_time=$(date +%s%N)

    # Hacer request con curl detallado
    response=$(curl -s -w "\n%{http_code}\n%{time_total}\n%{time_connect}\n%{time_starttransfer}" \
        -X POST https://luiscabrejo.com/api/claude-chat \
        -H "Content-Type: application/json" \
        -d "{\"message\":\"$test_message\",\"conversationHistory\":[]}")

    # Separar response del status
    body=$(echo "$response" | head -n -3)
    http_code=$(echo "$response" | tail -n 3 | head -n 1)
    time_total=$(echo "$response" | tail -n 2 | head -n 1)
    time_connect=$(echo "$response" | tail -n 1)

    end_time=$(date +%s%N)
    duration_ms=$(( (end_time - start_time) / 1000000 ))

    echo "📊 Resultados:"
    echo "  HTTP Status: $http_code"
    echo "  Tiempo Total: ${time_total}s"
    echo "  Tiempo Conexión: ${time_connect}s"
    echo "  Duración Real: ${duration_ms}ms"

    # Analizar respuesta
    if [[ "$http_code" == "200" ]]; then
        if echo "$body" | grep -q "dificultad técnica"; then
            echo "  ⚠️  SUCCESS pero FALLBACK response detectada"
            echo "  🔍 Respuesta: $(echo "$body" | jq -r '.message' 2>/dev/null | head -c 100)..."
        else
            echo "  ✅ SUCCESS con respuesta normal de Claude"
        fi
    else
        echo "  ❌ HTTP ERROR: $http_code"
        echo "  🔍 Body: $body"
    fi

    echo ""
    sleep 2  # Evitar rate limiting
}

# Tests específicos que están fallando
echo "🎯 EJECUTANDO TESTS ESPECÍFICOS (5 preguntas típicas)"
echo "=================================================="

test_api_detailed "¿Quién eres?" "Identidad NEXUS"
test_api_detailed "¿Qué significa ser fundador?" "Strategic Response"
test_api_detailed "Háblame del Ganoderma Lucidum" "Información Gano Excel"
test_api_detailed "¿Cuánto necesito invertir?" "Precios y paquetes"
test_api_detailed "¿Cómo funciona el sistema?" "Funcionamiento 4M"

echo ""
echo "🔍 EJECUTANDO TESTS DE CARGA LIGERA"
echo "=================================="

# Test de 10 requests rápidos para ver el patrón de fallos
success_count=0
fallback_count=0
error_count=0

for i in {1..10}; do
    echo "Test $i/10..."

    response=$(curl -s -w "%{http_code}" \
        -X POST https://luiscabrejo.com/api/claude-chat \
        -H "Content-Type: application/json" \
        -d '{"message":"test '${i}'","conversationHistory":[]}')

    http_code="${response: -3}"
    body="${response%???}"

    if [[ "$http_code" == "200" ]]; then
        if echo "$body" | grep -q "dificultad técnica"; then
            fallback_count=$((fallback_count + 1))
            echo "  ⚠️  Fallback response"
        else
            success_count=$((success_count + 1))
            echo "  ✅ Claude response"
        fi
    else
        error_count=$((error_count + 1))
        echo "  ❌ HTTP Error: $http_code"
    fi

    sleep 1
done

echo ""
echo "📊 RESUMEN DE TESTS DE CARGA:"
echo "============================="
echo "✅ Respuestas Claude exitosas: $success_count/10 ($(( success_count * 10 ))%)"
echo "⚠️  Respuestas Fallback: $fallback_count/10 ($(( fallback_count * 10 ))%)"
echo "❌ Errores HTTP: $error_count/10 ($(( error_count * 10 ))%)"
echo ""

# Análisis de la causa probable
if [[ $fallback_count -gt 3 ]]; then
    echo "🚨 DIAGNÓSTICO: PROBLEMA DE API CLAUDE"
    echo "======================================"
    echo "Síntomas: >30% de requests usando fallback"
    echo ""
    echo "Causas probables:"
    echo "1. 🚫 Anthropic API Rate Limiting"
    echo "2. ⚡ Anthropic API Error 529 (Overloaded)"
    echo "3. ⌛ Timeouts muy cortos (actual: 15s)"
    echo "4. 💸 API quota alcanzada"
    echo "5. 🌍 Latencia alta a servidores Anthropic"
    echo ""
    echo "SOLUCIONES RECOMENDADAS:"
    echo "✅ 1. Aumentar timeouts a 30s"
    echo "✅ 2. Implementar circuit breaker"
    echo "✅ 3. Mejorar fallbacks inteligentes"
    echo "✅ 4. Rate limiting más conservador"

elif [[ $error_count -gt 2 ]]; then
    echo "🚨 DIAGNÓSTICO: PROBLEMA DE SERVIDOR"
    echo "===================================="
    echo "Síntomas: >20% de requests con HTTP errors"
    echo ""
    echo "Causas probables:"
    echo "1. 🔧 Vercel function timeout (10s default)"
    echo "2. 💾 Memory limits en Vercel"
    echo "3. 🌐 DNS o routing issues"
    echo "4. ⚙️  Configuración Next.js"

else
    echo "✅ DIAGNÓSTICO: SISTEMA RELATIVAMENTE ESTABLE"
    echo "============================================="
    echo "Síntomas: <30% de fallos"
    echo ""
    echo "Optimizaciones menores:"
    echo "🔧 Ajustar timeouts para mejor UX"
    echo "📊 Mejorar monitoring en tiempo real"
    echo "⚡ Optimizar fallbacks para casos edge"
fi

echo ""
echo "🛠️  ACCIONES INMEDIATAS RECOMENDADAS:"
echo "===================================="
echo "1. Aplicar la nueva versión del API route (timeouts 30s + circuit breaker)"
echo "2. Ejecutar: bash scripts/monitor-nexus.sh durante 1 hora"
echo "3. Revisar logs de Vercel dashboard para errors específicos"
echo "4. Considerar upgrade a Vercel Pro si hay memory/timeout limits"
echo ""

# Health check del endpoint
echo "🏥 HEALTH CHECK FINAL:"
echo "====================="
health_response=$(curl -s https://luiscabrejo.com/api/claude-chat)
echo "Health endpoint: $(echo $health_response | jq -r '.status // "ERROR"' 2>/dev/null || echo "Not available")"

echo ""
echo "✅ DIAGNÓSTICO COMPLETADO - $(date)"
echo "📋 Guarda este output para referencia"
