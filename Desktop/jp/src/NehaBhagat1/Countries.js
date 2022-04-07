import React from 'react';
import { Grid, Typography, styled } from '@mui/material';
import australia from './australia.png';
import china from './china.png';
import England from './England.png';
import india from './india.png';
import japan from './japan.png';
import ukraine from './ukraine.png';
import us from './us.png';
import VaticanCity from './VaticanCity.png';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Countries = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (

    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Typography sx={{
          fontFamily: 'Clash Display',

          fontWeight: '600',
          fontSize: '32px',
          lineHeight: '120%',
          color: '#25324B'
        }}>
          Office Location
        </Typography>
        <Typography sx={{
          fontFamily: 'Epilogue',

          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '160%',

          color: '#515B6F'
        }}>
          Stripe offices spread across 20 countries
        </Typography >
      </Grid>
      <Grid item xs={12} sx={{marginTop:'20px'}}>
        <Grid sx={{display:'flex'}}>
        <img src={us} style={{
          width: '40px',
          height: '30px'
        }} />
        <p display="flex" style={{
          fontFamily: 'Epilogue',
          fontWeight: '400',
          fontSize: '16px',
          marginLeft: '4%',
          
          color: '#000000'
        }}>United States</p>
        </Grid>
        <Grid sx={{display:'flex'}}>
        <img src={England} style={{
          width: '40px',
          height: '30px'
        }} />
        <p display="flex" style={{
          fontFamily: 'Epilogue',
          fontWeight: '400',
          fontSize: '16px',
          marginLeft: '4%',
         
          color: '#000000',
        }}>England</p>
        </Grid>
       <Grid sx={{display:'flex'}}>
       <img src={japan} style={{
          width: '40px',
          height: '30px'
        }} />
        <p display="flex" style={{
          fontFamily: 'Epilogue',
          fontWeight: '400',
          fontSize: '16px',
          marginLeft: '4%',
         
          color: '#000000'
        }}>Japan</p>
       </Grid>
       <Grid sx={{display:'flex'}}>
       <img src={australia} style={{
          width: '40px',
          height: '30px'
        }} />
        <p display="flex" style={{
          fontFamily: 'Epilogue',
          fontWeight: '400',
          fontSize: '16px',
          marginLeft: '4%',
         
          color: '#000000'
        }}>Australia</p>
       </Grid>
       <Grid sx={{display:'flex'}}>
       <img src={china} style={{
          width: '40px',
          height: '30px'
        }} />
        <p display="flex" style={{
          fontFamily: 'Epilogue',
          fontWeight: '400',
          fontSize: '16px',
          marginLeft: '4%',
          
          color: '#000000'
        }}>China</p>
       </Grid>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"

        ><Typography sx={{
          fontFamily: 'Epilogue',

          fontWeight: '600',
          fontSize: '16px',
          color: '#1A50B2',
        }}>View countries</Typography>
          <ExpandMoreIcon sx={{ color: '#1A50B2', marginTop: '-2%' }} />
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
         <Grid sx={{display:'flex'}}>
         <img src={india} style={{
            width: '40px',
            height: '30px'
          }} />
          <p display="flex" style={{
            fontFamily: 'Epilogue',
            fontWeight: '400',
            fontSize: '16px',
            marginLeft: '4%',
            
            color: '#000000'
          }}>India</p>
         </Grid>
          <Grid sx={{display:'flex'}}>
          <img src={VaticanCity} style={{
            width: '40px',
            height: '30px'
          }} />
          <p display="flex" style={{
            fontFamily: 'Epilogue',
            fontWeight: '400',
            fontSize: '16px',
            marginLeft: '4%',
            
            color: '#000000'
          }}>Vatican City</p>
          </Grid>
         <Grid sx={{display:'flex'}}>
         <img src={ukraine} style={{
            width: '40px',
            height: '30px'
          }} />
          <p display="flex" style={{
            fontFamily: 'Epilogue',
            fontWeight: '400',
            fontSize: '16px',
            marginLeft: '4%',
            
            color: '#000000'
          }}>Ukraine</p></Grid></Collapse>
      </Grid>
    </Grid>
  )
}

export default Countries