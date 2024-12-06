import React from 'react'
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./App.css";
import {
    Container,
    Typography,
    Paper,
    Box,
} from '@mui/material';
import Grid from '@mui/material/Grid';

const Faqs = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container sx={{ paddingTop: '65px' }}>
            <Grid container spacing={2}>

                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="h2"
                        sx={{ marginBottom: 1, fontSize: "42px", fontWeight: "bold" }}>
                        Curious about Google Calendar?
                    </Typography>
                    <Typography variant="p" sx={{ marginBottom: 5 }}>
                        Take a look at our FAQs to learn more.
                    </Typography>
                </Grid>


                {/* left Section */}
                <Grid item xs={12} md={8} sx={{display:'flex', flexDirection:'column', alignItems:'end'}} >
                    <Button variant="text"  sx={{textTransform: 'none', margin:'15px 0', fontSize:'16px'}} endIcon={<UnfoldMoreIcon />}>
                        Expand all
                    </Button>
                    <Accordion className='accordian-box' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ flexShrink: 0,width:'90%', margin: '10px 0', fontWeight: 'bold' }}>
                                Can I migrate and sync all my calendars?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                Aliquam eget maximus est, id dignissim quam.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordian-box' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{ flexShrink: 0,width:'90%', margin: '10px 0', fontWeight: 'bold' }}>Is the information I have on my Google Calendar safe?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                laoreet.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordian-box' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{ flexShrink: 0,width:'90%', margin: '10px 0', fontWeight: 'bold' }}>
                                Does Google Calendar offer appointment scheduling?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordian-box' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{ flexShrink: 0,width:'90%', margin: '10px 0', fontWeight: 'bold' }}>Can I create a Google Calendar for a group?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordian-box' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5bh-content"
                            id="panel5bh-header"
                        >
                            <Typography sx={{ flexShrink: 0,width:'90%', margin: '10px 0', fontWeight: 'bold' }}>How do I add a location or meeting room to a Google Calendar invite?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                {/* right Section */}
                <Grid item xs={12} md={4} sx={{
                    order: { xs: 1, md: 0 }, display: 'flex', alignItems: 'center',
                }}>
                    <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                        <Paper elevation={0} variant="outlined" sx={{ padding: 3, md: { marginLeft: 4 } }}>
                            <Box sx={{ marginBottom: '15px' }}>
                                <Typography variant="h6" component="div" sx={{ margin: '10px 0', fontWeight: 'bold' }}>
                                    Need more help?
                                </Typography>
                                <Typography variant="p" sx={{ color: "gray" }}>
                                    Add your task from right in Google Calendar,
                                    Gmail, or the Google Tasks app.
                                </Typography>
                            </Box>
                            <Button variant="outlined" sx={{ textTransform: 'none', border: '1px solid #DADCE0' }}>Help center</Button>
                        </Paper>

                        <Paper elevation={0} variant="outlined" sx={{ padding: 3, md: { marginLeft: 4 } }}>
                            <Box sx={{ marginBottom: '15px' }}>
                                <Typography variant="h6" component="div" sx={{ margin: '10px 0', fontWeight: 'bold' }}>
                                    Get live support
                                </Typography>
                                <Typography variant="p" sx={{ color: "gray" }}>
                                    Get access to a team of Google
                                    experts who can answer your
                                    Workspace questions and guide
                                    you to a solution.
                                </Typography>
                            </Box>
                            <Button variant="outlined" sx={{ textTransform: 'none', border: '1px solid #DADCE0' }}>Get support</Button>
                        </Paper>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Faqs