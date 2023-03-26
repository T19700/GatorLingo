import React from 'react'
import { Container } from '@mui/system';
import BottomNavigation from '@mui/material/BottomNavigation';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import '../App.css';

const theme = createTheme({
    footer: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: 100,
        textAlign: 'center'
      }
});

const CorrectQuestion = () => {
    const [value, setValue] = React.useState(0);
    return(
        <ThemeProvider theme={theme}>
        <Container maxWidth={false} disableGutters>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{bgcolor: '#52d452'}}
            >
            <Stack direction="row" spacing={7} >
                <div class="footer-declaration">
                    <Typography component="h1" variant="h5" color='white' fontSize={28}> Correct! </Typography>
                </div>
                <div class="footer-next-button">
                    <Button variant="text" style={{bgcolor: 'white', maxWidth: '200px', maxHeight: '60px', minWidth: '200px', minHeight: '60px'}} 
                        sx={{ fontSize: 16}}>
                        <Link to="/lesson" class='link'> Next Question </Link>
                    </Button>
                </div>
            </Stack>
            </BottomNavigation>
        </Container>
        </ThemeProvider>  
    )
}

export default CorrectQuestion;