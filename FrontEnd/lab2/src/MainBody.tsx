import { ReactNode } from "react";
import "./MainBody.css"

interface IProps {
  children: ReactNode;
}

function MainBody({ children }: IProps) {
  return (
    <div className="main-body">
      {children}
    </div>
  )
}

export default MainBody