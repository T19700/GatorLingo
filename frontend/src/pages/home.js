import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '../components/header';
import Axios from "axios";
import { Link } from "react-router-dom";
import '../App.css'; 


const Home = () => {
    const [data, setData]=useState();

    const getData=async()=>{
        const response=await Axios.get("http://localhost:1521/getOracleData");
        setData(response.data);
    }

    useEffect(()=>{
        getData()
    }, []);

    const theme = createTheme({
        palette: {
          primary: {
            main: '#FFFFFF',
          },
        },
      });

    return <div class="home">
        <div>{data}</div>

        {/* Header */}
        <Header /> 
        <div class="main-container">
            <h1> Welcome to GatorLingo </h1>
            <p> Your favorite study guide for your language courses at University of Florida. </p>
            <div className='main-btns'>
                <Link to="/login" class="link">
                    <ThemeProvider theme={theme}>
                    <Button color="primary" variant="outlined" size="large" sx={{m: 2}}>
                        GET STARTED
                    </Button>
                    </ThemeProvider>
                </Link>

                <Link to="/" class="link">
                    <ThemeProvider theme={theme}>
                    <Button color="primary" variant="contained" size="large" fontSize="60">
                        ABOUT US
                    </Button>
                    </ThemeProvider>
                </Link>
            </div>
        </div>

        {/* <Box m="auto" sx={{ border: 1, borderRadius: 5,  width: 1400, height: 400, borderColor: '#e0e0e0'}}>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                 <img src={CenturyTowerImage} width="500px" height="300px" alt="century tower"/>

                <Typography component="h1" variant="h5">
                    Welcome to GatorLingo
                </Typography>
            </Stack>
        </Box> */}

        {/* Title */}
        <h1 class="title">
            Welcome to GatorLingo
        </h1>

        <div className="button-container">
            <div class="button">
                <Button variant="contained">
                    <Link to="/student-home" class="link">Testing: Student Home Page</Link>
                </Button>
            </div>
            <div className="button">
                <Button variant="contained">
                    <Link to="/prof-home" class="link">Testing: Professor Home Page</Link>
                </Button>
            </div>
        </div>
        
    </div>
  };
  
  export default Home;

