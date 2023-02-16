import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Header from '../components/header';
import Axios from "axios";
import { Link } from "react-router-dom";
import '../App.css'; 


const Home = () => {
    const [data, setData]=useState();

    const getData=async()=>{
        const response=await Axios.get("http://localhost:5001/getOracleData");
        setData(response.data);
    }

    useEffect(()=>{
        getData()
    }, []);

    return <div class="home">
        <div>Hi {data}</div>

        {/* Header */}
        <Header /> 

        {/* Title */}
        <h1 class="title">
            Welcome to GatorLingo
        </h1>

        {/* Login Buttons */}
        <div className="login-container">
            <div class="login-button">
                <Button variant="contained">
                    <Link to="/student-login" class="link">Student Login</Link>
                </Button>
            </div>
            <div className="login-button">
                <Button variant="contained">
                    <Link to="/professor-login" class="link">Professor Login</Link>
                </Button>
            </div>
        </div>

        <div className="login-container">
            <div class="login-button">
                <Button variant="contained">
                    <Link to="/classes" class="link">Testing: List of Classes</Link>
                </Button>
            </div>
            <div className="login-button">
                <Button variant="contained">
                    <Link to="/lesson" class="link">Testing: Lesson Page</Link>
                </Button>
            </div>
        </div>
        
    </div>
  };
  
  export default Home;

