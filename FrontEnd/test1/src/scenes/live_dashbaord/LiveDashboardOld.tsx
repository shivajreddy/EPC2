import Footer from '../../components/Footer'
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



function LiveDashboardOld() {
  return (
    <>
      <div className="live-dashboard-page">

        <div className='dashboard-root bg-slate-200'>

          < p className='page-title ' > Live Dashboard</p >
          <div className="grid-titles flex justify-between">
            {totalStages.map(stage => (
              <p key={stage} className='grid-title'>{stage}</p>
            ))}
          </div>



          <div className='z-0 grid-root'
            style={{ minHeight: 'calc(100vh - 10rem)' }}
          >
            <BaseGrid />

            <div className='all-lots-root z-20 absolute top-20 min-w-full'>

              {/* <LotProgress2 stage={1} /> */}

              <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
              <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
              <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
              <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
              <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
              <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
              <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
              <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
              <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
              <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
              <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
              <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
              <LotProgress data={{ lot_id: "Lot-29-04-RB" }} />
            </div>

          </div>


        </div>
      </div >
      <Footer />
    </>
  )
}

export default LiveDashboardOld