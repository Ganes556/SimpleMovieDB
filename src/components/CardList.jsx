import { Grid } from '@mui/material';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import CardItem from './CardItem';

function CardList({ movies, favorites, setFavorites }) {
  return (
    <Grid
      container
      columns={{ sx: 1, md: 4 }}
      gap={'10px'}
      sx={{ justifyContent: 'center' }}
    >
      {!favorites &&
        movies.map((movie, index) => <CardItem key={index} {...movie} />)}
      {favorites &&
        favorites.map((favorite, index) => (
          <CardItem key={index} {...favorite} setFavorites={setFavorites} />
        ))}
    </Grid>
  );
}

export default CardList;
