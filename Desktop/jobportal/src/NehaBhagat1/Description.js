import { Typography, Grid, Box, Divider } from "@mui/material";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Description = ({description,salary}) => {

  const arr = [{
    Description: 'Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.',
    resposibilities: [{ reponsibility: ' Community engagement to ensure that is supported and actively represented online' },
    { reponsibility: 'Focus on social media content development and publication ' },
    { reponsibility: 'Marketing and strategy support' },
    { reponsibility: 'Stay on top of trends on social media platforms, and suggest content ideas to the team' },
    { reponsibility: 'Engage with online communities' }],
    whoeareyou: [{ who: 'You get energy from people and building the ideal work environment' },
    { who: 'You have a sense for beautiful spaces and office experiences' },
    { who: 'You are a confident office manager, ready for added responsibilities' },
    { who: 'You are detail-oriented and creative' },
    { who: 'You are a growth marketer and know how to run campaigns' }],
    nicetohaves: [{ nice: 'Fluent in English' },
    { nice: 'Project management skills' },
    { nice: 'Copy editing skills' }],
    requiredskills: [{ skill: 'Project Management' },
    { skill: 'Copywriting' },
    { skill: 'Social Media Marketing' },
    { skill: 'English' },
    { skill: 'Copy Editing' },]
  }]
  return (
    <Grid container xs={12} display={"flex"} sx={{ marginTop: '90px' }}>

      <Grid sm={0.5} />
      <Grid xs={12} sm={7} >
        {" "}
        {arr.map((item) => {
          return (
            <Box key={item.Description}>
              <Grid item>
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontWeight: "600",
                    fontSize: "32px",
                    lineHeight: "120%",
                    color: "#25324B",
                  }}
                >
                  Description
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
                  {description}
                </Typography>
              </Grid>
              <Grid item sx={{ marginTop: "4%" }}>
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontWeight: "600",
                    fontSize: "32px",
                    lineHeight: "120%",
                    color: "#25324B",
                  }}
                >
                  Responsibilities
                </Typography>
                {item.resposibilities.map((item1) => {
                  return (
                    <Grid item sx={{ display: "flex" }}>


                      <CheckCircleOutlineIcon
                        sx={{ color: "#56CDAD", width: "0.7em", height: "1em" }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Epilogue",
                          fontWeight: "400",
                          fontSize: "16px",

                          color: "#515B6F",
                          marginLeft: "1%",
                        }}
                      >
                        {item1.reponsibility}
                      </Typography>
                    </Grid>)
                })}
              </Grid>
              <Grid item sx={{ marginTop: "4%" }}>
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontWeight: "600",
                    fontSize: "32px",
                    lineHeight: "120%",
                    color: "#25324B",
                  }}
                >
                  Who You Are
                </Typography>
                {item.whoeareyou.map((item2) => {
                  return (<Grid sx={{ display: "flex" }}>
                    <CheckCircleOutlineIcon
                      sx={{ color: "#56CDAD", width: "0.7em", height: "1em" }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "400",
                        fontSize: "16px",

                        color: "#515B6F",
                        marginLeft: "1%",
                      }}
                    >
                      {item2.who}
                    </Typography>
                  </Grid>)
                })}
              </Grid>
              <Grid item sx={{ marginTop: "4%" }}>
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontWeight: "600",
                    fontSize: "32px",
                    lineHeight: "120%",
                    color: "#25324B",
                  }}
                >
                  Nice-To-Haves
                </Typography>
                {item.nicetohaves.map((item3) => {
                  return (<Grid sx={{ display: "flex" }}>
                    <CheckCircleOutlineIcon
                      sx={{ color: "#56CDAD", width: "0.7em", height: "1em" }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "400",
                        fontSize: "16px",

                        color: "#515B6F",
                        marginLeft: "1%",
                      }}
                    >
                      {item3.nice}
                    </Typography>
                  </Grid>)
                })}
              </Grid>
            </Box>)
        })}
      </Grid>
      <Grid sm={0.5} />
      <Grid xs={12} sm={3.5}>
        {" "}{arr.map((item) => {
          return (
            <Box key={item.Description}>
              <Box>
                <Grid item>
                  <Typography
                    sx={{
                      fontFamily: "Clash Display",
                      fontWeight: "600",
                      fontSize: "32px",
                      lineHeight: "120%",
                      color: "#25324B",
                    }}
                  >
                    About this role
                  </Typography>
                  <Grid sx={{ marginTop: "20px", backgroundColor: "#F8F8FD" }}>
                    <Typography
                      sx={{ color: "#7C8493", fontSize: "14px", marginLeft: "1%" }}
                    >
                      <b>3 applied</b> of 10 capacity
                    </Typography>
                    <progress
                      value="3"
                      max={"10"}
                      style={{
                        width: "80%",
                        height: "12px",
                        marginLeft: "1%",
                        marginBottom: "1%",
                      }}
                    ></progress>
                  </Grid>
                  <Grid
                    item
                    display={"flex"}
                    justifyContent="space-between"
                    sx={{ marginTop: "2%" }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#515B6F",
                      }}
                    >
                      Apply Before
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#25324B",
                      }}
                    >
                      July 31, 2021
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    display={"flex"}
                    justifyContent="space-between"
                    sx={{ marginTop: "2%" }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#515B6F",
                      }}
                    >
                      Job Posted On
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#25324B",
                      }}
                    >
                      July 1, 2021
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    display={"flex"}
                    justifyContent="space-between"
                    sx={{ marginTop: "2%" }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#515B6F",
                      }}
                    >
                      Job Type
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#25324B",
                      }}
                    >
                      Full-Time
                    </Typography>
                  </Grid>{" "}
                  <Grid
                    item
                    display={"flex"}
                    justifyContent="space-between"
                    sx={{ marginTop: "2%" }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#515B6F",
                      }}
                    >
                      Salary
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#25324B",
                      }}
                    >
                      {salary} INR
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ marginTop: "3%" }} />
                <Grid item sx={{ marginTop: "3%" }}>
                  <Typography
                    sx={{
                      fontFamily: "Clash Display",
                      fontWeight: "600",
                      fontSize: "32px",
                      lineHeight: "120%",
                      color: "#25324B",
                    }}
                  >
                    Categories
                  </Typography>
                  <Grid item display={"flex"} sx={{ marginTop: "2%" }}>
                    <Box
                      sx={{
                        marginLeft: "10px",
                        borderRadius: "80px",
                        border: "1px solid #FFB836",
                        width: "80px",
                        height: "30px",
                        color: "#FFB836",
                        textAlign: "center",
                        backgroundColor: "rgba(235, 133, 51, 0.1)",
                      }}
                    >
                      <Typography sx={{ fontSize: "15px", marginTop: "3px" }}>
                        Marketing
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        marginLeft: "10px",
                        borderRadius: "80px",
                        border: "1px solid #56CDAD",
                        width: "80px",
                        height: "30px",
                        color: "#56CDAD",
                        textAlign: "center",
                        backgroundColor: "rgba(86, 205, 173, 0.1)",
                      }}
                    >
                      <Typography sx={{ fontSize: "15px", marginTop: "3px" }}>
                        Design
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Divider sx={{ marginTop: "3%" }} />
                <Grid item sx={{ marginTop: "3%" }}>
                  <Typography
                    sx={{
                      fontFamily: "Clash Display",
                      fontWeight: "600",
                      fontSize: "32px",
                      lineHeight: "120%",
                      color: "#25324B",
                    }}
                  >
                    Required Skills
                  </Typography>
                  <Grid item container xs={12} sm={12}>
                    {item.requiredskills.map((item4) => {
                      return (
                        <Grid item xs={6} sm={5}
                          sx={{
                            marginLeft: '5px', marginBottom: '6px',marginTop:"6px",


                            backgroundColor: "#F8F8FD",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Epilogue",
                              fontWeight: "400",
                              fontSize: "16px",
                              color: "#1A50B2",
                              textAlign: "center",
                            }}
                          >
                            {item4.skill}
                          </Typography>
                        </Grid>
                      )
                    })}</Grid>
                </Grid>
              </Box>
            </Box>)
        })}
      </Grid>
    </Grid>
  );
};

export default Description;
