import React, { useState, useEffect } from "react";
import Header from '../../components/header';
import '../../App.css';
import { getAuth } from "firebase/auth";
import Spanish1Dashboard from '../../components/spanish1_dash';
import Spanish2Dashboard from '../../components/spanish2_dash';
import Typography from '@mui/material/Typography';
import Axios from "axios";
import { useLocation } from 'react-router-dom'

function StudentHome() {
    const location = useLocation()
    const [displayOne, setDisplayOne] = useState(false);
    const [displayTwo, setDisplayTwo] = useState(false);
    const auth = getAuth();
    const user = auth.currentUser;
    let name = user?.displayName;
    let arrayName = name.split(" ");
    let firstName = arrayName[0], lastName = arrayName[1];
    let userClass = location.state ? location.state.className : null;

    const getData = async () => { 
        const response = await Axios.get("http://localhost:1521/getUserClass", {
            params: {
                _firstName: firstName,
                _lastName: lastName
            }
        });
        userClass = response.data;
        if (userClass === "SPN1130") {
            setDisplayOne(true);
        } else if (userClass === "SPN2201") {
            setDisplayTwo(true);
        }
    };

    const setUserClass = async () => {
        await Axios.get("http://localhost:1521/updateClass", {
            params: {
                _firstName: firstName,
                _lastName: lastName,
                classInfo: userClass
            }
        });
    };

    if (userClass != null) {
        setUserClass();
    } else {
        getData();
    }

    useEffect(() => {
        let userClass = location.state ? location.state.className : null;
        if (userClass === "SPN1130") {
          setDisplayOne(true);
        } else if (userClass === "SPN2201") {
          setDisplayTwo(true);
        }
    }, []);

    function Dashboard() {
        return (
            <div>
                <Header />
                <br />

                {/* Check student's registered class and display correct class page here  */}
                {userClass === "SPN1130" || displayOne ? <Spanish1Dashboard /> : null}
                {userClass === "SPN2201" || displayTwo ? <Spanish2Dashboard /> : null}
            </div>
        )
    }

    if (user) {
        return (
            <Dashboard/>
        );
    } else {
        return (
            <div>
                <Header />
                <Typography> Error: user is not logged in. </Typography>
            </div>
        );
    }
}

export default StudentHome;