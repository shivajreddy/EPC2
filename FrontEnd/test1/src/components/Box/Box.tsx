import { Grid, Box as MuiBox, Typography } from "@mui/material"
import CardProperty from "../CardProperty"
import './box.css'


type CardPropertyType<T> = {
  propertyName: string,
  propertyType: string,
  propertyValue: T
}

type Props = {
  cardData: {
    // _id: string,
    cardTitle: string,
    properties: CardPropertyType<any>[]
  }
}


function Box(props: Props) {
  const cardData = props.cardData;

  return (
    <Grid item xs={12} sm={6} md={4} >
      <MuiBox className='box-of-properties' sx={{ border: 'solid 1px black', borderRadius: '10px' }}>

        <Typography className="title"
        >
          {cardData.cardTitle}
        </Typography>

        <MuiBox sx={{ paddingX: '10px' }}>
          <CardProperty name={'Product'} valueType="text" value={"Azalea"} editable={false} />
          <CardProperty name={'Elevation'} valueType="text" value={"20-Arts&Crafts"} editable={false} />
          <CardProperty name={'Contract Date'} valueType="date" value={"Azalea"} editable={false} />
          <CardProperty name={'Long very long ver very long goes to 2nd line name'} valueType="text" value={"Azalea"} editable={false} />
        </MuiBox>

      </MuiBox>
    </Grid>
  )
}

export default Box

