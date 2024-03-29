import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Axios from "axios";
import { Stack, Box, Button, Typography, TextField, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Link } from "react-router-dom";
import "../../App.css";

const AddCourseInfo = () => {
  const [lessonNum, setLessonNum] = useState();
  const [questionType, setQuestionType] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [resourceType, setResourceType] = useState("");
  const [weblink, setWeblink] = useState("");

  const handleChange = (event) => {
    setQuestionType(event.target.value);
  };

  const handleResourceChange = (event) => {
    setResourceType(event.target.value);
  }

  const submitQuestion = async () => {
    const result = await Axios.get("http://localhost:1521/addQuestion", {
        params: {
            lessonNum: lessonNum,
            className: 'SPN1130',
            questionType: questionType,
            question: question,
            answer: answer
        }
    })
  };

  const submitResource = async () => {
    console.log("Checkpoint #1");
    const result = await Axios.get("http://localhost:1521/addResource", {
        params: {
            className: 'SPN1130',
            resourceType: resourceType,
            weblink: weblink
        }
    })
    console.log("Checkpoint #2");
  };

  useEffect(() => {
    submitQuestion();
  });

  return (
    <div class="home">

      {/* Header */}
      <Header />
      <br />

      {/* Log-In Form */}
      <Box m="auto" sx={{ border: 1, borderRadius: 5,  width: 1200, height: 800, borderColor: '#e0e0e0'}}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <br></br>

                    <Typography component="h1" variant="h5">
                        Welcome to the SPN1130 course page
                    </Typography>

                    <div class="title"> Add a question or class resource below</div>
                    
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >

                        <br></br>

                        <Box m="auto" sx={{ border: 1, borderRadius: 5,  width: 550, height: 600, borderColor: '#e0e0e0'}}>
                            <br></br>

                            {/* Header */}
                            <Typography component="h1" variant="h5" align="center">
                                Add a question
                            </Typography>
                            <br></br>

                            {/* Lesson Number */}
                            <TextField
                                onChange={(event) => {
                                setLessonNum(event.target.value);
                                }}
                                margin="normal"
                                required
                                fullWidth
                                name="lessonNum"
                                label="Lesson Number"
                                type="lessonNum"
                                id="lessonNum"
                                variant="outlined"
                            />

                            {/* Translation or Vocab Question */}
                            <FormControl fullWidth sx={{ marginTop: 1.5 }}>
                                <InputLabel id="translation or vocabulary">
                                Type of Question (Translation or Vocabulary)
                                </InputLabel>
                                <Select
                                labelId="questionType"
                                value={questionType}
                                label="Select Answer"
                                onChange={handleChange}
                                >
                                <MenuItem value={"translation"}>Translation</MenuItem>
                                <MenuItem value={"vocab"}>Vocabulary</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Spanish Translation */}
                            <TextField
                                onChange={(event) => {
                                setQuestion(event.target.value);
                                }}
                                margin="normal"
                                required
                                fullWidth
                                name="question"
                                label="Spanish Translation"
                                type="question"
                                id="question"
                                variant="outlined"
                            />

                            {/* English Translation */}
                            <TextField
                                onChange={(event) => {
                                setAnswer(event.target.value);
                                }}
                                margin="normal"
                                required
                                fullWidth
                                name="answer"
                                label="English Translation"
                                type="answer"
                                id="answer"
                                variant="outlined"
                            />

                            {/* Submit Button */}
                            <Link to="/student-home" class="link">
                                <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={submitQuestion}
                                >
                                Add Question
                                </Button>
                            </Link>
                        </Box>

                        <Box m="auto" sx={{ border: 1, borderRadius: 5,  width: 550, height: 600, borderColor: '#e0e0e0'}}>
                            <br></br>

                            {/* Header */}
                            <Typography component="h1" variant="h5" align="center">
                                Add a Class Resource
                            </Typography>
                            <br></br>

                            {/* Poll or Video */}
                            <FormControl fullWidth sx={{ marginTop: 1.5 }}>
                                <InputLabel id="poll-or-video">
                                Type of Resource (Poll or Media)
                                </InputLabel>
                                <Select
                                labelId="resourceType"
                                value={resourceType}
                                label="Select Answer"
                                onChange={handleResourceChange}
                                >
                                <MenuItem value={"Poll"}>Poll</MenuItem>
                                <MenuItem value={"Media"}>Media</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Link */}
                            <TextField
                                onChange={(event) => {
                                setWeblink(event.target.value);
                                }}
                                margin="normal"
                                required
                                fullWidth
                                name="weblink"
                                label="Resource Link"
                                type="weblink"
                                id="weblink"
                                variant="outlined"
                            />

                            {/* Submit Button */}
                            <Link to="/student-home" class="link">
                                <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={submitResource}
                                >
                                    Add Resource
                                </Button>
                            </Link>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
    </div>
  );
};

export default AddCourseInfo;
