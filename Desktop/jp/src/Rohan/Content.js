import React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Typography , Card   } from '@mui/material';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Table from "../NehaBhagat1/Table";

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



const Content = () => {
    return (


<Grid container xs={12} padding={'2%'}>

<Grid item xs={12} lg={12}>
    <Item sx={{ border: " 1px solid #D6DDEB" }} >
        
        <Grid display={'flex'}  padding={'6%'}>
            <Grid>
                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#25324B'}><b>Personal Info</b></Typography><br />
                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#7C8493'}>Full Name</Typography>
                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#25324B'}>Jerome Bell</Typography><br />
                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#7C8493'}>Date of Birth</Typography>
                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#25324B'}>March 23, 1995 (26 y.o) </Typography><br />
                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#7C8493'}>Address</Typography>
                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#25324B'}>4517 Washington Ave.Manchester, Kentucky 39495</Typography>
            </Grid>
            <Grid marginTop={'5%'}>
                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#7C8493'}>Gender</Typography>
                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#25324B'}>Male</Typography><br />
                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#7C8493'}>Language</Typography>
                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#25324B'}>English, French, Bahasa</Typography>
            </Grid>
        </Grid>
        <Divider variant="middle" />
        <Grid padding={'6%'}>
            <Grid>
                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#25324B'}><b>Professional Info</b></Typography><br />
                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#7C8493'}>About Me</Typography>
                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#25324B'}>I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world.</Typography><br />
                <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#25324B'}>For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.</Typography>
            </Grid><br />
            <Grid display={'flex'}>
                <Grid>
                    <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#7C8493'}>Current Job</Typography>
                    <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#25324B'}>Product Designer</Typography><br />
                    <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#7C8493'}>Highest Qualification Held</Typography>
                    <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#25324B'}>Bachelors in Engineering</Typography>
                </Grid>
                <Grid marginLeft={'15%'}   >
                    <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#7C8493'}>Experience in Years</Typography>
                    <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#25324B'}>4 Years</Typography><br />
                    <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#7C8493'}>Skill set</Typography>
                  
                        <> <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#4640DE'}>Project Management</Typography></>
                       <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#4640DE'}>Copywriting</Typography>
                      <Typography variant='body2' fontFamily={'poppins'} fontSize={'20px'} color={'#4640DE'}>English</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Item>
</Grid>
</Grid>
    )
}
export default Content