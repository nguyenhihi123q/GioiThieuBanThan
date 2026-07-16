/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Microsoft Fluent Design System Colors */
        brand: {
          DEFAULT: '#0F6292', // Deep Ocean Blue
          hover: '#0A4C73',
          pressed: '#073551',
          light: '#E6F3FA',
          dark: '#031D2D',
        },
        surface: {
          DEFAULT: 'hsl(var(--surface))',
          secondary: 'hsl(var(--surface-secondary))',
          tertiary: 'hsl(var(--surface-tertiary))',
          card: 'hsl(var(--surface-card))',
        },
        text: {
          primary: 'hsl(var(--text-primary))',
          secondary: 'hsl(var(--text-secondary))',
          tertiary: 'hsl(var(--text-tertiary))',
          disabled: 'hsl(var(--text-disabled))',
          accent: 'hsl(var(--text-accent))',
        },
        border: {
          DEFAULT: 'hsl(var(--border-default))',
          strong: 'hsl(var(--border-strong))',
        },
        status: {
          success: '#107C10',
          warning: '#FFB900',
          error: '#D13438',
          info: '#0F6292',
        },
      },
      fontFamily: {
        sans: [
          'Segoe UI Variable',
          'Segoe UI',
          '-apple-system',
          'BlinkMacSystemFont',
          'Inter',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: [
          'Segoe UI Variable Display',
          'Segoe UI',
          'Inter',
          'sans-serif',
        ],
        mono: [
          'Cascadia Code',
          'Cascadia Mono',
          'Consolas',
          'Monaco',
          'monospace',
        ],
      },
      fontSize: {
        /* Fluent Design Type Ramp */
        caption2: ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }],
        caption1: ['0.8125rem', { lineHeight: '1.125rem', fontWeight: '400' }],
        body2: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        body1: ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        subtitle2: ['1.125rem', { lineHeight: '1.625rem', fontWeight: '600' }],
        subtitle1: ['1.375rem', { lineHeight: '1.875rem', fontWeight: '600' }],
        title3: ['1.625rem', { lineHeight: '2.125rem', fontWeight: '600' }],
        title2: ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        title1: ['2.25rem', { lineHeight: '2.75rem', fontWeight: '700' }],
        'hero-lg': ['2.75rem', { lineHeight: '3.5rem', fontWeight: '700' }],
        'hero-xl': ['3.25rem', { lineHeight: '4rem', fontWeight: '700' }],
        'hero-2xl': ['4rem', { lineHeight: '4.75rem', fontWeight: '700' }],
      },
      spacing: {
        /* Fluent spacing scale */
        '2xs': '0.125rem',
        xs: '0.25rem',
        s: '0.5rem',
        m: '0.75rem',
        l: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
      },
      borderRadius: {
        none: '0',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        /* Fluent Design elevation */
        'fluent-2': '0 1px 2px rgba(0, 0, 0, 0.14), 0 0 2px rgba(0, 0, 0, 0.12)',
        'fluent-4': '0 2px 4px rgba(0, 0, 0, 0.14), 0 0 2px rgba(0, 0, 0, 0.12)',
        'fluent-8': '0 4px 8px rgba(0, 0, 0, 0.14), 0 0 2px rgba(0, 0, 0, 0.12)',
        'fluent-16': '0 8px 16px rgba(0, 0, 0, 0.14), 0 0 2px rgba(0, 0, 0, 0.12)',
        'fluent-28': '0 14px 28px rgba(0, 0, 0, 0.24), 0 0 8px rgba(0, 0, 0, 0.20)',
        'fluent-64': '0 32px 64px rgba(0, 0, 0, 0.24), 0 0 8px rgba(0, 0, 0, 0.20)',
      },
      backdropBlur: {
        fluent: '30px',
      },
      transitionDuration: {
        fast: '100ms',
        normal: '200ms',
        slow: '300ms',
        'extra-slow': '500ms',
      },
      transitionTimingFunction: {
        fluent: 'cubic-bezier(0.33, 0, 0.67, 1)',
        'fluent-decelerate': 'cubic-bezier(0, 0, 0, 1)',
        'fluent-accelerate': 'cubic-bezier(1, 0, 1, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s cubic-bezier(0, 0, 0, 1) forwards',
        'slide-up': 'slide-up 0.5s cubic-bezier(0, 0, 0, 1) forwards',
        'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0, 0, 0, 1) forwards',
        'scale-in': 'scale-in 0.3s cubic-bezier(0, 0, 0, 1) forwards',
      },
    },
  },
  plugins: [],
}
