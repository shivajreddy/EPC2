import '../../styles/livedashboard.css'
import BaseGrid from './BaseGrid'
import LotProgress from './LotProgress'
import LotProgress2 from './LotProgress2'


const totalStages = [
  "Start",
  "Contract",
  "Drafting\nEng-set",
  "Engineering",
  "Drafting\nPermit-set",
  "Permiting",
  "Drafting\nBuildBy-set",
  "Finish"
]


function LiveDashboard() {
  return (
    <div className="live-dashboard-page">
      <p className='page-title'>Live Dashboard</p>


      <div className='z-0 dashboard-root'
        style={{ minHeight: 'calc(100vh - 10rem)' }}
      >

        <BaseGrid />

        <div className='all-lots-root z-20 absolute top-20 min-w-full'>

          <LotProgress2 stage={1} />
          <LotProgress2 stage={1} />
          <LotProgress2 stage={1} />
          <LotProgress2 stage={1} />
          <LotProgress2 stage={1} />
          <LotProgress2 stage={1} />

          <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
          <LotProgress data={{ lot_id: "Lot-27-05-PV" }} />
          <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
          <LotProgress data={{ lot_id: "Lot-27-05-PV" }} />
          <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
          <LotProgress data={{ lot_id: "Lot-27-05-PV" }} />

        </div>

      </div>


    </div>
  )
}

export default LiveDashboard