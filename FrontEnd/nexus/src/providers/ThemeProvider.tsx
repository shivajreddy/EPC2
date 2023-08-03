import { useEffect, useState } from "react";
import { ThemeContext } from "@context/ThemeContext";
import { GetFromLS, SaveToLS } from "@hooks/index";
import { IThemeOptions } from "@/types/types";


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

  const defaultProjectTheme: IThemeOptions = { value: "nexus-theme-light" };

  const [theme, setTheme] = useState<IThemeOptions>(defaultProjectTheme)

  const userPreferedThemeKeyInLS = "nexus-theme"

  const updateTheme = (newTheme: IThemeOptions) => {
    setTheme(newTheme);
    SaveToLS(userPreferedThemeKeyInLS, newTheme.value)
  }

  // There is no theme-preference locally
  useEffect(() => {
    const currentLocalThemeValue = GetFromLS(userPreferedThemeKeyInLS);

    if (
      currentLocalThemeValue !== null &&
      (currentLocalThemeValue === "nexus-theme-light" ||
        currentLocalThemeValue === "nexus-theme-warm" ||
        currentLocalThemeValue === "nexus-theme-dark")
    ) {
      setTheme({ value: currentLocalThemeValue });
    } else {
      setTheme(defaultProjectTheme);
      SaveToLS(userPreferedThemeKeyInLS, defaultProjectTheme.value);
    }
  }, [])


  useEffect(() => {
    document.body.classList.remove('nexus-theme-light', 'nexus-theme-dark', 'nexus-theme-warm');
    document.body.classList.add(`${theme.value}`);
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
