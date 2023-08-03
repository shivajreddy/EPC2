import "@assets/templates/sidebar.css"
import { TbStatusChange, TbBulb } from "react-icons/tb"
import { FaRegCircle } from "react-icons/fa"
import { RiTodoLine } from "react-icons/ri"
import { GoHome } from "react-icons/go"
import eagleLogoIcon from "@assets/images/Eagle Logo Only B&W.png"
import tecLogo from "@assets/images/TEC_Black_Logo.png"
import { NavLink } from "react-router-dom"
import { Badge } from "@/components/ui/badge"

const SideBarItems = [
  {
    name: "Home",
    link: "/",
    icon: <GoHome size={"1.5em"} />,
    isBeta: false,
  },
  {
    name: "EPC",
    link: "/epc",
    icon: <FaRegCircle size={"22px"} />,
    isBeta: true,
  },
  {
    name: "PipeLine",
    link: "/pipeline",
    icon: <TbStatusChange size={"1.5em"} />,
    isBeta: true,
  },
  {
    name: "Tasks",
    link: "/tasks",
    icon: <RiTodoLine size={"1.5em"} />,
    isBeta: true,
  },
  {
    name: "Updates",
    link: "/updates",
    icon: <TbBulb size={"1.6em"} />,
    isBeta: false,
  },
]


interface IProps {
  sidebarOpen: boolean;
}

function SideBar({ ...props }: IProps) {

  const { sidebarOpen } = props
  const sidebarStatus = sidebarOpen ? "open" : "closed"

  return (
    <aside className={`sidebar ${sidebarStatus} bg-card`}>

      <div className="sidebar-header"> </div>
      <div className="sidebar-content">
        {
          SideBarItems.map((item, index) => (
            <NavLink to={item.link}
              className="sidebar-content-item"
              key={item.name}>
              <div className="item-icon">{item.icon}</div>
              <div className="item-name">
                {item.name}
                {item.isBeta &&
                  <Badge className="badge" variant="default" >Beta</Badge>
                }
              </div>
            </NavLink>
          ))
        }
      </div>
      <div className="sidebar-footer">
        <div id="sidebar-footer-tec-logo" className="">
          <img src={tecLogo} />
        </div>
        <div id="sidebar-footer-eagle-logo" className="" >
          <img src={eagleLogoIcon} />
        </div>
      </div>

    </aside>
  )
}

export default SideBar