interface IThemeOptions {
  value: "nexus-theme-light" | "nexus-theme-warm" | "nexus-theme-dark"
}

interface ThemeContextInterface {
  theme: IThemeOptions;
  updateTheme(newTheme: IThemeOptions): void;
}

export type { ThemeContextInterface, IThemeOptions }
