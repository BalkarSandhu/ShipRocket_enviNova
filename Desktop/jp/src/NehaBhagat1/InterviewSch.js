import React from 'react';
import { Grid,Box, Typography,Button, Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import jenny from './img/jenny.png';
import CreateIcon from '@mui/icons-material/Create';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import man from './img/man.png';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PdfPage from './PdfPage';
import Hiring from './Hiring';
import Content from '../Rohan/Content';
import Content1 from '../Rohan/Content1';
import Content2 from '../Rohan/Content2';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const arr = [

    {
     day : 'Tomorrow - 10 July, 2021 ',
      imgsrc: jenny,
       name: 'Kathryn Murphy',
       test:' Written Test',
       time:'10:00 AM - 11:30 AM',
       address:'Silver Crysta Room, Nomad',
    },
    {
        day : '11 July, 2021 ',
        imgsrc: man,
         name: 'Jenny Wilson',
         test:' Written Test2',
         time:'10:00 AM - 11:30 AM',
         address:'Silver Crysta Room, Nomad',
    },
  ];
const InterviewSch = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
   
<Grid container xs={12} lg={12} display={"flex"}>

    <Grid lg={4}></Grid>
    <Grid lg={1}></Grid>
    <Grid xs={12} lg={12} >
    <Box sx={{ width: '98%',backgroundColor: '#FFFFFF',
border: '1px solid #D6DDEB',padding:'6px'}}>
      
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{fontSize:'20px',textTransform:'capitalize'}} label="Applicant Profile" {...a11yProps(0)} />
          <Tab sx={{fontSize:'20px',textTransform:'capitalize'}} label="MyOpenCase" {...a11yProps(1)} />
          <Tab sx={{fontSize:'20px',textTransform:'capitalize'}} label="Hiring Progress" {...a11yProps(2)} />
          <Tab sx={{fontSize:'20px',textTransform:'capitalize'}} label="Interview Schedule" {...a11yProps(3)} />
        </Tabs>
      
      <TabPanel value={value} index={0}>
      <Content/>

    
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Content1/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Content2/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Box sx={{
width: '98%',
height: '800px',
backgroundColor: '#FFFFFF',
border: '1px solid #D6DDEB',padding:"1%"}}> 
<Grid display={"flex"} justifyContent={"space-between"} sx={{marginTop:"4%"}}>
    <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '600',
fontSize: '22px',
lineHeight: '160%',
color:'#25324B'}}>
    Interview List
    </Typography>
    <Button variant="text" sx={{fontFamily: 'Epilogue',
fontWeight: '600',
fontSize: '18px',
lineHeight: '160%',
color:'#4640DE'}}><AddIcon/>Add Schedule Interview</Button>
</Grid>{arr.map((item)=>{return(
<Grid sx={{marginTop:'2%'}}>

    <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
fontSize: '18px',
lineHeight: '160%',
color:'#7C8493'}}>
    {item.day}
    </Typography>
    <Box sx={{width: '96%',
height: '64px',
backgroundColor: '#FFFFFF',
border: '1px solid #D6DDEB',padding:"2%" ,display:"flex",justifyContent:'space-between'}}>
      <Avatar
          src={item.imgsrc} alt="" sx={{width:'60px',height:'60px'}}/>
          <Box>
             <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '600',
rem: '18px',
lineHeight: '160%',
color:'#25324B'}}>
      {item.name}
      </Typography>  
      <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
rem: '18px',
lineHeight: '160%',
color:'#7C8493'}}>
      {item.test}
      </Typography>
          </Box>
     <Box>
     <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '500',
rem: '18px',
lineHeight: '160%',
color:'#25324B'}}>
     {item.time}
      </Typography>  
      <Typography sx={{fontFamily: 'Epilogue',
fontWeight: '400',
rem: '18px',
lineHeight: '160%',
color:'#7C8493'}}>
      {item.address}
      </Typography>  
     </Box>
     <Button variant="outlined" sx={{fontFamily: 'Epilogue',
fontWeight: '600',
fontSize: '18px',
lineHeight: '160%',
color:'#4640DE',height:'95%'}}><CreateIcon/>Add Feedback</Button>
<IconButton>
    <MoreHorizIcon/>
</IconButton>
    </Box>
</Grid>)})}
</Box>
      </TabPanel>
    </Box>
    </Grid>

</Grid>
   
  )
}

export default InterviewSch