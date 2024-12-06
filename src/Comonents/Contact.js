import React from 'react';
import mail from "../assets/images/mail.svg";
import drive from "../assets/images/drive.svg";
import calender from "../assets/images/calender.svg";
import file from "../assets/images/file.svg";
import vc from "../assets/images/vc.svg";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import "./App.css";
import {
    Container,
    Typography,
    Grid,
    Box
} from '@mui/material';

const Contact = () => {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));
    const [selectedDate, setSelectedDate] = React.useState(''); // State for selected date

    // Handle date change and update selectedDate
    const handleDateChange = (newValue) => {
        setValue(newValue);
        setSelectedDate(newValue ? newValue.format('YYYY-MM-DD') : '');
    };

    return (
        <Container sx={{ marginTop: '65px', paddingTop: '50px', paddingBottom: '50px', backgroundColor: '#F8F9FA' }}>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', borderRadius: '50px' }}>
                        <div style={{ width: '20%' }}><img src={mail} alt='mail' /></div>
                        <div style={{ width: '20%' }}><img src={calender} alt='calender' /></div>
                        <div style={{ width: '20%' }}><img src={drive} alt='drive' /></div>
                        <div style={{ width: '20%' }}><img src={file} alt='file' /></div>
                        <div style={{ width: '20%' }}><img src={vc} alt='vc' /></div>
                    </Box>
                    <Typography variant="h3"
                        sx={{ marginBottom: 4, fontSize: "40px", fontWeight: "bold" }}>
                        Show the world<br />
                        how it's done.
                    </Typography>
                    <Button variant="contained"  sx={{minWidth: 200, marginBottom:'10px' }}>Sign in</Button>
                    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                        <InputLabel id="calendar-select-label"></InputLabel>
                        <Select sx={{ color: 'blue' }}
                            labelId="calendar-select-label"
                            id="calendar-select"
                            value={selectedDate}
                            displayEmpty
                            renderValue={() => selectedDate || 'Try Calendar for work'}
                        >
                            <MenuItem value="">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateCalendar value={value} onChange={handleDateChange} />
                                </LocalizationProvider>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Contact;
