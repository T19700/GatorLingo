import Header from "../components/header";
import "../App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { setDoc, doc } from "firebase/firestore";
const theme = createTheme();

function SignUp() {
  const [registerEmail, setRegisterEmail] = React.useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [group, setGroup] = React.useState("");
  let navigate = useNavigate();

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      const currentUser = user.user;
      await updateProfile(currentUser, {
        displayName: firstName + " " + lastName,
      });
      console.log("USER: " + user);
      console.log("GROUP: " + group);

      await setDoc(doc(db, "users", registerEmail), {
        Name: firstName + " " + lastName,
        Occupation: group,
        Course: "Not assigned",
      });

      if (group === "Professor") {
        navigate("/prof-home");
      } else {
        navigate("/class-selection");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div class="login-form">
      <Header />
      <br />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Welcome to GatorLingo
            </Typography>

            <Box
              component="form"
              onClick={register}
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
              />
              <TextField
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                autoFocus
              />
              <TextField
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControl fullWidth sx={{ marginTop: 1.5 }}>
                <InputLabel id="group-select-label">
                  Student or Professor?
                </InputLabel>
                <Select
                  labelId="group-select-label"
                  id="group-select"
                  value={group}
                  label="Student or Professor?"
                  onChange={(event) => {
                    setGroup(event.target.value);
                  }}
                >
                  <MenuItem value={"student"}>Student</MenuItem>
                  <MenuItem value={"professor"}>Professor</MenuItem>
                </Select>
              </FormControl>
              <Link to="/class-selection" class="link">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create Account
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
export default SignUp;
