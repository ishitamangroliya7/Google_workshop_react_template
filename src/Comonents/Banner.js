import * as React from 'react';
import banner from "../assets/images/banner.png";
import calender from "../assets/images/calender.svg";
import "./App.css";
import {
    Container,
    Typography,
    Paper,
    Box,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Banner = () => {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));
    const [selectedDate, setSelectedDate] = React.useState('');

    const handleDateChange = (newValue) => {
        setValue(newValue);
        setSelectedDate(newValue ? newValue.format('YYYY-MM-DD') : '');
    };

    return (
        <Container sx={{ paddingTop: '65px' }}>
            <Grid container spacing={2}>
                {/* Left Section */}
                <Grid item xs={12} md={6} sx={{
                    order: { xs: 1, md: 0 }, display:'flex', alignItems:'center',
                }}>
                    <Paper elevation={0} sx={{ padding: 4 , md:{ marginLeft: 4 }}}>
                        <Box display="flex" alignItems="center" marginBottom={2}>
                            <img src={calender} alt="calendar" style={{ marginRight: 8 }} />
                            <Typography variant="h6">Calendar</Typography>
                        </Box>
                        <Typography
                            variant="h1"
                            sx={{ marginBottom: 4, fontSize: "45px", fontWeight: "bold" }}
                        >
                            Shareable Online Calendar
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ marginBottom: 4, fontSize: "18px", color: "gray" }}
                        >
                            Spend less time planning and more time doing with a shareable
                            calendar that works across Google Workspace.
                        </Typography>
                        <Box display="flex" alignItems="center" gap={2}>
                            <Button variant="contained">Sign in</Button>
                            <FormControl
                                sx={{ minWidth: 200 }}
                                size="small"
                            >
                                <InputLabel id="calendar-select-label"></InputLabel>
                                <Select
                                    sx={{ color: 'blue' }}
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
                        </Box>
                    </Paper>
                </Grid>

                {/* Right Section */}
                <Grid item xs={12} md={6} >
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                        <img
                            src={banner}
                            alt="banner"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;
