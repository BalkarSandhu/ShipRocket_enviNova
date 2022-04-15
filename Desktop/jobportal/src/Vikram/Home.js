import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import logo from '../Vikram/logo.png';
import Icon from './Icon.png';
import Icon2 from './Icon2.png';
import Icon3 from './Icon3.png';
import Location from './Location.png';
import Desktop from './Desktop.png';
import './Home.css';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
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


export default function ComplexGrid() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Grid container sx={{ background: `url(${Desktop})` ,marginTop:'50px'}}>
            <Grid item lg={1}/>
            <Grid item xs={10} sm={8} sx={{ marginTop: '20px'}} >
                <Grid item xs={12} sm={12} >
                    <Box>
                        {/* <Tabs value={value} onChange={handleChange} >
                            <Tab label="Home" {...a11yProps(0)} />
                            <Tab label="Companies" {...a11yProps(1)} />
                            <Tab label="Nomad" {...a11yProps(2)} />
                        </Tabs> */}<Typography sx={{ color: '#7C8493' }}>Home / Companies / Jobs</Typography>
                    </Box>
                </Grid>

                <Grid container xs={12} lg={12} sx={{ display: "flex" , justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Grid item sm={4} xs={6} lg={2}>
                        <ButtonBase sx={{ width: 160, height: 160 }}>
                            <Img alt="complex" src={logo}
                            className="slogo"
                                style={{
                                    width: "160px",
                                    height: "160px"
                                }}
                            />
                        </ButtonBase>
                    </Grid>

                        <Grid item sm={6} xs={6} lg={6}sx={{display: 'block'}}>
                            <Grid item  sx={{ display: "flex" }} >
                                <Typography gutterBottom sx={{ fontFamily: 'Clash Display', fontWeight: "1000", fontSize: '2rem', lineHeight: '110%' }}>
                                    Stripe
                                </Typography>
                                <Button variant="outlined" sx={{  fontFamily: 'Epilogue', fontWeight: '500', fontSize: '1rem', lineHeight: '160%' , marginLeft:"2%" }}>43 job</Button>
                            </Grid>
                            <Grid>
                                <Typography variant="body2" sx={{ color: '#1A50B2', fontFamily: 'Epilogue', fontWeight: "600", fontSize: '18px', lineHeight: '110%' }} gutterBottom>
                                    https://stripe.com
                                </Typography>
                            </Grid>
                        </Grid>


                        <Grid container sm={12} xs={8} rowSpacing={1} columnSpacing={{ xs: 4, sm: 2, md: 4 }} sx={{ display: "flex", paddingTop: "8px",marginBottom:'60px' }}>
                           
                            <Grid item sx={{ display: "flex", marginLeft: '5px' }}>
                                <Grid >
                                    <Typography sx={{ fontFamily: 'Epilogue', fontWeight: "400", fontSize: '18px', lineHeight: '26px' }}>
                                        Founded
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Epilogue', fontWeight: "600", fontSize: '16px', lineHeight: '26px' }}>
                                        July 31, 2011
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ display: "flex" }}>

                           
                                <Grid >
                                    <Typography sx={{ fontFamily: 'Epilogue', fontWeight: "400", fontSize: '18px', lineHeight: '26px' }}>
                                        Employees
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Epilogue', fontWeight: "600", fontSize: '16px', lineHeight: '26px' }}>
                                        4000+
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ display: "flex" }}>
                                <Grid >
                                    <Typography sx={{ fontFamily: 'Epilogue', fontWeight: "400", fontSize: '18px', lineHeight: '26px' }}>
                                        Location
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Epilogue', fontWeight: "600", fontSize: '16px', lineHeight: '26px' }}>
                                        20 Countries
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ display: "flex" }}>

                                <Grid >
                                    <Typography sx={{ fontFamily: 'Epilogue', fontWeight: "400", fontSize: '18px', lineHeight: '26px' }}>
                                        Industry
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Epilogue', fontWeight: "600", fontSize: '16px', lineHeight: '26px' }}>
                                        Payment Gateway
                                    </Typography>
                                </Grid>
                            </Grid>

                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    );
}
