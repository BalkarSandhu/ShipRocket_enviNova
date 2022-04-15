import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'; 
import TwitterIcon from '@mui/icons-material/Twitter'; 
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Button, Card, Grid, Input, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Frame3 from "./Frame3.png"


const link1=styled(Link)({
  fontSize:"20px",
  textDecoration:"none"

})

const Footer = () => {
  return (
    
        <Grid container sx={{ padding:"30px",backgroundColor:"#202430",display:'flex', boxShadow: "none",width:'100%',textAlign:'left'}} >
            <Grid item xs={6} sm={3} sx={{marginTop:'30px'}}>
               <Grid container sx={{diplay:'flex',marginTop:'15px'}}>
                   <Box sx={{width:'32px',height:'32px' }}><img src={Frame3}/></Box>
                    <Typography variant="h4" sx={{color:'white',marginLeft:'10px'}}><b>Job portal</b></Typography></Grid>
                <Typography sx={{color:'#D6DDEB',marginTop:'15px'}}>Great platform for the job seeker that passionate about startups. Find your dream job easier.</Typography>
            </Grid>
            <Grid item xs={1.5}/>
         <Grid item xs={6} sm={2} className="abc" sx={{marginTop:'30px'}}>
          
          
          <Typography variant="h5" className="abc" sx={{color:'white',marginTop:'15px'}}><b>About</b></Typography>
          <Link href='#' style={{textDecoration:'none'}}> <i><Typography className="abc" sx={{color:'#D6DDEB',marginTop:'15px',fontSize:'14px'}}>Companies</Typography></i></Link>
          <Link href='#' style={{textDecoration:'none'}}> <i><Typography className="abc" sx={{color:'#D6DDEB',marginTop:'15px',fontSize:'14px'}}>Pricing</Typography></i></Link>
          <Link href='#' style={{textDecoration:'none'}}> <i><Typography className="abc" sx={{color:'#D6DDEB',marginTop:'15px',fontSize:'14px'}}>Terms</Typography></i></Link>
          <Link href='#' style={{textDecoration:'none'}}> <i><Typography className="abc" sx={{color:'#D6DDEB',marginTop:'15px',fontSize:'14px'}}>Advice</Typography></i></Link>
          <Link href='#' style={{textDecoration:'none'}}> <i><Typography className="abc" sx={{color:'#D6DDEB',marginTop:'15px',fontSize:'14px'}}>Privacy Policy</Typography></i></Link>
          
        </Grid>
        
          
          <Grid item xs={6} sm={2} sx={{marginTop:'30px'}}>
            
            <link1 href="#" >
            <Typography variant="h5" className="abc" sx={{color:'white',marginTop:'15px'}}><b>Resources</b></Typography>
           <Link href='#' style={{textDecoration:'none'}}> <i><Typography className="abc" sx={{color:'#D6DDEB',marginTop:'15px',fontSize:'14px'}}>Help Docs</Typography> </i></Link>
           <Link href='#' style={{textDecoration:'none'}}> <i><Typography className="abc" sx={{color:'#D6DDEB',marginTop:'15px',fontSize:'14px'}}>Guide</Typography></i></Link>
            <Link href='#' style={{textDecoration:'none'}}> <i><Typography className="abc" sx={{color:'#D6DDEB',marginTop:'15px',fontSize:'14px'}}>Updates</Typography></i></Link>
            <Link href='#' style={{textDecoration:'none'}}> <i><Typography className="abc" sx={{color:'#D6DDEB',marginTop:'15px',fontSize:'14px'}}>Contact us</Typography></i></Link>
           
            </link1>
          </Grid>
          
          
          
          <Grid item xs={6} sm={3} sx={{textAlign:'left',marginTop:'30px'}}>
            
            <Typography variant="h5" sx={{color:'white',marginTop:'10px',marginTop:'15px'}} ><b>	Get job Notification</b></Typography>
           
            <Typography sx={{color:'#D6DDEB',fontSize:'14px',marginTop:'15px',maxWidth:'250px'}}>The latest job news, articles, sent to your inbox weekly.</Typography>

            <Grid sx={{display:'flex',marginTop:"25px"}}>
            
            <Input sx={{background:'white',color:'black'}} id="name" ></Input>
            <Button variant='contained' sx={{background:'#1A50B2',marginLeft:"10px"}}>Subscribe</Button></Grid>
          </Grid>
          
          <Grid container sx={{diplay:'flex',marginTop:'40px'}}>
             <Grid xs={6} item> <Typography sx={{color:'#D6DDEB',fontSize:'12px',fontWeight:'500',textAlign:'left',marginBottom:'20px'}}>
          2021 @ JobHuntly. All rights reserved.
              
              </Typography></Grid>
              <Grid xs={5.5} item sx={{marginBottom:'10px',textAlign:'right'}}>
            <Link href="#"  sx={{fontSize:"14px" , color:"white"}}>
              <i className="fab fa-instagram">
              <MailIcon/>
                
              </i>
            </Link>
            <Link href="#"  sx={{fontSize:"14px",color:"white",marginLeft:'20px'}}>
              <i className="fab fa-twitter">
                <TwitterIcon/>
              </i>
            </Link>
            <Link href="#"  sx={{fontSize:"14px" , color:"white",marginLeft:'20px'}}>
              <i className="fab fa-youtube">
               <YouTubeIcon/>
              </i>
            </Link>
            <Link href="#"  sx={{fontSize:"14px" , color:"white",marginLeft:'20px'}}>
              <i className="fab fa-youtube">
               <FacebookIcon/>
              </i>
            </Link>
            <Link href="#"  sx={{fontSize:"14px" , color:"white",marginLeft:'20px'}}>
              <i className="fab fa-youtube">
               <InstagramIcon/>
              </i>
            </Link>
            </Grid>
              </Grid>
        </Grid>
    
  );
};
export default Footer;