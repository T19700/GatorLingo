import React from 'react'
import Header from '../../components/header';
import '../../App.css';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import Spanish1Dashboard from '../../components/spanish1_dash';
import Media from '../../components/media';
import { Card } from '@mui/material';


//console.log(user.displayName);

function StudentHome() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
        console.log(user.displayName)
        return (
            <div>
                <Header />
                <br/>
    
                {/* Check student's registered class and display correct class page here  */}
                <Spanish1Dashboard />
                
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

export default StudentHome;
