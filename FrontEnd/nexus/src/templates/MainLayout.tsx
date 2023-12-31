import Navbar from "@/templates/Navbar"
import SideBar from "@templates/SideBar"
import MainLayoutBody from "@templates/MainLayoutBody"
import { ReactNode, useState } from "react";
import "@assets/templates/mainlayout.css"

interface IProps {
  children: ReactNode;
}

function MainLayout({ children }: IProps) {

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="main-layout">

      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}></Navbar>

      <div className="main-layout-container">
        <SideBar sidebarOpen={sidebarOpen}></SideBar>
        <MainLayoutBody >
          {children}
        </MainLayoutBody>
      </div>

    </div>
  )
}

export default MainLayout