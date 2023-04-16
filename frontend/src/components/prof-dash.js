import React, {useEffect, useState} from 'react'
import Axios from "axios";
import "../App.css"
import Typography from '@mui/material/Typography';
import { Stack, Box, Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Media from './media'
import { getAuth } from "firebase/auth";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Polls from './polls';


export default function ProfessorDashboard() {
    const auth = getAuth();
    const user = auth.currentUser;
    const location = useLocation()
    const courseName = location.state ? location.state.name : null;

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
            <Box m="auto" sx={{borderRadius: 5,  width: 1500, height: 600}}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <br/>
                <Typography component="h1" variant="h5">
                    Welcome to Your {courseName} Dashboard
                    {/*Welcome to Your {courseName} Dashboard, {user.displayName}*/}
                </Typography>
                <br/>

                <Button href="/add-course-info" variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Add Question or Resource
                </Button>

                <br/>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Box m="auto" sx={{ border: 2, borderRadius: 5,  width: 450, height: 610, borderColor: '#FA4616'}}>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>
                                <Typography component="h1" variant="h6" sx={{ p: 2, marginBottom: -4 }}>Translation Quizzes</Typography>
                                 <List
                                    sx={{ width: '100%', maxWidth: 450, minWidth: 450, bgcolor: 'background.paper' }}
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
                    <Box m="auto" sx={{ border: 2, borderRadius: 5,  width: 450, height: 610, borderColor: '#FA4616'}}>
                        <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}>
                                    <Typography component="h1" variant="h6" sx={{ p: 2, marginBottom: -4 }}>Vocabulary Lessons</Typography>
                                    <List
                                        sx={{ width: '100%', maxWidth: 450, minWidth: 450, bgcolor: 'background.paper' }}
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
























    // const auth = getAuth();
    // const user = auth.currentUser;
    // const [courses, setCourses] = useState("");

    // // useEffect(()=>{
    // //     getData()
    // //     Dashboard()
    // // });

    // // const getData= async() => {
    // //     const response=await Axios.get("http://localhost:1521/availableCourses") 
    // //     var str = response.data;
    // //     const courseNames = [];

    // //     for (let i = 0; i < str.length; i++) {
    // //         courseNames.push(str[i][0]);
    // //         console.log(courseNames[i]);
    // //     }

    // //     setCourses(courseNames);
    // // }

    // function Dashboard () {
    //     return (
    //         <Box m="auto" sx={{ border: 3, borderRadius: 5,  width: 1300, height: 600, borderColor: '#FA4616'}}>
    //             <Stack
    //                 direction="column"
    //                 justifyContent="center"
    //                 alignItems="center"
    //                 spacing={2}>
    //                 <br/>
    //                 <Typography component="h1" variant="h5">
    //                     Welcome to your Professor Dashboard {user.displayName}
    //                 </Typography>
    
    //                 <Stack
    //                     direction="row"
    //                     justifyContent="center"
    //                     alignItems="center"
    //                     spacing={2}>
    //                     <Box m="auto" sx={{ border: 2, borderRadius: 5,  width: 400, height: 500, borderColor: '#FA4616'}}>
    //                         <Stack
    //                             direction="column"
    //                             justifyContent="center"
    //                             alignItems="center"
    //                             spacing={2}>
    //                                 <Typography component="h1" variant="h6" sx={{ p: 2 }}>Courses</Typography>
    //                                  {/* Won't be href="mc-question" but href="lessons" or something */}
    //                                  <List
    //                                     sx={{ width: '100%', maxWidth: 400, minWidth: 400, bgcolor: 'background.paper' }}
    //                                     component="nav"
    //                                     direction="column"
    //                                     alignItems="center"
    //                                     aria-labelledby="nested-list-subheader">
    //                                     {/* {(courses).map((i) => (   
    //                                         <ListItem alignItems="flex-start">
    //                                            <ListItemButton component="" href="#lesson">
    //                                                <Link class="link" to="/add-course-info" state={{ name: i }}>
    //                                                    <ListItemText primary={`${i}`} />
    //                                                </Link>
    //                                            </ListItemButton>
    //                                            <Divider />     
    //                                        </ListItem>
    //                                     ))}  */}
    //                                         {/* <Divider />
    //                                          <ListItem alignItems="flex-start">
    //                                             <ListItemButton component="" href="#lesson">
    //                                                 <Link to="/lesson" class="link">
    //                                                     <ListItemText primary="Lesson 1 *Testing Here*" />
    //                                                 </Link>
    //                                             </ListItemButton>     
    //                                         </ListItem>
    //                                         <Divider />
    //                                         <ListItem alignItems="flex-start">
    //                                             <ListItemButton component="" href="">
    //                                                 <ListItemText primary="Lesson 2" />
    //                                             </ListItemButton>
    //                                         </ListItem>
    //                                         <Divider />
    //                                         <ListItem alignItems="flex-start">
    //                                             <ListItemButton component="" href="#mc-question">
    //                                                 <ListItemText primary="Lesson 3" />
    //                                             </ListItemButton>
    //                                         </ListItem>
    //                                         <Divider />
    //                                         <ListItem alignItems="flex-start">
    //                                             <ListItemButton component="" href="#mc-question">
    //                                                 <ListItemText primary="Lesson 4" />
    //                                             </ListItemButton>
    //                                         </ListItem>
    //                                         <Divider />        */}
    //                                 </List>
    //                         </Stack>                 
    //                     </Box>
    //                     <Box m="auto" sx={{ border: 2, borderRadius: 5,  width: 400, height: 500, borderColor: '#FA4616'}}>
    //                         <Stack
    //                                 direction="column"
    //                                 justifyContent="center"
    //                                 alignItems="center"
    //                                 spacing={2}>
    //                                     <Typography component="h1" variant="h6" sx={{ p: 2 }}>Poll and Video Links</Typography>
    //                                     {/* Won't be href="mc-question" but href="lessons" or something */}
    //                                     <List
    //                                         sx={{ width: '100%', maxWidth: 400, minWidth: 400, bgcolor: 'background.paper' }}
    //                                         component="nav"
    //                                         direction="column"
    //                                         alignItems="center"
    //                                         aria-labelledby="nested-list-subheader">
    //                                             <Divider />
    //                                             <ListItem alignItems="flex-start">
    //                                                 <ListItemButton component="" href="#mc-question">
    //                                                     <ListItemText primary="Lesson 1" />
    //                                                 </ListItemButton>
    //                                             </ListItem>
    //                                             <Divider />
    //                                             <ListItem alignItems="flex-start">
    //                                                 <ListItemButton component="" href="#mc-question">
    //                                                     <ListItemText primary="Lesson 2" />
    //                                                 </ListItemButton>
    //                                             </ListItem>
    //                                             <Divider />
    //                                             <ListItem alignItems="flex-start">
    //                                                 <ListItemButton component="" href="#mc-question">
    //                                                     <ListItemText primary="Lesson 3" />
    //                                                 </ListItemButton>
    //                                             </ListItem>
    //                                             <Divider />
    //                                             <ListItem alignItems="flex-start">
    //                                                 <ListItemButton component="" href="#mc-question">
    //                                                     <ListItemText primary="Lesson 4" />
    //                                                 </ListItemButton>
    //                                             </ListItem>
    //                                             <Divider />       
    //                                     </List>
    //                             </Stack>
    //                     </Box>
    //                     <Stack
    //                         direction="column"
    //                         justifyContent="center"
    //                         alignItems="center"
    //                         spacing={2}>
    //                             <Box display="flex" m="auto" sx={{ border: 2, borderRadius: 5,  width: 400, height: 245, borderColor: '#FA4616', justifyContent: "center"}}>
    //                                 <Typography component="h1" variant="h6">Class Polls</Typography>
    //                                 {/* <Polls /> */}
    //                             </Box>
    //                             <Box  display="flex" m="auto" sx={{ border: 2, borderRadius: 5,  width: 400, height: 245, borderColor: '#FA4616', justifyContent: "center"}}>
    //                                 <Typography component="h1" variant="h6">Class Media</Typography>
    //                                 {/* <Media /> */}
    //                             </Box>
    //                     </Stack>
    //                 </Stack>
                    
    
    
    //             </Stack>
    //         </Box>
    //     );
    // }
    
    // return (
    //     <div>
    //         <Dashboard />
    //     </div>
        
    // )
}