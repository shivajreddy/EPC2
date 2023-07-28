import { ReactNode, useState } from "react"
import "./MainLayout.css"
import MainBody from "./MainBody";
import SideBar from "./SideBar";

interface IProps {
  children: ReactNode;
}

function MainLayout({ children }: IProps) {

  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  return (
    <div className="main-layout">
      <SideBar sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
      <MainBody sidebarIsOpen={sidebarIsOpen}>
        {children}
      </MainBody>
    </div>
  )
}

export default MainLayout