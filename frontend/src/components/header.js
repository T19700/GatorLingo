import React from 'react'
import '../App.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from './logo.svg';
import Divider from '@mui/material/Divider';


const Header = () => {
    return(
        <nav>
            <div classname='div-header'>
                <div className="logo">
                        <Link to="/" class="a">
                            <Logo/> 
                        </Link>
                </div>
                <div className="login-button-header">
                    <Button variant="contained">
                        <Link to="/login" class="link">Login</Link>
                    </Button>
                </div>
                <Divider />
            </div>
        </nav>
    )
}

export default Header;