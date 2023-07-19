import '../../styles/lotprogress.css';
import Dot from './Dot';

type Props = {
  stage: number
}

function LotProgress2(props: Props) {

  const totalStages = 8;
  const stage = props.stage;
  // const width = Math.round((stage * 100) / totalStages)
  const width = (stage * 100) / totalStages

  return (
    <div className="lot-progress">

      {/* lot-code component here */}


      <div className="lot-progress-root">
        <div className="lot-progress-line bg-slate-400"></div>
        <div className="lot-progress-green-bar bg-green-500 rounded-full"
          // style={{ width: `${Math.round((stage * 100) / totalStages)}%` }}
          // style={{ width: `calc( (${stage} * 100%) / ${totalStages})` }}
          style={{ width: `${width}%` }}
        ></div>
        <div className="lot-progress-symbols">

          {
            Array.from({ length: totalStages }).map((_, index) => (
              <Dot key={index} />
            ))
          }

        </div>
      </div>


    </div >
  )
}

export default LotProgress2