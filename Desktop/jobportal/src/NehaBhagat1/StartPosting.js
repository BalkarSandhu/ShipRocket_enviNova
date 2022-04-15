import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';

const StartPosting = () => {
  return (
    <Grid container marginTop={'60px'}>
      <Grid item lg={1} xs={12}></Grid>
      <Grid item lg={10} xs={12}>
        <Box sx={{ width: '1192px', height: '347px', backgroundColor: '#4640DE' }}>
          <Grid container>
            <Grid item lg={1} xs={12}></Grid>
            <Grid item lg={10} xs={12} marginLeft={"2%"} marginTop={"2%"}>
              <Typography sx={{
                fontFamily: 'Clash Display',
                fontWeight: '600',
                fontSize: '48px',
                color: '#FFFFFF', lineHeight: '1.2'
              }}>
                Start posting<br /> jobs today
              </Typography>
              <Typography sx={{
                fontFamily: 'Clash Display',
                fontWeight: '500',
                fontSize: '20px',
                color: '#FFFFFF', lineHeight: '1.2', marginTop: '2%'
              }}>
                Start posting jobs for only $10.
              </Typography>
              <Button variant="contained" sx={{ width: '184px', height: '54px', marginTop: '2%', color: '#4640DE', backgroundColor: '#FFFFFF',':hover':{backgroundColor:'#FFFFFF'} }}> Sign Up For Free</Button>
            </Grid>
          </Grid>

              
        </Box>
      </Grid>
      <Grid item lg={1} xs={12}></Grid>
    </Grid>
  )
}

export default StartPosting