import { Paper , Grid, Typography , Card, Button} from '@mui/material';
import React from 'react';
import Desktop2 from './Desktop2.png';
import log1 from './log1.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import logo6 from './logo6.png';
import logo7 from './logo7.png';
import logo8 from './logo8.png';

const Jobs = () => {
  return (
    <Paper sx={{ background: `url(${Desktop2})`, padding:"50px" }}>
        <Grid container  >
            <Grid item>
                <Typography variant='h3' fontFamily={'Poppins'} > <b>Similiar Jobs</b></Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={6}>
                <Card sx={{display:"flex" , padding:"30px", margin:"50px"}}>
                    <Grid >
                        <img src={log1} alt={''} />
                    </Grid>
                    <Grid>
                        <Typography variant='body2' fontFamily={'Poppins'} fontSize={'20px'} paddingLeft={'10px'}><b>Social Media Assistant</b></Typography>
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F '} paddingLeft={'10px'}>Nomad-Paris, France</Typography>
                        <Button variant='text' sx={{color:"#56CDAD"}}> Full Time</Button>
                        <Button variant='outlined' sx={{color:"#FFB836" , borderColor:"#FFB836" , borderRadius:"20px"}}> Marketing</Button>
                        <Button variant='outlined' sx={{color:"#1A50B2" ,  borderColor:"#1A50B2",borderRadius:"20px", marginLeft:"10px"}}> Design</Button>
                    </Grid>
                </Card>
                <Card sx={{display:"flex" , padding:"30px", margin:"50px"}}>
                    <Grid >
                        <img src={logo2} alt={''} />
                    </Grid>
                    <Grid >
                        <Typography variant='body2' fontFamily={'Poppins'} fontSize={'20px'} paddingLeft={'10px'}><b>Brand Designer</b></Typography>
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F '} paddingLeft={'10px'}>Dropbox . San Fransisco, USA</Typography>
                        <Button variant='text' sx={{color:"#56CDAD"}}> Full Time</Button>
                        <Button variant='outlined' sx={{color:"#FFB836" , borderColor:"#FFB836" , borderRadius:"20px"}}> Marketing</Button>
                        <Button variant='outlined' sx={{color:"#1A50B2" ,  borderColor:"#1A50B2",borderRadius:"20px", marginLeft:"10px"}}> Design</Button>
                    </Grid>
                </Card>
                <Card sx={{display:"flex" , padding:"30px", margin:"50px"}}>
                    <Grid >
                        <img src={logo3} alt={''} />
                    </Grid>
                    <Grid >
                        <Typography variant='body2' fontFamily={'Poppins'} fontSize={'20px'} paddingLeft={'10px'}><b>Interactive Developer</b></Typography>
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F '} paddingLeft={'10px'}>Terraform . Hamburg, Germany</Typography>
                        <Button variant='text' sx={{color:"#56CDAD"}}> Full Time</Button>
                        <Button variant='outlined' sx={{color:"#FFB836" , borderColor:"#FFB836" , borderRadius:"20px"}}> Marketing</Button>
                        <Button variant='outlined' sx={{color:"#1A50B2" ,  borderColor:"#1A50B2",borderRadius:"20px", marginLeft:"10px"}}> Design</Button>
                    </Grid>
                </Card>
                <Card sx={{display:"flex" , padding:"30px", margin:"50px"}}>
                    <Grid >
                        <img src={logo4} alt={''} />
                    </Grid>
                    <Grid >
                        <Typography variant='body2' fontFamily={'Poppins'} fontSize={'20px'} paddingLeft={'10px'}><b>HR Manager</b></Typography>
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F '} paddingLeft={'10px'}>Lucern .     Switzerland</Typography>
                        <Button variant='text' sx={{color:"#56CDAD"}}> Full Time</Button>
                        <Button variant='outlined' sx={{color:"#FFB836" , borderColor:"#FFB836" , borderRadius:"20px"}}> Marketing</Button>
                        <Button variant='outlined' sx={{color:"#1A50B2" ,  borderColor:"#1A50B2",borderRadius:"20px", marginLeft:"10px"}}> Design</Button>
                    </Grid>
                </Card>
                
            </Grid>
            <Grid item xs={6}>
                <Card sx={{display:"flex" , padding:"30px", margin:"50px"}}>
                    <Grid >
                        <img src={log1} alt={''} />
                    </Grid>
                    <Grid >
                        <Typography variant='body2' fontFamily={'Poppins'} fontSize={'20px'} paddingLeft={'10px'}><b>Social Media Assistant</b></Typography>
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F '} paddingLeft={'10px'}>Nomad-Paris, France</Typography>
                        <Button variant='text' sx={{color:"#56CDAD"}}> Full Time</Button>
                        <Button variant='outlined' sx={{color:"#FFB836" , borderColor:"#FFB836" , borderRadius:"20px"}}> Marketing</Button>
                        <Button variant='outlined' sx={{color:"#1A50B2" ,  borderColor:"#1A50B2",borderRadius:"20px", marginLeft:"10px"}}> Design</Button>
                    </Grid>
                </Card>
                <Card sx={{display:"flex" , padding:"30px", margin:"50px"}}>
                    <Grid >
                        <img src={logo6} alt={''} />
                    </Grid>
                    <Grid >
                        <Typography variant='body2' fontFamily={'Poppins'} fontSize={'20px'} paddingLeft={'10px'}><b>Social Media Assistant</b></Typography>
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F '} paddingLeft={'10px'}>Nomad-Paris, France</Typography>
                        <Button variant='text' sx={{color:"#56CDAD"}}> Full Time</Button>
                        <Button variant='outlined' sx={{color:"#FFB836" , borderColor:"#FFB836" , borderRadius:"20px"}}> Marketing</Button>
                        <Button variant='outlined' sx={{color:"#1A50B2" ,  borderColor:"#1A50B2",borderRadius:"20px", marginLeft:"10px"}}> Design</Button>
                    </Grid>
                </Card>
                <Card sx={{display:"flex" , padding:"30px", margin:"50px"}}>
                    <Grid >
                        <img src={logo7} alt={''} />
                    </Grid>
                    <Grid >
                        <Typography variant='body2' fontFamily={'Poppins'} fontSize={'20px'} paddingLeft={'10px'}><b>Social Media Assistant</b></Typography>
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F '} paddingLeft={'10px'}>Nomad-Paris, France</Typography>
                        <Button variant='text' sx={{color:"#56CDAD"}}> Full Time</Button>
                        <Button variant='outlined' sx={{color:"#FFB836" , borderColor:"#FFB836" , borderRadius:"20px"}}> Marketing</Button>
                        <Button variant='outlined' sx={{color:"#1A50B2" ,  borderColor:"#1A50B2",borderRadius:"20px", marginLeft:"10px"}}> Design</Button>
                    </Grid>
                </Card>
                <Card sx={{display:"flex" , padding:"30px", margin:"50px"}}>
                    <Grid >
                        <img src={logo8} alt={''} />
                    </Grid>
                    <Grid >
                        <Typography variant='body2' fontFamily={'Poppins'} fontSize={'20px'} paddingLeft={'10px'}><b>Social Media Assistant</b></Typography>
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F '} paddingLeft={'10px'}>Nomad-Paris, France</Typography>
                        <Button variant='text' sx={{color:"#56CDAD"}}> Full Time</Button>
                        <Button variant='outlined' sx={{color:"#FFB836" , borderColor:"#FFB836" , borderRadius:"20px"}}> Marketing</Button>
                        <Button variant='outlined' sx={{color:"#1A50B2" ,  borderColor:"#1A50B2",borderRadius:"20px", marginLeft:"10px"}}> Design</Button>
                    </Grid>
                </Card>
                
            </Grid>
            
        </Grid>
    </Paper>
  )
}

export default Jobs