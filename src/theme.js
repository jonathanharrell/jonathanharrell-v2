import React, {useContext} from "react";

export const ThemeContext = React.createContext({});

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('No `ThemeContext` instance found.');
  }

  return context;
};