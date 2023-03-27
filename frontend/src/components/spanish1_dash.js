import * as React from 'react';
import "../App.css"
import Typography from '@mui/material/Typography';
import { Stack, Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';


export default function Spanish1Dashboard() {
    return (
        <Box m="auto" sx={{ border: 1, borderRadius: 5,  width: 1300, height: 600, borderColor: '#e0e0e0'}}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <br/>
                <Typography component="h1" variant="h5">
                    Welcome to Your Spanish 1 Dashboard
                </Typography>

                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Box m="auto" sx={{ border: 1, borderRadius: 5,  width: 400, height: 500, borderColor: '#e0e0e0'}}>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>
                                <Typography component="h1" variant="h6" sx={{ p: 2 }}>Translation Quizzes</Typography>
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
                    <Box m="auto" sx={{ border: 1, borderRadius: 5,  width: 400, height: 500, borderColor: '#e0e0e0'}}>
                        <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}>
                                    <Typography component="h1" variant="h6" sx={{ p: 2 }}>Vocabulary Lessons</Typography>
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
                            <Box display="flex" m="auto" sx={{ border: 1, borderRadius: 5,  width: 400, height: 245, borderColor: '#e0e0e0', justifyContent: "center"}}>
                                <Typography component="h1" variant="h6">Class Polls</Typography>
                            </Box>
                            <Box  display="flex" m="auto" sx={{ border: 1, borderRadius: 5,  width: 400, height: 245, borderColor: '#e0e0e0', justifyContent: "center"}}>
                                <Typography component="h1" variant="h6">Media</Typography>
                            </Box>
                    </Stack>
                </Stack>
                


            </Stack>
        </Box>
    );
}