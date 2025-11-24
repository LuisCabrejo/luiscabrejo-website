// tailwind.config.js - CONFIGURACIÓN CON BRANDING COMPLETO
// Esta es una versión mejorada del tailwind.config.js actual
// Incluye todos los colores de branding de Luis Cabrejo / CreaTuActivo.com

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // === COLORES DE BRANDING ===
      colors: {
        // Colores Primarios - Morado/Púrpura
        primary: {
          DEFAULT: '#667eea',     // Morado principal
          hover: '#5568d3',       // Morado hover
          dark: '#764ba2',        // Morado oscuro
          light: '#8b9aff',       // Morado claro
        },

        // Azul Secundario
        brand: {
          blue: {
            light: '#3b82f6',     // Azul claro
            DEFAULT: '#2563eb',   // Azul principal
            dark: '#1e40af',      // Azul oscuro
          },
          cyan: '#06b6d4',        // Cyan tech
          green: '#10b981',       // Verde éxito
          gold: '#ffd700',        // Dorado premium
          'gold-light': '#ffed4e', // Dorado claro
        },

        // Backgrounds oscuros (ya incluidos en Tailwind pero personalizados)
        'slate-custom': {
          850: '#1a2332',         // Entre 800 y 900
          950: '#0a0f1a',         // Más oscuro que 900
        }
      },

      // === GRADIENTES ===
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        // Gradientes de Branding
        'gradient-primary': 'linear-gradient(to right, #667eea, #3b82f6)',
        'gradient-purple': 'linear-gradient(to right, #667eea, #764ba2)',
        'gradient-tech': 'linear-gradient(to right, #06b6d4, #3b82f6, #8b5cf6)',
        'gradient-gold': 'linear-gradient(to right, #ffd700, #ffed4e)',

        // Gradientes de fondo decorativos
        'glow-blue': 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15), transparent)',
        'glow-purple': 'radial-gradient(circle at center, rgba(102, 126, 234, 0.15), transparent)',
      },

      // === SOMBRAS PERSONALIZADAS ===
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.4)',
        'glow-purple': '0 0 30px rgba(102, 126, 234, 0.5)',
        'glow-gold': '0 0 30px rgba(255, 215, 0, 0.4)',
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 25px rgba(0, 0, 0, 0.15)',
        'modal': '0 20px 60px rgba(0, 0, 0, 0.3)',
      },

      // === ANIMACIONES ===
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
          },
        },
        'fade-in-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'slide-in-right': {
          'from': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          'to': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
      },

      // === TIPOGRAFÍA ===
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Inter', 'sans-serif'], // Para títulos
        body: ['Inter', 'Arial', 'sans-serif'], // Para texto
      },

      fontSize: {
        // Mobile-first sizes
        'xs': ['0.75rem', { lineHeight: '1.4' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.5' }],     // 14px
        'base': ['1rem', { lineHeight: '1.6' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.6' }],     // 18px
        'xl': ['1.25rem', { lineHeight: '1.6' }],      // 20px
        '2xl': ['1.5rem', { lineHeight: '1.4' }],      // 24px
        '3xl': ['2rem', { lineHeight: '1.3' }],        // 32px
        '4xl': ['2.5rem', { lineHeight: '1.2' }],      // 40px
        '5xl': ['3rem', { lineHeight: '1.1' }],        // 48px
        '6xl': ['4rem', { lineHeight: '1.1' }],        // 64px
        '7xl': ['4.5rem', { lineHeight: '1' }],        // 72px
      },

      // === ESPACIADO ===
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
      },

      // === BORDER RADIUS ===
      borderRadius: {
        '4xl': '2rem',    // 32px
        '5xl': '2.5rem',  // 40px
      },

      // === BACKDROP BLUR ===
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },

      // === Z-INDEX ===
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}
