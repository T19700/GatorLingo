import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../components/header";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
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
      <div class="main-container">
        <h1> Welcome to GatorLingo </h1>
        <p>
          {" "}
          Your favorite study guide for your language courses at University of
          Florida.{" "}
        </p>
        <div className="main-btns">
          <Link to="/login" class="link">
            <ThemeProvider theme={theme}>
              <Button
                color="primary"
                variant="outlined"
                size="large"
                sx={{ m: 2 }}
              >
                GET STARTED
              </Button>
            </ThemeProvider>
          </Link>

          <Link to="/about-us" class="link">
            <ThemeProvider theme={theme}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                fontSize="60"
              >
                ABOUT US
              </Button>
            </ThemeProvider>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
