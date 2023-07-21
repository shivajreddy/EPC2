import "../../styles/live-dashboard.css"
import Footer from "../../components/Footer"
import LotProgress2 from "./LotProgress2"
import { Typography } from "@mui/material";

const totalStages = [
  "Start",
  "Contract",
  "Eng Set",
  "Engineering",
  "Permit Set",
  "Permiting",
  "BuildBy Set",
  "Finish"
]

const totalStagesCount = 8;

function LiveDashboard() {
  return (
    <>
      <div className="live-dashboard-page">

        <div className="m-4 bg-slate-100 flex justify-center content-center items-center">
          <svg height={30} width={30} >
            <circle fill="#ff0000" stroke="none" cx="15" cy="15" r="12">
              <animate attributeName="opacity" dur="3s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
            </circle>
          </svg>
          <h1 className="text-center text-3xl p-6 select-none">Live Dashboard</h1>
        </div>

        <div id="dashboard-root">

          <div id="dashboard-titles" className="flex justify-between">
            {totalStages.map(stage => (
              <p key={stage} className='dashboard-title border-2 border-slate-400 bg-teal-200 rounded-full'>{stage}</p>
            ))}
          </div>

          <div id="dashboard-content">
            <div id="vertical-lines">
              {
                Array.from({ length: totalStagesCount }).map((_, index) => (
                  <div key={index} className="vertical-line bg-slate-200"></div>
                ))
              }
            </div>

            <div id="main-content">
              <LotProgress2 stage={3} />
              <div id="test-content">
                <h1 className="text-center justify-center">TEST_CONTENT</h1>
              </div>
            </div>

          </div>

        </div>


      </div >

      <Footer />
    </>
  )
}

export default LiveDashboard