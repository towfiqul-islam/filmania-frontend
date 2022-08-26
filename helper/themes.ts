export const lightTheme = {
  '--primary': '#fff',
  '--secondary': '#000',
};

export const darkTheme = {
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

const setThemeProperty = (keys: any, values: any) => {
  for (let i = 0; i < keys.length; i++) {
    document.documentElement.style.setProperty(keys[i], values[i]);
  }
};

const separateKeyValues = (theme: any) => {
  const keys = Object.keys(theme);
  const values = Object.values(theme);

  return {
    keys,
    values,
  };
};
