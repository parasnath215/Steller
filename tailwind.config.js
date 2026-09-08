/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stellar: {
          // Warm Tones (Left)
          coral: "#FF5C58",
          tangerine: "#FF8A3D",
          yellow: "#FFC436",
          // Bridge Tones (Center)
          sage: "#7BB086",
          olive: "#6E9C7E",
          // Cool Tones (Right)
          lilac: "#A277FF",
          sky: "#38BDF8",
          cyan: "#00C2CB",
          "cyan-dark": "#009FA8",
          // Canvases & Neutrals
          dark: "#0D0D0D",
          pitch: "#000000",
          charcoal: "#0D0D0D",
          surface: "#FFFFFF",
          "surface-dark": "#141414",
          light: "#FAFAFA",
          muted: "#4B5563",
          gray: "#6B7280",
          card: "#FFFFFF",
          // Legacy aliases remapped to canonical palette for seamless compatibility
          blue: "#00C2CB",
          "blue-dark": "#009FA8",
          starYellow: "#FFC436",
          starPurple: "#A277FF",
          starBlue: "#00C2CB",
        }
      },
      backgroundImage: {
        'stellar-spectrum': 'linear-gradient(90deg, #FF5C58 0%, #FF8A3D 20%, #FFC436 40%, #7BB086 60%, #A277FF 80%, #00C2CB 100%)',
        'stellar-spectrum-135': 'linear-gradient(135deg, #FF5C58 0%, #FF8A3D 20%, #FFC436 40%, #7BB086 60%, #A277FF 80%, #00C2CB 100%)',
        'stellar-spectrum-hairline': 'linear-gradient(90deg, rgba(255,92,88,0.7) 0%, rgba(255,138,61,0.7) 20%, rgba(255,196,54,0.7) 40%, rgba(123,176,134,0.7) 60%, rgba(162,119,255,0.7) 80%, rgba(0,194,203,0.7) 100%)',
        'stellar-cool': 'linear-gradient(135deg, #A277FF 0%, #38BDF8 50%, #00C2CB 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatX: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(12px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'float-y': 'floatY 4s ease-in-out infinite',
        'float-y-rev': 'floatY 4s ease-in-out 2s infinite reverse',
        'float-x': 'floatX 5s ease-in-out infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
      }
    },
  },
  plugins: [],
}
