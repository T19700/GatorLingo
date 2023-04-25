import React from "react";
import { createTheme } from "@mui/material/styles";
import Header from "../components/header";
import Campus1 from '../components/campus.jpeg'
import Campus2 from '../components/campus1.jpeg'
import "../App.css";
import { Box } from "@mui/system";

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
                    <Box m="auto" sx={{ borderRadius: 5,  width: 600, height: 300, borderColor: '#e0e0e0'}}>
                    <p>Gatorlingo was founded by five computer science students at the University of 
                      Florida who share a passion for language learning and technology. We realized that 
                      many students struggle with their language classes and that there was an opportunity 
                      to create a better way to learn languages specifically tailored to the needs of UF students. 
                      Inspired by the success of Duolingo, we set out to create a platform that would provide a similar 
                      gamified learning experience but with a focus on the language classes offered at UF. We started 
                      with Spanish 1 and 2, the most popular language courses at the university, and worked closely 
                      with professors and students to ensure that our content was accurate, relevant, and engaging.
                      As a team, we come from diverse backgrounds - from Florida to the Midwest - but share a common goal 
                      of making language learning accessible and enjoyable for all. </p>
                      </Box>
                </div>
            </div>
            <div className="splitScreen">
                <div className="topPane">
                    <h1> The Vision </h1>
                    <Box m="auto" sx={{ borderRadius: 5,  width: 600, height: 300, borderColor: '#e0e0e0'}}>
                    <p> We aim to provide UF students with the most effective and enjoyable language learning experience possible. 
                      We're committed to continually improving our platform by incorporating the latest research in language pedagogy, 
                      as well as feedback from our users. Our goal is to expand our course offerings beyond Spanish 1 and 2 and cover 
                      all the languages taught at UF. In addition to interactive lessons and quizzes, we aim to provide students with 
                      a variety of engaging resources to practice their language skills, including polls, relevant videos, and reading 
                      and listening exercises. By providing accessible and affordable language education, we hope to empower UF students 
                      to communicate effectively and confidently with people from diverse backgrounds, both in their personal and 
                      professional lives.</p>
                      </Box>
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