import '../../styles/livedashboard.css'
import LotProgress from "./LotProgress"

function LiveDashboard() {
  return (
    <div className="live-dashboard-root">
      <h1> LiveDashboard </h1>


      <div className='flex'>

        <div className='child-1 flex-none'>
          Start
        </div>

        <div className='child-2 flex-grow'>
          <p className='underline decoration-sky-500' >
            testing
          </p>
          <LotProgress />
        </div>

        <div className='child-3 flex-none'>
          Finish
        </div>

      </div>

    </div>
  )
}

export default LiveDashboard


/*

stages:
Start | Contract | Drafting (Eng-Set) | Engineering | Drafting(Permit-Set) | County-Permit | Drafting(BuildBy-Set) | Finish

Drafter's Process:
Eng-Set -> Permit-Set -> BuildBy-Set


*/