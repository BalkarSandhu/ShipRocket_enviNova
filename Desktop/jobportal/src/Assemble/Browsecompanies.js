import Footer from '../Deepak/Footer';
import { Grid } from '@mui/material';
import Nav from '../Deepak/Nav';

import Recommended from '../NehaBhagat1/Recommended';
import StartPosting from '../NehaBhagat1/StartPosting';
import SocialMedia2 from '../Rohan/SocialMedia2';
import CategoriesFinal from '../Vikram/CategoriesFinal';





export default function Browsecompanies() {
    return (
        <Grid>
            <Nav/>
            <SocialMedia2/>
            <Recommended/>
           <StartPosting/>
           <CategoriesFinal/>
            <Footer />
        </Grid>
    )
}