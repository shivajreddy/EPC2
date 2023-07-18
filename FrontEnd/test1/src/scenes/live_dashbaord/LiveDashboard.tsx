import { Typography } from '@mui/material'
import '../../styles/livedashboard.css'
import LotProgress from './LotProgress'


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

function VerticalGrid() {
  return (
    <div className='z-10 relative'>

      {/* headigns */}
      {/* <div className='flex justify-around border-4 border-cyan-400'> */}
      <div className='flex justify-around'>
        {totalStages.map(stage => (
          <h3 key={stage} className='w-24 text-center self-end'>{stage}</h3>
          // <h3 key={stage} className='w-24 border-2 border-rose-500 text-center self-end'>{stage}</h3>
        ))}
      </div>

      {/* vertical lines */}
      <div className='flex bg-black-100 justify-around'>
        {totalStages.map(stage => (
          <div key={stage} className='bg-slate-300 mx-4 w-px h-full top-6 min-h-screen'></div>
        ))}
      </div>

    </div >
  )
}

function LiveDashboard() {
  return (
    <div className="live-dashboard-page">
      <Typography variant='h3' className='text-center' > Live Dashboard </Typography>


      <div className='z-0 relative dashboard-root min-h-screen'>

        <VerticalGrid />

        <div className='all-lots-root z-20 absolute top-20 min-w-full'>
          <LotProgress data={{ lot_id: "Lot-30-05-PV" }} />
          <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
          <LotProgress data={{ lot_id: "Lot-27-05-PV" }} />
        </div>

      </div>


    </div>
  )
}

export default LiveDashboard


/*
// horizontal grid

<div className='absolute top-6 left-0 right-0 bottom-0'>
  <LotProgress />
  <LotProgress />
</div>

*/



/*

stages:
Start | Contract | Drafting (Eng-Set) | Engineering | Drafting(Permit-Set) | County-Permit | Drafting(BuildBy-Set) | Finish
0...7


Drafter's Process:
Eng-Set -> Permit-Set -> BuildBy-Set


*/