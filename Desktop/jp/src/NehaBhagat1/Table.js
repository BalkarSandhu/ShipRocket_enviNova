import { Grid,Box, Typography, Divider,Button,Link } from '@mui/material';
import React from 'react';
import man from './img/man.png';
import GradeIcon from '@mui/icons-material/Grade';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import ChatIcon from '@mui/icons-material/Chat';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '10px', transform: 'scale(2)' }}
    >
        •
    </Box>
);
const Table = () => {
    const arr = [
        {
         imgsrc:man  ,
         name:'Jerome Bell',
         profile:'Product Designer',
         rating:'4.0',
         daysago:'2 days ago',
         branch:'Product Development',
         skill1:'Marketing',
         skill2:'Full-Time',
         email:'jeromeBell45@email.com',
         phone:'+44 1245 572 135',
         insta:'instagram.com/jeromebell',
         twitter:'twitter.com/jeromebell',
         website:'www.jeromebell.com'
        },
       
    ];
  return (
      <Grid xs={12}>
      {arr.map((item, index) => {
          return (
<Box sx={{width: '369px',
height: '961px',border: '1px solid #D6DDEB',padding:'4%'}}>
<Grid display={"flex"}>
<img src={item.imgsrc} alt="" />
<Grid sx={{width:'58%'}}>
   <Typography sx={{fontFamily: 'Clash Display',
fontWeight: '600',
fontSize: '26px',
lineHeight: '120%',
color: '#25324B',
marginTop:'1%',marginLeft:'26%',cursor:'context-menu'
}}>
{item.name}
</Typography>
<Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '20px',
lineHeight: '160%',
color: '#7C8493',
marginLeft:'26%',cursor:'context-menu'
}}>
{item.profile}
</Typography>  
 <Grid display={"flex"}>
     <GradeIcon sx={{color:'#FFB836',marginLeft:'24%',
marginTop:'3%'}}/>
<Typography sx={{fontFamily: 'Epilogue',
fontWeight: '500',
fontSize: '20px',
lineHeight: '160%',
color: '#25324B',marginTop:'2%',marginLeft:'4%',cursor:'context-menu'}}>
    {item.rating}
</Typography>
 </Grid>

</Grid>
  

</Grid>
<Box sx={{backgroundColor:'#F8F8FD',width: '351px',
height: '121px',marginTop:'6%',padding:'2.6%'}}>
<Grid display={"flex" } sx={{justifyContent:'space-between'}}>
    <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '18px',
lineHeight: '160%',
color: '#25324B',cursor:'context-menu'}}> 
    Applied Jobs
    </Typography>
    <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '18px',
lineHeight: '160%',
color: '#7C8493',cursor:'context-menu'}}> 
    {item.daysago}
    </Typography>
</Grid>
<Divider sx={{marginTop:'4%'}}/>
<Typography sx={{fontFamily: 'Epilogue',
fontWeight: '600',
fontSize: '22px',
lineHeight: '160%',
color: '#25324B',marginTop:"2%",cursor:'context-menu'
}}>
{item.branch}
</Typography>
<Grid display={"flex"}>
    <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '18px',
lineHeight: '160%',
color: '#515B6F',cursor:'context-menu'
}}>
{item.skill1} 
</Typography>
 < FiberManualRecordIcon sx={{fontSize: '0.8rem',color: '#515B6F',margin:'2%'}}/>
 <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '18px',
lineHeight: '160%',
color: '#515B6F',cursor:'context-menu'
}}>
{item.skill2}
</Typography>
</Grid>
   



</Box>
<Box sx={{backgroundColor:'#F8F8FD',width: '351px',
height: '66px',marginTop:'4%',padding:'2.6%'}}> 
<Grid display={"flex"} sx={{justifyContent:'space-between'}}>
    <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '18px',
lineHeight: '160%',
color: '#25324B',cursor:'context-menu'}}>
       Stage
    </Typography>
    <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '18px',
