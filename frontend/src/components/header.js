import React from 'react'
import '../App.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from './logo.svg';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      text: {
        primary: '#000000',
      }
    },
  });

const Header = () => {
    return(
        <ThemeProvider theme={theme}>
        <nav>
            <div classname='div-header'>
                <div className="logo">
                        <Link to="/" class="a">
                            <Logo/> 
                        </Link>
                </div>
                {/* Will have to add logic to check if user is logged in, otherwise, show login button */}
                <div className="login-button-header">
                    <Button variant="text" style={{maxWidth: '100px', maxHeight: '75.5px', minWidth: '100px', minHeight: '75.5px'}} sx={{ fontSize: 16}}>
                        <Link to="/login" class="login-link">Login</Link>
                    </Button>
                    {/* if logged in, show other component that allows users to log out */}
                </div>
                <Divider />
            </div>
        </nav>
        </ThemeProvider>
    )
}

export default Header;