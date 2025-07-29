#!/bin/bash
echo "📊 NEXUS 4.0 - MONITORING LANZAMIENTO"
echo "===================================="
echo "Inicio: $(date)"
echo "Target: 3,000+ usuarios concurrentes Colombia"
echo ""

# Create monitoring log
LOG_FILE="nexus-monitoring-$(date +%Y%m%d).log"
echo "📝 Log file: $LOG_FILE"
echo ""

# Monitoring loop
monitor_duration=3600  # 1 hour in seconds
check_interval=30      # 30 seconds
end_time=$(($(date +%s) + monitor_duration))

echo "⏰ Monitoring por $(($monitor_duration / 60)) minutos, checks cada $check_interval segundos"
echo ""

while [ $(date +%s) -lt $end_time ]; do
    timestamp=$(date '+%Y-%m-%d %H:%M:%S')

    # Quick health check
    main_status=$(curl -sSf https://luiscabrejo.com/fundadores > /dev/null && echo "UP" || echo "DOWN")
    api_response=$(curl -s -o /dev/null -w "%{http_code}" -X POST https://luiscabrejo.com/api/claude-chat \
      -H "Content-Type: application/json" \
      -d '{"message":"monitor check","conversationHistory":[]}')

    # Log results
    echo "[$timestamp] Main: $main_status | API: HTTP-$api_response" | tee -a "$LOG_FILE"

    # Alert on issues
    if [[ "$main_status" != "UP" ]] || [[ "$api_response" != "200" ]]; then
        echo "🚨 ALERT: Issues detected at $timestamp" | tee -a "$LOG_FILE"

        # Could add notification logic here
        # send_alert_notification "$timestamp" "$main_status" "$api_response"
    fi

    sleep $check_interval
done

echo ""
echo "✅ Monitoring completed: $(date)"
echo "📊 Results saved to: $LOG_FILE"
