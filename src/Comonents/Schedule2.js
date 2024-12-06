import React from 'react';
import four from "../assets/images/four.png";
import five from "../assets/images/five.png";
import six from "../assets/images/six.png";
import premium from "../assets/images/premium.svg";
import info from "../assets/images/info.svg";
import "./App.css";
import {
    Container,
    Card,
    CardContent,
    Typography,
    Grid,
    Box,
} from '@mui/material';

const Schedule2 = () => {
    return (
        <Container sx={{ marginTop: '65px'}}>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Typography variant="h2"
                        sx={{ marginBottom: 4, fontSize: "42px", fontWeight: "bold" }}>
                        Simplify your day
                    </Typography>
                </Grid>
                {/* First Card */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ backgroundColor: 'transparent', textAlign: 'center', boxShadow: 'none' }}>
                        <CardContent>
                            <img src={four} alt='four' style={{ width: '100%' }} />
                            <Box sx={{ marginBottom: '10px', marginTop: '20px', display: 'flex', gap: '3px', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', gap: '3px', backgroundColor: '#E8F0FE', borderRadius: '50px', paddingInline: '10px', width: 'max-content' }}>
                                    <img src={premium} alt='premium' /><div><small style={{ color: 'blue' }}>Premium feature</small></div>
                                </div>
                                <img src={info} alt='info' />
                            </Box>
                            <Typography variant="h6" component="div" sx={{ margin: '10px 0', fontWeight: 'bold' }}>
                                RSVP options
                            </Typography>
                            <Typography variant="p" sx={{ color: "gray" }}>
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
                            <img src={five} alt='five' style={{ width: '100%' }} />
                            <Box sx={{ marginBottom: '10px', marginTop: '20px', display: 'flex', gap: '3px', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', gap: '3px', backgroundColor: '#E8F0FE', borderRadius: '50px', paddingInline: '10px', width: 'max-content' }}>
                                    <img src={premium} alt='premium' /><div><small style={{ color: 'blue' }}>Premium feature</small></div>
                                </div>
                                <img src={info} alt='info' />
                            </Box>
                            <Typography variant="h6" component="div" sx={{ margin: '10px 0', fontWeight: 'bold' }}>
                                Working location
                            </Typography>
                            <Typography variant="p" sx={{ color: "gray" }}>
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
                            <img src={six} alt='six' style={{ width: '100%' }} />
                            <Box sx={{ marginBottom: '10px', marginTop: '20px', display: 'flex', gap: '3px', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', gap: '3px', backgroundColor: '#E8F0FE', borderRadius: '50px', paddingInline: '10px', width: 'max-content' }}>
                                    <img src={premium} alt='premium' /><div><small style={{ color: 'blue' }}>Premium feature</small></div>
                                </div>
                                <img src={info} alt='info' />
                            </Box>
                            <Typography variant="h6" component="div" sx={{ margin: '10px 0', fontWeight: 'bold' }}>
                                Working hours
                            </Typography>
                            <Typography variant="p" sx={{ color: "gray" }}>
                                Add your task from right in Google Calendar,
                                Gmail, or the Google Tasks app.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Schedule2