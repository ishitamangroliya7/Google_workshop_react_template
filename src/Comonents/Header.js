import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import logo from "../assets/images/logo.svg";
import calender from "../assets/images/calender.svg";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import "./App.css";

function Header() {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));
    const [selectedDate, setSelectedDate] = React.useState(''); 

    const handleDateChange = (newValue) => {
        setValue(newValue);
        setSelectedDate(newValue ? newValue.format('YYYY-MM-DD') : '');
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" className='nav-bar'>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <img src={logo} alt='logo' />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                        <Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
                            <img src={calender} alt='calendar' />
                        </Box>
                        <FormControl sx={{ m: 1, minWidth: 200, display: { xs: 'none', sm: 'flex' } }} size="small">
                            <InputLabel id="calendar-select-label"></InputLabel>
                            <Select sx={{color:'blue'}}
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
                        <Button variant="contained">Sign in</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
