/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        webkit: '-webkit-fill-available',
      },
      maxWidth: {
        custom: '1290px',
      },
      colors: {
        light: '#FFFCFC',
        dark: '#00132A',
        blue: '#326698',
        darkBlue: '#00284F',
        lightBlueGray: '#E7EEF6',
        lightGray: '#D9D9D9',
        blueGreen: {
          100: '#BEFCFC',
          200: '#57D4D6',
          300: '#00999B',
        },
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '50% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '75%': { backgroundPosition: '50% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 10s linear infinite',
      },
    },
  },
  plugins: [],
};
