import { useState } from "react"
import "./TestSidebar.css"


interface Iprops {
  sidebarStatus: boolean
  toggleSidebarStatus: any
}

const SideBar = ({ sidebarStatus, toggleSidebarStatus }: Iprops) => {
  return (
    <div className={`sidebar sidebar-${sidebarStatus ? "open" : "closed"} bg-slate-400`}>
      <p>link 1 </p>
      <p>link 2 </p>
      <p>link 3 </p>
      <button onClick={() => toggleSidebarStatus(!sidebarStatus)}>toggle</button>
    </div>
  )
}


function TestSidebar() {

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  return (
    <div className="flex">
      <SideBar sidebarStatus={sidebarOpen} toggleSidebarStatus={setSidebarOpen} />
      <div className="body bg-lime-300 border-2 border-red-950">
        <h1>this is body</h1>
        <h1>this is body</h1>
        <h1>this is body</h1>
        <h1>this is body</h1>
        <h1>this is body</h1>
        <h1>this is body</h1>
        <h1>this is body</h1>
        <h1>this is body</h1>
        <h1>this is body</h1>
        <h1>this is body</h1>
        <h1>this is body</h1>
        <h1>this is body</h1>

      </div>
    </div>
  )
}

export default TestSidebar