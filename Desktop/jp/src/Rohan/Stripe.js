import { Button, Grid, Paper, Typography } from '@mui/material';

import React from 'react';
import Logo from './Logo.png';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Mask from './Mask.png';
import Mask1 from './Mask1.png';
import { Link } from 'react-router-dom';

const Stripe = () => {
  return (
  
    <Paper>
        <Grid container  padding={'30px'} marginTop={'40px'} sx={{display:"flex"}}>
            <Grid item xs={12} lg={6} padding={'50px'} >
                <Grid display={'flex'}>
                <Grid> <img src={Logo} alt={''} /></Grid>
               <Grid sx={{marginLeft:"20px"}}>
                 <Typography rem fontSize={'30px'} fontFamily={'poppins'}><b>Stripe</b></Typography>
                 <Grid>
                   <Link to={'/companyprofile'} style={{textDecoration:'none'}}><Button sx={{color:'#1A50B2',fontFamily:'poppins',rem:'20px'}}> Read more about Stripe &#8594;</Button></Link>
                   </Grid>
                </Grid>
                </Grid>
                <Grid>
                    <Typography rem='body2' fontFamily={'poppins'} fontSize={'17px'} marginTop={'10px'}>
                    Stripe is a technology company that builds economic infrastructure for <br/>the internet. Businesses of every size—from new startups to public <br/>companies—use our software to accept payments and manage their<br/> businesses online.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={6}> 
            <Grid display={'flex'} padding={'40px'} alignItem={'center'}>
            <Grid> <img src={Mask} alt={''} /></Grid>
            <Grid><img src={Mask1} alt={''} />
            <img src={Mask1} alt={''} /></Grid>
            </Grid>
         
               
            </Grid>
        </Grid>
    </Paper>
  )
}

export default Stripe