import React, {useState} from 'react'
import Header from '../../components/header';
import '../../App.css'; 
import LinearProgress from '@mui/material/LinearProgress';
import CorrectQuestion from '../../components/correct-question-footer';
import IncorrectQuestion from '../../components/incorrect-question-footer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack, Box } from '@mui/material';

function Lesson() {
    const [displayCorrect, setDisplay] = useState(false);
    const [displayIncorrect, setIncor] = useState(false);

    function displayCorrectFooter() {
        setDisplay(true);
    }
    function displayIncorrectFooter() {
        setIncor(true);
    }

    return (
        <div>
            <Header />
            <div class="progress-bar">
                <LinearProgress variant="determinate" value={5} />     
            </div>
            <br />

            {/* Multiple Choice Question */}
            <Box m="auto" sx={{ border: 1, borderRadius: 5,  width: 700, height: 300, borderColor: '#e0e0e0'}}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <br></br>
                <Typography component="h1" variant="h5">
                    Choose the correct English translation.
                </Typography>

                <Typography component="h1" variant="h4" color="#2074d4">
                    {/* Phrase to translate */}
                    lo pasé bien
                </Typography>

                <br/><br/>

                <Stack direction="row" spacing={7} >
                    {/* First answer option */}
                    <Button
                        style={{
                            border: 5,
                            borderRadius: 25,
                            backgroundcolor: "#e0e0e0",
                            textTransform: 'none',
                            fontSize: "18px",
                            color: 'black'
                        }}
                        onClick={displayCorrectFooter}
                        >
                        <Stack direction="column" spacing={2}>
                            <div>I had a good time. </div>
                        </Stack>
                    </Button>
                    {/* Second answer option */}
                    <Button
                        style={{
                            border: 5,
                            borderRadius: 25,
                            backgroundcolor: "#e0e0e0",
                            textTransform: 'none',
                            fontSize: "18px",
                            color: 'black'
                        }}
                        onClick={displayIncorrectFooter}
                        >
                        <Stack direction="column" spacing={2}>
                            <div>I had a bad time.</div>
                        </Stack>
                    </Button>
                    {/* Third answer option */}
                    <Button
                        style={{
                            border: 5,
                            borderRadius: 25,
                            backgroundcolor: "#e0e0e0",
                            textTransform: 'none',
                            fontSize: "18px",
                            color: 'black'
                        }}
                        onClick={displayIncorrectFooter}
                        >
                        <Stack direction="column" spacing={2}>
                            <div>I had fun.</div>
                        </Stack>
                    </Button>
                </Stack>
            </Stack>
        </Box>

        {displayCorrect ? 
        <div class="footer-correct">
            {displayCorrect ? <CorrectQuestion/> : null}
        </div> : null
        }
        {displayIncorrect ? 
        <div class="footer-incorrect">
            {displayIncorrect ? <IncorrectQuestion/> : null}
        </div> : null
        }

        </div>
    );
}

export default Lesson;