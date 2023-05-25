/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        navItemFade: {
          '0%': {
            opacity: '0',
            transform: 'translate(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0)',
          },
        },
      },
      animation: {
        navAnimation: 'navItemFade 0.7s ease forwads',
      },
    },
  },
  plugins: [],
};
