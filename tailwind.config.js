/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: {
          DEFAULT: '#111827', // dark mode text
          dark: '#f3f4f6', // light mode text
        },
        gray: {
          100: '#f3f4f6',
          400: '#9ca3af',
          900: '#111827',
        },
        red: {
          400: '#f87171',
        },
        green: {
          400: '#4ade80',
        },
      },
    },
  },
  plugins: [],
  important: true,
  corePlugins: {
    preflight: false,
  },
};
