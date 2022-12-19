import React from 'react';
import {
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
  Box,
  ListItem,
} from '@mui/material';
import { Favorite, PlayCircle, Upcoming } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function GetIcon({ index }) {
  switch (index) {
    case 0:
      return <Upcoming />;
    case 1:
      return <PlayCircle />;
    case 2:
      return <Favorite />;
    default:
      return;
  }
}

function DrawerContent({ setDrawerOpen }) {
  return (
    <Box
      sx={{ width: '80vw' }}
      role='presentation'
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
    >
      <List>
        <ListItem>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              flexGrow: 1,
              backgroundColor: '',
            }}
          >
            TheMovieDB
          </Typography>
        </ListItem>
        {['Upcomming', 'Now Playing', 'Favorite'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GetIcon index={index} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    to={`/${text
                      .replace(/upcomming/i, '')
                      .replace(/[' ']/i, '_')
                      .toLocaleLowerCase()}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {text}
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default DrawerContent;
