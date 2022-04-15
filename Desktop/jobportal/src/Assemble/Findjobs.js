import Footer from '../Deepak/Footer';
import { Grid } from '@mui/material';
import Nav from '../Deepak/Nav';
import Jobsearch from '../Deepak/Jobsearch'
import SocialMedia1 from '../Rohan/SocialMedia1';



export default function Findjobs() {
    return (
        <Grid>
            <Nav/>
            <SocialMedia1/>
            <Jobsearch/>
            <Footer />
        </Grid>
    )
}