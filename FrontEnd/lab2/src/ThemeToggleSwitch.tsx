import { ReactNode, useContext, useEffect, useState } from "react";
import { ThemeContext } from "./contexts"
import { IThemeOptions, ThemeContextInterface } from "./types"
import "./ThemeToggleSwitch.css"
import { BiSun, BiSolidMoon } from 'react-icons/bi'
import { WiMoonAltWaningCrescent4 } from 'react-icons/wi'

interface IThemeSwitchButtonProps {
  id: number
  active: boolean
  icon: ReactNode // this is a react icon
  handleClick(event: any): void
}

const ThemeSwitchButton = (props: IThemeSwitchButtonProps) => {
  return (
    <>
      <div onClick={props.handleClick} icon-id={props.id} className={`tri-state-toggle-button ${props.active ? 'active' : ''}`}>
        {props.icon}
      </div>
    </>
  )
}

function ThemeToggleSwitch() {
  const [activeButton, setActiveButton] = useState<number>();

  // ! consume the context
  const { theme, updateTheme } = useContext(ThemeContext) as ThemeContextInterface;

  const handleClick = (event) => {
    // console.log("this is event:", event.currentTarget.getAttribute('icon-id'));
    const num: number = parseInt(event.currentTarget.getAttribute('icon-id'));
    setActiveButton(num);

    const newTheme: IThemeOptions = (num === 1 ? { value: "light" } : (num === 2 ? { value: "warm" } : { value: "dark" }))
    updateTheme(newTheme);

    // GetFromLS();
    // SaveToLS();
  };

  useEffect(() => {
    console.log("current theme inside switch:, ", theme.value);

    const num = (theme.value === 'light' ? 1 : (theme.value === 'warm' ? 2 : 3))
    setActiveButton(num);

  }, [theme])

  return (
    <>
      <p>{theme.value}</p>
      <div className="tri-state-toggle">
        <ThemeSwitchButton id={1} handleClick={handleClick} active={activeButton === 1 ? true : false} icon={<BiSun size={"1.5em"} />} />
        <ThemeSwitchButton id={2} handleClick={handleClick} active={activeButton === 2 ? true : false} icon={<WiMoonAltWaningCrescent4 size={"1.5em"} />} />
        <ThemeSwitchButton id={3} handleClick={handleClick} active={activeButton === 3 ? true : false} icon={<BiSolidMoon size={"1.5em"} />} />
      </div>
    </>
  )
}

export default ThemeToggleSwitch