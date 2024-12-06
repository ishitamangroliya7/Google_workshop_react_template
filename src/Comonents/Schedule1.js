import React from 'react'
import banner5 from "../assets/images/banner5.png";
import Link from '@mui/material/Link';
import "./App.css";
import {
    Container,
    Typography,
    Paper,
    Box,
} from '@mui/material';
import Grid from '@mui/material/Grid';

const Schedule1 = () => {
  return (
    <Container sx={{ paddingTop: '65px' }}>
    <Grid container spacing={2}>

        {/* Left Section */}
        <Grid item xs={12} md={6} sx={{
            order: { xs: 1, md: 0 }, display: 'flex', alignItems: 'center',
        }}>
            <Paper elevation={0} sx={{ padding: 4, md: { marginLeft: 4 } }}>
                <Typography
                    variant="h3"
                    sx={{ marginBottom: 3, fontSize: "40px", fontWeight: "bold" }}
                >Make time for other
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ marginBottom: 3, fontSize: "18px", color: "gray" }}
                > <Link href="#" variant="p">
                        Appointment Schedules
                    </Link> allow you to share your availability via a booking page, so external stakeholders, clients, and partners
                    can book time with you.
                </Typography>
            </Paper>
        </Grid>


        {/* Right Section */}
        <Grid item xs={12} md={6} >
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <img
                    src={banner5}
                    alt="banner5"
                    style={{
                        width: "100%",
                    }}
                />
            </Box>
        </Grid>

    </Grid>
</Container>
  )
}

export default Schedule1