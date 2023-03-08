import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
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

    return <div class="home">
        <div>{data}</div>

        {/* Header */}
        <Header /> 

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

