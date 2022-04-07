import { Card, Grid, ImageList, Icon, Box, Typography, ButtonBase } from "@mui/material";

import CodeOffSharpIcon from '@mui/icons-material/CodeOffSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import { useState } from "react";
import DesignServicesSharpIcon from '@mui/icons-material/DesignServicesSharp';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import FolderCopySharpIcon from '@mui/icons-material/FolderCopySharp';
import './style.css';
import pen from '../NehaBhagat1/img/pen.png';
import H1 from '../NehaBhagat1/images/H1.png';
import H2 from '../NehaBhagat1/images/H2.png';
import H3 from '../NehaBhagat1/images/H3.png';
import H4 from '../NehaBhagat1/images/H4.png';
import H5 from '../NehaBhagat1/images/H5.png';
import H6 from '../NehaBhagat1/images/H6.png';
import H7 from '../NehaBhagat1/images/H7.png';
import H8 from '../NehaBhagat1/images/H8.png';

export default function CategoriesFinal() {
    const [no, setNo] = useState(0)
    const [arr, setarr] = useState([{
        icon: DesignServicesSharpIcon, title: "Design", display: 'none', subpart: [
            { imgsrc: H1, name: 'Pentagram', jobs: '3 Jobs', display: 'none' },
            { imgsrc: H2, name: 'Wolff Olins', jobs: '3 Jobs', display: 'none' }]
    },
    {
        icon: FolderCopySharpIcon, title: "Fintech", display: 'none', subpart: [
            { imgsrc: H6, name: 'Square', jobs: '3 Jobs', display: 'none' },
            { imgsrc: H3, name: 'Clay', jobs: '3 Jobs', display: 'none' }]
    },
    {
        icon: LanguageSharpIcon, title: "Hosting", display: 'none', subpart: [
            { imgsrc: H4, name: 'MediaMonks', jobs: '3 Jobs', display: 'none' },
            { imgsrc: H5, name: 'Packer', jobs: '3 Jobs', display: 'none' }]
    },
    {
        icon: BusinessCenterSharpIcon, title: "Business Service", display: 'none', subpart: [
            { imgsrc: H8, name: 'WebFlow', jobs: '3 Jobs', display: 'none' }]
    },
    {
        icon: CodeOffSharpIcon, title: "Developer", display: 'none', subpart: [
            { imgsrc: H2, name: 'Wolff Olins', jobs: '3 Jobs', display: 'none' },
            { imgsrc: H7, name: 'Divy', jobs: '3 Jobs', display: 'none' }]
    }
    ])


    const [vArr, setVArr] = useState([])
    return (
        <Grid container xs={12} lg={12} marginTop='40px' marginBottom={'30px'}>
            <Grid item xs={12} lg={12} container>
                <Grid item lg={1} />
                <Grid item xs={12} lg={10}>
                    <Typography sx={{ fontWeight: "600", fontSize: "32px", lineHeight: "120% ", fontFamily: 'Clash Display', color: "#25324B" }}>Companies by Category</Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={12} container >
                <Card sx={{ border: "none", boxShadow: "none", p: 2, pt: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <ImageList className='scroll' sx={{ display: "flex" }}>
                        {arr.map((item, index) => {

                            return (<Grid container>
                                <Grid container sx={{ margin: 2, boxShadow: "1px 1px 1px 1px #888888" }} className="profile">
                                    <ButtonBase onClick={() => {
                                        let newarr = [...arr]
                                        newarr.forEach((item, itemindex) => {
                                            if (itemindex === index) {
                                                item.display = 'flex'
                                            } else {
                                                item.display = "none"
                                            }
                                        })
                                        setarr(newarr)
                                        setVArr(item.subpart)
                                        setNo(item.subpart.length)
                                    }} sx={{ minWidth: 250, minHeight: 130 }}>
                                        <Grid sx={{ textAlign: "center" }}>
                                            <span >
                                                <item.icon sx={{ fontSize: "48px" }} />
                                            </span>
                                            <Typography sx={{ fontWeight: "600", fontSize: "20px", lineHeight: "120% ", fontFamily: 'Clash Display' }}>{item.title}</Typography>
                                        </Grid>
                                    </ButtonBase>

                                </Grid>

                            </Grid>)
                        })}
                    </ImageList>
                </Card>
            </Grid>
            <Grid item xs={12} lg={12} container >
                <Grid item xs={12} lg={10} container>
                    <Grid lg={1} />
                    {
                        no > 0?(<Grid item xs={12} lg={10} display={'flex'}>
                        <Icon sx={{ marginRight: '5px', marginTop: '5px' }}><img src={pen} alt="" /></Icon><Typography variant="h5" >{no}</Typography>
                        <Typography variant='h5' fontFamily={'Poppins'} marginLeft="1%"> Results</Typography>
                    </Grid>) : null
                    }
                </Grid>

                <Grid item xs={12} lg={10} container marginLeft={'20px'}>
                    <Grid sx={{ display: "flex",marginTop:"20px" }}>

                        {vArr.map((item1) => {

                            return (
                                <Grid item lg={12} xs={12} marginRight={'20px'} >
                                    <Card sx={{ width: '246px', height: '214px', border: '1px solid #D6DDEB', display: "flex",justifyContent: 'center', flexDirection: "column", alignItems: "center", marginTop: '2%' }}>
                                        <img src={item1.imgsrc} alt="" style={{ marginBottom: '8%' }} />
                                        <Typography sx={{
                                            fontFamily: 'Clash Display', fontWeight: '600',
                                            fontSize: '24px',
                                            lineHeight: '120%',
                                            color: '#25324B',
                                            textAlign: "center"
                                        }}>{item1.name}</Typography>
                                        <Box sx={{ backgroundColor: '#F8F8FD', width: '24%', height: '10%', marginTop: '4%' }}>
                                            <Typography sx={{ color: '#4640DE', marginLeft: '11%' }}>{item1.jobs}</Typography>
                                        </Box>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>

                </Grid>
            </Grid>


        </Grid>


    );
}