#!/bin/bash

# Script de verificación de logos LC - Luis Cabrejo
# Verifica que todos los archivos de logo existan y estén configurados correctamente

echo "🎨 Verificando instalación de Logos LC..."
echo ""

# Colores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contador de éxitos
SUCCESS=0
FAIL=0

# Función para verificar archivo
check_file() {
    local file=$1
    local name=$2

    if [ -f "$file" ]; then
        echo -e "${GREEN}✅${NC} $name encontrado"
        ((SUCCESS++))
    else
        echo -e "${RED}❌${NC} $name NO encontrado: $file"
        ((FAIL++))
    fi
}

echo "📁 Verificando archivos de logos..."
echo ""

# Verificar favicon
check_file "src/app/icon.svg" "Favicon Next.js 15"

# Verificar logos en public
check_file "public/logos/LC-circular.svg" "Logo Circular"
check_file "public/logos/LC-gradient.svg" "Logo Gradient"
check_file "public/logos/LC-hexagon.svg" "Logo Hexagon"
check_file "public/logos/LC-shield.svg" "Logo Shield"
check_file "public/logos/LC-minimal.svg" "Logo Minimal"
check_file "public/logos/LC-gold.svg" "Logo Gold"
check_file "public/logos/LC-square.svg" "Logo Square"
check_file "public/logos/LC-tech.svg" "Logo Tech"

# Verificar componente React
check_file "src/components/Logo.tsx" "Componente React Logo"

# Verificar generador
check_file "scripts/generate-logos.html" "Generador Interactivo"

# Verificar documentación
check_file "public/logos/README.md" "README Logos"
check_file "LOGOS-IMPLEMENTACION.md" "Guía de Implementación"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Resultados
if [ $FAIL -eq 0 ]; then
    echo -e "${GREEN}🎉 ¡Perfecto! Todos los archivos están instalados correctamente${NC}"
    echo -e "${GREEN}   $SUCCESS/$((SUCCESS+FAIL)) archivos verificados${NC}"
    echo ""
    echo "📋 Próximos pasos:"
    echo "   1. Ejecuta: npm run dev"
    echo "   2. Abre: http://localhost:3000"
    echo "   3. Verifica el favicon en la pestaña del navegador"
    echo "   4. Abre: scripts/generate-logos.html (para ver todos los diseños)"
    echo ""
    echo "📚 Documentación:"
    echo "   - LOGOS-IMPLEMENTACION.md (guía completa)"
    echo "   - public/logos/README.md (referencia técnica)"
    echo ""
else
    echo -e "${RED}⚠️  Faltan $FAIL archivos${NC}"
    echo -e "${YELLOW}   Ejecuta de nuevo el generador de logos${NC}"
    echo ""
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Información adicional
echo "🔍 Información adicional:"
echo ""

# Tamaño de archivos
if [ -d "public/logos" ]; then
    TOTAL_SIZE=$(du -sh public/logos | cut -f1)
    echo "   📦 Tamaño total de logos: $TOTAL_SIZE"
fi

# Verificar que son SVG válidos
echo ""
echo "🔎 Verificando formato SVG..."
SVG_VALID=0
SVG_INVALID=0

for file in public/logos/*.svg src/app/icon.svg; do
    if [ -f "$file" ]; then
        if head -n 1 "$file" | grep -q "svg"; then
            ((SVG_VALID++))
        else
            echo -e "${RED}   ⚠️  $file podría no ser SVG válido${NC}"
            ((SVG_INVALID++))
        fi
    fi
done

if [ $SVG_INVALID -eq 0 ]; then
    echo -e "${GREEN}   ✅ Todos los SVG son válidos ($SVG_VALID archivos)${NC}"
else
    echo -e "${YELLOW}   ⚠️  $SVG_INVALID archivos podrían tener problemas${NC}"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🎨 Generador Interactivo:"
echo "   open scripts/generate-logos.html"
echo ""
echo "💡 Tip: Importa Logo en tus componentes:"
echo "   import Logo from '@/components/Logo'"
echo "   <Logo variant=\"gradient\" size={50} />"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
