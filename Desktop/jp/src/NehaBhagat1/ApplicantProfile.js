import React from 'react';
import {Grid,Box, Typography,Divider} from '@mui/material';


const ApplicantProfile = () => {
  return (
    <Grid xs={12} lg={8.5}>
<Box sx={{border: '1px solid #D6DDEB',padding:'1%',width:'96%'}}>
<Grid display={"flex"} sx={{justifyContent:'space-between'}}>
    <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '600',
fontSize: '1.4rem',
lineHeight: '160%',
color: '#25324B'}} >
    Applicant Profile
    </Typography>
    
    <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '600',
fontSize: '1.4rem',
lineHeight: '160%',
color: '#7C8493'}} >
    MyOpenCase
    </Typography>
    <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '600',
fontSize: '1.4rem',
lineHeight: '160%',
color: '#7C8493'}} >
    Hiring Progress
    </Typography>
    <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '600',
fontSize: '1.4rem',
lineHeight: '160%',
color: '#7C8493'}} >
    Interview Schedule
    </Typography>
    </Grid>
    
</Box>
<Box sx={{border: '1px solid #D6DDEB',padding:'3%',width:'92%'}}>

</Box>
    </Grid>
  )
}

export default ApplicantProfile