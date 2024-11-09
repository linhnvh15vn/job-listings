/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        mute: {
          foreground: 'hsl(var(--mute-foreground))',
        },
        border: 'hsl(var(--border))',
      },
      backgroundImage: {
        'header-mobile': "url('/images/bg-header-mobile.svg')",
        'header-desktop': "url('/images/bg-header-desktop.svg')",
      },
    },
  },
  plugins: [],
};
