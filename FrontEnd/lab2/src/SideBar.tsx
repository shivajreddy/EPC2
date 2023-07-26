import { ReactNode, useState } from "react"
import "./SideBar.css"
import { GoHomeFill } from 'react-icons/go'
import { HiMenu, HiOutlineX } from 'react-icons/hi'
import { FaReact } from 'react-icons/fa'
import ThemeToggleSwitch from "./ThemeToggleSwitch"
import eagleLogoFull from "./assets/images/eagle-log-full.png"
import eagleLogoIcon from "./assets/images/eagle-logo-icon.png"

interface ISideBarItem {
  name: string,
  link: string,
  icon: ReactNode,
  isExpanded: boolean
}
type ISideBarItems = ISideBarItem[];

const SideBarItems: ISideBarItems = [
  {
    name: "item1",
    link: "link1",
    icon: <GoHomeFill />,
    isExpanded: true
  },
  {
    name: "item2",
    link: "link2",
    icon: "icon2",
    isExpanded: true
  }
]

const SideBarItem = ({ ...props }: ISideBarItem) => {
  return (
    <div className={"sidebar-item flex border-2 border-s-teal-300"}>
      {props.icon}
      <button className={`${props.isExpanded ? "" : "hidden"}`}>{props.name}</button>
    </div>
  )
}

function SideBar() {

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const testItem = SideBarItems[0];
  testItem.isExpanded = isOpen

  return (
    <div className={`main-sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="main-sidebar-content ">

        <div id="sidebar-toggle-icon">
          <button onClick={() => setIsOpen(!isOpen)}>
            {!isOpen && <HiMenu size={"1.4em"} />}
            {isOpen && <HiOutlineX size={"1.4em"} />}
          </button>
          <br />
        </div>

        {/* logo */}
        <div className="site-logo flex justify-center items-center">
          <FaReact size={"3em"} />
          {isOpen &&
            <h1>TBD</h1>
          }
        </div>

        <div className="main-sidebar-items">
          <SideBarItem {...testItem} />
          id</div>

        <div>
          <ThemeToggleSwitch isOpen={isOpen} />
        </div>

        <div className="sidebar-footer">
          <div className="flex justify-center">
            {isOpen &&
              <img src={eagleLogoFull} width="100px" />
            }
            {!isOpen &&
              <img src={eagleLogoIcon} />
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default SideBar