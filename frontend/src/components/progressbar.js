import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import "../App.css"

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    // calculate questions answered / total questions

    return () => {
      // return calculation
    };
  }, []);

  return (
    // change value to calculation above3
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={50} />
    </Box>
  );
}