import { Typography } from '@mui/material'
import '../../styles/livedashboard.css'
import LotProgress2 from './LotProgress2'
import VerticalGrid from './VerticalGrid'


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
      <Typography variant='h3' className='text-center' > Live Dashboard </Typography>


      <div className='z-0 relative dashboard-root'
        style={{ minHeight: 'calc(100vh - 10rem)' }}
      >

        <VerticalGrid />

        <div className='all-lots-root z-20 absolute top-20 min-w-full'>

          {/* <LotProgress data={{ lot_id: "Lot-30-05-PV" }} />
          <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
          <LotProgress data={{ lot_id: "Lot-27-05-PV" }} /> */}

          <LotProgress2 stage={1} />

        </div>

      </div>


    </div>
  )
}

export default LiveDashboard