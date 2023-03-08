import React from 'react'
import Header from '../../components/header';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../../App.css'; 

function Courses() {
    return (
        <div>
            <Header />
            <h1 className="title">Courses</h1>

            <div className="button-container">
                <div className="button">
                    <Button variant="contained">
                        <Link to="/course-stats" class="link">Testing: Course Stats Page</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Courses;