import {atomDark} from "@codesandbox/sandpack-themes";
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from "../tailwind.config";

const {theme: {colors}} = resolveConfig(tailwindConfig);

export const lightTheme = {
  ...atomDark,
  colors: {
    ...atomDark.colors,
    surface1: colors.white,
    surface2: colors.neutral['200'],
    surface3: colors.neutral['50'],
    hover: colors.neutral['500'],
  },
  syntax: {
    "plain": colors.neutral['500'],
    "comment": {
      "color": "#A0A1A7",
      "fontStyle": "italic"
    },
    "keyword": "#c678dd",
    "tag": "#F07C85",
    "punctuation": "#A0A1A7",
    "definition": "#62aeef",
    "property": "#E1AA76",
    "static": colors.neutral['500'],
    "string": "#88B369"
  }
};

export const darkTheme = {
  ...atomDark,
  colors: {
    ...atomDark.colors,
    surface1: colors.neutral['900'],
    surface2: colors.neutral['800'],
    surface3: colors.neutral['800'],
  },
  syntax: {
    ...atomDark.syntax,
    "plain": colors.neutral['300'],
    "static": colors.neutral['300'],
  }
};

export const getPreviewCode = (theme) => {
  return `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap');
\n\
* {
  box-sizing: border-box;
}
\n\
:root {
  --body-background-color: ${theme === 'dark' ? colors.neutral['800'] : colors.neutral['50']};
  --body-text-color: ${theme === 'dark' ? colors.white : colors.neutral['800']};
  --secondary-text-color: ${theme === 'dark' ? colors.neutral['500'] : colors.neutral['400']};
  --accent-color: ${colors.orange['500']};
  --success-color: ${colors.green['600']};
  --error-color: ${colors.red['600']};
  --disabled-background-color: ${theme === 'dark' ? '#2e2e2e' : colors.neutral['100']};
  --disabled-text-color: ${theme === 'dark' ? colors.neutral['600'] : colors.neutral['400']};
  --label-text-color: ${theme === 'dark' ? colors.neutral['400'] : colors.neutral['900']};
  --input-border-color: ${theme === 'dark' ? colors.neutral['600'] : colors.neutral['200']};
  --input-background-color: ${theme === 'dark' ? colors.neutral['700'] : colors.white};
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