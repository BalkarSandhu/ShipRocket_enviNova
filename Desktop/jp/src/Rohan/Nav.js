import React from 'react';
import Nomad from './Nomad.png';
import Paper from '@mui/material/Paper';
import { Grid, Typography , IconButton   } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    
    padding: theme.spacing(1),
    textAlign: 'left',
    boxShadow:"none"
  }));
  const Item1 = styled(Paper)(({ theme }) => ({

    padding: theme.spacing(1),
    textAlign: 'right',
    boxShadow:"none"
     
  }));

const Nav = () => {
    return (
        <Paper>
            <Grid container xs={12} display={'flex'}>
                <Grid item  xs={6} display={'flex'} padding={""}>
                    <Item ><img src={Nomad} alt={''} /></Item>
                    <Item>
                        <Grid display={'flex'}>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'29PX'} ><b>Nomad </b></Typography>
                            <IconButton sx={{margin:"-10px" , marginLeft:"1%"}} ><ExpandMoreIcon  fontSize='large' /></IconButton>
                        </Grid>
                    </Item>                  
                </Grid>
                <Grid item xs={6} display={'flex'} justifyContent={'right'}>
                   <Item1><IconButton sx={{marginTop:"-15%"}}>< NotificationsNoneIcon  fontSize='large' />  </IconButton></Item1> 
                  <Item1> <Button variant='contained' sx={{ backgroundColor: "#4640DE", height: "40px", fontSize: "10px", textTransform: "capitalize" }} fontFamily={'poppins'} ><AddIcon  sx={{ marginRight: "5px" }} />Post a Job</Button></Item1> 
                </Grid>
            </Grid>
            {/* <Divider />
            <Grid container xs={12} display={'flex'} >
                <Grid item  xs={6} display={'flex'} padding={'1%'}>
                   <Item><IconButton sx={{marginTop:"-18%"}}><ArrowBackIcon fontSize='large' sx={{ marginTop: "5px", marginRight: "5%" }} /></IconButton></Item> 
                  <Item sx={{fontSize:"30px", fontFamily:'poppins'}}> Applicant Details </Item>  
                </Grid>
                <Grid item  xs={6} display={'flex'} padding={'1%'} justifyContent={'right'}>
                   <Item1> <Button variant='outlined' sx={{ height: "50px", rem: "19px", textTransform: "capitalize" }} fontFamily={'poppins'}><KeyboardArrowDownIcon fontSize='large'  />More Action</Button></Item1>
                </Grid>
            </Grid> */}
           
        </Paper>
    )
}

export default Nav