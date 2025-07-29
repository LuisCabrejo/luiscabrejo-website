#!/bin/bash
echo "💊 NEXUS 4.0 - HEALTH CHECK"
echo "==========================="
echo "Timestamp: $(date)"
echo ""

# Function to check response time
check_response_time() {
    local url=$1
    local max_time=$2

    echo "⏱️  Checking response time: $url"

    response_time=$(curl -o /dev/null -s -w "%{time_total}" "$url")
    response_time_ms=$(echo "$response_time * 1000" | bc)

    if (( $(echo "$response_time < $max_time" | bc -l) )); then
        echo "✅ Response time: ${response_time_ms}ms (< ${max_time}s)"
        return 0
    else
        echo "❌ Response time: ${response_time_ms}ms (> ${max_time}s)"
        return 1
    fi
}

# Check main page
echo "🌐 Checking main page..."
if curl -sSf https://luiscabrejo.com/fundadores > /dev/null; then
    echo "✅ Main page accessible"
    check_response_time "https://luiscabrejo.com/fundadores" 3
else
    echo "❌ Main page inaccessible"
fi

echo ""

# Check API endpoint
echo "🤖 Checking API endpoint..."
API_START=$(date +%s%N)
API_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -X POST https://luiscabrejo.com/api/claude-chat \
  -H "Content-Type: application/json" \
  -d '{"message":"health check","conversationHistory":[]}')
API_END=$(date +%s%N)
API_TIME=$((($API_END - $API_START)/1000000)) # Convert to milliseconds

if [[ "$API_RESPONSE" == "200" ]]; then
    echo "✅ API endpoint responding (HTTP 200)"
    echo "⏱️  API response time: ${API_TIME}ms"

    if [[ $API_TIME -lt 2500 ]]; then
        echo "✅ API response time OK (<2.5s)"
    else
        echo "⚠️  API response time HIGH (>2.5s)"
    fi
else
    echo "❌ API endpoint error (HTTP $API_RESPONSE)"
fi

echo ""

# System resources check (if on server)
echo "💾 System resources..."
if command -v free &> /dev/null; then
    memory_usage=$(free | grep Mem | awk '{printf "%.1f", $3/$2 * 100.0}')
    echo "📊 Memory usage: ${memory_usage}%"

    if (( $(echo "$memory_usage < 80" | bc -l) )); then
        echo "✅ Memory usage OK"
    else
        echo "⚠️  Memory usage HIGH"
    fi
fi

if command -v df &> /dev/null; then
    disk_usage=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')
    echo "💿 Disk usage: ${disk_usage}%"

    if [[ $disk_usage -lt 80 ]]; then
        echo "✅ Disk usage OK"
    else
        echo "⚠️  Disk usage HIGH"
    fi
fi

echo ""
echo "📊 HEALTH CHECK SUMMARY:"
echo "========================"
echo "🌐 Main page: $(curl -sSf https://luiscabrejo.com/fundadores > /dev/null && echo "✅ OK" || echo "❌ FAIL")"
echo "🤖 API endpoint: $([ "$API_RESPONSE" == "200" ] && echo "✅ OK" || echo "❌ FAIL")"
echo "⏱️  Performance: $([ $API_TIME -lt 2500 ] && echo "✅ OK" || echo "⚠️ SLOW")"
echo ""

if [[ "$API_RESPONSE" == "200" ]] && curl -sSf https://luiscabrejo.com/fundadores > /dev/null; then
    echo "🎉 OVERALL STATUS: HEALTHY ✅"
    exit 0
else
    echo "🚨 OVERALL STATUS: ISSUES DETECTED ❌"
    exit 1
fi
