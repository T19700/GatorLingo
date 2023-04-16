import React, {useEffect, useState} from 'react'
import Header from '../../components/header';
import '../../App.css';
import { Stack, Box, Button, Typography, List, Divider, ListItem, ListItemButton, Link, ListItemText } from '@mui/material';
import { getAuth } from "firebase/auth";
import Axios from "axios";

function ProfHome() {
    const auth = getAuth();
    const user = auth.currentUser;
    const [courses, setCourses] = useState("");
    let courseNames = [];

    useEffect(()=>{
        getData()
    }, [courseNames]);

    const getData= async() => {
        const response=await Axios.get("http://localhost:1521/availableCourses") 
        var str = response.data;
        setCourses(str);
    }

        courseNames = courses.toString().match(/.{7}/g);

    if (user) {
        console.log(user.displayName)
        return (
            <div>
                <Header />
                <br/>
    
                <Box m="auto" sx={{ /*border: 3, borderRadius: 5, */width: 1300, height: 600, borderColor: '#FFFFFF'}}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <br/>
                    <Typography component="h1" variant="h5">
                        Welcome to your professor dashboard {user.displayName}
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
                                    <Typography component="h1" variant="h6" sx={{ p: 2 }}>
                                        Courses
                                    </Typography>
                                    
                                    <List
                                        sx={{ width: '100%', maxWidth: 400, minWidth: 400, bgcolor: 'background.paper' }}
                                        component="nav"
                                        direction="column"
                                        alignItems="center"
                                        aria-labelledby="nested-list-subheader">
                                        {(courseNames).map((i) => (   
                                            <ListItem alignItems="flex-start">
                                               <ListItemButton component="" href="#lesson">
                                                   <Link class="link" href="/courses" state={{ name: i }}>
                                                       <ListItemText primary={`${i}`} /> 
                                                   </Link>
                                               </ListItemButton>
                                               <Divider />     
                                           </ListItem>
                                        ))} 

                                    </List>

                                    <Link href="/create-class" class="link" fullWidth alignItems={'end'}>
                                        <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
                                            Add Course
                                        </Button>
                                    </Link>
                            </Stack>                 
                        </Box>
                    </Stack>    
                </Stack>
            </Box>
                
            </div>
        );
    }
    else {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default ProfHome;
