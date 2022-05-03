module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.tsx", "./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          surface: '#8257E5',
          hover: '#996DFF'
        },
        dark: {
          surface: {
            primary: '#18181B',
            secondary: {
              main: '#27272A',
              hover: '#3F3F46'
            },
            stroke: '#52525B',
            tooltip: '#F4F4F5',
            text: {
              primary: '#F4F4F5',
              secondary: '#A1A1AA',
              onToolTip: '#27272A'
            },
            background: '#09090A'
          }
        },
        light: {
          surface: {
            primary: '#FFFFFF',
            secondary: {
              main: '#F4F4F5',
              hover: '#E4E4E7'
            },
            stroke: '#D4D4D8',
            tooltip: '#27272A',
            text: {
              primary: '#27272A',
              secondary: '#71717A',
              onToolTip: '#F4F4F5'
            },
            background: '#FFFFFF'
          }
        },
      },
      width: {
        '84': '21rem'
      },
      height: {
        '18': '4.5rem'
      }
    },
  },
  plugins: [],
}