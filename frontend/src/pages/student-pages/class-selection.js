import "../../App.css";
import * as React from "react";
import Header from "../../components/header";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import Spanish1_Icon from "../../components/Spanish1.png";
import Spanish2_Icon from "../../components/Spanish2.png";
import { db } from "../../firebase-config";
import { getAuth } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

function ClassSelection() {
  const [userID, setID] = React.useState("");

  const auth = getAuth();
  const user = auth.currentUser;
  setID(user?.email);

  const updateUser = async (course) => {
    const userDoc = doc(db, "users", userID);
    const newFields = { Course: course };
    await updateDoc(userDoc, newFields);
  };

  return (
    <div>
      <Header />
      <br />
      <Box
        m="auto"
        sx={{
          border: 1,
          borderRadius: 5,
          width: 550,
          height: 400,
          borderColor: "#e0e0e0",
        }}
      >
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
          <div class="title">
            {" "}
            Which Spanish course are you currently enrolled in?
          </div>
          {/* Add courses available here */}
          <Stack direction="row" spacing={7}>
            <Button
              style={{
                border: 5,
                borderRadius: 25,
                backgroundcolor: "#e0e0e0",
                textTransform: "none",
                fontSize: "18px",
              }}
              onClick={() => {
                // add course to student info
                // course page should automatically open to the course page that the student is "enrolled" in
                updateUser("Spanish 1");
              }}
            >
              <Stack direction="column" spacing={2}>
                <Link to="/student-home" class="link">
                  <img
                    class="class_logo"
                    src={Spanish1_Icon}
                    alt="gator for spanish 1"
                  />
                  <div>Spanish 1</div>
                </Link>
              </Stack>
            </Button>
            <Button
              style={{
                border: 5,
                borderRadius: 25,
                backgroundcolor: "#e0e0e0",
                textTransform: "none",
                fontSize: "18px",
              }}
              onClick={() => {
                // add course to student info
                updateUser("Spanish 2");
              }}
            >
              <Stack direction="column" spacing={2}>
                <Link to="/classes" class="link">
                  <img
                    class="class_logo"
                    src={Spanish2_Icon}
                    alt="gator for spanish 2"
                  />
                  <div>Spanish 2</div>
                </Link>
              </Stack>
            </Button>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}

export default ClassSelection;
