import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./pages/layout";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lesson from "./pages/student-pages/lesson";
import Classes from "./pages/student-pages/classes";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import ClassSelection from "./pages/student-pages/class-selection";
import StudentHome from "./pages/student-pages/student-home";
import CreateClass from "./pages/professor-pages/create-class";
import ProfHome from "./pages/professor-pages/prof-home";
import Courses from "./pages/professor-pages/courses";
import CourseStats from "./pages/professor-pages/course-stats";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lesson" element={<Lesson />} />
          <Route path="classes" element={<Classes />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="class-selection" element={<ClassSelection />} />
          <Route path="create-class" element={<CreateClass />} />
          <Route path="prof-home" element={<ProfHome />} />
          <Route path="student-home" element={<StudentHome />} />
          <Route path="courses" element={<Courses />} />
          <Route path="course-stats" element={<CourseStats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
