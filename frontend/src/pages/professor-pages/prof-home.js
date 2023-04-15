import React from 'react'
import Header from '../../components/header';
import '../../App.css';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import ProfessorDashboard from '../../components/prof-dash';
import Media from '../../components/media';
import { Card } from '@mui/material';

function ProfHome() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
        console.log(user.displayName)
        return (
            <div>
                <Header />
                <br/>
    
                {/* Check student's registered class and display correct class page here  */}
                <ProfessorDashboard />
                
            </div>
    
            
        );
    }
    else {
        return (
            <div>
                <Header />
            </div>
        );
    }
    // return (
    //     <div>
    //         <Header />
    //         <br/>

    //         {/* Check student's registered class and display correct class page here  */}
    //         <Spanish1Dashboard />
    //     </div>

        
    // );
}

export default ProfHome;
