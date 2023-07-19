import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function GreenBar() {
  return (
    <div style={{
      position: 'relative',
      top: '-16px'
    }}>
      <div className="bg-green-400 rounded-r-full"
        style={{
          height: '14px',
          display: 'inline-block',
          minWidth: '80px',
        }}
      >
        <CheckCircleIcon fontSize='small' />
      </div>
    </div>
  )
}

export default GreenBar