import React from 'react'
import Header from '../../components/header';
import MCQuestion from '../../components/mc-question';
import '../../App.css'; 
import LinearProgress from '@mui/material/LinearProgress';
import CorrectQuestion from '../../components/correct-question-footer';
import IncorrectQuestion from '../../components/incorrect-question-footer';

function Lesson() {
    return (
        <div>
            <Header />
            <div class="progress-bar">
                <LinearProgress variant="determinate" value={50} />     
            </div>
            <br />
            <MCQuestion />

            <div class="footer-correct">
                <CorrectQuestion/>
            </div>
            {/* <div class="footer-incorrect">
                <IncorrectQuestion/>
            </div> */}
        </div>
    );
}

export default Lesson;