interface IThemeOptions {
  value: "light" | "warm" | "dark"
}

interface ThemeContextInterface {
  theme: IThemeOptions;
  updateTheme(newTheme: IThemeOptions): void;
}

export type { ThemeContextInterface, IThemeOptions }
