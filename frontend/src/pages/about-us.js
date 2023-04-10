import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../components/header";
import { Link } from "react-router-dom";
import Campus1 from '../components/campus.jpeg'
import Campus2 from '../components/campus1.jpeg'
import "../App.css";

const AboutUs = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
    },
  });

  return (
    <div class="home">
        {/* Header */}
        <Header />
        <br/>
        <div class="about-us-container">
            <div className="splitScreen">
                <div className="topPane">
                    <img class="about-us-image" src={Campus1} alt="University of Florida campus"/>
                </div>
                <div className="bottomPane">
                    <h1> Our Story </h1>
                    <p>words words words words words words words words words words words words </p>
                </div>
            </div>
            <div className="splitScreen">
                <div className="topPane">
                    <h1> The Vision </h1>
                </div>
                <div className="bottomPane">
                    <img class="about-us-image" src={Campus2} alt="University of Florida campus"/>
                </div>
            </div>
        </div>


    </div>
  );
};

export default AboutUs;
