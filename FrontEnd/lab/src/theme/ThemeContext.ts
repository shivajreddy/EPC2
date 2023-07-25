import { createContext } from "react";
import * as themes from "./themes.json"


const initialState = {
  currTheme: localStorage.getItem('current-theme'),
  theme: themes.dark,
  toggle: () => { }
}
const ThemeContext = createContext(initialState)

export default ThemeContext;

