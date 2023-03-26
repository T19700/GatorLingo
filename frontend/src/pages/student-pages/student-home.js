import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Header from '../../components/header';
import Card from '@mui/material/Card';
//import Grid from '@mui/material/Grid';
import '../../App.css'; 
import { Link } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Unstable_Grid2';
import PropTypes from 'prop-types';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { styled } from '@mui/system';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value != index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tabpanel-${index}`}
            {...other}
        >
            {value == index && (
                <Box sx={{ p:3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
}

function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function StudentHome() {

    // const [value, setValue] = React.useState(0);
    // const handleChange = { event, newValue } => {
    //     setValue(newValue);
    // };

    return (
        // <><div>
        //     <Header />
        //     {/* <div class="progress-bar">
        //         <LinearProgress variant="determinate" value={50} />
        //     </div> */}

        //     <h1 className="title">Student Home Page</h1>

        //     <div className="button-container">
        //         <div className="button">
        //             <Button variant="contained">
        //                 <Link to="/class-selection" class="link">Testing: Class Selection Page</Link>
        //             </Button>
        //         </div>
        //     </div>
        // </div><iframe src="https://docs.google.com/forms/d/e/1FAIpQLScuBf_6x0T_Ty0WSIOpEorubwlyqXGPGYwzcYs4XytmgPNjFQ/viewform?embedded=true" width="640" height="2700" frameborder="0" marginheight="0" marginwidth="0">Loading…
        // </iframe></>
        <Box sx={{ width: '100%' }}>
            <Header />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                <Grid xs={4}>
                    <Container>
                        <Typography textAlign={'center'} variant='h3'>Lessons</Typography>
                    </Container>
                    <Container>
                        <Box
                            sx={{
                                height: 400,
                                width: 1,
                                backgroundColor: '#D3D3D3'
                            }}
                        >
                        <AppBar position='static'>
                            <Tabs
                                indicatorColor='secondary'
                                variant='fullWidth'
                                textColor='inherit'
                            >
                                <Tab label="To-Do" {...allyProps(0)} />
                                <Tab label="In Progress" {...allyProps(1)} />
                                <Tab label="Completed" {...allyProps(2)} />
                            </Tabs>
                        </AppBar>
                        </Box>
                    </Container>
                </Grid>
                <Grid xs={4}>
                    <Container>
                        <Typography textAlign={'center'} variant='h3'>Class Activities</Typography>
                    </Container>
                </Grid>
                <Grid xs={4}>
                    <Container>
                        <Typography textAlign={'center'} variant='h3'>Immersion</Typography>
                    </Container>
                </Grid>
                <Grid xs={4}>
                <Container>
                        <Box
                            sx={{
                                height: 400,
                                width: 1,
                                backgroundColor: '#D3D3D3'
                            }}
                        >
                        <AppBar position='static'>
                            <Tabs
                                indicatorColor='secondary'
                                variant='fullWidth'
                                textColor='inherit'
                            >
                                <Tab label="To-Do" {...allyProps(0)} />
                                <Tab label="In Progress" {...allyProps(1)} />
                                <Tab label="Completed" {...allyProps(2)} />
                            </Tabs>
                        </AppBar>
                        </Box>
                    </Container>
                </Grid>
                <Grid xs={4}>
                    <Paper>5</Paper>
                </Grid>
                <Grid xs={4}>
                    <Paper>6</Paper>
                </Grid>
            </Grid>
        </Box>

        
    );
}

export default StudentHome;