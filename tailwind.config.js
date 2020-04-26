const PRIMARY400 = '#9876ff'
const PRIMARY500 = '#8667db'
const SECONDARY400 = '#dd76ff'
const SECONDARY500 = '#c067db'
const TERTIARY400 = '#76bbff'
const TERTIARY500 = '#679ddb'

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          400: PRIMARY400,
        },
        secondary: {
          400: SECONDARY400,
        },
        tertiary: {
          400: TERTIARY400,
        },
        muted: '#fafafa',
        inverse: '#444',
      },
      border: {
        primary: {
          400: PRIMARY400,
        },
        secondary: {
          400: SECONDARY400,
        },
        tertiary: {
          400: TERTIARY400,
        },
        inverse: '#444',
      },
      textColor: {
        primary: {
          400: PRIMARY400,
        },
        secondary: {
          400: SECONDARY400,
          500: SECONDARY500,
        },
        tertiary: {
          400: TERTIARY400,
        },
        inverse: '#fafafa',
      },
      fontFamily: {
        body: ['"Roboto"', 'helvetica', 'sans-serif'],
        heading: ['"Baloo Bhaina 2"', 'helvetica', 'sans-serif'],
      },
      stroke: {
        primary: PRIMARY400,
        secondary: SECONDARY400,
        tertiary: TERTIARY400,
      },
      fill: {
        primary: PRIMARY400,
        secondary: SECONDARY400,
        tertiary: TERTIARY400,
      },
      height: {
        '72': '18rem',
      },
    },
    variants: {},
    plugins: [],
  },
}
