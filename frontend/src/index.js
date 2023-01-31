import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import Layout from './pages/layout';
import Home from './pages/home';
import StudentLogin from './pages/student-login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProfessorLogin from './pages/professor-login';
import Lesson from './pages/lesson';
import Classes from './pages/classes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="student-login" element={<StudentLogin />} />
          <Route path="professor-login" element={<ProfessorLogin />} />
          <Route path="lesson" element={<Lesson />} />
          <Route path="classes" element={<Classes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
