import React from 'react';
import Paper from '@mui/material/Paper';
    import { Grid, Typography, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from "../NehaBhagat1/Table";
import People from './People.png';

const Item = styled(Paper)(({ theme }) => ({

    padding: theme.spacing(1),
    textAlign: 'left',
    boxShadow: "none"
}));
const Item1 = styled(Paper)(({ theme }) => ({

    padding: theme.spacing(1),
    textAlign: 'right',
    boxShadow: "none"

}));


const Content1 = () => {
    return (
        <Grid container xs={12}>
           
            <Grid item xs={12} lg={12} >
                <Item sx={{ border: " 1px solid #D6DDEB" }} >
                    <Grid display={'flex'} marginLeft={'3%'} padding={'3%'}>
                        <Grid>
                            <Typography variant='h3' fontFamily={'poppins'} color={'#25324B'}><b>Jerome Bell</b></Typography>
                            <Typography variant='h5' fontFamily={'poppins'} color={'#25324B'}><b>Product Designer</b></Typography><br />


                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>Experience</Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}> <b>Senior UI/UX Product Designer</b></Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}>Enterprise name</Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}>Aug 2018 - Present - 1 year, Paris</Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}>Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.</Typography><br />

                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}><b>UI/UX Product Designer</b></Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}></Typography>Enterprise name
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}>Aug 2013 - Aug 2018 - 5 years, Paris</Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}>Lead the UI design with the accountability of the design system, collaborated with product and development teams on core projects to improve product interfaces and experiences.</Typography><br />

                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}><b>UI Designer</b></Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}>Enterprise name</Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}>Aug 2012 - jul 2013 - 1 year, Paris
                                Designed mobile UI applications for Orange R&D departement, BNP Paribas, La Poste, Le Cned...</Typography><br />

                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}><b>Graphic Designer</b></Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}>Enterprise name</Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}>Sept 2010 - jul 2012 - 2 years, Paris</Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}>Designed print and web applications for Pau Brasil, Renault,
                                Le théatre du Mantois, La mairie de Mantes la Ville...
                            </Typography><br />

                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>Education</Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}><b>Bachelor European in Graphic Design</b></Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}>School name</Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}>2009 - 2010, Bagnolet</Typography><br />

                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}><b>BTS Communication Visuelle option Multimédia</b></Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}>School name</Typography>
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#25324B'}>2007 - 2009, Bagnolet</Typography>


                        </Grid>
                        <Grid >
                            <img src={People} alt={''} /><br/><br/>
                        <Typography variant ='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>jeromebell@gmail.com</Typography>
                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>+44 1245 572 135</Typography>
                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>Vernouillet</Typography><br/>

                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>Industry Knowledge</Typography>
                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>Product Design</Typography>
                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>User Interface</Typography>
                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>User Experience</Typography>
                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>Interaction Design</Typography>
                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>Wireframing</Typography>
                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>Rapid Prototyping</Typography>
                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>Design Research</Typography><br/>

                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>Tools & Technologies</Typography>
                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>Figma, Sketch, Protopie, Framer, Invision, Abstract, Zeplin, Google Analytics, Amplitude, Fullstory...</Typography><br/>

                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>Other Skills</Typography>
                       <Typography Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>HTML, CSS, jQuery</Typography>
                       <Typography Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>HTML, CSS, jQuery</Typography><br/>

                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>Languages</Typography>
                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>French (native)</Typography>
                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>English (professionnal)</Typography><br/>

                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>Social</Typography>
                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>yoursite.com</Typography>
                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>linkedin.com/in/yourname</Typography>
                        <Typography variant='body2' fontFamily={'poppins'} fontSize={'18px'} color={'#7C8493'}>dribbble.com/yourname</Typography><br/>

                        </Grid>
                    </Grid>

                </Item>
            </Grid>

        </Grid>
    )
}

export default Content1