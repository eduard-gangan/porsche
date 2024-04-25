/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, #34d399, #38bdf8, #34d399)'
      },
      width:{
        '120%': 'calc(100% + 300px)'
      },
      height: {
        'screen': '100svh',
        'screen+': '100lvh',
        'screen/2': '50vh',
        'banner': 'calc(100svh + 150px)'
      },
      backgroundSize: {
        '200%': '200%'
      },
      keyframes:{
        shift:{
          '0%': {backgroundPosition: '0% center'},
          '100%': {backgroundPosition: '-200% center'}
        }
      },
      animation:{
        'shift': 'shift 3s linear infinite',
      },
      transitionTimingFunction:{
        'bounce': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'bounce2': 'cubic-bezier(.47,1.64,.41,.8)',
      },
      margin:{
        'auto': 'auto'
      },
      colors:{
        blue:{
          '1000': "#101a3b",
        }
      },
      spacing:{
        'screen': '100vh'
      },
      translate:{
        'screen-y': '100vh'
      },
      fontFamily:{
        'porsche': ['var(--font-porsche)'],
      }
    },
  },
  plugins: [],
}
