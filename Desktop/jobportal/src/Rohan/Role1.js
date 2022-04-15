import { Card, Grid, Paper, Typography , Button} from '@mui/material';
import React from 'react';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
    circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';



const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props) {
    return (
        <>
        </>
    );
}

const Role1 = () => {
    return (
        <Paper>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={12} lg={6} padding={'40px'}>
                    <Grid>
                        <Typography variant='h5' fontFamily={'Poppins'}><b>Description</b></Typography>
                        <br />
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F'}> Stripe is looking for Social Media Marketing expert to help manage our online networks. You will<br /> be responsible for monitoring our social media channels, creating content, finding effective<br /> ways to engage the community and incentivize others to engage on our channels.</Typography>
                    </Grid>
                    <br /><br />
                    <Grid>
                        <Typography variant='h5' fontFamily={'Poppins'}><b>Responsibilities</b></Typography>
                        <br />
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F'}>< DoneOutlineIcon fontSize={'small'} /> Community engagement to ensure that is supported and actively represented online<br></br>
                            < DoneOutlineIcon fontSize={'small'} /> Focus on social media content development and publication<br />
                            < DoneOutlineIcon fontSize={'small'} />  Marketing and strategy support<br />
                            < DoneOutlineIcon fontSize={'small'} /> Stay on top of trends on social media platforms, and suggest content ideas to the team<br></br>
                            < DoneOutlineIcon fontSize={'small'} />    Engage with online communities</Typography>
                    </Grid><br /><br />
                    <Grid>
                        <Typography variant='h5' fontFamily={'Poppins'}><b>Who You Are</b></Typography>
                        <br />
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F'}>< DoneOutlineIcon fontSize={'small'} /> You get energy from people and building the ideal work environment<br></br>
                            < DoneOutlineIcon fontSize={'small'} /> You have a sense for beautiful spaces and office experiences<br />
                            < DoneOutlineIcon fontSize={'small'} /> You are a confident office manager, ready for added responsibilities<br />
                            < DoneOutlineIcon fontSize={'small'} /> You're detail-oriented and creative<br></br>
                            < DoneOutlineIcon fontSize={'small'} />You're a growth marketer and know how to run campaigns</Typography>
                    </Grid><br /><br />
                    <Grid>
                        <Typography variant='h5' fontFamily={'Poppins'}><b>Nice-To-Haves</b></Typography>
                        <br />
                        <Typography variant='body2' fontFamily={'Poppins'} color={'#515B6F'}>< DoneOutlineIcon fontSize={'small'} /> Fluent in English<br></br>
                            < DoneOutlineIcon fontSize={'small'} /> Project management skills<br />
                            < DoneOutlineIcon fontSize={'small'} /> Copy editing skills<br></br>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={4} padding={'40px'}  >
                    <Typography variant='h5' fontFamily={'Poppins'}><b>About this role</b></Typography><br />
                    <Card sx={{padding:"20px" , backgroundColor:"#F8F8FD"}} >
                        <Typography variant='body2' marginBottom={'-10px'} fontFamily={'Poppins'}> 5 applied of 10 capacity</Typography>
                        <Box sx={{ flexGrow: 1 }}>
                            <FacebookCircularProgress />
                            <br />
                            <BorderLinearProgress variant="determinate" value={50} />
                        </Box>
                    </Card>
                    <Box display={'flex'}>
                        <Grid xs={6} justifyContent={'space-between'} color={'#515B6F'} fontFamily={'Poppins'}><br/>
                        <Typography  >Apply Before</Typography><br/>
                        <Typography >Job Posted On</Typography><br/>
                        <Typography >Job Type</Typography><br/>
                        <Typography >Salary  </Typography><br/>
                        </Grid>
                        <Grid xs={6} fontFamily={'Poppins'} marginLeft={'100px'}>
                            <br/>
                        <Typography  ><b>July 31, 2021</b></Typography><br/>
                        <Typography ><b>July 1, 2021</b></Typography><br/>
                        <Typography  ><b>Full-Time</b></Typography><br/>
                        <Typography ><b>75k-85k INR</b></Typography><br/>

                        </Grid>
                    </Box>
                    <Divider variant="middle" />
                    <br/>
                    <Grid item fontFamily={'Poppins'}>
                    <Typography variant='h5' fontFamily={'Poppins'}><b>Categories</b></Typography><br />
                    <Button variant='' sx={{color:"orange" , borderColor:"orange" , borderRadius:"15px"}}>Marketing</Button>
                    <Button variant='' sx={{marginLeft:"2%" ,color:"#56CDAD" , borderColor:"#56CDAD", borderRadius:"15px"}}>Design</Button>
                    </Grid>
                    <br/>
                    <Divider variant="middle" />
                        <br/>
                    <Grid item fontFamily={'Poppins'}> 
                    <Typography variant='h5' fontFamily={'Poppins'}><b>Required Skills</b></Typography><br />
                    <Button variant='text'>Project Management</Button>
                    <Button variant='text'>Copywriting</Button>
                    <Button variant='text'>Social Media Marketing</Button>
                    <Button variant='text'>English</Button><br/>
                    <Button variant='text'>Copy Editing</Button>


                    </Grid>


                </Grid>
                <Grid item xs={1}></Grid>

            </Grid>

        </Paper>
    )
}

export default Role1