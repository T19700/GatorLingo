import React from 'react';
import Button from '@mui/material/Button';
import Header from '../components/header';
import { Link } from "react-router-dom";
import '../App.css'; 


const Home = () => {
    return <div class="home">
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

