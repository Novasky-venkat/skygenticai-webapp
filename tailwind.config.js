/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './pages/**/*.{js,jsx,ts,tsx,html}',
    './components/**/*.{js,jsx,ts,tsx,html}',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aichat: {
          green: {
            DEFAULT: '#0DEF93',
            hover: '#09B26E',
            light: '#42DD9F',
            tint: '#87F8CA',
            dark: '#067749',
            void: '#033C25',
          },
          lime: {
            DEFAULT: '#B8FF7A',
          },
          purple: {
            50: '#E5CFFF',
            100: '#CBA0FF',
            200: '#B171FE',
            DEFAULT: '#9741FE',
            500: '#7131BE',
            700: '#4B207F',
            900: '#261040',
          },
          cyan: {
            50: '#D8F6F8',
            DEFAULT: '#61DAEE',
            teal: '#14EBD2',
            500: '#48A4B2',
            700: '#306C76',
            900: '#18363B',
          },
          midnight: {
            950: '#02020F',
            900: '#03031D',
            800: '#04042B',
            700: '#06063A',
            500: '#44446B',
            300: '#83839D',
            100: '#C1C1CE',
          },
          surface: {
            white: '#FFFFFF',
            light: '#FAFAFA',
            subtle: '#EBEFF7',
            border: '#E4EBF3',
          }
        }
      },
      fontFamily: {
        display: ['Clash Display', 'Inter', 'sans-serif'],
        body: ['Satoshi', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'card': '20px',
        'capsule': '3rem',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(118deg, #06063A 0%, #3B1F6D 67%, #0DEF93 103%)',
        'gradient-banner': 'linear-gradient(60deg, #06063A 0%, #3B1F6D 60%, #13D78F 100%)',
        'gradient-purple-card': 'linear-gradient(87deg, #04042B 0%, #4B207F 64%, #7131BE 102%)',
        'gradient-cyber': 'linear-gradient(68deg, #4F37C3 0%, #4F37C3 43%, #14EBD2 43%, #1AD8D0 54%, #1AD8D0 100%)',
      },
      boxShadow: {
        'glow-green': '0 0 30px rgba(13, 239, 147, 0.3)',
        'glow-purple': '0 0 30px rgba(151, 65, 254, 0.3)',
        'ambient': '0 4px 130px rgba(150, 163, 181, 0.15)',
      },
      maxWidth: {
        'site': '1350px',
        'narrow': '1130px',
      }
    },
  },
  plugins: [],
}
