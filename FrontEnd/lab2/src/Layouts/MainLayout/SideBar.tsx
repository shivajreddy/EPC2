import { Dispatch, ReactNode, SetStateAction } from "react"
import "./SideBar.css"
import { GoHome } from 'react-icons/go'
import { TbBulb, TbStatusChange } from 'react-icons/tb'
import { RiTodoLine } from 'react-icons/ri'
import { HiMenu, HiOutlineX } from 'react-icons/hi'
import { FaReact, FaRegCircle } from 'react-icons/fa'
import { FaRegCircleUser } from 'react-icons/fa6'
import eagleLogoFull from "../../assets/images/Eagle Logo B&W.png"
import eagleLogoIcon from "../../assets/images/Eagle Logo Only B&W.png"
import tecLogo from "../../assets/images/TEC_Black_Logo.png"
import ThemeToggleSwitch from "./ThemeToggleSwitch"

interface ISideBarLink {
  name: string,
  link: string,
  icon: ReactNode,
  isExpanded: boolean,
}
type ISideBarLinks = ISideBarLink[];

const SideBarItems: ISideBarLinks = [
  {
    name: "Home",
    link: "link2",
    icon: <GoHome size={"1.5em"} />,
    isExpanded: true
  },
  {
    name: "EPC 2.0",
    link: "link1",
    icon: <FaRegCircle size={"22px"} />,
    isExpanded: true
  },
  {
    name: "PipeLine",
    link: "link2",
    icon: <TbStatusChange size={"1.5em"} />,
    isExpanded: true
  },
  {
    name: "Tasks",
    link: "link2",
    icon: <RiTodoLine size={"1.5em"} />,
    isExpanded: true
  },
  {
    name: "Updates",
    link: "link2",
    icon: <TbBulb size={"1.6em"} />,
    isExpanded: true
  },
]


const SideBarLink = ({ ...props }: ISideBarLink) => {
  return (
    <div className="main-sidebar-link">
      {props.icon}
      <button className={`${props.isExpanded ? "" : "hidden"}`}>
        {props.isExpanded &&
          <p className="pl-2 font-semibold">{props.name}</p>
        }
      </button>
    </div>
  )
}

interface IProps {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: Dispatch<SetStateAction<boolean>>;
}

function SideBar({ sidebarIsOpen, setSidebarIsOpen }: IProps) {

  const sideBarStatus = sidebarIsOpen ? "open" : "closed";

  return (
    <div className={`main-sidebar ${sideBarStatus}`}>
      <div className="main-sidebar-content ">

        <div className="main-sidebar-header">
          <div id="sidebar-toggle-icon" className="outline" onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
            {sidebarIsOpen ? <HiOutlineX size={"1.5em"} /> : <HiMenu size={"1.5em"} />}
          </div>

          <div id="main-sidebar-site-logo">
            <div className="site-logo flex justify-center items-center">
              <FaReact size={"2.5em"} style={{ color: "#B3955E" }} />
              {sidebarIsOpen &&
                <p className="font-bold text-5xl pl-4">Nexus</p>
              }
            </div>
          </div>
        </div>

        <div className="main-sidebar-body">
          <div className="main-sidebar-links">
            {
              SideBarItems.map((item, index) => (
                <SideBarLink name={item.name} icon={item.icon} link={item.link} isExpanded={sidebarIsOpen} key={index} />
              ))
            }
          </div>
          <div id="main-sidebar-user" className={sideBarStatus}>
            <div className="user-details">
              <FaRegCircleUser size={"1.6em"} />
              {sidebarIsOpen && <p className="font-bold text-xl pl-2">Shiva</p>}
            </div>
            <ThemeToggleSwitch isOpen={sidebarIsOpen} />
          </div>
        </div>

        <div className="main-sidebar-footer">
          <div className="main-sidebar-footer-logos">
            <div id="main-sidebar-footer-tec-logo" className={sideBarStatus}>
              <img src={tecLogo} />
            </div>
            <div id="main-sidebar-footer-eagle-logo" className={sideBarStatus} >
              {sidebarIsOpen ?
                <>
                  <img src={eagleLogoFull} />
                </>
                :
                <>
                  <img src={eagleLogoIcon} />
                </>
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SideBar