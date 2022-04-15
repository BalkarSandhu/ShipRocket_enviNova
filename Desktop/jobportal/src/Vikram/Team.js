import React from 'react';
import {Card , Grid} from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import { Avatar as AvatarOne, CardMedia} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Spotlight(props) {


    let {  title , Avatar , subTitle } = props
    const titleComp = (
      <p style={{
        marginTop: "4px",
        marginBottom: "4px",
        paddingTop: "0px", paddingBottom: "0px"
      }}>{title.split("\n").map((item, index)=>{
        return (
          <p style={{
            paddingTop: 0, paddingBottom: 0,
            marginTop: 0, marginBottom: 0
          }}>{item}</p>
        )
      })}</p>
    )

  return (
    <Card sx={{minWidth: 220, minHeight: 230, margin: 1 , textAlign:"center" , justifyContent: "center" }}>
      <CardMedia style={{ justifyContent: "center", display: "flex" , marginTop:"15px"}} >
        <AvatarOne src={Avatar} alt= '' 
        style={{
          height: "70px",
          width: "70px",   
        }}/>  
      </CardMedia>
      
      <CardHeader
        title={titleComp}
        subheader={subTitle}
        >
          </CardHeader>
          <InstagramIcon/> <LinkedInIcon/>
    </Card>
  );
}