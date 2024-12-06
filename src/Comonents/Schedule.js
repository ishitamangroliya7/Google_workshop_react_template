import React from 'react'
import banner3 from "../assets/images/banner3.png";
import banner4 from "../assets/images/banner4.png";
import premium from "../assets/images/premium.svg";
import info from "../assets/images/info.svg";
import "./App.css";
import {
    Container,
    Typography,
    Paper,
    Box,
} from '@mui/material';
import Grid from '@mui/material/Grid';

const Schedule = () => {
    return (
        <Container sx={{ paddingTop: '65px' }}>
            <Grid container spacing={2}>

                {/* Left Section */}
                <Grid item xs={12} md={6} sx={{
                    display: 'flex', alignItems: 'center',
                }}>
                    <Paper elevation={0} sx={{ padding: 4, md: { marginLeft: 4 } }}>
                        <Typography
                            variant="h3"
                            sx={{ marginBottom: 3, fontSize: "40px", fontWeight: "bold" }}
                        >A smarter way to schedule
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ marginBottom: 3, fontSize: "18px", color: "gray" }}
                        >Save time scheduling meetings by layering multiple
                            calendars in a single view. Plus, keep everyone in the
                            loop with shared calendars.
                        </Typography>
                        <Box sx={{ marginBottom: 3, display: 'flex', gap: '3px' }}>
                            <div style={{ display: 'flex', gap: '3px', backgroundColor: '#E8F0FE', borderRadius: '50px', paddingInline: '10px', width: 'max-content' }}>
                                <img src={premium} alt='premium' /><div><small style={{ color: 'blue' }}>Premium feature</small></div>
                            </div>
                            <img src={info} alt='info' />
                        </Box>
                        <Typography
                            variant="body1"
                            sx={{ fontSize: "18px", color: "gray" }}
                        >Teams and organizations can easily schedule
                            meetings and book rooms.
                        </Typography>
                    </Paper>
                </Grid>

                {/* Right Section */}
                <Grid item xs={12} md={6} >
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                        <img
                            src={banner3}
                            alt="banner3"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} sx={{ marginTop: '65px', textAlign: 'center' }}>
                    <Typography variant="h2"
                        sx={{ marginBottom: 4, fontSize: "42px", fontWeight: "bold" }}>
                        Find the time, every day
                    </Typography>
                </Grid>

                {/* Right Section */}
                <Grid item xs={12} md={6} >
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                        <img
                            src={banner4}
                            alt="banner4"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Box>
                </Grid>

                {/* Left Section */}
                <Grid item xs={12} md={6} sx={{
                    order: { xs: 1, md: 0 }, display: 'flex', alignItems: 'center',
                }}>
                    <Paper elevation={0} sx={{ padding: 4, md: { marginLeft: 4 } }}>
                        <Box sx={{ marginBottom: 3, display: 'flex', gap: '3px' }}>
                            <div style={{ display: 'flex', gap: '3px', backgroundColor: '#E8F0FE', borderRadius: '50px', paddingInline: '10px', width: 'max-content' }}>
                                <img src={premium} alt='premium' /><div><small style={{ color: 'blue' }}>Premium feature</small></div>
                            </div>
                            <img src={info} alt='info' />
                        </Box>
                        <Typography
                            variant="h3"
                            sx={{ marginBottom: 3, fontSize: "40px", fontWeight: "bold" }}
                        >See how you spend your time
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ fontSize: "18px", color: "gray" }}
                        >Teams and organizations can easily schedule
                            meetings and book rooms.
                        </Typography>
                    </Paper>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Schedule