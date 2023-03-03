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
                    <Link to="/class-selection" class="link">Testing: Select Classes</Link>
                </Button>
            </div>
            <div className="button">
                <Button variant="contained">
                    <Link to="/lesson" class="link">Testing: Lesson Page</Link>
                </Button>
            </div>
        </div>
        
    </div>
  };
  
  export default Home;

