import React from "react";
import { Box, Grid, Typography, Button, Divider } from "@mui/material";
import JoditEditor from "jodit-react";




const Step2 = () => {
    
  const arr = [
    {
      title: "Job Descriptions",
      description: "Job titles must be describe one position",
    },
    {
      title: "Responsibilities",
      description: "Outline the core responsibilities of the position",
    },
    {
      title: "Who You Are",
      description: "Add your preferred candidates qualifications",
    },
    {
      title: "Nice-To-Haves",
      description:
        "Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply",
    },
  ];
  return (
    <Box sx={{ padding: "2%" }}>
      <Box>
        <Grid container xs={12}>
          <Grid item>
            <Typography
              sx={{
                fontFamily: "Epilogue",
                fontWeight: "600",
                fontSize: "22px",
                lineHeight: "160%",
                color: "#25324B",
              }}
            >
              Details
            </Typography>
            <Typography
              sx={{
                fontFamily: "Epilogue",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "160%",
                color: "#515B6F",
              }}
            >
              Add the description of the job, responsibilities, who you are, and
              nice-to-haves.
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ marginTop: "2%" }} />
      </Box>

      <Box sx={{ marginTop: "2%" }}>
        {arr.map((item, index) => {
          return (
              <>
            <Grid container>
              <Grid item xs={12} lg={2}>
                <Typography
                  sx={{
                    fontFamily: "Epilogue",
                    fontWeight: "600",
                    fontSize: "22px",
                    lineHeight: "160%",
                    color: "#25324B",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Epilogue",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "160%",
                    color: "#515B6F",
                  }}
                >
                  {item.description}
                </Typography>
              </Grid>
              <Grid item xs={0.8}></Grid>

              <Grid item xs={12} lg={9.2}>
                <Box sx={{ marginTop: "2%", width: "100%" }}>
                  <JoditEditor />
                </Box>
               
              </Grid>
              
            </Grid>
             <Divider sx={{marginTop:'2%'}}/>
             </>
          );
        })}
      </Box>

      
      <Box sx={{ justifyContent: "flex-end", display: "flex" }}>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            marginTop: "1%",
            borderRadius: "0%",
          }}
        >
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default Step2;
