import React, {useEffect, useState} from 'react'
import "../App.css"
import Typography from '@mui/material/Typography';
import { Stack, Box, Pagination } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
//import Pagination from "@mui/material/Pagination";
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
    const [currentPageV, setCurrentPageV] = useState(1);
    const [currentPageT, setCurrentPageT] = useState(1);
    const [lessonsPerPage, setLessonsPerPage] = useState(6);
    const numVocab = [], numTransl = [];

    useEffect(()=>{
        getData();
        Dashboard();
    }, [numVocab, numTransl]);

    const handlePageChangeV = (event, pageNumber) => {
        setCurrentPageV(pageNumber);
    }

    const handlePageChangeT = (event, pageNumber) => {
        setCurrentPageT(pageNumber);
    }

    const totalPagesV = Math.ceil(numVocabLessons / lessonsPerPage);
    const totalPagesT = Math.ceil(numTranslationLessons / lessonsPerPage);
    const startIndexV = (currentPageV - 1) * lessonsPerPage;
    const startIndexT = (currentPageT - 1) * lessonsPerPage;
    const endIndexV = startIndexV + lessonsPerPage;
    const endIndexT = startIndexT + lessonsPerPage;

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
        const lessonsOnPageV = numVocab.slice(startIndexV, endIndexV);
        const lessonsOnPageT = numTransl.slice(startIndexT, endIndexT);

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
                    <Box m="auto" sx={{ border: 2, borderRadius: 5,  width: 400, height: 500, borderColor: '#FA4616'}}>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>
                                <Typography component="h1" variant="h6" sx={{ p: 2, marginBottom: -4 }}>Translation Quizzes</Typography>
                                 <List
                                    sx={{ width: '100%', maxWidth: 400, minWidth: 400, bgcolor: 'background.paper' }}
                                    component="nav"
                                    direction="column"
                                    alignItems="center"
                                    aria-labelledby="nested-list-subheader">
                                         {(lessonsOnPageT).map((i) => (   
                                            <ListItem alignItems="flex-start">
                                            <ListItemButton component="" href="#lesson">
                                            <Link class="link" to="/translationLesson" state={{ number: i, type: "translation" }}>
                                                    <ListItemText primary={`Lesson ${i}`} />
                                                </Link>
                                            </ListItemButton>  
                                            <Divider />   
                                            </ListItem>
                                        ))}
                                        <Pagination count={totalPagesT} page={currentPageT} onChange={handlePageChangeT} />   
                                </List>
                        </Stack>                 
                    </Box>
                    <Box m="auto" sx={{ border: 2, borderRadius: 5,  width: 400, height: 500, borderColor: '#FA4616'}}>
                        <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}>
                                    <Typography component="h1" variant="h6" sx={{ p: 2, marginBottom: -4 }}>Vocabulary Lessons</Typography>
                                    <List
                                        sx={{ width: '100%', maxWidth: 400, minWidth: 400, bgcolor: 'background.paper' }}
                                        component="nav"
                                        direction="column"
                                        alignItems="center"
                                        aria-labelledby="nested-list-subheader">
                                            {lessonsOnPageV.map((i) => (   
                                            <ListItem alignItems="flex-start">
                                            <ListItemButton component="" href="#lesson">
                                            <Link class="link" to="/lesson" state={{ number: i, type: "vocab" }}>
                                                <ListItemText primary={`Lesson ${i}`} />
                                                </Link>
                                            </ListItemButton>  
                                            <Divider />   
                                            </ListItem>
                                        ))}
                                        <Pagination count={totalPagesV} page={currentPageV} onChange={handlePageChangeV} />         
                                    </List>
                            </Stack>
                    </Box>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>
                            <Box display="flex" m="auto" sx={{ border: 2, borderRadius: 5,  width: 400, height: 245, borderColor: '#FA4616', justifyContent: "center"}}>
                                <Stack>
                                    <Typography component="h1" variant="h6" align='center'>Class Polls</Typography>
                                    <br />
                                    <Polls />
                                </Stack>
                            </Box>
                            <Box  display="flex" m="auto" sx={{ border: 2, borderRadius: 5,  width: 400, height: 245, borderColor: '#FA4616', justifyContent: "center"}}>
                                <Stack>
                                    <Typography component="h1" variant="h6" align='center'>Recommended Class Videos</Typography>
                                    <br />
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