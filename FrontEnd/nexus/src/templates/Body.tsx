import { ReactNode } from "react";
import '@assets/templates/body.css'

interface IProps {
  children: ReactNode;
}


function Body({ children }: IProps) {
  return (
    <div className="body">
      {children}
    </div>
  )
}

export default Body