import React,{useContext} from 'react';
import { Grid, Typography, Card, Box, Button } from '@mui/material';
import N1 from './img/N1.png';
import N2 from './img/N2.png';
import N3 from './img/N3.png';
import N4 from './img/N4.png';
import N5 from './img/N5.png';
import N6 from './img/N6.png';
import { queryContext } from "../App";

const Recommended = () => {
  const arr = [
    {
      imgsrc: N1,
      name: 'Nomad',
      description: 'Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).We care about creating a delightful experience. ',
      Box1: <Box sx={{
        border: '1px solid #FFB836',
        borderRadius: '80px', width: '140px'
      }}><Typography sx={{ color: '#FFB836', textAlign: 'center' }}>Business Service</Typography></Box>
    },
    {
      imgsrc: N2,
      name: 'Discord',
      description: 'We did love to work with someone like you. We care about creating a delightful experience. Discord is located in India.',
      Box1: <Box sx={{
        border: '1px solid #FFB836',
        borderRadius: '80px', width: '140px'
      }}><Typography sx={{ color: '#FFB836', textAlign: 'center' }}>Business Service</Typography></Box>
    },
    {
      imgsrc: N3,
      name: 'Maze',
      description: 'We are a passionate bunch working from all over the world to build the future of rapid testing together.Maze is located in India.',
      Box1: <Box sx={{
        border: '1px solid #FFB836',
        borderRadius: '80px', width: '140px'
      }}><Typography sx={{ color: '#FFB836', textAlign: 'center' }}>Business Service</Typography></Box>
    },
    {
      imgsrc: N4,
      name: 'Udacity',
      description: 'Udacity is a new type of online university that teaches the actual programming skills.We care about creating a experience.',
      Box1: <Box sx={{
        border: '1px solid #FFB836',
        borderRadius: '80px', width: '140px'
      }}><Typography sx={{ color: '#FFB836', textAlign: 'center' }}>Business Service</Typography></Box>
    },
    {
      imgsrc: N5,
      name: 'Webflow',
      description: 'Webflow is the first design and hosting platform built from the ground up for the mobile age.Webflow is located in India.',
      Box1: <Box sx={{
        border: '1px solid #FFB836',
        borderRadius: '80px', width: '140px'
      }}><Typography sx={{ color: '#FFB836', textAlign: 'center' }}>Business Service</Typography></Box>,
      Box2: <Box sx={{
        border: '1px solid #FF6550',
        borderRadius: '80px', width: '140px', marginLeft: '2%'
      }}><Typography sx={{ color: '#FF6550', textAlign: 'center' }}>Business Service</Typography></Box>
    },
    {
      imgsrc: N6,
      name: 'Foundation',
      description: 'Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.Foundation is located in India.',
      Box1: <Box sx={{
        border: '1px solid #FFB836',
        borderRadius: '80px', width: '140px'
      }}><Typography sx={{ color: '#FFB836', textAlign: 'center' }}>Business Service</Typography></Box>,
      Box2: <Box sx={{
        border: '1px solid #4640DE',
        borderRadius: '80px', width: '140px', marginLeft: '2%'
      }}><Typography sx={{ color: '#4640DE', textAlign: 'center' }}>Crypto</Typography></Box>
    },




  ];
  const QueryContext = useContext(queryContext)
  return (
    <Grid container xs={12} marginTop='40px'>
      <Grid item lg={1} xs={12}></Grid>
      <Grid item xs={11} >
        <Grid item >
          <Typography variant='h4' fontFamily={'Poppins'}>Recommended Companies</Typography>
          <Typography variant='h7' fontFamily={'Poppins'} color={'#515B6F'}>Based on your profile, company preferences, and recent activity</Typography>
        </Grid>
      </Grid>


      <Grid container>
        <Grid item lg={1} xs={12}></Grid>
        <Grid container item lg={10} xs={12} >
          {arr.filter(item => {
            let querry = QueryContext.value
            if (querry == "") {
              return item
            }
            else if (item.name.toLowerCase().includes(querry.toLowerCase())) {
              return item;
            }
          }).map((item, index) => {
            return (
              <Grid item lg={4} xs={7} marginTop='3%' >
                <Card sx={{
                  padding: '4%', width: '362px',
                  height: '250px'
                }}>
                  <Grid>
                    <Grid display={"flex"} justifyContent="space-between" >
                      <img src={item.imgsrc} alt={''} sx={{}} />
                      <Box sx={{ backgroundColor: '#F8F8FD', width: '17%', height: '2%', }}>
                        <Typography sx={{ color: '#4640DE', marginLeft: '11%' }}>3 Jobs</Typography>
                      </Box>

                    </Grid>

                    <Typography variant='h4' fontFamily={'Poppins'}>{item.name}</Typography><br />
                    <Typography variant='h7' fontFamily={'Poppins'} color={'#515B6F'}>{item.description}</Typography>
                    <Grid marginTop={"6%"} display={"flex"} >
                      {item.Box1}
                      {item.Box2}
                    </Grid>

                  </Grid>
                </Card>
              </Grid>

            )
          })}
        </Grid>


      </Grid>



    </Grid>
  )
}

export default Recommended