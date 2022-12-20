import { Container, Modal, Typography } from '@mui/material';
import React, { lazy, Suspense, useReducer, useState } from 'react';
import CircularProgressCentering from './CircularProgressCentering';

const DetailModal = lazy(() => import('./DetailModal'));
const SearchAppBar = lazy(() => import('./SearchAppBar'));
const Outlet = lazy(async () =>
  import('react-router-dom').then((module) => ({ default: module['Outlet'] }))
);

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
        <Outlet context={[dispatch, search]} />
        {state?.open && (
          <DetailModal useReduceModal={() => [state, dispatch]} />
        )}
      </Suspense>
    </Container>
  );
}

export default PageLayout;
