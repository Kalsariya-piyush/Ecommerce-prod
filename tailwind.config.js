// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      lato: 'Lato',
      poppins: 'Poppins',
      'public-sans': ['Public Sans', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        gray: {
          50: '#F2F4F5',
          100: '#E4E7E9',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#77878F',
          600: '#718096',
          700: '#475156',
          800: '#2d3748',
          900: '#191C1F',
        },
        blue: {
          25: '#E3E7FC',
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#5F6C72',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
          950: '#475BE8',
        },
        base: {
          50: '#292929',
          75: '#676767',
          100: '#525252',
        },
        green: {
          100: '#4CE13F',
        },
        primary: {
          500: '#FA8232',
        },
        secondary: {
          500: '#2DA5F3',
          600: '#2484C2',
        },
        error: {
          100: '#d32f2f',
        },
      },
      lineHeight: {
        56: '56px',
        130: '130%',
        140: '140%',
      },
      minWidth: {
        sm: '320px',
      },
      maxWidth: {
        '340px': '340px',
        '356px': '356px',
        '360px': '360px',
      },
      spacing: {
        4.5: '18px',
      },
      boxShadow: {
        primary: '0px 8px 40px 0px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
