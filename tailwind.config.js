/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000', // Pure Black
        panel: '#0A0A0A',      // Carbon/Dark Gray
        primary: '#FFFFFF',    // Crisp White
        accent: '#FF1E1E',     // Neon Crimson Red
        secondary: '#991111',  // Darker Red
        muted: '#A3A3A3',      // Neutral Gray
        success: '#10B981',    // Green (for online status)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
      }
    },
  },
  plugins: [],
}
