import { addDynamicIconSelectors } from '@iconify/tailwind'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '9/12': '9/12',
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}
