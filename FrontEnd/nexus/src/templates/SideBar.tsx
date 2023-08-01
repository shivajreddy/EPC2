import "@assets/templates/sidebar.css"
import { TbStatusChange, TbBulb } from "react-icons/tb"
import { FaRegCircle } from "react-icons/fa"
import { RiTodoLine } from "react-icons/ri"
import { GoHome } from "react-icons/go"
import eagleLogoFull from "@assets/images/Eagle Logo B&W.png"
import eagleLogoIcon from "@assets/images/Eagle Logo Only B&W.png"
import tecLogo from "@assets/images/TEC_Black_Logo.png"
import architectonic from "@assets/images/architectonic-black.png"
import { Link } from "react-router-dom"

const SideBarItems: ISideBarLinks = [
  {
    name: "Home",
    link: "/",
    icon: <GoHome size={"1.5em"} />,
  },
  {
    name: "EPC",
    link: "/epc",
    icon: <FaRegCircle size={"22px"} />,
  },
  {
    name: "PipeLine",
    link: "/pipeline",
    icon: <TbStatusChange size={"1.5em"} />,
  },
  {
    name: "Tasks",
    link: "/tasks",
    icon: <RiTodoLine size={"1.5em"} />,
  },
  {
    name: "Updates",
    link: "/updates",
    icon: <TbBulb size={"1.6em"} />,
  },
]


interface IProps {
  sidebarOpen: boolean;
}

function SideBar({ ...props }: IProps) {

  const { sidebarOpen } = props
  const sidebarStatus = sidebarOpen ? "open" : "closed"

  return (
    <aside className={`sidebar ${sidebarStatus}`}>

      <div className="sidebar-header"> </div>
      <div className="sidebar-content">
        {
          SideBarItems.map((item, index) => (
            <Link to={item.link} className="sidebar-content-item" key={item.name}>
              <div className="item-icon">{item.icon}</div>
              <p>{item.name}</p>
            </Link>
          ))
        }
      </div>
      <div className="sidebar-footer">
        <div id="sidebar-footer-tec-logo" className="">
          <img src={architectonic} className="expand-only" />
          <img src={tecLogo} className="contract-only" />
        </div>
        <div id="sidebar-footer-eagle-logo" className="" >
          <img src={eagleLogoFull} className="expand-only" />
          <img src={eagleLogoIcon} className="contract-only" />
        </div>
      </div>

    </aside>
  )
}

export default SideBar