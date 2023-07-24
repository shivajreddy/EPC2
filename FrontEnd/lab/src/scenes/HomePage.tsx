import styled, { ThemeProvider } from "styled-components"
import { useTheme } from "../theme/useTheme"
import { useEffect, useState } from "react";
import { GlobalStyles } from "../theme/GlobalStyles";



// 2: create a container
const Container = styled.div`
  margin: 5px auto 5px auto;
`

function HomePage() {

  // 3. get the selected theme
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  return (
    <>
      {

        themeLoaded &&
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />

          <div>
            <button onClick={setTheme(light)}>light</button>
            <button onClick={setTheme(warm)}>warm</button>
            <button onClick={setTheme(dark)}>dark</button>
          </div>

          <Container >

            <h1>testing</h1>

          </Container>

          <button>main toggle switch</button>

        </ThemeProvider>

      }
      <div>HomePage</div>
    </>
  )
}

export default HomePage