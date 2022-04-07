import { Card, Grid, ImageList } from "@mui/material";
import Spotlight from "../Vikram/Team";
import Team from './Team.png';
import Team2 from './Team2.png';
import Team3 from './Team3.png';
import Team4 from './Team4.png';
import Team5 from './Team5.png';
import Typography from '@mui/material/Typography';
import './style.css';


export default function Teamfinal() {

    let arr = []
    let c1 = {
        Avatar: Team,
        title: "Célestin Gardinier",
        subTitle: "CEO & Co-Founder"
    }
    let c2 = {
        Avatar: Team2,
        title: " Reynaud Colbert",
        subTitle: "Co-Founder"
    }
    let c3 = {
        Avatar: Team3 ,
        title: "Arienne Lyon",
        subTitle: "Managing Director"
    }
    let c4 = {
        Avatar:  Team4,
        title: "Bernard Alexander",
        subTitle: "Managing Director"
    }
    let c5 = {
        Avatar:  Team5,
        title: "Christine Jhonson",
        subTitle: "Managing Director"
    }



    for (let i = 0; i < 1; i++) {
        arr.push(c1)
        arr.push(c2)
        arr.push(c3)
        arr.push(c4)
        arr.push(c5)


    }

    return (
        <>
            <Card sx={{ border: "none", boxShadow: "none", p:2,pt:5 ,marginTop:'50px'}}>
                <Grid container>
                    <Grid item xs={0.8} ></Grid>
                    <Grid item xs={10.2}>
                        <Typography variant='h3' fontFamily={'Poppins'}>Team</Typography>
                        <Grid sx={{ border: "none", boxShadow: "none" }}>
                            <ImageList className='scroll' sx={{ display: "flex" }}>
                                {arr.map((val, index) => {
                                    return <Spotlight key={index} Avatar={val.Avatar} title={val.title} subTitle={val.subTitle} />
                                }
                                )
                                }
                            </ImageList>
                        </Grid>
                        </Grid>
                </Grid>
            </Card>
        </>


    );
}