import React, {useEffect, useState} from 'react'
import Axios from "axios";
import "../App.css"
import Typography from '@mui/material/Typography';
import { Stack, Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Media from './media'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { Link } from 'react-router-dom';
import Polls from './polls';


export default function ProfessorDashboard() {
    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(()=>{
        getData()
        Dashboard()
    });

    const getData= async() => {
        // set entire question with question, answer, and two random answers
        const response=await Axios.get("http://localhost:1521/availableCourses") 
        var str = response.data;
    }

    function Dashboard () {
        return (
            <Box m="auto" sx={{ border: 3, borderRadius: 5,  width: 1300, height: 600, borderColor: '#FA4616'}}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <br/>
                    <Typography component="h1" variant="h5">
                        Welcome to Your Professor Dashboard {user.displayName}
                    </Typography>
    
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>
                        <Box m="auto" sx={{ border: 2, borderRadius: 5,  width: 400, height: 500, borderColor: '#FA4616'}}>
                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}>
                                    <Typography component="h1" variant="h6" sx={{ p: 2 }}>Courses</Typography>
                                     {/* Won't be href="mc-question" but href="lessons" or something */}
                                     <List
                                        sx={{ width: '100%', maxWidth: 400, minWidth: 400, bgcolor: 'background.paper' }}
                                        component="nav"
                                        direction="column"
                                        alignItems="center"
                                        aria-labelledby="nested-list-subheader">
                                            <Divider />
                                             <ListItem alignItems="flex-start">
                                                <ListItemButton component="" href="#lesson">
                                                    <Link to="/lesson" class="link">
                                                        <ListItemText primary="Lesson 1 *Testing Here*" />
                                                    </Link>
                                                </ListItemButton>     
                                            </ListItem>
                                            <Divider />
                                            <ListItem alignItems="flex-start">
                                                <ListItemButton component="" href="">
                                                    <ListItemText primary="Lesson 2" />
                                                </ListItemButton>
                                            </ListItem>
                                            <Divider />
                                            <ListItem alignItems="flex-start">
                                                <ListItemButton component="" href="#mc-question">
                                                    <ListItemText primary="Lesson 3" />
                                                </ListItemButton>
                                            </ListItem>
                                            <Divider />
                                            <ListItem alignItems="flex-start">
                                                <ListItemButton component="" href="#mc-question">
                                                    <ListItemText primary="Lesson 4" />
                                                </ListItemButton>
                                            </ListItem>
                                            <Divider />       
                                    </List>
                            </Stack>                 
                        </Box>
                        <Box m="auto" sx={{ border: 2, borderRadius: 5,  width: 400, height: 500, borderColor: '#FA4616'}}>
                            <Stack
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}>
                                        <Typography component="h1" variant="h6" sx={{ p: 2 }}>Poll and Video Links</Typography>
                                        {/* Won't be href="mc-question" but href="lessons" or something */}
                                        <List
                                            sx={{ width: '100%', maxWidth: 400, minWidth: 400, bgcolor: 'background.paper' }}
                                            component="nav"
                                            direction="column"
                                            alignItems="center"
                                            aria-labelledby="nested-list-subheader">
                                                <Divider />
                                                <ListItem alignItems="flex-start">
                                                    <ListItemButton component="" href="#mc-question">
                                                        <ListItemText primary="Lesson 1" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <Divider />
                                                <ListItem alignItems="flex-start">
                                                    <ListItemButton component="" href="#mc-question">
                                                        <ListItemText primary="Lesson 2" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <Divider />
                                                <ListItem alignItems="flex-start">
                                                    <ListItemButton component="" href="#mc-question">
                                                        <ListItemText primary="Lesson 3" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <Divider />
                                                <ListItem alignItems="flex-start">
                                                    <ListItemButton component="" href="#mc-question">
                                                        <ListItemText primary="Lesson 4" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <Divider />       
                                        </List>
                                </Stack>
                        </Box>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>
                                <Box display="flex" m="auto" sx={{ border: 2, borderRadius: 5,  width: 400, height: 245, borderColor: '#FA4616', justifyContent: "center"}}>
                                    {/* <Typography component="h1" variant="h6">Class Polls</Typography> */}
                                    <Polls />
                                </Box>
                                <Box  display="flex" m="auto" sx={{ border: 2, borderRadius: 5,  width: 400, height: 245, borderColor: '#FA4616', justifyContent: "center"}}>
                                    {/* <Typography component="h1" variant="h6">Media</Typography> */}
                                    <Media />
                                </Box>
                        </Stack>
                    </Stack>
                    
    
    
                </Stack>
            </Box>
        );
    }
    
    return (
        <div>
            <Dashboard />
        </div>
        
    )
}