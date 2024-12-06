import React from 'react'
import banner2 from "../assets/images/banner2.png";
import "./App.css";
import {
    Container,
    Typography,
    Paper,
    Box,
} from '@mui/material';
import Grid from '@mui/material/Grid';

const About = () => {
    return (
        <Container sx={{ paddingTop: '65px' }}>
            <Grid container spacing={2}>
                {/* Right Section */}
                <Grid item xs={12} md={6} >
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                        <img
                            src={banner2}
                            alt="banner2"
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
                    <Paper elevation={0} sx={{ padding: 4, md:{ marginLeft: 4 } }}>
                        <Typography
                            variant="h3"
                            sx={{ marginBottom: 4, fontSize: "40px", fontWeight: "bold" }}
                        >Your plans, at your fingertips
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ marginBottom: 4, fontSize: "18px", color: "gray" }}
                        >Google Calendar brings all of your calendars together in one
                            place, so you can manage work, personal life, and everything in
                            between.
                        </Typography>
                    </Paper>
                </Grid>

            </Grid>
        </Container>
    )
}

export default About