import React from 'react'
import "./App.css";
import {
    Typography,
    Grid,
    Box,
    Button
} from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Signup = () => {

    const usStates = [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',]


    return (
        <Box sx={{ marginTop: '65px', paddingTop: '50px', paddingBottom: '50px', backgroundColor: '#F8F9FA' }}>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={12} md={8} lg={6} sx={{ display: 'flex', paddingInline: '24px', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Typography variant="h5"
                        sx={{ marginBottom: 4, fontWeight: "bold" }}>
                        Sign up for the Google Workspace newsletter
                    </Typography>
                    <Box
                        sx={{
                            display: { xs: 'block', sm: 'flex' },
                            justifyContent: 'center',
                            gap: '10px',
                        }}
                    >
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Enter your email"
                                sx={{ backgroundColor: 'white', marginBottom: { xs: '15px', sm: '0' }, width: 300 }}
                            />
                        </div>
                        <div>
                            <Autocomplete
                                disablePortal
                                options={usStates}
                                sx={{ width: 300 }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="State"
                                        sx={{ backgroundColor: 'white' }}
                                    />
                                )}
                            />
                        </div>
                    </Box>
                    <Box sx={{ textAlign: 'start' }}>
                        <FormControlLabel className='check' sx={{ marginTop: '15px', marginBottom: '10px', textAlign: 'start', color: 'gray' }}
                            control={<Checkbox {...label} size="small" />}
                            label="Also sign me up for Google Cloud emails with news, product updates, event information, special offers, and more. (Optional and you can unsubscribe at a later time)."
                        />
                        <small style={{ color: 'gray' }}>I understand my personal data will be processed in accordance with Google's Privacy Policy.</small>
                    </Box>
                    <Box sx={{marginTop:'15px', marginLeft:'auto'}}>
                        <Button variant="outlined" sx={{backgroundColor:'white', textTransform:'none', fontWeight:'bold'}}>Sign up</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>

        
    )
}

export default Signup