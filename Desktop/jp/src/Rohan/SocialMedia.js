import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Box, Paper, Typography, Modal } from '@mui/material';
import Desktop from './Desktop.png';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import ShareIcon from '@mui/icons-material/Share';
import Logo from './Logo.png';
import Form1 from '../NehaBhagat1/Form1';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '50%',
    maxHeight: '50%',
});
const style1 = {

    marginLeft: '300px',

    width: '50%',
    backgroundColor: "#0D0B41",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    // overflow:'scroll',
};

const SocialMedia = ({jobTitle,location,employmentType}) => {
    console.log(jobTitle)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (

        <Paper padding={'20px'} sx={{ marginTop: '10px' }} >
            <Grid container xs={12} lg={12} sx={{ background: `url(${Desktop})`, }}>
                <Grid xs={12} lg={1} />
                <Grid container item marginBottom={'20px'} >
                    <Grid padding={'40px'} marginTop={'40px'} marginLeft={'20px'}><Typography variant='body2' fontFamily={'Poppins'} alignItems={'center'} marginLeft={'50px'} fontSize={'19px'}>Home / Companies / Nomad / Social Media Assistant</Typography>
                    </Grid>
                    <Grid container item sx={{ width: "200%", padding: "30px", marginTop: "-30px" }}>
                        <Paper
                            sx={{
                                p: 2,
                                margin: 'auto',
                                maxWidth: 1000,
                                flexGrow: 1,
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Grid container item spacing={2}>
                                <Grid item xs={10} lg={1.5} >

                                    <img alt="" src={Logo} />

                                </Grid>
                                <Grid item xs={10} lg={9} container>
                                    <Grid item container spacing={2}>
                                        <Grid item xs={6} sm={8} >
                                            <Typography variant="body2" gutterBottom fontFamily={'Poppins'} fontSize={'25px'}>
                                                <b>{jobTitle}</b>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" fontFamily={'Poppins'} fontSize={'15px'}>
                                                   {location}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" fontFamily={'Poppins'} fontSize={'15px'}>
                                                   {employmentType}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1} sm={1}>
                                            <Typography component="div" sx={{ marginTop: "20px" }}>
                                                < ShareIcon fontSize='large' />
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3} sm={2}>
                                            <Typography component="div" sx={{ marginTop: "20px", marginLeft: "30px" }}>
                                                <Button onClick={handleOpen} variant='contained' fontFamily={'Poppins'}>Apply</Button>
                                            </Typography>

                                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                                sx={{ overflowY: "scroll" }}
                                            >
                                                <Box sx={style1}>
                                                    <Form1 />
                                                </Box>
                                            </Modal>
                                        </Grid>
                                    </Grid>


                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
};

export default SocialMedia