/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    fontFamily: {
      display: ['Arial Black', 'Impact', 'sans-serif'],
      mono: ['"Courier New"', 'monospace'],
      handwritten: ['"Comic Sans MS"', 'cursive']
    },
    colors: { paper: '#f7f5ef', ink: '#201d1c', orange: '#ff642d', lemon: '#fff078' }
  }},
  plugins: []
}
