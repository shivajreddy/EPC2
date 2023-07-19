import '../../styles/verticalgrid.css'

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
    <div className="vertical-grid">

      <div className="titles">

        {totalStages.map(stage => (
          <p key={stage} className='title'>{stage}</p>
        ))}

      </div>

      <div className="vertical-lines-root">
        {totalStages.map(stage => (
          <div key={stage} className="w-px bg-slate-200"></div>
        ))}
      </div>

    </div>
  )
}

export default VerticalGrid