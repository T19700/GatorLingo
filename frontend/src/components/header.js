import React from 'react'
import '../App.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import GatorLingoLogo from './Logo1.png'


const theme = createTheme({
    palette: {
      text: {
        primary: '#000000',
      }
    },
});

function LoginHeader() {
    // Check if logged in logic here
    if (false) {
        return <MenuHeader/>
    }
    else {
        return (
            <Button variant="text" style={{maxWidth: '100px', maxHeight: '110px', minWidth: '100px', minHeight: '110px'}} sx={{ fontSize: 16}}>
                <Link to="/login" class="login-link">Login</Link>
            </Button>
        )
    }

}

const MenuHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const completeLogout = () => {
        // Logout logic here
    };
    const handleLogout = () => {
        handleClose();
        completeLogout();
    };

    return (
        <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', marginTop: '25px' }}>
            <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                {/* Change user initials here */}
                <Avatar sx={{ bgcolor: '#e0e0e0', width: 50, height: 50 }}>AA</Avatar>
            </IconButton>
        </Box>
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
            elevation: 0,
            sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': { width: 32, height: 32, ml: -0.5, mr: 1 },
                '&:before': {
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0
                },
            },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={handleClose}>
                <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={completeLogout}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
        </React.Fragment>
    )
}
  
const Header = () => {
    return(
        <ThemeProvider theme={theme}>
        <nav>
            <div classname='div-header'>
                <div className="logo">
                        <Link to="/" class="a">
                            <img class="class_logo" src={GatorLingoLogo} width="200" height="80" alt="gator for spanish 1"/>
                        </Link>
                </div>
                {/* Will have to add logic to check if user is logged in, otherwise, show login button */}
                <div className="login-button-header">
                    <LoginHeader/>
                </div>
                <Divider />
            </div>
        </nav>
        </ThemeProvider>
    )
}

export default Header;