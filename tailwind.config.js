/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {'dublin-green-dark': '#004d33', // example color, update with your actual color
      'dublin-gold': '#FFD700', // example color
      'dublin-gold-dark': '#cc9e00', // dark gold shade
        dublin: {
          green: {
            dark: '#06362D',
            medium: '#155332',
          },
          gold: {
            light: '#DEE2B1',
            DEFAULT: '#FFD500',
            dark: '#D1A505',
          },
        },
      },
    },
  },
  plugins: [],
};
