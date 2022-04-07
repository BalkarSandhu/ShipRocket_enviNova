import React from "react";
import { Box, Typography,Avatar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { IconButton } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const PostJob = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Box sx={{ padding: "2%" }}>
      <Typography
        sx={{
          fontFamily: "Clash Display",
          fontWeight: "600",
          fontSize: "32px",
          lineHeight: "120%",
          color: "#25324B",
        }}
      >
        <ArrowBackIcon /> Post a Job
      </Typography>
      <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "white", border: "1px solid #D6DDEB" }}
        >
          <Tabs
            value={value}
            onChange={(e)=>{handleChange(e)
            console.log(e.currentTarget)
            }}
            indicatorColor=""
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            
          >
            <Tab
              sx={{
                color: "#25324B",
                textTransform: "capitalize",
                fontSize: "16px",
              }}
              label="Job Information"
              icon= {<Avatar><BusinessCenterIcon/> </Avatar>}
             
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                color: "#25324B",
                textTransform: "capitalize",
                fontSize: "16px",
              }}
              label="Job Description"
              {...a11yProps(1)}
            ></Tab>
            <Tab
              sx={{
                color: "#25324B",
                textTransform: "capitalize",
                fontSize: "16px",
              }}
              label="Perks & Benefit"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Box>
  );
};

export default PostJob;

