import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function CircularProgressCentering() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    </>
  );
}

export default CircularProgressCentering;
