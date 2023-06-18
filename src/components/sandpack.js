import React, {useEffect, useMemo, useState} from 'react';
import {
  SandpackCodeEditor,
  SandpackPreview,
  SandpackProvider, useSandpack,
} from '@codesandbox/sandpack-react';

import {useThemeContext} from "../theme";
import {getPreviewCode} from "../sandpack-theme";
import {atomDark} from "@codesandbox/sandpack-themes";

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
  }, [listen]);

  return (
    <div className="mt-4">
      <div className="relative mb-4 bg-neutral-50 dark:bg-neutral-800">
        {!isCompiled && (
          <div className="flex items-center justify-center absolute inset-0 z-10 text-neutral-900 dark:text-white">
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

const Sandpack = ({template, files, activeFile, previewStyle}) => {
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
      '/base.css': {
        code: getPreviewCode(theme),
        hidden: true
      }
    }
  }, [trimmedFiles, theme]);

  return (
    <div>
      <SandpackProvider
        key={theme}
        theme={atomDark}
        template={template}
        files={finalFiles}
        options={{ activeFile, initMode: 'lazy' }}
      >
        <SandpackContent previewStyle={previewStyle}/>
      </SandpackProvider>
    </div>
  );
}

export default Sandpack;