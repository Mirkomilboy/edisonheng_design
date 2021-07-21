module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
    ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-blue': '#5C38FA',
        'reddish': '#FF8F8F',
        'main-gray': '#575757',
        'gray-bg': '#F3F5F9',
      },
      fontFamily: {
        'noto': ['Noto Sans JP', 'sans-serif'],
      },
      spacing: {
        '448': '448px'
      },
      fontSize: {
        '13': '13px',
        '15': '15px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
