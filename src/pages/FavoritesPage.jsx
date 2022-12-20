import { Container, Typography } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import CardList from '../components/CardList';
import useFavorites from '../hooks/useFavorites';

function FavoritesPage() {
  const [favorites, setFavorites] = useFavorites();
  const [, search] = useOutletContext();
  return (
    <Container
      sx={{
        display: 'flex',
        padding: 5,
      }}
    >
      {favorites.length > 0 && (
        <CardList
          favorites={favorites.filter((e) =>
            e.title.toLowerCase().includes(search || '')
          )}
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
