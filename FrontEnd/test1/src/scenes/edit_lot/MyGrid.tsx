import { Grid, Box as MuiBox, Typography } from '@mui/material'
import Box from '../../components/Box/Box'

// type Props = {}

function MyGrid() {
  const sampleCardData = {
    cardTitle: "Lot Info",
    properties: [
      {
        propertyName: "Product",
        propertyType: "string",
        propertyValue: ""
      },
      {
        propertyName: "elevation",
        propertyType: "string",
        propertyValue: "20-Arts&Crafts"
      },
      {
        propertyName: "contract_date",
        propertyType: "string",
        propertyValue: "05-18-2022"
      },
    ]

  }
  return (
    <div className='my-grid'>

      {/* Page: Edit Lot data  */}
      <Grid container spacing={2}>

        <Box cardData={sampleCardData} />
        <Box cardData={sampleCardData} />


        <Grid item xs={12} sm={6} md={4}>
          <MuiBox sx={{ bgcolor: '#cfe8fc', height: '20vh', border: 'solid 1px gray' }}>
            <Typography sx={{ bgcolor: 'lightgray', textAlign: 'center' }} > Eng. Info </Typography>
          </MuiBox>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <MuiBox sx={{ bgcolor: '#cfe8fc', height: '20vh', border: 'solid 1px gray' }}>
            <Typography sx={{ bgcolor: 'lightgray', textAlign: 'center' }} > Plat Info </Typography>
          </MuiBox>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <MuiBox sx={{ bgcolor: '#cfe8fc', height: '20vh', border: 'solid 1px gray' }}>
            <Typography sx={{ bgcolor: 'lightgray' }}>Permit</Typography>
          </MuiBox>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <MuiBox sx={{ bgcolor: '#cfe8fc', height: '20vh', border: 'solid 1px gray' }}>
            <Typography sx={{ bgcolor: 'lightgray' }}>BBP</Typography>
          </MuiBox>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <MuiBox sx={{ bgcolor: '#cfe8fc', height: '20vh', border: 'solid 1px gray' }}>
            <Typography sx={{ bgcolor: 'lightgray' }}>Notes</Typography>
          </MuiBox>
        </Grid>

      </Grid>

    </div>
  )
}

export default MyGrid
