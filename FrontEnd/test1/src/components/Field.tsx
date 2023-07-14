import { Box, Container, Grid, Paper, Stack, styled } from "@mui/material"
import "../styles/Field.css"

type Props = {
  name: string,
  valueType: string,
  value: any
  editable: boolean
}


function Field(props: Props) {
  return (
    <div className="field">

      <Grid container sx={{ display: 'flex' }}>

        {/* <Grid item xs={6} justifyContent="center" alignContent="center" alignItems="center" display="flex"> */}
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end', paddingRight: '10px' }}>
          <p>{props.name}</p>
        </Grid>

        <Grid item xs={6} sx={{ display: 'flex' }} alignItems="center">
          <input disabled={!props.editable} name={props.name} type={props.valueType} value={props.value} />
        </Grid>

      </Grid>

    </div>
  )
}

export default Field

/*
      <Container>
        <Stack
          // direction="row" justifyContent="center"
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <p>{props.name}</p>
          <input disabled={!props.editable} name={props.name} type={props.valueType} value={props.value} />

        </Stack>

      </Container>
*/