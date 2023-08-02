import "@assets/templates/header.css"
import { Dispatch, SetStateAction } from "react";
import { FaCircleUser } from "react-icons/fa6"
import { IoNotificationsOutline } from "react-icons/io5"
import { Link, NavLink } from "react-router-dom";

interface IProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}


function Header({ ...props }: IProps) {

  const { sidebarOpen, setSidebarOpen } = props

  function handleClick() {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <header className="header">
      <button
        onClick={handleClick}
        className="sidebar-toggle-btn">
        <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" ><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>
      </button>

      <div className="site-logo">
        <p className="font-bold text-3xl">Nexus</p>
      </div>

      <div className="menu">
      </div>

      <div className="user-controls">
        <div className="user-notification"><IoNotificationsOutline /></div>
        <NavLink to="/user" className="user-avatar" >
          <FaCircleUser />
        </NavLink>
      </div>

    </header>
  )
}

export default Header