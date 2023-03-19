import React from 'react';
import * as Select from '@radix-ui/react-select';
import Sun from '../images/sun.svg';
import Moon from '../images/moon.svg';
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
}

const ThemeSelect = () => {
  const { theme, setTheme } = useThemeContext();

  return theme ? (
    <Select.Root value={theme} onValueChange={setTheme}>
      <Select.Trigger className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700">
        <Select.Value aria-label={theme}>
          {themeOptions[theme].icon}
        </Select.Value>
      </Select.Trigger>
      <Select.Content className="min-w-[160px] mt-10 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 drop-shadow-sm">
        <Select.Viewport>
          {Object.keys(themeOptions).map(theme => (
            <Select.Item
              key={theme}
              value={theme}
              className="select-item flex items-center py-2 px-4 hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer aria-selected:text-orange-500"
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