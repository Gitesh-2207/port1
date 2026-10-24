/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Archivo Black"', 'Impact', 'sans-serif'],
        serif: ['"Lora"', 'Georgia', 'serif'],
        body: ['"Lora"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        handwritten: ['"Caveat"', 'cursive'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      colors: {
        paper: '#f8f6f1',
        bg: '#f8f6f1',
        ink: '#1c1917',
        orange: '#ff6b2b',
        accent: '#ff6b2b',
        lemon: '#fff176',
        highlight: '#fff176',
        pen: '#1565c0',
        sticky: '#fff6a8',
        'sticky-blue': '#b3e5fc',
        'sticky-pink': '#f8bbd0',
        'sticky-green': '#c8e6c9',
      },
      boxShadow: {
        hard: '6px 6px 0 #1c1917',
        'hard-sm': '4px 4px 0 #1c1917',
      }
    }
  },
  plugins: []
}

