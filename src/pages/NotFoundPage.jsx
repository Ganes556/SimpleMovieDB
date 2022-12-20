import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

function NotFoundPage() {
  return (
    <Container sx={{ display: 'flex', height: '100vh' }}>
      <Typography component={'div'} sx={{ m: 'auto' }} variant='h5'>
        404 | Not Found!
      </Typography>
    </Container>
  );
}

export default NotFoundPage;
