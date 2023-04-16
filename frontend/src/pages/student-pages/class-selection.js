import '../../App.css'; 
import React, { useState, useEffect } from "react";
import Header from '../../components/header';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Stack, Box } from '@mui/material';
import Spanish1_Icon from '../../components/Spanish1.png'
import Spanish2_Icon from '../../components/Spanish2.png'
import Axios from "axios";
import { getAuth } from "firebase/auth";

function ClassSelection() {
    const [name, setName] = useState("");
    let arrayName = name?.split(" ") ?? [];
    let firstName = arrayName[0], lastName = arrayName[1];
    const [userClass, setUserClass] = useState("");

    useEffect(()=>{
        const auth = getAuth();
        const user = auth.currentUser;
        let name = user?.displayName;
        setName(name);
    }, []);

    const addSpanish1 = async() => {
        // set user as registered for Spanish1
        await Axios.get("http://localhost:1521/updateClass", {
            params: {
                _firstName: firstName,
                _lastName: lastName,
                classInfo: "SPN1130", 
            }
        }) 
    }

    const addSpanish2 = async() => {
        // set user as registered for Spanish2
        await Axios.get("http://localhost:1521/updateClass", {
            params: {
                _firstName: firstName,
                _lastName: lastName,
                classInfo: "SPN2201", 
            }
        }) 
    }

    return (
        <div>
            <Header />
            <br />
            <Box m="auto" sx={{ border: 1, borderRadius: 5,  width: 550, height: 400, borderColor: '#e0e0e0'}}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <br></br>

                    <Typography component="h1" variant="h5">
                        Welcome to GatorLingo
                    </Typography>

                    {/* NOTE: feel free to change logos for course pages. Just acting as placeholders until we decide final aesthetic. */}
                    <div class="title"> Which Spanish course are you currently enrolled in?</div>
                    {/* Add courses available here */}
                    <Stack direction="row" spacing={7}>
                        <Button
                            style={{
                                border: 5,
                                borderRadius: 25,
                                backgroundcolor: "#e0e0e0",
                                textTransform: 'none',
                                fontSize: "18px"
                            }}
                            onClick={() => {
                                addSpanish1()
                            }}>
                            <Stack direction="column" spacing={2}>
                                <Link class="link" to="/student-home" state={{ className: "SPN1130"}}>
                                    <img class="class_logo" src={Spanish1_Icon} alt="gator for spanish 1"/>
                                    <div>Spanish 1</div>
                                </Link>
                            </Stack>
                        </Button>
                        <Button
                            style={{
                                border: 5,
                                borderRadius: 25,
                                backgroundcolor: "#e0e0e0",
                                textTransform: 'none',
                                fontSize: "18px"
                            }}
                            onClick={() => {
                                addSpanish2()
                            }}>
                            <Stack direction="column" spacing={2}>
                            <Link class="link" to="/student-home" state={{ className: "SPN2201"}}>
                                    <img class="class_logo" src={Spanish2_Icon} alt="gator for spanish 2"/>
                                    <div>Spanish 2</div>
                                </Link>
                            </Stack>
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </div> 
    );
}

export default ClassSelection;
