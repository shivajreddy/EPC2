import { ReactNode } from "react"
import MainBody from "../MainBody"
import SideBar from "../SideBar"
import "./MainLayout.css"

interface IProps {
  children: ReactNode;
}

function MainLayout({ children }: IProps) {
  return (
    <div className="main-layout">
      <SideBar />
      <MainBody>
        {children}
      </MainBody>
    </div>
  )
}

export default MainLayout