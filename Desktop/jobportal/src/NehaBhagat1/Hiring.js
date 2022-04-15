import React from 'react';
import { Grid,Box,Typography,Button} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Stack from '@mui/material/Stack';


const Hiring = () => {
  return (
    <Box sx={{
        width: '92%',
        height: '800px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #D6DDEB',padding:"4%"}}> 
        <Grid display={"flex"} justifyContent={"space-between"} sx={{marginTop:"4%"}}>
            <Typography sx={{fontFamily: 'Epilogue',
        fontWeight: '600',
        fontSize: '22px',
        lineHeight: '160%',
        color:'#25324B'}}>
            Current Stage
            </Typography>
            <Button variant="outlined" sx={{fontFamily: 'Epilogue',
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '160%',
        color:'#4640DE',textTransform:'capitalize'}}><KeyboardArrowDownIcon/>Give Rating</Button>
        </Grid>
        <Grid xs={12} lg={8}  display={"flex"} justifyContent={"space-between"} sx={{marginTop:"4%"}}>

        <Button variant="contained" sx={{borderRadius:'0px',width: '170px',height: '50px'}}>In-Review</Button>
      <Button variant="contained" sx={{borderRadius:'0px',width: '170px',height: '50px'}}>Shortlisted</Button>
      <Button variant="contained" sx={{borderRadius:'0px',width: '170px',height: '50px'}}>Interview</Button>
      <Button variant="contained" sx={{borderRadius:'0px',width: '170px',height: '50px'}}>Hired / Declined</Button>
   
        </Grid>
       
        
        </Box>
  )
}

export default Hiring