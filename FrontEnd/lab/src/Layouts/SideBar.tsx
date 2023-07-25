import { useContext } from 'react'
import ThemeContext from '../theme/ThemeContext'

function SideBar() {

  const { currTheme, toggle } = useContext(ThemeContext)
  console.log("themeContext =", currTheme)


  return (
    <div>
      <button onClick={toggle}>Toggle Theme</button>

      <div>
      </div>


    </div>
  )
}

export default SideBar