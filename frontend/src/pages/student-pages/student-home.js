import React from 'react'
import Button from '@mui/material/Button';
import Header from '../../components/header';
import '../../App.css'; 
import { Link } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';

function StudentHome() {
    return (
        <div>
            <Header />
            <div class="progress-bar">
                <LinearProgress variant="determinate" value={50} />     
            </div>
            
            <h1 className="title">Student Home Page</h1>

            <div className="button-container">
                <div className="button">
                    <Button variant="contained">
                        <Link to="/class-selection" class="link">Testing: Class Selection Page</Link>
                    </Button>
                </div>
            </div>
        </div>

        
    );
}

export default StudentHome;