import '../../styles/lotprogress.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type Props = {
  stage: number
}
type DotProps = {
  lot_stage: number,
  curr_stage: number
}

function Dot(props: DotProps) {

  if (!(props.curr_stage <= props.lot_stage)) {
    return (
      <div className='dot bg-slate-400'></div>
    )
  } else {
    return (
      <div className='dot'>
        <CheckCircleIcon sx={{ color: "green", position: "relative", top: "-8px", left: "-4px" }} />
      </div>
    )
  }

}



function LotProgress2(props: Props) {

  const totalStages = 8;
  const stage = props.stage;
  const width = (stage * 100) / (totalStages - 1)

  return (
    <div className="lot-progress">

      {/* lot-code component here */}


      <div className="lot-progress-root">
        <div className="lot-progress-line bg-slate-400"></div>
        <div className="lot-progress-green-bar bg-green-500 rounded-full"
          style={{ width: `calc(${width}% - 0px)` }}
        ></div>
        <div className="lot-progress-symbols">

          {
            Array.from({ length: totalStages }).map((_, index) => (
              <Dot key={index} lot_stage={stage} curr_stage={index} />
            ))
          }

        </div>
      </div>


    </div >
  )
}

export default LotProgress2