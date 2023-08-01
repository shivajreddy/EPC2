import { useEffect, useState } from "react";
import { ThemeContext } from "@context/ThemeContext";
import { GetFromLS, SaveToLS } from "@hooks/index";
import { IThemeOptions } from "@/types/types";


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

  const [theme, setTheme] = useState<IThemeOptions>({ value: "light" })

  const defaultProjectTheme: IThemeOptions = { value: "light" };
  const userPreferedThemeKeyInLS = "preference-theme"

  const updateTheme = (newTheme: IThemeOptions) => {
    setTheme(newTheme);
    SaveToLS(userPreferedThemeKeyInLS, newTheme.value)
  }

  // There is no theme-preference locally
  useEffect(() => {
    const currentLocalThemeValue = GetFromLS(userPreferedThemeKeyInLS)
    // console.log("currentLocalThemeValue=", currentLocalThemeValue);

    if (currentLocalThemeValue === null) {
      setTheme(defaultProjectTheme)
      SaveToLS(userPreferedThemeKeyInLS, defaultProjectTheme.value)
    } else {
      setTheme({ value: currentLocalThemeValue })
    }
  }, [])

  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-warm');
    document.body.classList.add(`theme-${theme.value}`);
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
