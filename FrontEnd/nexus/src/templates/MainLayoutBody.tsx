import { ReactNode } from "react";
import "@assets/templates/mainlayoutbody.css"

interface IProps {
  children: ReactNode;
}

function MainLayoutBody({ children }: IProps) {
  return (
    <div className="main-layout-body">
      {children}
    </div>
  )
}

export default MainLayoutBody