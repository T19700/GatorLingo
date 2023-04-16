import React from 'react'
import Header from '../../components/header';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../../App.css'; 
import ProfessorDashboard from '../../components/prof-dash';

function Courses() {
    return (
        <div>
            <Header />
            <br />
            <ProfessorDashboard />
        </div>
    );
}

export default Courses;