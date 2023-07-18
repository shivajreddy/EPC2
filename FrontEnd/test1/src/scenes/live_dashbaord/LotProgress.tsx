import '../../styles/lotprogress.css'
import LotNumber from './LotNumber'


type Props = {
  data: {
    lot_id: string
  }
}


function LotProgress(props: Props) {
  const data = props.data;
  return (
    <div>
      <div className='pl-6 pb-2'> <LotNumber lot_id={data.lot_id} status='5' color='cyan' /> </div>
      <div className='bg-black w-full h-px'></div>
      <br />
    </div>
  )
}

export default LotProgress