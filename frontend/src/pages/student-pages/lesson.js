import React, {useEffect, useState} from 'react'
import Axios from "axios";
import Header from '../../components/header';
import '../../App.css'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import Link from '@mui/material/Link';
import { Container } from '@mui/system';
import BottomNavigation from '@mui/material/BottomNavigation';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack, Box } from '@mui/material';

const theme = createTheme({
    footer: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: 100,
        textAlign: 'center'
      }
});

function Lesson() {
    const [question, setQuestion]=useState();
    const [correctAnswer, setCorrectAnswer]=useState();
    const [index, setIndex] = useState(1);
    const [displayCorrect, setDisplay] = useState(false);
    const [displayIncorrect, setIncor] = useState(false);
    const [numQuestions, setNumQuestions] = useState();
    const [random1, setRandom1] = useState();
    const [random2, setRandom2] = useState();
    const progress = ((index/numQuestions) * 100);
    
    useEffect(()=>{
        getData()
        MultipleChoiceQuestion();
    }, [index]);

    const handleClick = () => {
        setIndex(index+1);
        setDisplay(false);
        setIncor(false);
    }

    function displayCorrectFooter() {
        setDisplay(true);
    }
    function displayIncorrectFooter() {
        setIncor(true);
    }

    const CorrectQuestion = () => {
        const [value, setValue] = React.useState(0);
        return(
            <ThemeProvider theme={theme}>
            <Container maxWidth={false} disableGutters>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{bgcolor: '#52d452'}}
                >
                <Stack direction="row" spacing={7} >
                    <div class="footer-declaration">
                        <Typography component="h1" variant="h5" color='white' fontSize={28}> Correct! </Typography>
                    </div>
                    <div class="footer-next-button">
                        <Button onClick={() => { handleClick() }} variant="text" style={{bgcolor: 'white', maxWidth: '200px', maxHeight: '60px', minWidth: '200px', minHeight: '60px'}} 
                            sx={{ fontSize: 16}}>
                            Next Question
                        </Button>
                    </div>
                </Stack>
                </BottomNavigation>
            </Container>
            </ThemeProvider>  
        )
    }
    
    const IncorrectQuestion = () => {
        const [value, setValue] = React.useState(0);
        return(
            <ThemeProvider theme={theme}>
            <Container maxWidth={false} disableGutters>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{bgcolor: '#f74825'}}
                >
                <Stack direction="row" spacing={7} >
                    <div class="footer-declaration">
                        <Typography component="h1" variant="h5" color='white' fontSize={28}> Incorrect. </Typography>
                    </div>
                    <div class="footer-next-button">
                        <Button onClick={handleClick} variant="text" style={{bgcolor: 'white', maxWidth: '200px', maxHeight: '60px', minWidth: '200px', minHeight: '60px'}} 
                            sx={{ fontSize: 16}}>
                            <Link to="/lesson" class='link'> Next Question </Link>
                        </Button>
                    </div>
                </Stack>
                </BottomNavigation>
            </Container>
            </ThemeProvider>  
        )
    }

    function MultipleChoiceQuestion() {
        return( 
            <div>
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
                        {question}
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
                                <div>{correctAnswer}</div>
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
                                <div>{random1}</div>
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
                                <div>{random2}</div>
                            </Stack>
                        </Button>
                    </Stack>
                </Stack>
            </Box> 
        </div>
        )
    }

    const getData= async() => {
        const response=await Axios.get("http://localhost:1521/getQuestions", {
            params: {
                type: "vocab",
                lesson: 1,
                i: index, 
            }
        }) 
        setQuestion(response.data);
        const correct=await Axios.get("http://localhost:1521/getCorrectAnswer", {
            params: {
                type: "vocab",
                lesson: 1,
                i: index
            }
        });
        setCorrectAnswer(correct.data);
        const number=await Axios.get("http://localhost:1521/getNumberOfQuestions", {
            params: {
                type: "vocab",
                lesson: 1
            }
        });
        setNumQuestions(number.data);
        const rand1=await Axios.get("http://localhost:1521/getRandomAnswer", {
            params: {
                type: "vocab",
                lesson: 1,
            }
        });
        setRandom1(rand1.data);
        const rand2=await Axios.get("http://localhost:1521/getRandomAnswer", {
            params: {
                type: "vocab",
                lesson: 1,
            }
        });
        setRandom2(rand2.data);
    }

    return (
        <div>
            <Header />
            <div class="progress-bar">
                <LinearProgress variant="determinate" value={progress} />     
            </div>
            <br />

        <MultipleChoiceQuestion/>
            

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