lineHeight: '160%',
color: '#26A4FF',cursor:'context-menu'}}>
     {bull}Interview
    </Typography>
</Grid>
<BorderLinearProgress variant="determinate" value={50} sx={{marginTop:'4%'}}/>
</Box>
<Grid display={"flex"}>
<Button variant="outlined" sx={{border:'1px solid #CCCCF5',width: '300px',
height: '50px',marginTop:'4%',color:'#4640DE',textTransform:'capitalize',fontFamily: 'Epilogue',
fontWeight: '700',
fontSize: '18px',}}>Schedule Interview</Button>
<Button variant="outlined" sx={{border:'1px solid #CCCCF5',width: '50px',
height: '50px',marginTop:'4%',color:'#4640DE',marginLeft:'4%'}}>< ChatIcon sssx={{width: '6em',height: '1.5em'}}/></Button>
</Grid>
<Divider sx={{marginTop:'4%'}}/>
<Typography sx={{fontFamily: 'Epilogue',
fontWeight: '600',
fontSize: '24px',
lineHeight: '120%',
color: '#25324B',marginTop:'3%',cursor:'context-menu'}}>
Contact
</Typography>
<Grid display={"flex"} sx={{marginTop:'4%'}}>
<MailOutlineIcon sx={{color: '#7C8493',fontSize: '2rem'}}/>  
<Grid sx={{marginLeft:'6%'}}>
  <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '20px',
lineHeight: '160%',
color: '#7C8493',cursor:'context-menu'}}>
    Email
</Typography> 
<Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '18px',
lineHeight: '160%',
color: '#25324B',cursor:'context-menu'}}>
{item.email}
</Typography>
</Grid>

</Grid>
<Grid display={"flex"} sx={{marginTop:'4%'}}>
<PhoneIphoneIcon sx={{color: '#7C8493',fontSize: '2rem'}}/>  
<Grid sx={{marginLeft:'6%'}}>
  <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '20px',
lineHeight: '160%',
color: '#7C8493',cursor:'context-menu'}}>
    Phone
</Typography> 
<Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '18px',
lineHeight: '160%',
color: '#25324B',cursor:'context-menu'}}>
{item.phone}
</Typography>
</Grid>

</Grid>
<Grid display={"flex"} sx={{marginTop:'4%'}}>
<InstagramIcon sx={{color: '#7C8493',fontSize: '2rem'}}/>  
<Grid sx={{marginLeft:'6%'}}>
  <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '20px',
lineHeight: '160%',
color: '#7C8493',cursor:'context-menu'}}>
    Instagram
</Typography> 
<Link  href={'https://www.google.com'} style={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '18px',
lineHeight: '160%',
color: '#4640DE',cursor: "pointer",textDecoration:'none'}}>
{item.insta}
</Link>
</Grid>

</Grid>
<Grid display={"flex"} sx={{marginTop:'4%'}}>
<TwitterIcon sx={{color: '#7C8493',fontSize: '2rem'}}/>  
<Grid sx={{marginLeft:'6%'}}>
  <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '20px',
lineHeight: '160%',
color: '#7C8493',cursor:'context-menu'}}>
    Twitter
</Typography> 
<Link href={'https://www.google.com'} sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '18px',
lineHeight: '160%',
color: '#4640DE',cursor: "pointer",textDecoration:'none'}}>
{item.twitter}
</Link>
</Grid>

</Grid>
<Grid display={"flex"} sx={{marginTop:'4%'}}>
<LanguageIcon sx={{color: '#7C8493',fontSize: '2rem'}}/>  
<Grid sx={{marginLeft:'6%'}}>
  <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '20px',
lineHeight: '160%',
color: '#7C8493',cursor:'context-menu'}}>
    Website
</Typography> 
<Link href={'https://www.google.com'} sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '18px',
lineHeight: '160%',
color: '#4640DE',cursor: "pointer",textDecoration:'none'}}>
{item.website}
</Link>
</Grid>

</Grid>
</Box>
   )
})} </Grid>
  );
};

export default Table