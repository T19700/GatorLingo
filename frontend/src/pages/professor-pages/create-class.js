import React from 'react'
import Header from '../../components/header';
import '../../App.css'; 
import LinearProgress from '@mui/material/LinearProgress';

function CreateClass() {
    return (
        <div>
            <Header />
            <div class="progress-bar">
                <LinearProgress variant="determinate" value={50} />     
            </div>
            <h1 className="title">Create Class</h1>
        </div>
    );
}

export default CreateClass;