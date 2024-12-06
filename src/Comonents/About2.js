import React from 'react';
import check from "../assets/images/check.svg";
import plus from "../assets/images/plus.svg";
import calender from "../assets/images/calender.svg";
import one from "../assets/images/one.png";
import two from "../assets/images/two.png";
import three from "../assets/images/three.png";
import "./App.css";
import {
    Container,
    Card,
    CardContent,
    Typography,
    Grid,
    Box
} from '@mui/material';

const About2 = () => {
    return (
        <Container sx={{ marginTop: '65px', paddingTop: '50px', paddingBottom: '50px', backgroundColor: '#F8F9FA' }}>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Box sx={{ display: 'flex', gap: '3px', backgroundColor: '#ffffff', justifyContent: 'center', borderRadius: '50px', paddingTop: '5px ', paddingInline: '8px', width: 'max-content' }}>
                        <div style={{ width: '20%' }}><img src={check} alt='check' style={{ width: '100%' }} /></div>
                        <div style={{ width: '20%' }}><img src={plus} alt='plus' style={{ width: '100%' }} /></div>
                        <div style={{ width: '20%' }}><img src={calender} alt='calender' style={{ width: '100%' }} /></div>
                    </Box>
                    <Typography variant="h2"
                        sx={{ marginBottom: 4, fontSize: "42px", fontWeight: "bold" }}>
                        Tackle your to-dos
                    </Typography>
                </Grid>
                {/* First Card */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ backgroundColor: 'transparent', textAlign: 'center', boxShadow: 'none' }}>
                        <CardContent>
                            <img src={one} alt='one' style={{ width: '100%' }} />
                            <Typography variant="h6" component="div" sx={{ margin: '10px 0', fontWeight: 'bold' }}>
                                Add a task
                            </Typography>
                            <Typography variant="p" sx={{ color: "gray"}}>
                                Add your task from right in Google Calendar,
                                Gmail, or the Google Tasks app.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Second Card */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ backgroundColor: 'transparent', textAlign: 'center', boxShadow: 'none' }}>
                        <CardContent>
                            <img src={two} alt='two' style={{ width: '100%' }} />
                            <Typography variant="h6" component="div" sx={{ margin: '10px 0', fontWeight: 'bold' }}>
                                Set a due date
                            </Typography>
                            <Typography variant="p" sx={{ color: "gray"}}>
                                Add your task from right in Google Calendar,
                                Gmail, or the Google Tasks app.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Third Card */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ backgroundColor: 'transparent', textAlign: 'center', boxShadow: 'none' }}>
                        <CardContent>
                            <img src={three} alt='three' style={{ width: '100%' }} />
                            <Typography variant="h6" component="div" sx={{ margin: '10px 0', fontWeight: 'bold' }}>
                                Check it off
                            </Typography>
                            <Typography variant="p" sx={{ color: "gray"}}>
                                Add your task from right in Google Calendar,
                                Gmail, or the Google Tasks app.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default About2;
