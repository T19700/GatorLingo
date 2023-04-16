import React from 'react'
import Header from '../../components/header';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../../App.css'; 

function Classes() {
    return (
        <div>
            <Header />
            <h1 className="title">Classes</h1>

            <div className="button-container">
                <div className="button">
                    <Button variant="contained">
                        <Link to="/lesson" class="link">Testing: Lesson Page</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Classes;