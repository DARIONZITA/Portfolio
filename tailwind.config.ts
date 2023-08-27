import type { Config } from 'tailwindcss'
const config: Config = {
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
      fontFamily: {
        inter: ['var(--fontInter)'],
        mono: ['var(--fontTextII)'],
        hello: ['var(--fontHello)'],
        textNormal: ['var(--fontTextI)'],
        textTema: ['var(--fontTema)']
      },
      colors: {
        'principal':{
          100 : '#A9B9D1',
          200 : '#A9BCD1',
          300 : '#AABAE0',
          400 : '#658BC7',
          500 : '#6593C7',  
          600 : '#577790',
          700 : '#4B6D94',
          800 : '#243547',
          900 : '#052447'
        },
        'danger_alert':{
          100: '#C9722D',
          200: '#C75735',
          300: '#D4512F',
          400: '#DE9D31',
          500: '#DE6E31'

        },
        'contrast':{
          100:'#2A82D4',
          200:'#0E9561',
          300:'#2CDEA3',
          400:'#32C7BF',
          500:'#2CB7DE'
        },
        'gray':{
          100:'#94A3B0',
          200:'#889699',
          300:'#455251',
          400:'#8BA69C',
          500:'#181824',
        }
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-animated')
  ],
}
export default config
