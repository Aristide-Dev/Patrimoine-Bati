import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      extend: {
        colors: {
          primary: {
            DEFAULT: '#1B3C6B',
            50: '#E6EBF2',
            100: '#CCd7E5',
            200: '#99AFCB',
            300: '#6687B1',
            400: '#335F97',
            500: '#1B3C6B',
            600: '#163056',
            700: '#102441',
            800: '#0B182C',
            900: '#050C17',
          },
          secondary: {
            DEFAULT: '#D4A017',
            50: '#FCF4E0',
            100: '#F9E9C1',
            200: '#F3D483',
            300: '#EDBF45',
            400: '#E7A917',
            500: '#D4A017',
            600: '#AA8012',
            700: '#7F600E',
            800: '#554009',
            900: '#2A2005',
          },
          
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        keyframes: {
          'accordion-down': {
            from: { height: 0 },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: 0 },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
    },

    plugins: [
      require('@tailwindcss/typography'),
      forms,
    ],
};
