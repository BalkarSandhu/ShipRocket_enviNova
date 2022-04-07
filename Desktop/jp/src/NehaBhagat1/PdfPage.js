import React from 'react';
import { Grid,Box } from '@mui/material';
import cv from './img/cv.png';

const PdfPage = () => {
  return (
    <Grid conatiner xs={12} lg={12}>
        <Box sx={{
width: '92%',
height: '97%',
backgroundColor: '#FFFFFF',
border: '1px solid #D6DDEB',padding:"4%"}}> 

<img src={cv} alt="" sx={{height:'100%',width:'97%'}} />
</Box>
        </Grid>
  )
}

export default PdfPage