import React, { useState } from 'react'
import Header from '../../components/header';
import { Stack, Box, Link, Button, Typography, TextField, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import '../../App.css';

function CreateClass() {
    return (
        <div>
            <Header />
            
            <ClassForm/>

        </div>
    );
}

function ClassForm() {
    let [courseName, setCourseName] = useState("");

    return (
        <Box m="auto" sx={{ borderRadius: 5,  width: 600, height: 800, borderColor: '#e0e0e0'}}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <br></br>

                <Typography component="h1" variant="h5">
                    Create a Course
                </Typography>

                <TextField
                    onChange={(event) => {
                    setCourseName(event.target.value);
                    }}
                    margin="normal"
                    required
                    fullWidth
                    name="courseName"
                    label="Course Code"
                    type="courseName"
                    id="courseName"
                    variant="outlined"
                />

                <Link href="/add-course-info" class='link'>
                    <Button type='submit' fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Next: Create A Question or Resource
                    </Button>
                </Link>
               

            </Stack>
        </Box>
    )
}

export default CreateClass;