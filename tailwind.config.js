// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        copper: {
          DEFAULT: '#C77B30',
          light:   '#d4914d',
          dark:    '#a8651f',
          50:      'rgba(199,123,48,0.05)',
          100:     'rgba(199,123,48,0.10)',
          200:     'rgba(199,123,48,0.20)',
          300:     'rgba(199,123,48,0.30)',
        },
        navy: {
          DEFAULT: '#0B1F3A',
          deep:    '#060d1a',
          mid:     '#0e2442',
          up:      '#122b50',
        },
        slate: '#6B7280',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        copper:    '0 0 32px rgba(199,123,48,0.35)',
        'copper-lg': '0 0 60px rgba(199,123,48,0.25)',
      },
    },
  },
  plugins: [],
}