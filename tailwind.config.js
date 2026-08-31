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
          blue: {
            50: 'oklch(97% 0.018 250)',
            100: 'oklch(94% 0.035 250)',
            200: 'oklch(89% 0.060 250)',
            400: 'oklch(70% 0.140 250)',
            500: 'oklch(60% 0.190 255)',
            600: 'oklch(53% 0.200 258)',
            700: 'oklch(47% 0.180 258)',
            900: 'oklch(29% 0.080 258)',
          },
          green: {
            DEFAULT: 'oklch(53% 0.200 258)',
            hover: 'oklch(47% 0.180 258)',
            light: 'oklch(94% 0.035 250)',
            tint: 'oklch(96% 0.018 250)',
            dark: 'oklch(19% 0.025 255)',
            void: 'oklch(98% 0.010 250)',
          },
          lime: {
            DEFAULT: 'oklch(94% 0.035 250)',
          },
          premium: {
            50: 'oklch(97% 0.018 250)',
            100: 'oklch(94% 0.035 190)',
            200: 'oklch(70% 0.140 250)',
            DEFAULT: 'oklch(29% 0.080 258)',
            500: 'oklch(53% 0.200 258)',
            700: 'oklch(47% 0.180 258)',
            900: 'oklch(29% 0.080 258)',
          },
          teal: {
            50: 'oklch(97% 0.018 250)',
            DEFAULT: 'oklch(60% 0.120 190)',
            teal: 'oklch(94% 0.035 190)',
            500: 'oklch(60% 0.120 190)',
            700: 'oklch(47% 0.180 258)',
            900: 'oklch(29% 0.080 258)',
          },
          midnight: {
            950: 'oklch(98% 0.010 250)',
            900: 'oklch(19% 0.025 255)',
            800: 'oklch(96% 0.018 250)',
            700: 'oklch(47% 0.180 258)',
            500: 'oklch(34% 0.025 252)',
            300: 'oklch(89% 0.060 250)',
            100: 'oklch(88% 0.020 250)',
          },
          surface: {
            white: 'oklch(99% 0.006 250)',
            light: 'oklch(98% 0.010 250)',
            subtle: 'oklch(96% 0.018 250)',
            border: 'oklch(88% 0.020 250)',
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
        'gradient-hero': 'linear-gradient(180deg, oklch(98% 0.010 250) 0%, oklch(97% 0.018 250) 100%)',
        'gradient-banner': 'linear-gradient(135deg, oklch(53% 0.200 258) 0%, oklch(29% 0.080 258) 100%)',
        'gradient-soft-card': 'linear-gradient(135deg, oklch(94% 0.035 190) 0%, oklch(99% 0.006 250) 100%)',
        'gradient-ai-surface': 'linear-gradient(135deg, oklch(94% 0.035 250) 0%, oklch(94% 0.035 190) 100%)',
        'gradient-testimonials': 'linear-gradient(135deg, oklch(99% 0.006 250) 0%, oklch(97% 0.018 250) 100%)',
      },
      boxShadow: {
        'glow-green': '0 0 30px oklch(94% 0.035 250 / 0.7)',
        'glow-deep': '0 0 30px oklch(29% 0.080 258 / 0.24)',
        'ambient': '0 4px 130px oklch(70% 0.045 250 / 0.15)',
      },
      maxWidth: {
        'site': '1350px',
        'narrow': '1130px',
      }
    },
  },
  plugins: [],
}
