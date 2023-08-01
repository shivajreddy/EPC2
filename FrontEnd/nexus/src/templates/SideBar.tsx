import "@assets/templates/sidebar.css"
import { TbStatusChange, TbBulb } from "react-icons/tb"
import { FaRegCircle } from "react-icons/fa"
import { RiTodoLine } from "react-icons/ri"
import { GoHome } from "react-icons/go"
import eagleLogoFull from "@assets/images/Eagle Logo B&W.png"
import eagleLogoIcon from "@assets/images/Eagle Logo Only B&W.png"
import tecLogo from "@assets/images/TEC_Black_Logo.png"

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
            <a className="sidebar-content-item active" key={item.name}>
              <div className="item-icon">{item.icon}</div>
              <p className="expand-only">{item.name}</p>
            </a>
          ))
        }
      </div>
      <div className="sidebar-footer">
        <div id="sidebar-footer-tec-logo" className="">
          <img src={tecLogo} />
        </div>
        <div id="sidebar-footer-eagle-logo" className="" >
          <img src={eagleLogoFull} className="" />
          <img src={eagleLogoIcon} className="" />
        </div>
      </div>

    </aside>
  )
}

export default SideBar