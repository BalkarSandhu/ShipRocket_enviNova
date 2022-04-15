import { Grid, Paper, Typography, Box } from '@mui/material';
import React from 'react';
import I1 from '../Vikram/I1.png';
import I2 from '../Vikram/I2.png';
import I3 from '../Vikram/i3.png';
import I4 from '../Vikram/I4.png';
import I5 from '../Vikram/i5.png';
import I6 from '../Vikram/I6.png';
import I7 from '../Vikram/i7.png';





const Perks = () => {
    const arr = [
      {
          imgsrc: I1,
          name:'Full Healthcare',
          description:'We believe in thriving communities and that starts with our team being happy and healthy.'

      },
      {
        imgsrc: I2,
        name:'Unlimited Vacation',
        description:'We believe you should have a flexible schedule that makes space for family, wellness, and fun.'  
      },
      {
        imgsrc: I3,
        name:'Skill Development',
        description:'We believe in always learning and leveling up our skills. Whether it is a conference or online course.'  
      },
      {
        imgsrc: I4,
        name:'Team Summits',
        description:'Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.'  
      },
      {
        imgsrc: I5,
        name:'Remote Working',
        description:'You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.'  
      },
      {
        imgsrc: I6,
        name:'Commuter Benefits',
        description:'We are grateful for all the time and energy each team member puts into getting to work every day.'  
      },
      {
        imgsrc: I7,
        name:'We give back.',
        description:'We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two. '  
      },



    ];
    return (
        <Grid container xs={12}>
            <Grid item lg={1} xs={12}></Grid>
            <Grid item xs={11} >
                <Grid item >
                    <Typography variant='h4' fontFamily={'Poppins'}>Perks & Benefits</Typography>
                    <Typography variant='h7' fontFamily={'Poppins'} color={'#515B6F'}>This job comes with several perks and benefits</Typography>
                </Grid>
            </Grid>


            <Grid container>
            <Grid item lg={1} xs={12}></Grid>
            <Grid container item lg={10} xs={12} >
{arr.map((item, index) => {
          return (
                    <Grid item lg={3} xs={6} marginTop='5%'>
                    <Box sx={{width:'90%'}}>
                        <Grid>
                        <img src={item.imgsrc} alt={''} /><br />
                        <Typography variant='h5' fontFamily={'Poppins'}>{item.name}</Typography><br />
                        <Typography variant='h7' fontFamily={'Poppins'} color={'#515B6F'}>{item.description}</Typography>
                        </Grid>
                    </Box>
                    </Grid>
              
              )
            })}
            </Grid>
            
   
            </Grid>



        </Grid>
    )
}

export default Perks;