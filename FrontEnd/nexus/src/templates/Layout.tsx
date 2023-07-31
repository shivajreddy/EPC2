import { Sidebar } from "@/templates/sidebar"
import Body from "@templates/Body";
import "@assets/templates/layout.css"
import { ReactNode, useState } from "react"


interface IProps {
  children: ReactNode;
}

function Layout({ children }: IProps) {

  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  return (
    <div className="main-layout">
      <Sidebar sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
      <Body>
        {children}
      </Body>
    </div>
  )
}

export default Layout