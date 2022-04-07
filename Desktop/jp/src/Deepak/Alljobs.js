import React, { useContext, useState } from "react";
import { Box, Button, Card, Grid, Stack, Typography, FormControl, Select, Menu, MenuItem, Pagination } from "@mui/material";
import Normad from "./Nomad.png"
import './Jobsearch.css'


import Dropbox from "./Dropbox.png"
import Terra from "./Terraform Enterprise.png"
import { Link } from "react-router-dom";
import Bv from "./Bv.png"
import { queryContext } from "../App";



const Alljobs = () => {
    const [filter, setFilter] = React.useState('Most Relevant');

    const handleChange = (event) => {
        setFilter(event.target.value);
    };
    const QueryContext = useContext(queryContext)

    const arr = [{ image: Normad, jobs: "3 Jobs", name: "Normad", description: 'Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools...', time: "Full Time", type1: "Marketing", type2: "Design" },
    { image: Dropbox, jobs: "7 Jobs", name: "Dropbox", description: 'Square builds common business tools in unconventional ways so more people can start, run, and grow their businesses.', time: "Full Time", type1: "Marketing", type2: "Design" },
    { image: Terra, jobs: "10 Jobs", name: "Terraform", description: 'Take control of your money. Truebill develops a mobile app that helps consumers take control of their financial...', time: "Full Time", type1: "Marketing", type2: "Design" },
    { image: Bv, jobs: "2 Jobs", name: "Revoult", description: 'Robinhood is lowering barriers, removing fees, and providing greater access to financial information.', time: "Full Time", type1: "Marketing", type2: "Design" },
    { image: Bv, jobs: "9 Jobsx", name: "Class Pass", description: 'Based in San Francisco, Kraken is the worlds largest global bitcoin exchange in euro volume and liquidity.', time: "Full Time", type1: "Marketing", type2: "Design" }]


    const num = arr.length;



    return (


        <Grid container xs={12} sm={12} >
            <Grid sm={2} />
            <Grid container item xs={11} sm={10}>
                <Grid item sx={{ display: "flex", marginTop: "20px", marginLeft: '20px', marginTop: '80px' }} xs={12} sm={12}  >
                    <Grid xs={2} sx={{ marginLeft: '20px' }} >
                        <Typography variant="h5">
                            All Jobs
                        </Typography>
                        <Typography sx={{ color: '#7C8493' }}>
                            Showing {num} results
                        </Typography>
                    </Grid>
                    <Grid xs={4} />
                    <Grid xs={3} sx={{ display: 'flex', textAlign: 'right' }}  >
                        <Grid sx={{ display: 'flex' }}>
                            <Typography sx={{ color: '#7C8493', fontSize: '16px', marginLeft: '15px' }}>Sort by :</Typography>
                            <FormControl sx={{ m: 1, minWidth: '120px', border: 'none' }}>
                                <Select variant="standard" sx={{ height: "14px" }}
                                    value={filter}
                                    onChange={handleChange}
                                    displayEmpty
                                    disableUnderline
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="Most Relevant">
                                        Most Relevant
                                    </MenuItem>
                                    <MenuItem value="Recommended">Recommended</MenuItem>
                                    <MenuItem value="Most Rated">Most Rated</MenuItem>
                                    <MenuItem value="Trending">Trending</MenuItem>
                                </Select>

                            </FormControl>
                        </Grid>

                    </Grid>

                </Grid>
                <Grid container item xs={11} sm={12} sx={{ marginLeft: '20px', marginTop: "20px" }}>

                        {arr.filter(item => {
                            let querry = QueryContext.value
                            if (querry == "") {
                                return item
                            }
                            else if (item.name.toLowerCase().includes(querry.toLowerCase())) {
                                return item;
                            }
                        }).map((item) => {
                            return (
                                <Grid item  xs={12} sm={4.1} marginRight={'20px'}>
                                <Link to={'/jobdescription'} style={{ textDecoration: 'none' }}>
                                    <Box key={item.name} sx={{ border: "1px solid #D6DDEB", marginTop: '10px' }}>

                                        <Grid sx={{ marginLeft: '20px', marginTop: '20px', marginBottom: '20px' }}>
                                            <Grid display={'flex'} justifyContent='space-between'>
                                                <img src={item.image} />
                                                <Box sx={{ borderRadius: '5px', background: "#F8F8FD", width: "70px", height: "30px", color: '#4640DE', textAlign: "center" }}><Typography marginTop={'4px'}>{item.jobs}</Typography></Box> </Grid>
                                            <Grid sx={{ marginTop: "15px" }}>
                                                <Typography variant="h5">{item.name}</Typography>
                                                <Typography sx={{ color: '#515B6F' }}>{item.description}</Typography>
                                            </Grid>

                                        </Grid>
                                        <Grid sx={{ display: "flex", marginBottom: '20px', marginLeft: '20px' }}>
                                            <Box sx={{ borderRadius: '20px', background: "#56CDAD1A", width: "80px", height: "30px", color: '#56CDAD', textAlign: "center" }}><Typography sx={{ fontSize: '15px', marginTop: '3px' }}>{item.time}</Typography></Box>
                                            <Typography sx={{ color: "#D6DDEB", marginLeft: "10px" }}>|</Typography>
                                            <Box sx={{ marginLeft: '10px', borderRadius: '20px', border: '1px solid #FFB836', width: "80px", height: "30px", color: '#FFB836', textAlign: "center" }}><Typography sx={{ fontSize: '15px', marginTop: '3px' }}>{item.type1}</Typography></Box>
                                            <Box sx={{ marginLeft: '5px', borderRadius: '20px', border: '1px solid #1A50B2', width: "80px", height: "30px", color: '#1A50B2', textAlign: "center" }}><Typography sx={{ fontSize: '15px', marginTop: '3px' }}>{item.type2}</Typography></Box>
                                        </Grid>


                                    </Box></Link>
                                    </Grid>)
                        })}


                   
                </Grid>
                <Grid xs={11} sm={12} sx={{ marginTop: '30px', marginLeft: '20px', marginBottom: '30px ' }}>
                    <Grid sm={3} />
                    <Grid sm={7}>
                        <Stack marginLeft="20px" spacing={2} >
                            <Pagination count={10} shape="rounded" color="primary" />

                        </Stack>
                    </Grid>
                </Grid>
            </Grid>


        </Grid>

    )
}
export default Alljobs;