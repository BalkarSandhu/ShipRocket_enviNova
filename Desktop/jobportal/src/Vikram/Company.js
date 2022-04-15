import * as React from 'react';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Techstack from '../NehaBhagat1/Techstack';


export default function MediaCard() {
  return (
    <Grid container>
      <Grid lg={1}></Grid>
      <Grid lg={7} xs={12}>
        <CardContent>
          <Typography gutterBottom variant="h3"
            sx={{
              fontFamily: 'Clash Display',
              fontStyle: 'normal',
              fontWeight: '1000',
              fontSize: '40px',
              lineHeight: '120%'
            }} >
            Company Profile
          </Typography>
          <Typography sx={{
            fontFamily: 'Epilogue',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '160%',
          }}>
            Stripe is a software platform for starting and running internet businesses.
            Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online.
            Stripe has been at the forefront of expanding internet commerce, powering new business models,
            and supporting the latest platforms, from marketplaces to mobile commerce sites.
            We believe that growing the GDP of the internet is a problem rooted in code and design, not finance.
            Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global
            economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.
          </Typography>
        </CardContent>
      </Grid>
      <Grid lg={0.5}></Grid>
      <Grid lg={3.5} xs={12}>
        <Grid item >
         <Techstack/>
        </Grid>
      </Grid>
    </Grid>
  );
}
