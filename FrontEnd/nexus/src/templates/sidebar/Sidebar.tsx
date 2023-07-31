import '@assets/templates/sidebar.css'
import { Dispatch, SetStateAction } from 'react'

interface Iprops {
  sidebarIsOpen: boolean,
  setSidebarIsOpen: Dispatch<SetStateAction<boolean>>;
}

function Sidebar({ sidebarIsOpen, setSidebarIsOpen }: Iprops) {
  return (
    <div className={`sidebar ${sidebarIsOpen ? "open" : "closed"}`}>

      <div className='sidebar-content'>


        {sidebarIsOpen &&
          <h1 className="text-3xl font-bold">Nexus</h1>
        }



        <button onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>toggle</button>
      </div>

    </div>
  )
}

export default Sidebar