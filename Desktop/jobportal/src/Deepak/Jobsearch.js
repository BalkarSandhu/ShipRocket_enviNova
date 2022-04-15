import React, { useState, useMemo, useContext, useEffect } from "react";
import { Box, Button, Card, Grid, Stack, Typography, FormControl, Select, Menu, MenuItem, Pagination } from "@mui/material";
import Normad from "./Nomad.png"
import './Jobsearch.css'
import { Link } from "react-router-dom";
import Dropbox from "./Dropbox.png"
import Terra from "./Terraform Enterprise.png"
import { queryContext } from "../App";
import Bv from "./Bv.png"
import axios from 'axios';



const Jobsearch = () => {
    const [filter, setFilter] = useState('Most Relevant');
    const [jobs,setJobs]=useState([]);

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    useEffect(async ()=>{
        const data=await axios({
            method:"post",
            url:"http://localhost:8080/jp/jobs"
        })
        setJobs(data.data.Items);

    },[])

    const QueryContext = useContext(queryContext)

    const arr = [{ image: Normad, name: "Socail Media Assistant", place: "Normad . Panchkula, Moahli", time: "Full Time", type1: "Marketing", type2: "Design" },
    { image: Dropbox, name: "Brand Designer", place: "Dropbox . Chandigarh, Delhi", time: "Full Time", type1: "Marketing", type2: "Design" },
    { image: Terra, name: "Interactive Developer", place: "Terraform . Gurgaon, Noida", time: "Full Time", type1: "Marketing", type2: "Design" },
    { image: Bv, name: "Email Marketing", place: "Revolut . Pune, Bangalore", time: "Full Time", type1: "Marketing", type2: "Design" },
    { image: Bv, name: "Product Designer", place: "Class Pass . Indore, Chennai", time: "Full Time", type1: "Marketing", type2: "Design" }]

    const num = arr.length;

    let PageSize = 3;

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return arr.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (


        <Grid xs={12} lg={12} container >
            <Grid xs={1} lg={3} />
            <Grid xs={10} lg={6} container sx={{ display: 'inline' }}>

                <Grid item sx={{ display: "flex", marginLeft: '30px', marginTop: "70px" }} xs={12} lg={12}>
                    <Grid xs={3} >
                        <Typography variant="h4">
                            All Jobs
                        </Typography>
                        <Typography sx={{ color: '#7C8493', fontSize: '14px' }}>
                            Showing {num} results
                        </Typography>
                    </Grid>
                    <Grid xs={6} />
                    <Grid xs={4} sx={{ display: 'flex', textAlign: 'right', marginTop: '10px' }}  >
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
                <Grid item xs={12} lg={12} sx={{ marginLeft: '20px', marginTop: "20px" }}>
                    {jobs.map((item, index) => {
                        {console.log(item)}
                        return (
                            <Box key={item.id} sx={{ border: "1px solid #D6DDEB", display: 'flex', marginTop: '10px' }}>
                                <Grid xs={12} >
                                    <Grid sx={{ display: 'flex', marginLeft: '20px', marginTop: '20px', marginBottom: '20px' }}>
                                        <Grid>
                                            <img src={Normad} />
                                        </Grid>
                                        <Grid sx={{ marginLeft: "15px" }}>
                                            <Typography variant="h5">{item.jobTitle}</Typography>
                                            <Typography sx={{ color: '#7C8493' }}>{item.location}</Typography>
                                        </Grid>

                                    </Grid>
                                    <Grid sx={{ display: "flex", marginBottom: '20px', marginLeft: '20px' }}>
                                        <Box sx={{ borderRadius: '20px', background: "#56CDAD1A", width: "80px", height: "30px", color: '#56CDAD', textAlign: "center" }}>
                                            <Typography sx={{ fontSize: '15px', marginTop: '3px' }}>{item.employmentType}</Typography>
                                            </Box>
                                        <Typography sx={{ color: "#D6DDEB", marginLeft: "10px" }}>
                                            |</Typography>
                                        <Box sx={{ marginLeft: '10px', borderRadius: '20px', border: '1px solid #FFB836', width: "80px", height: "30px", color: '#FFB836', textAlign: "center" }}>
                                            <Typography sx={{ fontSize: '15px', marginTop: '3px' }}>{item.requiredSkills}</Typography>
                                            </Box>
                                    </Grid>
                                </Grid>
                                <Grid xs={2.5} sx={{ marginTop: '20px', marginBottom: '10px', display: 'inline' }}>

                                    <Grid>
                                        <Link to={'/jobdescription'}state={{item:item}} style={{ textDecoration: "none" }}> <Button variant="contained" sx={{ width: '80%', backgroundColor: '#1A50B2' }}>Apply</Button></Link>
                                    </Grid>
                                    <Grid sx={{ marginTop: '20px' }}>
                                        <progress value="3" max={"10"} style={{ width: '80%', height: '12px' }}></progress>
                                        <Typography sx={{ color: '#7C8493', fontSize: '14px', marginTop: '5px' }}><b>3 applied</b> of 10 capacity</Typography>
                                    </Grid>
                                </Grid>

                            </Box>
                        )
                    }
                    )}

                </Grid>
                <Grid xs={7} lg={7} sx={{ marginTop: '30px', marginLeft: '20px', marginBottom: '40px' }}>
                    <Stack marginLeft="20px" spacing={2} >
                        <Pagination shape="rounded" color="primary" currentPage={currentPage}
                            totalCount={arr.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)} />

                    </Stack>
                </Grid>

            </Grid>

        </Grid>
    )
}
export default Jobsearch;