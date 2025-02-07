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
          // Couleurs personnalisées
          primary: {
            DEFAULT: '#2F72B2',
            // Si vous souhaitez des variantes plus claires ou plus foncées :
            50: '#e6f0f7',
            100: '#cce0f0',
            200: '#99c2e1',
            300: '#66a3d2',
            400: '#3385c3',
            500: '#2F72B2', // Couleur par défaut
            600: '#265a8c',
            700: '#1c4175',
            800: '#12285f',
            900: '#091042',
          },
          secondary: {
            DEFAULT: '#fbaf1c',
            // Variantes secondaires (optionnel)
            50: '#fff5e0',
            100: '#ffeac2',
            200: '#ffd184',
            300: '#ffb746',
            400: '#fba921',
            500: '#fbaf1c', // Couleur par défaut
            600: '#c88c16',
            700: '#966911',
            800: '#65460b',
            900: '#332306',
          },
          
          // Vos autres couleurs existantes
          'mamri-green': '#00B14F',
          'mamri-white': '#FFFFFF',
          'mamri-dark': '#002E27',
          'mamri-light': '#CCEFDC',
  
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
  
          // Vous pouvez conserver ou retirer ces définitions variables si vous n'en avez pas besoin
          // card, popover, etc.
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
