import { Error, ErrorOutline, ErrorRounded } from '@mui/icons-material';
import {
  Alert,
  Box,
  CircularProgress,
  Collapse,
  duration,
  Icon,
  Typography,
} from '@mui/material';
import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  const { data } = useRouteError();
  return (
    <>
      {data?.errors && (
        <Box
          display='flex'
          flexDirection={'column'}
          rowGap='10px'
          justifyContent={'center'}
          height='100vh'
          alignItems='center'
        >
          <ErrorOutline fontSize='large' sx={{ color: 'red' }} />
          <Typography component={'div'} variant='h5'>
            {data?.errors[0]}
          </Typography>
        </Box>
      )}

      {!data?.errors && (
        <Box
          display='flex'
          flexDirection={'column'}
          rowGap='10px'
          justifyContent={'center'}
          height='100vh'
          alignItems='center'
        >
          <ErrorOutline fontSize='large' sx={{ color: 'red' }} />
          <Typography component={'div'} variant='h5'>
            {data?.status_message
              ? data?.status_message
              : 'Check your connection!'}
          </Typography>
        </Box>
      )}
    </>
  );
}

export default ErrorBoundary;
