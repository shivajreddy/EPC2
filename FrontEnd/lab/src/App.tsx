import { createContext } from "react";
import { useState } from "react"
import Lab from "./Lab"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyles";
import Layout from "./components/layotus/layout";
import { GlobalStyles } from "./theme/GlobalStyles";


export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <GlobalStyles />

          <GlobalStyle />
          <title>This is a title</title>
          <h1>Lab App</h1>

          <Layout>
          </Layout>

          <Lab />

        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
