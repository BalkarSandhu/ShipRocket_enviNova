import Footer from '../Deepak/Footer';
import { Grid } from '@mui/material';
import Nav from '../Deepak/Nav';
import SocialMedia from '../Rohan/SocialMedia';
import Perks from '../Vikram/Perks';
import Stripe from '../Rohan/Stripe';
import Similarjobs from '../Deepak/Similarjobs';
import Description from '../NehaBhagat1/Description';
import { useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react';



export default function Jobdescription() {
    const location = useLocation();
    const data=(location.state.item);

    return (
        <Grid>
            <Nav/>
            <SocialMedia jobTitle={data.jobTitle}
            location={data.location}
            employmentType={data.employmentType}
            />
            <Description description={data.jobDescription}
            salary={data.salary}/>
            <Perks/>
            <Stripe/>
            <Similarjobs/>
            <Footer />
        </Grid>
    )
}