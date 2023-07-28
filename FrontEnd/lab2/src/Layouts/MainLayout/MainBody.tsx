import { ReactNode } from "react";
import "./MainBody.css"

interface IProps {
  children: ReactNode;
  sidebarIsOpen: boolean;
}

function MainBody({ children, sidebarIsOpen }: IProps) {

  return (
    <div className={`main-body ${sidebarIsOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {children}
    </div>
  )
}

export default MainBody