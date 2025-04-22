/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(var(--primary-color))',
        'secondary': 'rgb(var(--secondary-color))',
        'accent': 'rgb(var(--accent-color))',
        'dark-surface': 'rgb(var(--dark-surface))',
        'light-surface': 'rgb(var(--light-surface))',
        'text-primary': 'rgb(var(--text-primary))',
        'text-secondary': 'rgb(var(--text-secondary))',
        'navy': 'rgb(var(--background-start-rgb))',
        'navy-light': 'rgb(var(--light-surface))',
        'slate': 'rgb(var(--text-secondary))',
        'slateLight': 'rgb(var(--text-primary))',
      },
      fontFamily: {
        sans: ['var(--font-primary)'],
        mono: ['var(--font-mono)'],
      },
      transitionTimingFunction: {
        'bounce': 'var(--transition-bounce)',
        'smooth': 'var(--transition-smooth)',
      },
      boxShadow: {
        'glow-primary': '0 0 15px rgba(var(--primary-color), 0.5)',
        'glow-secondary': '0 0 15px rgba(var(--secondary-color), 0.5)',
        'glow-accent': '0 0 15px rgba(var(--accent-color), 0.5)',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
