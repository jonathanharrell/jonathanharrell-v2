module.exports = {
  content: [
    './src/**/*.{js,jsx,css}',
    './content/**/*.{md,mdx}'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sf: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      idealSans: ['Ideal Sans SSm A', 'Ideal Sans SSm B', 'Helvetica', 'sans-serif'],
      mercury: ['Mercury SSm A', 'Mercury SSm B', 'serif'],
      mercurySmallCaps: ['Mercury SSm Small Caps A', 'Mercury SSm Small Caps B', 'serif'],
      mono: ['SF Mono', 'SFMono-Regular', 'ui-monospace', 'Menlo', 'monospace'],
      notoSans: ['Noto Sans', 'Helvetica', 'sans-serif']
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
