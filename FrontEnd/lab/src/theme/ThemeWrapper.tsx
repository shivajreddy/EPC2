import { FC, ReactNode, useEffect, useState } from "react"
import ThemeContext from "./ThemeContext"
import * as themes from "./themes.json"

interface Props {
  children: ReactNode
}

const ThemeWrapper: FC<Props> = ({ children }) => {

  const [currTheme, setCurrTheme] = useState<object>()

  const toggleTheme = () => {
    console.log("currTheme=", currTheme)
    if (currTheme.name === 'Light') {
      setCurrTheme(themes.dark)
    } else if (currTheme.name === 'dark') {
      setCurrTheme(themes.seawave)
    } else {
      setCurrTheme(themes.light)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('current-theme') === null) {
      localStorage.setItem('current-theme', JSON.stringify(themes.light))
      setCurrTheme(themes.light)
    } else {
      const localTheme = localStorage.getItem('current-theme')
      setCurrTheme(localTheme)
    }
  }, [currTheme])


  return (
    <ThemeContext.Provider value={{ currTheme, setCurrTheme, toggleTheme }}>
      {children}
      <button onClick={toggleTheme}>fff</button>
    </ThemeContext.Provider>
  )
}

export default ThemeWrapper