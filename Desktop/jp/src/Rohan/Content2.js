import React from 'react';
import { Grid, Typography, Card } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';


const Item = styled(Paper)(({ theme }) => ({

    padding: theme.spacing(1),
    textAlign: 'left',
    boxShadow: "none"
}));
const Item1 = styled(Paper)(({ theme }) => ({

    padding: theme.spacing(1),
    textAlign: 'right',
    boxShadow: "none"

}));


const Content2 = () => {

    return (
        <Grid container xs={12}>
            
            <Grid xs={12} lg={12}>
                <Item sx={{ border: " 1px solid #D6DDEB" }}>
                    <Grid container xs={12} display={'flex'} >
                        <Grid item xs={6} display={'flex'} padding={'1%'}>
                            <Item sx={{ fontSize: "30px", fontFamily: 'poppins' }}> Current Stage</Item>
                        </Grid>
                        <Grid item xs={6} display={'flex'} padding={'1%'} justifyContent={'right'}>
                            <Item1> <Button variant='outlined' sx={{ height: "50px", rem: "19px", textTransform: "capitalize" }} fontFamily={'poppins'}><KeyboardArrowDownIcon fontSize='large' />Give Rating</Button></Item1>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} display={'flex'} justifyContent={'space-evenly'} >
                        <Button className="butt" variant='contained' sx={{ width: "180px", height: "50px", backgroundColor: "#E9EBFD", fontSize: "20px", fontFamily: "poppins", color: "rgba(38, 164, 255, 1)", transform:"skew(-20deg)" }}>In-Review</Button>
                        <Button variant='contained' sx={{ width: "180px", height: "50px", backgroundColor: "#E9EBFD", fontSize: "20px", fontFamily: "poppins", color: "rgba(38, 164, 255, 1)" , transform:"skew(-20deg)"}}>Shortlisted</Button>
                        <Button variant='contained' sx={{ width: "180px", height: "50px", backgroundColor: "rgba(38, 164, 255, 1)", fontSize: "20px", fontFamily: "poppins", transform:"skew(-20deg)" }}>Interview</Button>
                        <Button variant='contained' sx={{ width: "180px", height: "50px", backgroundColor: "#F8F8FD", fontSize: "20px", fontFamily: "poppins", color: "rgba(124, 132, 147, 1)", transform:"skew(-20deg)" }}>Hired/Declined</Button>
                    </Grid>
                    <Grid sx={{ display: "flex", padding: "3%" }} >
                        <Grid item xs={12} lg={6}>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'rgba(37, 50, 75, 1)'}>Stage Info</Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'rgba(124, 132, 147, 1)'}>Interview Date</Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'rgba(37, 50, 75, 1)'}>10 - 13 July 2021</Typography><br />
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'rgba(124, 132, 147, 1) '}>Interview Location</Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'rgba(37, 50, 75, 1)'}>Silver Crysta Room, Nomad Office</Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'rgba(37, 50, 75, 1)'}>3517 W. Gray St. Utica, </Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'rgba(37, 50, 75, 1)'}> Pennsylvania 57867 </Typography><br />
                            <Button variant='outlined' sx={{ height: "50px", rem: "19px", textTransform: "capitalize", backgroundColor: " #F8F8FD", color: "rgba(204, 204, 245, 1)", width: "200px", height: "50px", fontSize: "19px", fontFamily: "poppins" }} ><b>Move To Next Step</b></Button>
                        </Grid>
                        <Grid item xs={12} lg={6} >
                            <div>
                                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'rgba(124, 132, 147, 1) '}>Interview Status</Typography>
                                <Button variant='contained' sx={{ backgroundColor: "rgba(235, 133, 51, 0.1)", color: "rgba(255, 184, 54, 1)", borderRadius: "80px" }} >On Progress</Button><br /><br />
                                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'rgba(124, 132, 147, 1) '}>Assigned to</Typography>
                            </div>
                            <div>
                                <AvatarGroup total={0} sx={{flexDirection: 'row'}}>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                                </AvatarGroup>
                            </div>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container xs={12} display={'flex'} >
                        <Grid item xs={6} display={'flex'} padding={'1%'}>
                            <Item sx={{ fontSize: "30px", fontFamily: 'poppins' }}> Notes</Item>
                        </Grid>
                        <Grid item xs={6} display={'flex'} padding={'1%'} justifyContent={'right'}>
                            <Item1> <Button variant='outlined' sx={{ height: "50px", rem: "19px", textTransform: "capitalize" }} fontFamily={'poppins'}><AddIcon fontSize='large' />Add Notes</Button></Item1>
                        </Grid>
                    </Grid>
                    <Item sx={{ border: " 1px solid #D6DDEB" }}>
                        <Grid container xs={12}>
                            <Grid item xs={12} lg={1}>
                                <Avatar sx={{ width: "50px", height: "50px" }} />
                            </Grid>
                            <Grid item xs={12} lg={11}>
                                <Grid display={'flex'} >
                                    <Grid item xs={6} display={'flex'} padding={'1%'}>
                                        <Item sx={{ fontSize: "25px", fontFamily: 'poppins' }}>Maria Kelly</Item>
                                    </Grid>
                                    <Grid item xs={6} display={'flex'} padding={'1%'} justifyContent={'right'}>
                                        <Item1 sx={{ fontSize: "16px", fontFamily: 'poppins', color: "#7C8493  " }}>10 July, 2021 . 11:30 AM </Item1>
                                    </Grid>
                                </Grid>
                                <Typography variant='body2' fontFamily={"poppins"} fontSize={'25px'} color={' #515B6F'} padding={'1%'}> Please, do an interview stage immediately. The design division needs more new employee now</Typography>
                                <Button variant='text' sx={{fontSize:"19px" , fontFamily:"poppins"}}> 2 Replies</Button>
                            </Grid>
                        </Grid>
                        </Item>
                        <Item sx={{ border: " 1px solid #D6DDEB" }}>
                        <Grid container xs={12}>
                            <Grid item xs={12} lg={1}>
                                <Avatar sx={{ width: "50px", height: "50px" }} />
                            </Grid>
                            <Grid item xs={12} lg={11}>
                                <Grid display={'flex'} >
                                    <Grid item xs={6} display={'flex'} padding={'1%'}>
                                        <Item sx={{ fontSize: "25px", fontFamily: 'poppins' }}>Maria Kelly</Item>
                                    </Grid>
                                    <Grid item xs={6} display={'flex'} padding={'1%'} justifyContent={'right'}>
                                        <Item1 sx={{ fontSize: "16px", fontFamily: 'poppins', color: "#7C8493  " }}>10 July, 2021 . 11:30 AM </Item1>
                                    </Grid>
                                </Grid>
                                <Typography variant='body2' fontFamily={"poppins"} fontSize={'25px'} color={' #515B6F'} padding={'1%'}> Please, do an interview stage immediately. </Typography>
                                <Button variant='text' sx={{fontSize:"19px" , fontFamily:"poppins"}}> 2 Replies</Button>
                            </Grid>
                        </Grid>
                        </Item>
                </Item>
            </Grid>
        </Grid>
    )
}

export default Content2