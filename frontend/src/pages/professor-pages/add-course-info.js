import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Axios from "axios";
import { Stack, Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../../App.css";

const AddCourseInfo = () => {
  const [lessonNum, setLessonNum] = useState();
  const [questionType, setQuestionType] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleChange = (event) => {
    setQuestionType(event.target.value);
  };

  const submitQuestion = async () => {
    console.log("checkpoint #1");
    const result = await Axios.get("http://localhost:1521/addQuestion", {
        params: {
            lessonNum: lessonNum,
            className: 'SPN1130',
            questionType: questionType,
            question: question,
            answer: answer
        }
    })
    console.log("checkpoint #2");
  };

  useEffect(() => {
    submitQuestion();
  }, []);

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
                        Welcome to GatorLingo
                    </Typography>

                    {/* NOTE: feel free to change logos for course pages. Just acting as placeholders until we decide final aesthetic. */}
                    <div class="title"> Which Spanish course are you currently enrolled in?</div>
                    {/* Add courses available here */}
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >

                        <br></br>

                        <Box m="auto" sx={{ border: 1, borderRadius: 5,  width: 550, height: 600, borderColor: '#e0e0e0'}}>
                            {/* Header */}
                            <Typography component="h1" variant="h5">
                                Add a question
                            </Typography>

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
                                <InputLabel id="group-select-label">
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
                            <Link to="/prof-home" class="link">
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
                            <Typography component="h1" variant="h5">
                                Box 2
                            </Typography>
                        </Box>
                    </Stack>
                    
                </Stack>
            </Box>
    </div>
  );
};

export default AddCourseInfo;
