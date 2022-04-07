import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Frame3 from "./Frame3.png"
import { Tabs, Tab, Menu, MenuItem, Paper, Typography } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from 'prop-types';
import { NavLink,Link } from 'react-router-dom';

const Button1 = styled(Button)({
    color: 'black',
    variant: "text",
    textTransform: 'none',
    fontSize: 18,
    lineHeight: 1.5,
    background: 'white',
    fontFamily: [
        'Poppins',
        'sans-serif'
    ].join(','),
    '&:hover': {
        background: 'white',
        boxShadow: 'none',
        color: 'blue'
    },

});


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
                <Box sx={{ p: 3 }}>
                    <NavLink><Typography>{children}</Typography></NavLink>
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


export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [Profile, setProfile] = React.useState(null);

    const handleCloseProfile = () => {
        setProfile(null)
    }

    const handleprofile = (event) => {
        setProfile(event.currentTarget);
    };
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };  

    const handleClose = () => {
        setAnchorEl(null);
    };


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);}

    const allTabs = ['/findjobs', '/searchcompanies'];

        return (

            <Paper
                sx={{
                    flexGrow: 1
                }}
            >
                <AppBar sx={{ paddingBottom: "1px", border: 'none', boxShadow: 'none', backgroundColor: 'white' }} position="fixed" >
                    <Toolbar >
                        <Stack direction="row" spacing={2}>
                            <div ><Avatar alt="Remy Sharp"
                                src={Frame3}
                                sx={{ width: 40, height: 40 }} /></div>
                            <Typography sx={{ fontSize: "24px", color: " Black", marginTop: '20px' }}>Job Portal</Typography>


                        </Stack>



                        <Stack spacing={5} direction="row" sx={{
                            display: {
                                lg: 'flex',
                                xs: "none"
                            }, marginLeft: '80px'
                        }}>

                            <Box sx={{ borderBottom: 1, borderColor: 'divider',marginTop:'10px' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                 <Tab label="Find Jobs" value="/findjobs" component={NavLink} {...a11yProps(0)} to={allTabs[0]} />
                                  <Tab label="Browse Companies" value="/searchcompanies" component={NavLink} {...a11yProps(1)} to={allTabs[1]} />
                                    
                                </Tabs>
                            </Box>
                            {/* <TabPanel value={value} index={0}></TabPanel>


                            <TabPanel value={value} index={1}></TabPanel> */}

                        </Stack>
                        <Box flexGrow={1} />
                        <Stack spacing={3} direction="row" sx={{
                            display: {
                                lg: 'flex',
                                xs: "none"
                            }
                        }}>

                            {/* <Button sx={{ fontSize: "14px", fontWeight: "400", }} >Login</Button> */}
                            <NavLink to={'/postajob'} style={{ textDecoration: 'none' }}>
                                <Button variant='contained' sx={{ fontSize: "14px", fontWeight: "400", marginLeft: "12px" }} >Post a Job</Button></NavLink>
                        </Stack>



                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            ar
                            ia-label="menu"
                            sx={{
                                display: {
                                    lg: "none",
                                    xs: "block"
                                }
                            }}
                            onClick={handleMenu}
                        >
                            <MenuIcon sx={{ color: "#2E86C1" }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={Profile}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={Boolean(Profile)}
                            onClose={handleCloseProfile}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            
                        </Menu>
                        <Menu


                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >

                            <NavLink to={'/findjobs'} style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}>Find Jobs</MenuItem></NavLink>
                            <NavLink to={'/searchcompanies'} style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}>Browse Companies</MenuItem></NavLink>
                            {/* <Button sx={{ fontSize: "14px", fontWeight: "400", }} >Login</Button> */}
                            <NavLink to={'/postajob'} style={{ textDecoration: 'none' }}>
                                <Button variant='contained' sx={{ fontSize: "14px", fontWeight: "400", marginLeft: "12px" }} >Post a Job</Button></NavLink>

                        </Menu>
                    </Toolbar>
                </AppBar>
            </Paper>
        );
    }