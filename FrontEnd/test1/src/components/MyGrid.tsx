import '../styles/MyGrid.css'
import { Box, Container, Grid, Typography } from '@mui/material'
import Field from './Field'

// type Props = {}

function MyGrid() {
  return (
    <div className='my-grid'>

      {/* Page: Edit Lot data  */}
      <Grid container spacing={2}>

        {/* section: Lot-info */}
        <Grid className='section' item xs={12} sm={6} md={4} >
          <Box sx={{ border: 'solid 1px black', borderRadius: '10px' }}>

            <Typography sx={{ bgcolor: 'lightgray', textAlign: 'center', borderRadius: '10px 10px 0 0' }} > Lot Info </Typography>

            <Box sx={{ paddingX: '10px' }}>
              <Field name={'Product'} valueType="text" value={"Azalea"} editable={false} />
              <Field name={'Elevation'} valueType="text" value={"20-Arts&Crafts"} editable={false} />
              <Field name={'Contract Date'} valueType="date" value={"Azalea"} editable={false} />
              <Field name={'Long very long ver very long goes to 2nd line name'} valueType="text" value={"Azalea"} editable={false} />
              <input type='date' />
            </Box>

          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ bgcolor: '#cfe8fc', height: '20vh', border: 'solid 1px gray' }}>
            <Typography sx={{ bgcolor: 'lightgray', textAlign: 'center' }} > Eng. Info </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ bgcolor: '#cfe8fc', height: '20vh', border: 'solid 1px gray' }}>
            <Typography sx={{ bgcolor: 'lightgray', textAlign: 'center' }} > Plat Info </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ bgcolor: '#cfe8fc', height: '20vh', border: 'solid 1px gray' }}>
            <Typography sx={{ bgcolor: 'lightgray' }}>Permit</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ bgcolor: '#cfe8fc', height: '20vh', border: 'solid 1px gray' }}>
            <Typography sx={{ bgcolor: 'lightgray' }}>BBP</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ bgcolor: '#cfe8fc', height: '20vh', border: 'solid 1px gray' }}>
            <Typography sx={{ bgcolor: 'lightgray' }}>Notes</Typography>
          </Box>
        </Grid>

      </Grid>

    </div>
  )
}

export default MyGrid
