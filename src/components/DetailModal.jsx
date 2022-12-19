import { Favorite, FavoriteBorder } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { grey, red } from '@mui/material/colors';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { clickFavorite } from '../utils/helperClick';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  border: `1px solid ${grey[400]}`,
  p: 4,
};

function DetailModal({ useReduceModal }) {
  const [state, dispatch] = useReduceModal();
  const [favorite, setFavorite] = useState(state.data.favorite || null);

  return (
    <>
      <Modal
        keepMounted
        open={state.open}
        onClose={() => dispatch({ type: 'close' })}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'
      >
        <Card sx={{ ...style, display: 'flex', gap: '1rem' }}>
          <Stack margin={'auto'}>
            <CardMedia
              component={'img'}
              src={`https://image.tmdb.org/t/p/w185/${state.data.poster_path}`}
            />
            <Container
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
              }}
            >
              <IconButton>
                {favorite && <Favorite sx={{ color: red[800] }} />}
                {!favorite && <FavoriteBorder />}
              </IconButton>
              <Rating
                value={state.data.rating}
                defaultValue={0}
                precision={0.5}
                readOnly
              />
            </Container>
          </Stack>
          <Box>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography
                id='keep-mounted-modal-title'
                gutterBottom
                variant='h5'
                component='div'
              >
                {state.data.original_title}
              </Typography>
              <Typography
                variant='body2'
                component={'p'}
                color={'GrayText'}
                marginY={'10px'}
              >
                {state.data.release_date}
              </Typography>
              <Container
                disableGutters
                sx={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}
              >
                {state.data.genres.map((e, i) => (
                  <Button
                    key={i}
                    variant={'outlined'}
                    size={'small'}
                    color={'inherit'}
                  >
                    {e.name}
                  </Button>
                ))}
              </Container>
              <Typography
                variant='body2'
                id='keep-mounted-modal-description'
                sx={{ mt: 2 }}
              >
                {state.data.overview}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Modal>
    </>
  );
}

export default DetailModal;
