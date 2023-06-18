export const getPreviewCode = (theme) => {
  return `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap');
\n\
* {
  box-sizing: border-box;
}
\n\
#root {
  max-width: 100%;
}
\n\
body {
  margin: 0;
  background-color: var(--body-background-color);
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  color: var(--body-text-color);
}
  `;
}