import React from 'react'
import Button from '@mui/material/Button';
import Header from '../../components/header';
import '../../App.css'; 
import { Link } from "react-router-dom";

function ProfHome() {
    return (
        <div>
            <Header />
            
            <h1 className="title">Professor Home Page</h1>

            <div className="button-container">
                <div className="button">
                    <Button variant="contained">
                        <Link to="/create-class" class="link">Testing: Create Class Page</Link>
                    </Button>
                </div>
                <div className="button">
                    <Button variant="contained">
                        <Link to="/courses" class="link">Testing: Course Selection Page</Link>
                    </Button>
                </div>
            </div>
        </div>

        
    );
}

export default ProfHome;