import React from 'react'
import Header from '../../components/header';
import '../../App.css'; 
import Spanish1Dashboard from '../../components/spanish1_dash';


function StudentHome() {
    return (
        <div>
            <Header />
            <br/>

            {/* Check student's registered class and display correct class page here  */}
            <Spanish1Dashboard />
        </div>

        
    );
}

export default StudentHome;
