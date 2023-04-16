import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../components/header";
import { Link } from "react-router-dom";
import Campus1 from '../components/campus.jpeg'
import Campus2 from '../components/campus1.jpeg'
import Audrey from '../components/audrey.jpeg'
import Jonathan from '../components/jonathan.JPG'
import Rachel from '../components/rachel.jpeg'
import Matthew from '../components/matthew.jpg'
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
                    <p>Gatorlingo was founded by four computer science students at the University of 
                      Florida who share a passion for language learning and technology. We realized that 
                      many students struggle with their language classes and that there was an opportunity 
                      to create a better way to learn languages specifically tailored to the needs of UF students. 
                      Inspired by the success of Duolingo, we set out to create a platform that would provide a similar 
                      gamified learning experience but with a focus on the language classes offered at UF. We started 
                      with Spanish 1 and 2, the most popular language courses at the university, and worked closely 
                      with professors and students to ensure that our content was accurate, relevant, and engaging.
                      As a team, we come from diverse backgrounds - from Florida to the Midwest - but share a common goal 
                      of making language learning accessible and enjoyable for all. </p>
                </div>
            </div>
            <div className="splitScreen">
                <div className="topPane">
                    <h1> The Vision </h1>
                    <p>We aim to provide UF students with the most effective and enjoyable language learning experience possible. 
                      We're committed to continually improving our platform by incorporating the latest research in language pedagogy, 
                      as well as feedback from our users. Our goal is to expand our course offerings beyond Spanish 1 and 2 and cover 
                      all the languages taught at UF. In addition to interactive lessons and quizzes, we aim to provide students with 
                      a variety of engaging resources to practice their language skills, including polls, relevant videos, and reading 
                      and listening exercises. By providing accessible and affordable language education, we hope to empower UF students 
                      to communicate effectively and confidently with people from diverse backgrounds, both in their personal and 
                      professional lives. </p>
                </div>
                <div className="bottomPane">
                  <img class="about-us-image" src="https://media.istockphoto.com/id/1143056050/vector/hablas-espanol-do-you-speak-spanish-bubble-with-spain-flag.jpg?s=612x612&w=0&k=20&c=NccXTPvdQYM0DRKbsGMPDsTPpdwZbYfDt11jCKFKIKY=" alt="Do you speak Spanish?" />
                </div>
            </div>    
            <div className="splitScreen">
                <div className="topPane">
                  <img class="about-us-image" src={Jonathan} alt="Headshot of Jonathan Cannella"/>
                </div>
                <div className="bottomPane">
                    <h1> Jonathan Cannella </h1>  
                    <p> Jonathan is a senior Computer Science student who enjoys the problem-solving aspects of creating new software and technology. 
                      When not working, he enjoys playing soccer, backcountry camping, and landscape photography. Jonathan aspires to one day be as 
                      good as a programmer as Chat-GPT. In 5 years he hopes to see himself employed at a tech company creating new software and hopefully 
                      not replaced by the aforementioned A.I. chat bot. </p>
                </div>  
              </div>
              <div className="splitScreen">
                <div className="topPane">
                    <h1> Matthew Davis </h1>
                    <p> Matthew is a senior at UF majoring in Computer Science with a special interest in aviation. When Matthew’s not studying, 
                      he enjoys working out, playing videogames or the piano (he can play hot-crossed buns in 3 different chords), and hiking 
                      (in the mountains where it’s not 90 degrees). One fun fact is that Matthew has never broken a bone because he drinks an 
                      amount of milk that would be lethal to a lactose-intolerant person. Upon graduation, he will be starting a full-time position 
                      at Lockheed Martin Space as a Software Engineer! </p>
                </div>
                <div className="bottomPane">
                  <img class="about-us-image" src={Matthew} alt="Headshot of Matthew Davis"/>
                </div>
            </div>
            <div className="splitScreen">
                <div className="topPane">
                    <img class="about-us-image" src="https://media.istockphoto.com/id/1143056050/vector/hablas-espanol-do-you-speak-spanish-bubble-with-spain-flag.jpg?s=612x612&w=0&k=20&c=NccXTPvdQYM0DRKbsGMPDsTPpdwZbYfDt11jCKFKIKY=" alt="Do you speak Spanish?" />
                </div>
                <div className="bottomPane">
                    <h1> Tristan McLain </h1>  
                    <p> Tristan is a Computer Science student at the University of Florida with a passion for puzzles and creative problem solving. 
                      In his free time, he loves watching “Friends” (they were not on a break), playing games, watching Big Bang Theory (bazinga!), 
                      traveling (so far to 48/50 states), and going to Disney (more so than an average child). Upon graduation, he will be a Junior 
                      Software Engineer at Applied Research Associates in Orlando, Florida.
                    </p>
                </div>  
              </div>   
              <div className="splitScreen">
                <div className="topPane">
                    <h1> Rachel Peterson </h1>
                    <p> Rachel is a senior graduating from the University of Florida with a degree in Computer Science. She is is hoping 
                      to continue her education after a few years of working as a software engineer in the industry. Outside of coding, she 
                      loves to crochet, bake, and play piano. She is also really excited to move to Seattle after graduation as her love of 
                      good coffee can be sustained there. </p>
                </div>
                <div className="bottomPane">
                <img class="about-us-image" src={Rachel} alt="Headshot of Rachel Peterson"/>
                </div>
            </div>
            <div className="splitScreen">
                <div className="topPane">
                <img class="about-us-image" src={Audrey} alt="Headshot of Audrey Weigel"/>
                </div>
                <div className="bottomPane">
                    <h1> Audrey Weigel </h1>  
                    <p> Audrey is a senior Computer Science student with a passion for creating ethical technology. In her free time,
                      she indulges by watching Spanish tv shows and eating the same Chipotle bowl she's been buying since she was 15 
                      years old. Accomplishments she are most proud of include (not necessarily in this order): </p>
                      <ul> 1. Being in the top 0.5% of Chipotle's global customers </ul>
                       <ul> 2. Singing at the Kennedy Center of Performing Arts </ul>
                       <ul> 3. Knowing almost every word in the last 10 1 hour remixes Two Friends produces </ul>
                       <ul> 4. The ability to list every country that has a Chipotle location in Western Europe (they should just hire her already) </ul>
                       <ul> 5. Self-publishing a book in high school </ul>
                </div>  
              </div> 
        </div>
    </div>
  );
};

export default AboutUs;
