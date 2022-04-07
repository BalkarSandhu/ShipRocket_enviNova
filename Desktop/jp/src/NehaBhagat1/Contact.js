import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import pic4 from "./pic4.png";
import "./Contact.css";
import Countries from "../NehaBhagat1/Countries";

const Contact = () => {
  return (
    <Grid conatiner xs={12}>
      <Grid container xs={12}>
        <Grid item xs={1}></Grid>
        <Grid item xs={12} lg={4}>
          <Typography
            sx={{
              fontFamily: "Clash Display",

              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "160%",
              color: "#25324B",
            }}
          >
            Contact
          </Typography>

          <Button
            variant="outlined"
            sx={{ textTransform: "lowercase" ,  marginTop: "2%" }}
            startIcon={<TwitterIcon />}
          >
            twitter.com/stripe
          </Button>
          <Button
            variant="outlined"
            sx={{ textTransform: "lowercase"  , marginTop: "2%"}}
            startIcon={<FacebookIcon />}
          >
            facebook.com/StripeHQ
          </Button>

          <Button
            className="bcd"
            variant="outlined"
            sx={{ textTransform: "lowercase", marginTop: "2%" }}
            startIcon={<LinkedInIcon />}
          >
            linkedin.com/company/stripe
          </Button>
        </Grid>{" "}
      </Grid>

      <Grid container display="flex" sx={{ marginTop: "2%" }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={12} lg={4.5}>
          <img src={pic1} width="100%" />
        </Grid>
        <Grid className="photo" item lg={2.5} sx={{marginLeft:'0.5%'}}> 
          <img src={pic2}  width="100%" height="33%"/>< br/>
          <img src={pic3}  width="100%" height="32%"/><br/>
          <img src={pic4}  width="100%"height="33%" />

        </Grid>
        <Grid item xs={0.5}></Grid>
         <Grid item lg={3}>
        <Countries />
      </Grid>
    </Grid>
      </Grid>
     
  );
};

export default Contact;
