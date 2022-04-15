import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { Tabs, Tab, Grid, Paper, Typography } from "@mui/material";

import PropTypes from "prop-types";

const Button1 = styled(Button)({
  color: "black",
  variant: "text",
  textTransform: "none",
  fontSize: 18,
  lineHeight: 1.5,
  background: "white",
  fontFamily: ["Poppins", "sans-serif"].join(","),
  "&:hover": {
    background: "white",
    boxShadow: "none",
    color: "blue",
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ButtonAppBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container sm={12} xs={12}>
      
        <Grid item xs={12} sm={8}
          sx={{
            paddingBottom: "1px",
            border: "1px solid gray",
           
          }}
          
        >
          <Toolbar >
            
              <Tabs sx={{justifyContent:'space-between'}}
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Aplicant Profile" {...a11yProps(0)} />
                <Tab sx={{marginLeft:'50px'}} label="MyOpenCase" {...a11yProps(1)} />
                <Tab sx={{marginLeft:'50px'}} label="Hiring Progress" {...a11yProps(2)} />
                <Tab sx={{marginLeft:'50px'}} label="Interview Schedule" {...a11yProps(3)} />
              </Tabs>
           
          </Toolbar>
        </Grid>
      
    </Grid>
  );
}
