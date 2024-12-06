import React, { useState, useEffect } from 'react';
import { Box, Container, Link, Grid, Typography, IconButton, TextField, InputAdornment } from '@mui/material';
import Facebook from '@mui/icons-material/Facebook';
import YouTube from '@mui/icons-material/YouTube';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import Language from '@mui/icons-material/Language';
import Search from '@mui/icons-material/Search';
import close from "../assets/images/close.svg";
import "./App.css";

const Footerr = () => {

    const [isAlertVisible, setIsAlertVisible] = useState(true);

    useEffect(() => {
        
        let interval;
        if (!isAlertVisible) {
            interval = setTimeout(() => {
                setIsAlertVisible(true);
            }, 2000);
        }
        return () => clearTimeout(interval);
    }, [isAlertVisible]);

    const handleAlertClose = () => {
        setIsAlertVisible(false);
    };


    return (
        <Box sx={{
            backgroundColor: '#FAFAFA', padding: '40px',
            position: "relative"
        }}>
            <Container>
                <Box
                    sx={{
                        display: { md: 'flex' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: '25px',
                        borderBottom: '1px solid #DADCE0'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '25px', marginBottom: { xs: '15px', sm: '0' }, }}>
                        <Box sx={{ borderRight: '1px solid gray', paddingRight: '20px' }}>
                            <Typography variant="body1" sx={{ color: '#616161', fontSize: '16px' }}>
                                Follow our <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Blog</span>
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton><YouTube /></IconButton>
                            <IconButton><Twitter /></IconButton>
                            <IconButton><LinkedIn /></IconButton>
                            <IconButton><Facebook /></IconButton>
                            <IconButton><Instagram /></IconButton>
                        </Box>
                    </Box>
                    <Box sx={{ maxWidth: 300 }}>
                        <TextField className='search' sx={{ backgroundColor: '#EEEEEE', border: 'none' }}
                            placeholder="Search this site"
                            variant="outlined"
                            size="small"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                </Box>

                <Grid container spacing={4} sx={{ marginTop: '5px' }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ color: '#616161', marginBottom: '5px', fontSize: '16px' }} gutterBottom>
                            Included applications
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Gmail</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Meet</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Chat</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Calendar</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Drive</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Docs</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Sheets</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Slides</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Forms</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Sites</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Keep</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Apps Script</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ color: '#616161', marginBottom: '5px', fontSize: '16px' }} gutterBottom>
                            Security and management
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Admin</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Endpoint</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Vault</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Work Insights</Link>
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ marginTop: '20px', marginBottom: '5px', color: '#616161', fontSize: '16px' }}>
                            Solutions
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">New Business</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Small Business</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Enterprise</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Retail</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" sx={{ color: '#616161', marginBottom: '5px', fontSize: '16px' }} gutterBottom>
                            Pricing
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Compare pricing plans</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Add-ons</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Gemini for Workspace</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Google Voice</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">AppSheet</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" sx={{ color: '#616161', marginBottom: '5px', fontSize: '16px' }} gutterBottom>
                            Resources
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Working remotely</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Security</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Customer Stories</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" sx={{ color: '#616161', marginBottom: '5px', fontSize: '16px' }} gutterBottom>
                            Learning and support
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Admin Help</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Setup and Deployment Center</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: '5px', fontSize: '12px', color: 'gray' }}>
                            <Link href="#" underline="none" color="inherit">Learning Center for Users</Link>
                        </Typography>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        display: { md: 'flex' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '40px',
                        borderTop: '1px solid #ddd',
                        paddingTop: '25px',
                    }}
                >
                    <Box sx={{ display: { md: 'flex' }, alignItems: 'center', gap: '25px', marginBottom: { xs: '15px', sm: '0' } }}>
                        <Box>
                            <Typography variant="p" sx={{ fontWeight: 'bold', color: '#616161' }}>Google</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '16px' }}>
                            <Typography variant="body2" sx={{ fontSize: '12px', color: 'gray' }}>
                                <Link href="#" underline="none" color="inherit">About Google</Link>
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: '12px', color: 'gray' }}>
                                <Link href="#" underline="none" color="inherit">Google Products</Link>
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: '12px', color: 'gray' }}>
                                <Link href="#" underline="none" color="inherit">Privacy</Link>
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: '12px', color: 'gray' }}>
                                <Link href="#" underline="none" color="inherit">Terms</Link>
                            </Typography>
                        </Box>
                    </Box>
                    <Typography variant="body2" sx={{ fontSize: '12px', color: 'gray', display: 'flex', alignItems: 'center', gap: '5px' }}><Language sx={{ color: '#616161' }} /> English</Typography>
                </Box>

                {isAlertVisible && (
                    <Box className='alert'
                        sx={{
                            position: "absolute",
                            bottom: "120px",
                            right: "15px",
                            alignItems: "center",
                            backgroundColor: "#fff",
                            padding: "10px",
                            borderRadius: "12px",
                            maxWidth: '200px',
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            display: { xs: 'none', sm: 'flex' }
                        }}
                    >
                        <img src={close} alt='close' onClick={handleAlertClose} style={{
                            position: 'absolute',
                            top: '-28px',
                            left: '0px'
                        }} />
                        <Typography variant="body2" sx={{ lineHeight: '22px' }}>
                            Hi there 👋 What brings you to Google Workspace today?
                        </Typography>
                    </Box>
                )}
            </Container>
        </Box>
    )
}

export default Footerr;