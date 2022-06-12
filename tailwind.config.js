module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    './content/**/*.{md,mdx}'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sf: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      idealSans: ['Ideal Sans SSm A', 'Ideal Sans SSm B', 'Helvetica', 'sans-serif'],
      mercury: ['Mercury SSm A', 'Mercury SSm B', 'serif'],
      mono: ['SF Mono', 'SFMono-Regular', 'ui-monospace', 'Menlo', 'monospace']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
