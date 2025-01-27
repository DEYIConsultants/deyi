import type { Config } from 'tailwindcss'; // helps with TypeScript type checking for the configuration object.

const config = {
  darkMode: ['class'], // enables dark mode support and specifies that dark mode will be toggled using a CSS class (class).
  content: [
    // This specifies the paths where Tailwind CSS should look for class names.
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '', // This is an empty string indicating that no prefix is added to Tailwind CSS classes. This can be customized to avoid class name conflicts.
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        display: ['"Barlow Semi Condensed"', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'rgba(204, 207, 211, 1)',
        primary: {
          DEFAULT: 'rgba(25, 25, 112, 1)',
          foreground: 'rgba(6, 6, 73, 1)',
        },
        secondary: {
          DEFAULT: 'rgba(204, 207, 211, 1)',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'rgba(126, 133, 142, 1)',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'midnight-blue': 'rgba(25, 25, 112, 1)', // Custom color
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
