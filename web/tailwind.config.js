module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.tsx", "./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          surface: '#8257E5',
          hover: '#996DFF',
          check: '#77B255'
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
        '84': '21rem',
        '86': '21rem'
      },
      height: {
        '18': '4.5rem'
      },
      borderRadius: {
        md: '4px'
      },
      maxWidth: {
        '6xl':  '1120px'
      },
      boxShadow: {
        'lgl': '-15px -15px 9px 0px rgba(0,0,0,0.1)',
        'lgd': '-15px -15px 9px 0px rgba(39, 39, 42, 0.7)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}