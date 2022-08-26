import { CssVariables } from "../types/Global";

export const lightTheme: CssVariables = {
  '--primary': '#fff',
  '--secondary': '#000',
};

export const darkTheme: CssVariables = {
  '--primary': '#000',
  '--secondary': '#fff',
};

export const changeTheme = (theme: string) => {

  if (theme === 'light') {
    
    const {keys, values} = separateKeyValues(lightTheme)
    setThemeProperty(keys, values);

  } else if (theme === 'dark') {

    const {keys, values} = separateKeyValues(darkTheme)
    setThemeProperty(keys, values);

  }
};

const setThemeProperty = (keys: string[], values: string[]) => {
  for (let i = 0; i < keys.length; i++) {
    document.documentElement.style.setProperty(keys[i], values[i]);
  }
};

const separateKeyValues = (theme: Object) => {
  const keys: string[] = Object.keys(theme);
  const values: string[] = Object.values(theme);

  return {
    keys,
    values,
  };
};
