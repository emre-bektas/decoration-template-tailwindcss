import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,css,less}"],
  darkMode : "class",
  theme: {
    extend: {
      colors : {
        primary: {
          DEFAULT: "#13726b",
          '50': '#f1fcfa',
          '100': '#cef9f0',
          '200': '#9df2e2',
          '300': '#63e5d1',
          '400': '#33cebb',
          '500': '#1ab2a2',
          '600': '#128f84',
          '700': '#13726b',
          '800': '#145b56',
          '900': '#154c48',
          '950': '#062d2c',
        },
        second : {
          DEFAULT: '#F9AE00',
          50: '#FFECC9',
          100: '#FFE4B2',
          200: '#FFD684',
          300: '#FFC856',
          400: '#FFBC28',
          500: '#F9AE00',
          600: '#CB9000',
          700: '#9D7200',
          800: '#6F5200',
          900: '#413100',
          950: '#2A2000'
        }
      },
      fontSize: {
        xxs: ['0.68rem', '.8rem'],
        s: "0.813rem",
        m: ['0.9rem', '1.3rem'],

      },
    },
  },
  daisyui: {
    themes: [
      {
        dr: {

          "primary": "#13726b",

          "secondary": "#0000ff",

          "accent": "#00a500",

          "neutral": "#2b0d0e",

          "base-100": "#f8ffff",

          "info": "#3892ff",

          "success": "#00d8b2",

          "warning": "#ff9900",

          "error": "#ff0053",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  plugins: [
      nextui({
        themes : {
          light : {
            colors : {
              primary : {
                DEFAULT: "#13726b",
                '50': '#f1fcfa',
                '100': '#cef9f0',
                '200': '#9df2e2',
                '300': '#63e5d1',
                '400': '#33cebb',
                '500': '#1ab2a2',
                '600': '#128f84',
                '700': '#13726b',
                '800': '#145b56',
                '900': '#154c48',
                '950': '#062d2c',
              }
            }
          }
        }
      }),
      require('daisyui'),
      require("tailwindcss-animate"),
  ],
}

