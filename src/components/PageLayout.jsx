import {
  Alert,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Modal,
  Typography,
} from '@mui/material';
import { blue, blueGrey, grey, lightBlue, red } from '@mui/material/colors';
import { Box } from '@mui/system';
import React, { lazy, Suspense, useReducer, useState } from 'react';
import DetailModal from './DetailModal';

const SearchAppBar = lazy(() => import('./SearchAppBar'));
const Outlet = lazy(async () =>
  import('react-router-dom').then((module) => ({ default: module['Outlet'] }))
);

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

function reducer(state, action) {
  if (action.type === 'open') {
    return { open: true, data: action.data };
  }
  if (action.type === 'close') {
    return { open: false };
  }
  throw Error('Unknow action: ' + action.type);
}

function PageLayout() {
  const [search, setSearch] = useState();
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <Container maxWidth={'xl'} sx={{ padding: '0' }} disableGutters>
      <Suspense fallback={<CircularProgressCentering />}>
        <SearchAppBar setSearch={setSearch} />
        <Outlet context={[dispatch]} />
      </Suspense>
      {state?.open && <DetailModal useReduceModal={() => [state, dispatch]} />}
    </Container>
  );
}

export default PageLayout;
