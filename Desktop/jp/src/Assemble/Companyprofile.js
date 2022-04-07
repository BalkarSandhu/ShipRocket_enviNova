import Home from '../Vikram/Home';
import Company from '../Vikram/Company';
import Perks from '../Vikram/Perks';
import Teamfinal from '../Vikram/Teamfinal';
import Jobs from '../Vikram/Jobs';
import Footer from '../Deepak/Footer';
import Contact from '../NehaBhagat1/Contact';
import { Grid } from '@mui/material';
import Nav from '../Deepak/Nav';
import Similarjobs from '../Deepak/Similarjobs'



export default function Companyprofile() {
    return (
        <Grid>
            <Nav/>
            <Home/>
            <Company />
            <Contact />
            <Teamfinal />
            <Perks />
           <Similarjobs/>
            <Footer />
        </Grid>
    )
}