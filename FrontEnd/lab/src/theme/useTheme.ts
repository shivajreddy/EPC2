import { useEffect, useState } from "react";
import { getFromLS, setToLS } from "./storage"

interface Theme {
  (name: string): {
    id: string,
    name: string,
    colors: {
      body: string,
      text: string,
      button: {
        text: string,
        background: string,
      },
      link: {
        text: string,
        background: string,
      }
    },
    font: string
  },
}


export const useTheme = () => {

  const themes = getFromLS('all-themes');
  const [theme, setTheme] = useState<Theme>(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: string) => {
    setToLS('theme', mode)
    setTheme(mode)
  };

  useEffect(() => {
    const localTheme = getFromLS('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes.data.seaWave);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };

}