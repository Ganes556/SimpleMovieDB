import { Container } from '@mui/system';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardList from '../components/CardList';
import Navigation from '../components/Navigation';

function NowPlayingPage() {
  const { results, total_pages } = useLoaderData();
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1rem',
        padding: 5,
      }}
    >
      <CardList
        movies={results.map((movie) => ({
          id: movie.id,
          title: movie.original_title,
          img: movie.poster_path,
          body: movie.overview,
          rating: movie.vote_average / 2,
        }))}
      />
      <Navigation
        total_pages={total_pages}
        baseNavigate={'/now_playing/page'}
      />
    </Container>
  );
}

export default NowPlayingPage;
