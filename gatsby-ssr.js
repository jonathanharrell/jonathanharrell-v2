// Import React so that you can use JSX in HeadComponents
const React = require("react")

const themeScript = `
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
`

const HeadComponents = [
  <script key="my-script" dangerouslySetInnerHTML={{__html: themeScript}} />
];

exports.onRenderBody = ({
  setHeadComponents,
}) => {
  setHeadComponents(HeadComponents);
}