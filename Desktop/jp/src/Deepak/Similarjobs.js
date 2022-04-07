import react, { useState, useMemo } from "react";
import { Box, Button, Card, Grid,  Typography, FormControl, Select, Menu, MenuItem, Pagination } from "@mui/material";
import Normad from "./Nomad.png"
import './Jobsearch.css'


import Dropbox from "./Dropbox.png"
import Terra from "./Terraform Enterprise.png"

import Bv from "./Bv.png"
import { Link } from "react-router-dom";



const Similarjobs = () => {
    const [filter, setFilter] = useState('Most Relevant');

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const arr = [{ image: Normad, name: "Socail Media Assistant", place: "Normad . Panchkula, Mohali", time: "Full Time", type1: "Marketing", type2: "Design" },
    { image: Dropbox, name: "Brand Designer", place: "Dropbox . Chandigarh, Delhi", time: "Full Time", type1: "Marketing", type2: "Design" },
    { image: Terra, name: "Interactive Developer", place: "Terraform . Bangalore", time: "Full Time", type1: "Marketing", type2: "Design" },
    { image: Bv, name: "Email Marketing", place: "Revolut . Noida, Gurgaon", time: "Full Time", type1: "Marketing", type2: "Design" },
    { image: Bv, name: "Product Designer", place: "Class Pass . Chennai, Hyderabad", time: "Full Time", type1: "Marketing", type2: "Design" }]

    const num = arr.length;



    return (
        <Grid container marginTop={'60px'} marginBottom={'40px'}>
            <Grid sm={1} />
            <Grid xs={10} sm={11} sx={{ display: 'inline' }}>
                <Grid xs={11} sm={10} item marginTop={'20px'} marginLeft={'20px'} display={'flex'} >
                    <Typography variant='h4' >Similar Jobs</Typography><Grid xs={8} />
                    <Link to={'/findjobs'} style={{textDecoration:"none"}}><Button>Show all jobs &#8594;</Button></Link></Grid>

                <Grid xs={11} sm={10}container sx={{ marginLeft: '10px', marginTop: "20px"}} >
                    {arr.map((item, index) => {
                        return (
                            <Grid item xs={12} sm={5.5} marginRight='10px'>

                                <Box key={item.name} sx={{ border: "1px solid #D6DDEB", display: 'flex', marginTop: '10px' }}>
                                    <Grid  >
                                        <Grid sx={{ display: 'flex', marginLeft: '20px', marginTop: '10px', marginBottom: '20px' }}>
                                            <Grid><img src={item.image} />
                                            </Grid>
                                            <Grid sx={{ marginLeft: "15px" }}>
                                                <Typography variant="h5">{item.name}</Typography>
                                                <Typography sx={{ color: '#7C8493' }}>{item.place}</Typography>
                                            </Grid>

                                        </Grid>
                                        <Grid sx={{ display: "flex", marginBottom: '20px', marginLeft: '20px' }}>
                                            <Box sx={{ borderRadius: '20px', background: "#56CDAD1A", width: "80px", height: "30px", color: '#56CDAD', textAlign: "center" }}><Typography sx={{ fontSize: '15px', marginTop: '3px' }}>{item.time}</Typography></Box>
                                            <Typography sx={{ color: "#D6DDEB", marginLeft: "10px" }}>|</Typography>
                                            <Box sx={{ marginLeft: '10px', borderRadius: '20px', border: '1px solid #FFB836', width: "80px", height: "30px", color: '#FFB836', textAlign: "center" }}><Typography sx={{ fontSize: '15px', marginTop: '3px' }}>{item.type1}</Typography></Box>
                                            <Box sx={{ marginLeft: '5px', borderRadius: '20px', border: '1px solid #1A50B2', width: "80px", height: "30px", color: '#1A50B2', textAlign: "center" }}><Typography sx={{ fontSize: '15px', marginTop: '3px' }}>{item.type2}</Typography></Box>
                                        </Grid>
                                    </Grid>

                                </Box>
                                </Grid>)
                    })}

                </Grid>

            </Grid>
            <Grid sm={1} />
        </Grid>

    )
}
export default Similarjobs;