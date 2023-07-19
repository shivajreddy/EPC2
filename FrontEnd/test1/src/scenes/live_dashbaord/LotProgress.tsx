import '../../styles/lotprogress.css'
import Dot from './Dot'
import GreenBar from './GreenBar'
import LotNumber from './LotNumber'


type Props = {
  data: {
    lot_id: string
  }
}


function LotProgress(props: Props) {
  const data = props.data;
  return (
    <div className='py-4'>
      <div className='pl-6 pb-2'> <LotNumber lot_id={data.lot_id} status='5' color='cyan' /> </div>

      {/* this is the horizontal line */}
      <div className='bg-slate-500 w-full h-px'></div>

      {/* dots */}
      <div className='flex justify-around relative'
        style={{
          top: '-6px'
        }}
      >
        {
          Array.from({ length: 8 }).map((_, index) => <Dot key={index} />)
        }

      </div>

      <GreenBar />

    </div>
  )
}

export default LotProgress