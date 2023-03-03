import React, {useEffect, useMemo, useState} from 'react';
import {
  SandpackCodeEditor,
  SandpackPreview,
  SandpackProvider, useSandpack,
} from '@codesandbox/sandpack-react';
import {atomDark} from '@codesandbox/sandpack-themes';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config.js';
import {useThemeContext} from "../theme";

const {theme: {colors, fontFamily, fontSize}} = resolveConfig(tailwindConfig);

const lightTheme = {
  ...atomDark,
  colors: {
    ...atomDark.colors,
    surface1: colors.white,
    surface2: colors.neutral['200'],
    surface3: colors.neutral['100'],
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

const darkTheme = {
  ...atomDark,
  colors: {
    ...atomDark.colors,
    surface1: colors.neutral['900'],
    surface2: colors.neutral['800'],
    surface3: colors.neutral['800'],
  }
};

const SandpackContent = ({previewStyle}) => {
  const {listen} = useSandpack();

  const [isCompiled, setIsCompiled] = useState(false);

  useEffect(() => {
    listen(message => {
      if (message.type === 'start') {
        setIsCompiled(false);
      }

      if (message.type === 'done') {
        setIsCompiled(true);
      }
    });
  }, []);

  return (
    <div className="mt-4">
      <div className="relative mb-4 border border-neutral-200 dark:border-neutral-800">
        {!isCompiled && (
          <div className="flex items-center justify-center absolute inset-0 z-10 text-gray-900 dark:text-white">
            Loading...
          </div>
        )}
        <SandpackPreview
          showOpenInCodeSandbox={false}
          showRefreshButton={false}
          style={previewStyle}
          className={isCompiled ? 'visible' : 'invisible'}
        />
      </div>
      <SandpackCodeEditor
        className="overflow-hidden border border-neutral-200 dark:border-neutral-800 rounded-lg shadow dark:shadow-lg"
      />
    </div>
  );
}

const Sandpack = ({template, files, previewStyle}) => {
  const {theme} = useThemeContext();

  const trimmedFiles = useMemo(() => {
    return Object.entries(files).reduce((obj, file) => {
      const [key, value] = file;

      if (value?.code) {
        obj[key] = {
          ...value,
          code: value?.code?.trim('\n')
        }
      } else {
        obj[key] = value?.trim('\n');
      }

      return obj;
    }, {});
  }, [files]);

  const finalFiles = useMemo(() => {
    return {
      ...trimmedFiles,
      '/variables.css': {
        code: `
body {
  background-color: ${theme === 'dark' ? colors.neutral['900'] : colors.white};
  color: ${theme === 'dark' ? colors.white : colors.neutral['800']};
}
        `,
        hidden: true
      }
    }
  }, [trimmedFiles, theme]);

  const sandpackTheme = useMemo(() => {
    return {
      ...(theme === 'dark' ? darkTheme : lightTheme),
      font: {
        mono: fontFamily.mono.join(', '),
        size: fontSize.sm[0],
        lineHeight: '1.7'
      }
    };
  }, [theme]);

  return (
    <div>
      <SandpackProvider
        key={theme}
        theme={sandpackTheme}
        template={template}
        files={finalFiles}
      >
        <SandpackContent previewStyle={previewStyle}/>
      </SandpackProvider>
    </div>
  );
}

export default Sandpack;