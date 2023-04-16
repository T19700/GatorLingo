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
import { useLocation } from 'react-router-dom'
import TextField from "@mui/material/TextField";

const theme = createTheme({
    footer: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: 100,
        textAlign: 'center'
      }
});

function TranslationLesson() {
    const [question, setQuestion]=useState();
    const [correctAnswer, setCorrectAnswer]=useState();
    const [index, setIndex] = useState(1);
    const [displayCorrect, setDisplay] = useState(false);
    const [displayIncorrect, setIncor] = useState(false);
    const [numQuestions, setNumQuestions] = useState();
    const [userAnswer, setUserAnswer] = useState("");
    const progress = ((index/numQuestions) * 100);

    const location = useLocation()
    const lessonNum = location.state ? location.state.number : null;
    const lessonType = location.state ? location.state.type : null;
    
    useEffect(()=>{
        getData()
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

    function checkAnswer() {
        var areEqual = userAnswer.toUpperCase() === correctAnswer.toUpperCase();
        if (areEqual) {
            displayCorrectFooter();
        }
        else {
            displayIncorrectFooter();
        }
    }

    const handleInputChange = (event) => {
        setUserAnswer(event.target.value);
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
                    <div class="footer-declaration-with-text">
                        <Typography component="h1" variant="h5" color='white' fontSize={28}> Incorrect. </Typography>
                        <Typography component="h1" variant="h5" color='white' fontSize={20}> The correct answer was "{correctAnswer}" </Typography>
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

    const getData= async() => {
        // set entire question with question, answer, and two random answers
        const response=await Axios.get("http://localhost:1521/getTranslationQuestions", {
            params: {
                type: lessonType,
                lesson: lessonNum,
                i: index, 
            }
        }) 
        var str = response.data;
        const myArray = str.split("+");
        setQuestion(myArray[0]);
        setCorrectAnswer(myArray[1])

        const number=await Axios.get("http://localhost:1521/getNumberOfQuestions", {
            params: {
                type: lessonType,
                lesson: lessonNum
            }
        });
        setNumQuestions(number.data);
    }

    return (
        <div>
            <Header />
            <div class="progress-bar">
                <LinearProgress variant="determinate" value={progress} />     
            </div>
            <br />

            <div>
                <Box m="auto" sx={{ border: 1, borderRadius: 5,  width: 700, height: 300, borderColor: '#e0e0e0'}}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <br></br>
                    <Typography component="h1" variant="h5">
                        Type in the correct English translation.
                    </Typography>

                    <Typography component="h1" variant="h4" color="#2074d4">
                        {/* Phrase to translate */}
                        {question}
                    </Typography>

                    <br/><br/>

                    <Stack direction="row" spacing={7} >
                        <Box
                            sx={{
                                width: 400,
                                maxWidth: '100%',
                            }}
                            >
                            <TextField
                                onChange={handleInputChange}
                                margin="normal"
                                value={userAnswer}
                                fullWidth
                                id="userAnswer"
                                label="Enter translation"
                                name="userAnswer"
                                multiline
                                autoFocus
                                dir="ltr"
                            />
                        </Box>
                        <Button onClick={() => { checkAnswer() }} variant="outlined" style={{marginTop: 14, bgcolor: 'white', maxWidth: '100px', maxHeight: '50px', minWidth: '100px', minHeight: '60px'}} 
                            sx={{ fontSize: 16}}>
                            Check Answer
                        </Button>
                    
                    </Stack>
                </Stack>
            </Box> 
        </div>
            

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

export default TranslationLesson;