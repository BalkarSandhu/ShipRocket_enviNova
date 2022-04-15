import React, { useState } from "react";
import { Box, Grid, Typography, Button, Card, Divider, IconButton,TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from '@mui/icons-material/Clear';
import I1 from "../Vikram/I1.png";
import I2 from "../Vikram/I2.png";
import I3 from "../Vikram/i3.png";
import I4 from "../Vikram/I4.png";
import CloseIcon from "@mui/icons-material/Close";
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Input = styled('input')({
  display: 'none',
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 276,
  bgcolor: 'background.paper',
  border: '1px solid white',
  boxShadow: 24,
  p: 4,
};
const Step3 = () => {
  const navigate = useNavigate();
  const [ imgsrc, setImgsrc] = useState('')
  const [name, setName] = useState('')
  const [description , setDescription]= useState('')
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const arr = ;
  const [arr, setArr] = useState([
    {
      imgsrc: I1,
      name: "Full Healthcare",
      description:
        "We believe in thriving communities and that starts with our team being happy and healthy.",
    },
    {
      imgsrc: I2,
      name: "Unlimited Vacation",
      description:
        "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
    },
  
   
  ])
  return (
    <Box sx={{ margin: '1% 5%' }}>
      <Box>
        <Grid container >
          <Grid item >
            <Typography
              sx={{
                fontFamily: "Epilogue",
                fontWeight: "600",
                fontSize: "22px",
                lineHeight: "160%",
                color: "#25324B",
              }}
            >
              Basic Information
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
              List out your top perks and benefits.
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ marginTop: "2%" }} />
      </Box>
      <Box sx={{ marginTop: "2%" }}>
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
              Perks and Benefits
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
              Encourage more people to apply by sharing the attractive rewards
              and benefits you offer your employees
            </Typography>
          </Grid>
          <Grid item xs={0.8}></Grid>

          <Grid item xs={12} lg={9.2}>
            <Button
              variant="outlined"
              onClick={handleOpen}
              sx={{
                textTransform: "capitalize",
                fontSize: "1rem",
                border: "1px solid #D6DDEB",
                marginTop: "2%",
              }}
            >
              <AddIcon sx={{ fontSize: "1.5rem" }} />
              Add Benefit
            </Button>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography  variant="h5"
                      fontFamily={"Poppins"}>
             Add Benefit
          </Typography>
          <Divider/>
         
        <form >
           <label >
          <Input accept="image/*"  multiple type="file" onChange={e=>setImgsrc(e.target.files[0])}/>
        <Button variant="outlined"
        component="span"
         sx={{
                textTransform: "capitalize",
                fontSize: "1rem",
                border: "1px solid #D6DDEB",marginTop:'6%'}}>Upload Icon</Button>
        </label>
        < Typography variant="h6"
                      fontFamily={"Poppins"}
                      color={"#25324B"}
                      marginTop={"2%"}>
        Benefit
        </Typography>
        <TextField fullWidth value={name} onChange={e=>setName(e.target.value)}/>
        < Typography variant="h6"
                      fontFamily={"Poppins"}
                      color={"#25324B"}
                      marginTop={"2%"}>
        Description
        </Typography>
        <TextField fullWidth value={description} onChange={e=>setDescription(e.target.value)}/>
        <Divider sx={{marginTop:'6%'}}/>
        <Box sx={{justifyContent:"flex-end",display:'flex'}}>
        <Button variant="contained" sx={{textTransform:'capitalize',marginTop:'4%',borderRadius:'0%'}} onClick={()=>{
          let newArr = [...arr]
          newArr.push( {
            imgsrc: URL.createObjectURL(imgsrc),
            name: name,
            description:description
          })
          setArr(newArr)
        }}>Save</Button></Box>
        </form>
        </Box>
       </Modal>
            <Box sx={{ marginTop: "2%", width: "100%" }}>
              {arr.map((item, index) => {
                return (
                  <Card
                  
                    sx={{
                      width: "250px",
                      height: "195px",
                      padding: "1%",
                      borderRadius: "0%",
                      border: "1px solid #D6DDEB",
                      marginRight: "24px",
                      marginBottom: "24px",
                      display: "inline-block",
                    }}
                  >
                    <Box
                      sx={{ justifyContent: "space-between", display: "flex" }}
                    >
                      <img src={item.imgsrc} alt={""} style={{ }} />
                      <IconButton sx={{ color: "#1A50B2" }} onClick={() => {
                    let newarr = [...arr]
                    newarr.splice(index, 1)
                    setArr(newarr)
                }}>
                    <ClearIcon />
                </IconButton>
                    </Box>

                    <Typography
                      variant="h5"
                      fontFamily={"Poppins"}
                      sx={{ marginTop: "4%" }}
                    >
                      {item.name}
                    </Typography>
                    <br />
                    <Typography
                      variant="h7"
                      fontFamily={"Poppins"}
                      color={"#515B6F"}
                    >
                      {item.description}
                    </Typography>
                    
                  </Card>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Grid container sx={{ marginY: '1%' }}>
        <Grid item xs={7} lg={10}>
          <Button variant='contained'
            sx={{
              borderRadius: '0px', backgroundColor: '#1a50b2',
              ':hover': { color: '#1a50b2', backgroundColor: 'white' }
            }}
            onClick={() => navigate('/step2')}
          >Back</Button>
        </Grid>

        <Grid item xs={5} lg={2} >
          <Button variant='contained'
            sx={{
              borderRadius: '0px', backgroundColor: '#1a50b2',
              ':hover': { color: '#1a50b2', backgroundColor: 'white' }
            }}
          >Do a Review</Button></Grid></Grid>
    </Box>
  );
};

export default Step3;
