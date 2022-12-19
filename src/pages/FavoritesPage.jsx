import { Box, Container, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { Stack } from '@mui/system';
import { createContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CardList from '../components/CardList';
import useFavorites from '../hooks/useFavorites';

function FavoritesPage() {
  const [favorites, setFavorites] = useFavorites();
  return (
    <Container
      sx={{
        display: 'flex',
        padding: 5,
      }}
    >
      {favorites.length > 0 && (
        <CardList
          favorites={favorites}
          setFavorites={setFavorites}
          pageFavorite={true}
        />
      )}
      {favorites.length <= 0 && (
        <Container disableGutters sx={{ height: '100vh', display: 'fex' }}>
          <Typography variant='h5' margin={'auto'}>
            No favorite has been added!
          </Typography>
        </Container>
      )}
    </Container>
  );
}

export default FavoritesPage;
