/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        custom: '1290px',
      },
      colors: {
        dark: '#00132A',
        darkBlue: '#00284F',
        lightBlueGray: '#E7EEF6',
        blueGreen: '#57D4D6',
      },
    },
  },
  plugins: [],
};
