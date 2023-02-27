import '../App.css'; 
import * as React from 'react';
import Header from '../components/header';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Stack, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Container from '@mui/material/Container';

function ClassSelection() {
    const [checked, setChecked] = React.useState([0]);
  
    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };

    return (
        <div>
            <Header />
            <Container component="main" maxWidth="xs">
                <Box sx={{ border: 1, borderRadius: 5,  width: 550, height: 260, borderColor: '#e0e0e0'}}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <div class="title"> Which of the following courses are you currently enrolled in?</div>
                        {/* Add courses available here */}
                        <List class="list-courses" sx={{ width: '50%', maxWidth: 450 }}>
                            {["Spanish 1", "Spanish 2"].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;
                            return (
                                <ListItem
                                    key={value}
                                    disablePadding
                                >
                                    <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={`${value}`} />
                                    </ListItemButton>
                                </ListItem>
                            );
                            })}
                        </List>
                        <Button variant="text" style={{maxWidth: '50px', maxHeight: '40px', minWidth: '50px', minHeight: '40px'}} sx={{ fontSize: 16}}>
                            <Link to="/classes" class="link">
                                <ArrowForwardIcon />
                            </Link>
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </div> 
    );
}

export default ClassSelection;
