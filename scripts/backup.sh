#!/bin/bash
echo "💾 NEXUS 4.0 - BACKUP COMPLETO"
echo "=============================="
echo "Fecha: $(date)"
echo ""

# Create backup directory
BACKUP_DIR="nexus-backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

echo "📁 Creando backup en: $BACKUP_DIR"
echo ""

# Critical files backup
echo "📋 Backing up critical files..."
cp -r src/ "$BACKUP_DIR/"
cp -r docs/ "$BACKUP_DIR/" 2>/dev/null || echo "⚠️  docs/ no existe aún"
cp package.json "$BACKUP_DIR/"
cp next.config.js "$BACKUP_DIR/" 2>/dev/null
cp tsconfig.json "$BACKUP_DIR/" 2>/dev/null
cp README.md "$BACKUP_DIR/" 2>/dev/null

# Environment backup (without sensitive data)
echo "🔐 Backing up environment template..."
grep -v "ANTHROPIC_API_KEY" .env.local > "$BACKUP_DIR/.env.template" 2>/dev/null || echo "NEXT_PUBLIC_SITE_URL=https://luiscabrejo.com" > "$BACKUP_DIR/.env.template"

# Project state documentation
echo "📊 Creating project state snapshot..."
cat > "$BACKUP_DIR/PROJECT_STATE.md" << EOF
# NEXUS 4.0 - Project State Snapshot

**Backup Date:** $(date)
**Project Status:** 98% Complete - Production Ready
**Next Milestone:** Colombia Launch - 1 Agosto 2025

## Files Included in Backup:
- src/ (complete application code)
- docs/ (project documentation)
- package.json (dependencies)
- Configuration files
- Environment template

## Current Functionality:
✅ 23 Strategic responses implemented
✅ Claude API integration with retry system
✅ UI expandible without viewport overflow
✅ Identity consistency (NEXUS represents sistema 4M)
✅ Gano Excel information accuracy (Leow Soon Seng attribution)
✅ Error handling robust
✅ Mobile optimization complete

## Pending Tasks:
- Deploy to production (luiscabrejo.com/fundadores)
- Setup monitoring dashboard
- Load testing for 3,000+ concurrent users
- Final pre-launch testing

## Critical Information:
- NEXUS speaks ABOUT sistema 4M (third person)
- Luis Cabrejo y Liliana Moreno created sistema 4M for distribution
- Leow Soon Seng created Gano Excel products (1995, Malaysia)
- Target audience: "Inconformes inteligentes" colombianos

## Restore Instructions:
1. Copy all files to new project directory
2. npm install
3. Configure .env.local with ANTHROPIC_API_KEY
4. npm run dev to test locally
5. Deploy with vercel --prod
EOF

# Git state backup
echo "🌿 Saving git state..."
git log --oneline -10 > "$BACKUP_DIR/git_history.txt" 2>/dev/null
git status > "$BACKUP_DIR/git_status.txt" 2>/dev/null

# Create archive
echo "🗜️  Creating compressed archive..."
tar -czf "${BACKUP_DIR}.tar.gz" "$BACKUP_DIR/"

echo ""
echo "✅ BACKUP COMPLETADO!"
echo "===================="
echo "📁 Directory: $BACKUP_DIR/"
echo "📦 Archive: ${BACKUP_DIR}.tar.gz"
echo "💾 Tamaño: $(du -sh ${BACKUP_DIR}.tar.gz | cut -f1)"
echo ""
echo "🎯 PARA RESTAURAR:"
echo "tar -xzf ${BACKUP_DIR}.tar.gz"
echo "cd $BACKUP_DIR"
echo "npm install"
echo ""

# Cleanup directory (keep only archive)
rm -rf "$BACKUP_DIR"
echo "🧹 Cleanup completed - solo archive preservado"
