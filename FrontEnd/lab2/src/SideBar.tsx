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
  isExpanded: boolean,
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
    icon: <GoHomeFill />,
    isExpanded: true
  },
  {
    name: "item2",
    link: "link2",
    icon: <GoHomeFill />,
    isExpanded: true
  },
  {
    name: "item2",
    link: "link2",
    icon: <GoHomeFill />,
    isExpanded: true
  },
  {
    name: "item2",
    link: "link2",
    icon: <GoHomeFill />,
    isExpanded: true
  },
  {
    name: "item2",
    link: "link2",
    icon: <GoHomeFill />,
    isExpanded: true
  },
  {
    name: "item2",
    link: "link2",
    icon: <GoHomeFill />,
    isExpanded: true
  },
  {
    name: "item2",
    link: "link2",
    icon: <GoHomeFill />,
    isExpanded: true
  },
]


const SideBarItem = ({ ...props }: ISideBarItem) => {
  return (
    <div className={"sidebar-item"}>
      {props.icon}
      <button className={`${props.isExpanded ? "" : "hidden"}`}>
        {props.isExpanded &&
          <p>{props.name}</p>
        }
      </button>
    </div>
  )
}

function SideBar() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const testItem = SideBarItems[0];
  testItem.isExpanded = isOpen

  return (
    <div className={`main-sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="main-sidebar-content ">

        <button>
          <div id="sidebar-toggle-icon" className="outline" onClick={() => setIsOpen(!isOpen)}>
            {/* <button onClick={() => setIsOpen(!isOpen)}> */}
            {!isOpen &&
              <HiMenu size={"1.5em"} />
            }
            {isOpen && <HiOutlineX size={"1.5em"} />}
            {/* </button> */}
          </div>
        </button>

        <div className="site-logo">
          <div className="site-logo flex justify-center items-center">
            <FaReact size={"2.5em"} style={{ color: "#B3955E" }} />
            {isOpen &&
              <p className="font-semibold text-3xl pl-4">NUCLEUS</p>
            }
          </div>
        </div>

        <div className="main-sidebar-body">
          <div className="main-sidebar-items">
            {
              SideBarItems.map((item, index) => (
                <SideBarItem name={item.name} icon={item.icon} link={item.link} isExpanded={isOpen} key={index} />
              ))
            }
          </div>
          <div id="theme-switcher">
            <ThemeToggleSwitch isOpen={isOpen} />
          </div>
        </div>

        <div className="sidebar-footer">
          <div id="sidebar-foot-logo" className="flex justify-center">
            {isOpen &&
              <img src={eagleLogoFull} width="120px" />
            }
            {!isOpen &&
              <img src={eagleLogoIcon} width="40px" />
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default SideBar