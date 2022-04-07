import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Nav from "../Rohan/Nav";




const AppBar = () => {
 return (
      <>
      <Nav/>
    <Box>
      <Typography
        sx={{
          fontFamily: "Clash Display",
          fontWeight: "600",
          fontSize: "32px",
          lineHeight: "120%",
          color: "#25324B",
          marginTop:'2%'
        }}
      >
          <ArrowBackIcon/> Post a Job
      </Typography>
</Box>
     </>
  );
};

export default AppBar;
