type Props = {
  lot_id: string,
  status: string,
  color: string
}


function LotNumber(props: Props) {
  return (
    <div
      style={{}}
      className="w-32 text-center rounded-full bg-cyan-200 outline outline-1 pb"
    >
      <p>
        {/* Lot - ## - ## - ## */}
        {props.lot_id}
      </p>
    </div>
  )
}

export default LotNumber