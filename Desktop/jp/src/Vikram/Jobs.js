import { Paper , Grid, Typography , Card, Button} from '@mui/material';
import React from 'react';
import log1 from '../Vikram/log1.png';
import log2 from '../Vikram/log2.png';
import log3 from '../Vikram/log3.png';
import log4 from '../Vikram/log4.png';
import log5 from '../Vikram/log5.png';
import log6 from '../Vikram/log6.png';
import log7 from '../Vikram/log7.png';
import log8 from '../Vikram/log8.png';
import Desktop from '../Vikram/Desktop.png'


const Jobs = () => {
  return (
    <Paper sx={{  marginTop:'50px'}}>
        <Grid container >
        <Grid item lg={1} ></Grid>
            <Grid item  lg={10}xs={12} >
                <Typography variant='h3' fontFamily={'Poppins'} sx={{paddingTop:"10px"}}><b>Similiar Jobs</b></Typography>
            </Grid>
        </Grid>
        <Grid container>
        <Grid item lg={1} ></Grid>
            <Grid item lg={4.9} xs={12} >
                <Card sx={{display:"flex" , padding:"30px", margin:"20px 0px 20px 0px"}}>
                    <Grid >
                        <img src={log1} alt={''} />
                    </Grid>
                    <Grid sx={{marginLeft:'8px'}} >
                        <Typography variant='body2' fontFamily={'Poppins'} fontSize={'20px'}><b>Social Media Assistant</b></Typography>
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F '}>Nomad-Paris, France</Typography>
                        <Button variant='text' sx={{color:"#56CDAD"}}> Full Time</Button>
                        <Button variant='outlined' sx={{color:"#FFB836" , borderColor:"#FFB836" , borderRadius:"20px"}}> Marketing</Button>
                        <Button variant='outlined' sx={{color:"#1A50B2" ,  borderColor:"#1A50B2",borderRadius:"20px", marginLeft:"10px"}}> Design</Button>
                    </Grid>
                </Card>
                <Card sx={{display:"flex" , padding:"30px", margin:"20px 0px 20px 0px"}}>
                    <Grid >
                        <img src={log2} alt={''} />
                    </Grid>
                    <Grid  sx={{marginLeft:'8px'}} >
                        <Typography variant='body2' fontFamily={'Poppins'} fontSize={'20px'}><b>Social Media Assistant</b></Typography>
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F '}>Nomad-Paris, France</Typography>
                        <Button variant='text' sx={{color:"#56CDAD"}}> Full Time</Button>
                        <Button variant='outlined' sx={{color:"#FFB836" , borderColor:"#FFB836" , borderRadius:"20px"}}> Marketing</Button>
                        <Button variant='outlined' sx={{color:"#1A50B2" ,  borderColor:"#1A50B2",borderRadius:"20px", marginLeft:"10px"}}> Design</Button>
                    </Grid>
                </Card>
                <Card sx={{display:"flex" , padding:"30px", margin:"20px 0px 20px 0px"}}>
                    <Grid >
                        <img src={log3} alt={''} />
                    </Grid>
                    <Grid  sx={{marginLeft:'8px'}}>
                        <Typography variant='body2' fontFamily={'Poppins'} fontSize={'20px'}><b>Social Media Assistant</b></Typography>
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F '}>Nomad-Paris, France</Typography>
                        <Button variant='text' sx={{color:"#56CDAD"}}> Full Time</Button>
                        <Button variant='outlined' sx={{color:"#FFB836" , borderColor:"#FFB836" , borderRadius:"20px"}}> Marketing</Button>
                        <Button variant='outlined' sx={{color:"#1A50B2" ,  borderColor:"#1A50B2",borderRadius:"20px", marginLeft:"10px"}}> Design</Button>
                    </Grid>
                </Card>
                <Card sx={{display:"flex" , padding:"30px", margin:"20px 0px 20px 0px"}}>
                    <Grid >
                        <img src={log4} alt={''} />
                    </Grid>
                    <Grid  sx={{marginLeft:'8px'}}>
                        <Typography variant='body2' fontFamily={'Poppins'} fontSize={'20px'}><b>Social Media Assistant</b></Typography>
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F '}>Nomad-Paris, France</Typography>
                        <Button variant='text' sx={{color:"#56CDAD"}}> Full Time</Button>
                        <Button variant='outlined' sx={{color:"#FFB836" , borderColor:"#FFB836" , borderRadius:"20px"}}> Marketing</Button>
                        <Button variant='outlined' sx={{color:"#1A50B2" ,  borderColor:"#1A50B2",borderRadius:"20px", marginLeft:"10px"}}> Design</Button>
                    </Grid>
                </Card>
                
            </Grid>
            <Grid item lg={0.2} ></Grid>
            <Grid item lg = {4.9} xs={12} marginBottom='30px'>
                <Card sx={{display:"flex" , padding:"30px", margin:"20px 0px 20px 0px"}}>
                    <Grid >
                        <img src={log5} alt={''} />
                    </Grid>
                    <Grid  sx={{marginLeft:'8px'}}>
                        <Typography variant='body2' fontFamily={'Poppins'} fontSize={'20px'}><b>Social Media Assistant</b></Typography>
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F '}>Nomad-Paris, France</Typography>
                        <Button variant='text' sx={{color:"#56CDAD"}}> Full Time</Button>
                        <Button variant='outlined' sx={{color:"#FFB836" , borderColor:"#FFB836" , borderRadius:"20px"}}> Marketing</Button>
                        <Button variant='outlined' sx={{color:"#1A50B2" ,  borderColor:"#1A50B2",borderRadius:"20px", marginLeft:"10px"}}> Design</Button>
                    </Grid>
                </Card>
                <Card sx={{display:"flex" , padding:"30px", margin:"20px 0px 20px 0px"}}>
                    <Grid >
                        <img src={log6} alt={''} />
                    </Grid>
                    <Grid  sx={{marginLeft:'8px'}}>
                        <Typography variant='body2' fontFamily={'Poppins'} fontSize={'20px'}><b>Social Media Assistant</b></Typography>
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F '}>Nomad-Paris, France</Typography>
                        <Button variant='text' sx={{color:"#56CDAD"}}> Full Time</Button>
                        <Button variant='outlined' sx={{color:"#FFB836" , borderColor:"#FFB836" , borderRadius:"20px"}}> Marketing</Button>
                        <Button variant='outlined' sx={{color:"#1A50B2" ,  borderColor:"#1A50B2",borderRadius:"20px", marginLeft:"10px"}}> Design</Button>
                    </Grid>
                </Card>
                <Card sx={{display:"flex" , padding:"30px", margin:"20px 0px 20px 0px"}}>
                    <Grid >
                        <img src={log7} alt={''} />
                    </Grid>
                    <Grid  sx={{marginLeft:'8px'}}>
                        <Typography variant='body2' fontFamily={'Poppins'} fontSize={'20px'}><b>Social Media Assistant</b></Typography>
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F '}>Nomad-Paris, France</Typography>
                        <Button variant='text' sx={{color:"#56CDAD"}}> Full Time</Button>
                        <Button variant='outlined' sx={{color:"#FFB836" , borderColor:"#FFB836" , borderRadius:"20px"}}> Marketing</Button>
                        <Button variant='outlined' sx={{color:"#1A50B2" ,  borderColor:"#1A50B2",borderRadius:"20px", marginLeft:"10px"}}> Design</Button>
                    </Grid>
                </Card>
                <Card sx={{display:"flex" , padding:"30px", margin:"20px 0px 20px 0px"}}>
                    <Grid >
                        <img src={log8} alt={''} />
                    </Grid>
                    <Grid  sx={{marginLeft:'8px'}}>
                        <Typography variant='body2' fontFamily={'Poppins'} fontSize={'20px'}><b>Social Media Assistant</b></Typography>
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F '}>Nomad-Paris, France</Typography>
                        <Button variant='text' sx={{color:"#56CDAD"}}> Full Time</Button>
                        <Button variant='outlined' sx={{color:"#FFB836" , borderColor:"#FFB836" , borderRadius:"20px"}}> Marketing</Button>
                        <Button variant='outlined' sx={{color:"#1A50B2" ,  borderColor:"#1A50B2",borderRadius:"20px", marginLeft:"10px"}}> Design</Button>
                    </Grid>
                </Card>
                
            </Grid>
            <Grid  lg={1} ></Grid>
        </Grid>
    </Paper>
  )
}

export default Jobs