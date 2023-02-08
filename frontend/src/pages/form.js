import React from 'react'
import '../App.css'; 

function Form() {
    return (
        <div>
            <label>Username:</label>
            <input type="username" name="userName" />
            <label>Password:</label>
            <input type="text" name="password" />
            <button>Submit</button>
        </div>
    );
}

export default Form;