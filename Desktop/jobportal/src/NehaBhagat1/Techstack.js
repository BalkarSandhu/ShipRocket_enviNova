import { Typography, Grid } from '@mui/material';
import React from 'react';
import "../NehaBhagat1/Contact.css";
import img1 from './img1.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.png';
import img7 from './img7.png';

const Techstack = () => {
  return (

    <Grid container >
      <Grid item lg={5} xs={12} sx={{ paddingTop: '30px' }}>
        <Typography sx={{
          fontFamily: 'Clash Display',

          fontWeight: '600',
          fontSize: '32px',
          lineHeight: '120%',
          color: '#25324B'
        }}>
          Tech stack
        </Typography>
        <Typography className="text" sx={{
          fontFamily: 'Epilogue',

          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '160%',

          color: '#515B6F'
        }}>
          Learn about the technology and tools that Stripe uses.
        </Typography >
      </Grid>
      <Grid item xs={12} sx={{ marginTop: '2%' }} display="flex">

        <div ><img src={img1} style={{
          width: '74px',
          height: '74px'
        }} />
          <p style={{
            fontFamily: 'Epilogue',
            fontWeight: '400',
            fontSize: '16px',
            marginLeft: '12%',
            color: '#25324B'
          }}>HTML 5</p></div>
        <div style={{ display: 'inline-block', paddingLeft: '4%' }}><img src={img3} style={{
          width: '74px',
          height: '74px'
        }} /><p style={{
          fontFamily: 'Epilogue',
          fontWeight: '400',
          fontSize: '16px',
          marginLeft: '18%',
          color: '#25324B'
        }}>CSS 3</p></div>
        <div style={{ display: 'inline-block', paddingLeft: '4%' }}><img src={img4} style={{
          width: '74px',
          height: '74px'
        }} /> <p style={{
          fontFamily: 'Epilogue',
          fontWeight: '400',
          fontSize: '16px',
          marginLeft: '1%',
          marginTop: '-4px',
          color: '#25324B'
        }}></p>JavaScript</div></Grid>

      <Grid xs={12} sx={{ marginTop: '2%' }} item display="flex">

        <div ><img src={img5} style={{
          width: '74px',
          height: '74px'
        }} />
          <p style={{
            fontFamily: 'Epilogue',
            fontWeight: '400',
            fontSize: '16px',
            marginLeft: '16%',
            color: '#25324B'
          }}>Ruby</p></div>
        <div style={{ display: 'inline-block', paddingLeft: '4%' }}><img src={img6} style={{
          width: '74px',
          height: '74px'
        }} /><p style={{
          fontFamily: 'Epilogue',
          fontWeight: '400',
          fontSize: '16px',
          marginLeft: '6%',
          color: '#25324B'
        }}>Mixpanel</p></div>
        <div style={{ display: 'inline-block', paddingLeft: '4%' }}><img src={img7} style={{
          width: '74px',
          height: '74px'
        }} /> <p style={{
          fontFamily: 'Epilogue',
          fontWeight: '400',
          fontSize: '16px',
          marginLeft: '10%',
          marginTop: '-4px',
          color: '#25324B'
        }}></p>Framer</div>
      </Grid>
    </Grid>
  )
}

export default Techstack