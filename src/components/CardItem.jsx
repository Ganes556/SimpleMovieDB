import { Favorite, FavoriteBorder } from '@mui/icons-material';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Rating,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import useCheckFavorite from '../hooks/useCheckFavorite';
import { getDetail } from '../utils/fetchingdata';
import { clickFavorite } from '../utils/helperClick';

const styles = {
  multiLineEllipsis: (line) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: line,
    WebkitBoxOrient: 'vertical',
  }),
};

function CardItem({ id, title, img, body, rating, setFavorites }) {
  const [isLoaded, setLoaded] = useState(false);
  const [favorite, setFavorite] = useState(null);
  const [dispatch] = useOutletContext();
  const params = useParams();

  useCheckFavorite([favorite, setFavorite], params, id, setFavorites);

  return (
    <Grid item sx={{ xs: 12, md: 1 }}>
      <Card
        id={id}
        sx={{
          maxWidth: 245,
          height: 355,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardActionArea
          onClick={async () => {
            const data = await getDetail(id);
            dispatch({
              type: 'open',
              data: { rating, favorite, ...data },
            });
          }}
        >
          <CardMedia
            component={'img'}
            height={isLoaded ? '140 ' : 0}
            image={`https://image.tmdb.org/t/p/w185${img}`}
            onLoad={() => setLoaded(true)}
            sx={{ objectFit: 'cover', objectPosition: 'top' }}
          />
          {!isLoaded && (
            <Box sx={{ height: '140px', display: 'flex' }}>
              <CircularProgress sx={{ m: 'auto' }} />
            </Box>
          )}
          <CardContent>
            <Typography
              variant='h5'
              component={'div'}
              sx={styles.multiLineEllipsis(1)}
            >
              {title}
            </Typography>
            <Typography variant='body2' sx={styles.multiLineEllipsis(4)}>
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Container sx={{ mt: 'auto' }}>
          <CardActions sx={{ m: 'auto' }}>
            <IconButton
              onClick={() =>
                clickFavorite([favorite, setFavorite], {
                  id,
                  title,
                  img,
                  body,
                  rating,
                })
              }
            >
              {favorite && <Favorite sx={{ color: red[800] }} />}
              {!favorite && <FavoriteBorder />}
            </IconButton>

            <Rating value={rating} defaultValue={0} precision={0.5} readOnly />
          </CardActions>
        </Container>
      </Card>
    </Grid>
  );
}

export default CardItem;
