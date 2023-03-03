import React from 'react';
import * as Select from '@radix-ui/react-select';
import Sun from '../images/sun.svg';
import Moon from '../images/moon.svg';
import Monitor from '../images/monitor.svg';
import {useThemeContext} from "../theme";

const themeOptions = {
  light: {
    label: 'Light',
    icon: <Sun width="1em" height="1em" />
  },
  dark: {
    label: 'Dark',
    icon: <Moon width="1em" height="1em" />
  },
  system: {
    label: 'System',
    icon: <Monitor width="1em" height="1em" />
  }
}

const ThemeSelect = () => {
  const { theme, setTheme } = useThemeContext();
  const [systemTheme, setSystemTheme] = React.useState(null);

  React.useEffect(() => {
    setTheme(localStorage.theme || 'system');

    const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemTheme(darkThemeMediaQuery.matches ? 'dark' : 'light');
  }, [setTheme]);

  React.useEffect(() => {
    const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = event => {
      setSystemTheme(event.matches ? 'dark' : 'light');

      if (theme === 'system') {
        if (event.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    }

    darkThemeMediaQuery.addListener(handleThemeChange);

    return () => {
      darkThemeMediaQuery.removeListener(handleThemeChange);
    }
  }, [theme]);

  React.useEffect(() => {
    if (theme === 'light') {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }

    if (theme === 'dark') {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    }

    if (theme === 'system') {
      localStorage.removeItem('theme');

      if (systemTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme, systemTheme]);

  return theme ? (
    <Select.Root value={theme} onValueChange={setTheme}>
      <Select.Trigger className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
        <Select.Value aria-label={theme}>
          {theme === 'system' ? themeOptions[systemTheme].icon : themeOptions[theme].icon}
        </Select.Value>
      </Select.Trigger>
      <Select.Content className="min-w-[160px] mt-10 py-2 rounded-md bg-gray-100 dark:bg-gray-800 drop-shadow-sm">
        <Select.Viewport>
          {Object.keys(themeOptions).map(theme => (
            <Select.Item
              key={theme}
              value={theme}
              className="select-item flex items-center py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer aria-selected:text-orange-500"
            >
              <Select.ItemText>
                {themeOptions[theme].icon}
              </Select.ItemText>
              <span className="ml-2">{themeOptions[theme].label}</span>
            </Select.Item>
          ))}
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  ) : null;
}

export default ThemeSelect;