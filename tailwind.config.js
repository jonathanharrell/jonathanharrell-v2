module.exports = {
  content: [
    './src/**/*.{js,jsx,css}',
    './content/**/*.{md,mdx}'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sf: ['-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['SF Mono', 'SFMono-Regular', 'ui-monospace', 'Menlo', 'monospace'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--tw-color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
}
