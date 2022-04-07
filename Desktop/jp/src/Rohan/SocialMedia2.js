import Desktop from './Desktop.png';
import Nomad from './Nomad.png';
import Paper from '@mui/material/Paper';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import AddIcon from '@mui/icons-material/Add';
// import Divider from '@mui/material/Divider';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './SocialMedia1.css';
import { Grid, Typography, Box, Button, Avatar, TextField, InputLabel, MenuItem, FormControl, Select  } from "@mui/material";
import React, { useContext, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { queryContext } from '../App';
import { Link } from 'react-router-dom';


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




const SocialMedia2 = () => {
    const [filter, setfilter] = React.useState("MOst Viewed");
    
    const handleChange = (event) => {
    setfilter(event.target.value);}

        const QueryContext = useContext(queryContext)


    return (

         
        <Grid container xs={12} lg={12}  sx={{ width: "100%", background: `url(${Desktop})`,backgroundSize:'105%',marginTop:'50px'}} >
            <Grid item xs={12} lg={12} sx={{ alignItems: "center", justifyContent: 'center' }} padding={'2%'}>
                
                    <Typography variant='h3' fontFamily={'poppins'} color={'#25324B'} textAlign={'center'} padding><b>Find your</b> <span style={{ color: "#26A4FF" }}><b>dream companies</b></span> </Typography>
                    <Typography variant='body2' fontFamily={'poppins'} fontSize={'24px'} color={'#515B6F'} textAlign='center' marginTop={''} padding={'2%'}>Find the dream companies you dream work for</Typography>
                
            </Grid>

            <Grid item xs={12} lg={12}>
                <Grid>
                    <Box sx={{ border: '1px solid #d6ddeb', width: '85%', margin: '3% 7%' }}>
                        <Grid container item>
                            <Grid lg={1} />
                            <Grid item xs={11} lg={4} marginLeft={'10px'}>
                                <SearchIcon sx={{ fontSize: 'xx-large', color: '#25324B', marginTop: '14px' }} />
                                <TextField onChange={event => QueryContext.setValue(event.target.value)}  sx={{ width: '70%' }} id="outlined-basic" label="Search Here" variant="standard" />
                            </Grid>
                            <Grid xs={0.5} lg={0.5} marginTop={'10px'} >
                                <Box sx={{ width: '0.5px', height: '40px', backgroundColor: '#202430' }} />
                            </Grid>
                            <Grid item xs={6} lg={3} marginLeft='10px'>
                                <LocationOnIcon sx={{ fontSize: 'xx-large', color: '#25324B', marginTop: "14px" }} />
                                <FormControl variant="standard" sx={{ m: 1, minWidth: '60%' }}>
                                    <InputLabel id="demo-simple-select-standard-label">Filter</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={filter}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={"Most Relevant"}>Most Relevant</MenuItem>
                                        <MenuItem value={"Most Viewed'"}>Most Viewed</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid lg={1} />
                            <Grid item xs={2} lg={1} marginTop={'10px'}>
                                <Link to={'/companiesresult'} style={{textDecoration:'none'}}><Button variant='contained' sx={{ borderRadius: '10px' , width:"140px" , height:"40px" }}>Search</Button></Link>
                            </Grid>
                        </Grid>
                    </Box>
                    
                
                </Grid>
            </Grid>
                <Typography variant='body2' fontFamily={'poppins'} color={'#515B6F'} marginLeft={'10%'} marginTop={'-2%'}>Popular : Twitter, Microsoft, Apple, Facebook</Typography>


        </Grid>
       
    )
}

export default SocialMedia2
