import React from 'react';
import "../App.css"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack, Box } from '@mui/material';

export default function MCQuestion() {
   return (
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
                    <Button
                        style={{
                            border: 5,
                            borderRadius: 25,
                            backgroundcolor: "#e0e0e0",
                            textTransform: 'none',
                            fontSize: "18px",
                            color: 'black'
                        }}
                        onclick="displayCorrect()"
                        onClick={() => {
                        }}>
                        <Stack direction="column" spacing={2}>
                            <div>I had a good time. </div>
                        </Stack>
                    </Button>
                    <Button onclick="displayCorrectFooter()"
                        style={{
                            border: 5,
                            borderRadius: 25,
                            backgroundcolor: "#e0e0e0",
                            textTransform: 'none',
                            fontSize: "18px",
                            color: 'black'
                        }}
                        onClick={() => {
                        }}>
                        <Stack direction="column" spacing={2}>
                            <div>I had a bad time.</div>
                        </Stack>
                    </Button>
                    <Button
                        style={{
                            border: 5,
                            borderRadius: 25,
                            backgroundcolor: "#e0e0e0",
                            textTransform: 'none',
                            fontSize: "18px",
                            color: 'black'
                        }}
                        onClick={() => {
                            // show if correct answer
                        }}>
                        <Stack direction="column" spacing={2}>
                            <div>I had fun.</div>
                        </Stack>
                    </Button>
                </Stack>
            </Stack>
        </Box>
  );
}
