import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Divider,
  FormControl,
  Button,
} from "@mui/material";
import Nomad from "./Nomad.png";
// import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import OutlinedInput from "@mui/material/OutlinedInput";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import JoditEditor from "jodit-react";

const Input = styled("input")({
  display: "none",
});
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "10px", transform: "scale(1)" }}
  >
    •
  </Box>
);
const Form1 = () => {
  const [content, setContent] = useState("");

  const config = {
    buttons: "bold,italic,superscript,subscript,link",
  };

  const handleSetContext = (value) => {
    console.log("value: ", value);
    setContent(value);
  };
  return (
    <Grid container sx={{  padding: "2%" }}>
      <Grid xs={1}></Grid>

      <Grid xs={12} lg={10} sx={{ backgroundColor: "white" }}>
        <Box sx={{ padding: "4%" }}>
          <Grid container sx={{ width: "161%" }}>
            <Grid xs={1}>
              <img src={Nomad} alt=""></img>
            </Grid>
            <Grid xs={6} className="abc">
              <Typography
                sx={{
                  fontFamily: "Clash Display",
                  fontWeight: "1000",
                  fontSize: "30px",
                  lineHeight: "120%",
                  color: "#25324B",
                  marginLeft: "7%",
                }}
              >
                Social Media Assistant
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Epilogue",
                  fontWeight: "400",
                  fontSize: "22px",
                  lineHeight: "200%",
                  color: "#515B6F",
                  marginLeft: "7%",
                }}
              >
                Nomad {bull}Paris, France{bull} Full-Time
              </Typography>
            </Grid>
            {/* <Grid>
              {" "}
              <ClearOutlinedIcon />
            </Grid> */}
          </Grid>
          <Divider sx={{ marginTop: "3%" }} />
          <form target="/neha" method="GET">
            <Grid sx={{ marginTop: "4%" }}>
              <Typography
                sx={{
                  fontFamily: "Clash Display",
                  fontWeight: "1000",
                  fontSize: "24px",
                  lineHeight: "120%",
                  color: "#25324B",
                }}
              >
                Submit your application
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Epilogue",
                  fontWeight: "400",
                  fontSize: "18px",
                  marginTop: "2%",
                  color: "#7C8493",
                }}
              >
                The following is required and will only be shared with Nomad
              </Typography>
              <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
                <Typography
                  sx={{
                    fontFamily: "Epilogue",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "303%",
                    color: "#515B6F",
                  }}
                >
                  Full Name
                </Typography>
                <OutlinedInput placeholder="Enter your fullname" />
              </FormControl>
              <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
                <Typography
                  sx={{
                    fontFamily: "Epilogue",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "160%",
                    color: "#515B6F",
                  }}
                >
                  Email address
                </Typography>
                <OutlinedInput placeholder="Enter your email address" />
              </FormControl>
              <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
                <Typography
                  sx={{
                    fontFamily: "Epilogue",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "160%",
                    color: "#515B6F",
                  }}
                >
                  Phone number
                </Typography>
                <OutlinedInput placeholder="Enter your phone number" />
              </FormControl>
              <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
                <Typography
                  sx={{
                    fontFamily: "Epilogue",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "160%",
                    color: "#515B6F",
                  }}
                >
                  Current or previous job title
                </Typography>
                <OutlinedInput placeholder="What's your current or previous job title?" />
              </FormControl>
              <Divider sx={{ marginTop: "4%" }} />
              <Typography
                sx={{
                  fontFamily: "Clash Display",
                  fontWeight: "1000",
                  fontSize: "24px",
                  marginTop: "4%",
                  color: "#25324B",
                }}
              >
                Links
              </Typography>
              <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
                <Typography
                  sx={{
                    fontFamily: "Epilogue",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "280%",
                    color: "#515B6F",
                  }}
                >
                  LinkedIn URL
                </Typography>
                <OutlinedInput placeholder="Link to your LinkedIn URL" />
              </FormControl>
              <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
                <Typography
                  sx={{
                    fontFamily: "Epilogue",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "160%",
                    color: "#515B6F",
                  }}
                >
                  Portfolio URL
                </Typography>
                <OutlinedInput placeholder="Link to your Portfolio URL" />
              </FormControl>
              <Divider sx={{ marginTop: "4%" }} />
              <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
                <Typography
                  sx={{
                    fontFamily: "Epilogue",
                    fontWeight: "600",
                    fontSize: "20px",
                    marginTop: "3%",
                    color: "#515B6F",
                  }}
                >
                  Additional information
                </Typography>
                <JoditEditor  config={config}/>
                <Grid
                  container
                  justifyContent="space-between"
                  sx={{ padding: "1%" }}
                >
                  <Grid>
                    <Typography
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "160%",
                        color: "#A8ADB7",
                      }}
                    >
                      Maximum 500 characters
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "160%",
                        color: "#515B6F",
                      }}
                    >
                      0 / 500
                    </Typography>
                  </Grid>
                </Grid>
              </FormControl>

              <Grid
                container
                justifyContent="space-between"
                sx={{ marinTop: "4%" }}
              >
                <Grid sx={{ padding: "2%" }}>
                  <Typography
                    sx={{
                      fontFamily: "Epilogue",
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "160%",
                      color: "#202430",
                    }}
                  >
                    Attach your resume
                  </Typography>
                </Grid>
                <Grid>
                  <label
                    style={{
                      display: "flex",
                    }}
                  >
                    <Input accept="documnet/*" multiple type="file" />
                    <Button
                      sx={{
                        border: "2px dashed #1A50B2",
                        color: "#515B6F",
                        height: "50px",
                        backgroundColor: "#F8F8FD",
                      }}
                      component="span"
                    >
                      Attach Resume/CV
                    </Button>
                  </label>
                </Grid>
              </Grid>
              <Divider sx={{ padding: "1%" }} />
              <Grid sx={{ marginTop: "4%" }}>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{ backgroundColor: "#1A50B2", height: "50px" }}
                >
                  Submit Application
                </Button>
              </Grid>
              <Grid>
                <Typography
                  sx={{
                    fontFamily: "Epilogue",
                    fontWeight: "400",
                    fontSize: "18px",
                    lineHeight: "160%",
                    marginTop: "2%",
                    color: "#515B6F",
                  }}
                >
                  By sending the request you can confirm that you accept our
                  <span style={{ color: "#1A50B2" }}> Terms of Service</span>{" "}
                  and <span style={{ color: "#1A50B2" }}>Privacy Policy</span>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>

      <Grid xs={1}></Grid>
    </Grid>
  );
};

export default Form1;
