/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    fontFamily: {
      display: ['"DM Sans"', 'Arial Black', 'Impact', 'sans-serif'],
      mono: ['"DM Mono"', '"Courier New"', 'monospace'],
      handwritten: ['"Caveat"', 'cursive'],
      serif: ['Georgia', '"Times New Roman"', 'serif']
    },
    colors: { paper: '#f7f5ef', ink: '#201d1c', orange: '#ff642d', lemon: '#fff078' }
  }},
  plugins: []
}
