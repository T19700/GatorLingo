import React, {useEffect, useState} from 'react'
import "../App.css"
import Typography from '@mui/material/Typography';
import { Stack, Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Media from './media'
import { getAuth } from "firebase/auth";
import { Link } from 'react-router-dom';
import Polls from './polls';
import Axios from "axios";




export default function Spanish1Dashboard() {
    const auth = getAuth();
    const user = auth.currentUser;

    const [numVocabLessons, setNumVocabLessons] = useState();
    const [numTranslationLessons, setNumTranslationLessons] = useState();
    const numVocab = [], numTransl = [];

    useEffect(()=>{
        getData();
        Dashboard();
    }, [numVocab, numTransl]);

    const getData= async() => {
        // set entire question with question, answer, and two random answers
        const response = await Axios.get("http://localhost:1521/numberOfLessons", {
            params: {
                className: 'SPN1130'
            }
        })
        var str = response.data;
        const myArray = str.split(" ");
        setNumVocabLessons(myArray[0]);
        setNumTranslationLessons(myArray[1]);
    }

    function Dashboard() {
        for (let i = 1; i <= numVocabLessons; i++) { numVocab[i-1] = i; }
        for (let i = 1; i <= numTranslationLessons; i++) { numTransl[i-1] = i; }

        return (
            <Box m="auto" sx={{borderRadius: 5,  width: 1600, height: 600}}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <br/>
                <Typography component="h1" variant="h5">
                    Welcome to Your Spanish 1 Dashboard, {user.displayName}
                </Typography>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Box m="auto" sx={{ border: 2, borderRadius: 5,  width: 500, height: 610, borderColor: '#FA4616'}}>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>
                                <Typography component="h1" variant="h6" sx={{ p: 2, marginBottom: -4 }}>Translation Quizzes</Typography>
                                 <List
                                    sx={{ width: '100%', maxWidth: 500, minWidth: 500, bgcolor: 'background.paper' }}
                                    component="nav"
                                    direction="column"
                                    alignItems="center"
                                    aria-labelledby="nested-list-subheader">
                                         {(numTransl).map((i) => (   
                                            <ListItem alignItems="flex-start">
                                            <ListItemButton component="" href="#lesson">
                                            <Link class="link" to="/translationLesson" state={{ number: i, type: "translation" }}>
                                                    <ListItemText primary={`Lesson ${i}`} />
                                                </Link>
                                            </ListItemButton>  
                                            <Divider />   
                                            </ListItem>
                                        ))}     
                                </List>
                        </Stack>                 
                    </Box>
                    <Box m="auto" sx={{ border: 2, borderRadius: 5,  width: 500, height: 610, borderColor: '#FA4616'}}>
                        <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}>
                                    <Typography component="h1" variant="h6" sx={{ p: 2, marginBottom: -4 }}>Vocabulary Lessons</Typography>
                                    <List
                                        sx={{ width: '100%', maxWidth: 500, minWidth: 500, bgcolor: 'background.paper' }}
                                        component="nav"
                                        direction="column"
                                        alignItems="center"
                                        aria-labelledby="nested-list-subheader">
                                            {numVocab.map((i) => (   
                                            <ListItem alignItems="flex-start">
                                            <ListItemButton component="" href="#lesson">
                                            <Link class="link" to="/lesson" state={{ number: i, type: "vocab" }}>
                                                <ListItemText primary={`Lesson ${i}`} />
                                                </Link>
                                            </ListItemButton>  
                                            <Divider />   
                                            </ListItem>
                                        ))}       
                                    </List>
                            </Stack>
                    </Box>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>
                            <Box display="flex" m="auto" sx={{ border: 2, borderRadius: 5,  width: 500, height: 300, borderColor: '#FA4616', justifyContent: "center"}}>
                                <Stack>
                                    <Typography component="h1" variant="h6" align='center'>Class Polls</Typography>
                                    <Polls />
                                </Stack>
                            </Box>
                            <Box  display="flex" m="auto" sx={{ border: 2, borderRadius: 5,  width: 500, height: 300, borderColor: '#FA4616', justifyContent: "center"}}>
                                <Stack>
                                    <Typography component="h1" variant="h6" align='center'>Recommended Class Videos</Typography>
                                    <Media />
                                </Stack>
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