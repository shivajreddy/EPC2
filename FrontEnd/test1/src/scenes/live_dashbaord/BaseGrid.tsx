import '../../styles/basegrid.css'

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

const totalStagesCount = 8;

function BaseGrid() {
  return (
    <>
      <div className="vertical-lines-root">
        {
          Array.from({ length: totalStagesCount }).map((_, index) => (
            <div key={index} className="w-px bg-slate-200">{index}</div>
          ))
        }
        {/* 
        {totalStages.map(stage => (
          <div key={stage} className="w-px bg-slate-200">{1}</div>
        ))} */}
      </div>

    </>

  )
}

export default BaseGrid