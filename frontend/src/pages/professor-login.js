import React from 'react'
import Header from '../components/header';
import Form from '../pages/form';
import '../App.css'; 

function ProfessorLogin() {
    return (
        <div>
            <Header />
            <h1 className="title">Professor Login</h1>
            <Form />
        </div>
    );
}

export default ProfessorLogin;