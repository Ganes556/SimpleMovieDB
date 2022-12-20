import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import { Drawer } from '@mui/material';

import { useEffect, useState } from 'react';
import DrawerContent from './DrawerContent';
import {
  Link,
  matchPath,
  useLocation,
  useNavigate,
  useSearchParams,
  useSubmit,
} from 'react-router-dom';
import { Container, Stack } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({ setSearch }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const submit = useSubmit();
  return (
    <>
      <AppBar
        position='sticky'
        sx={{
          top: 0,
          zIndex: 50,
        }}
      >
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography
              variant='h6'
              sx={{
                cursor: 'pointer',
              }}
              onClick={() => navigate('/')}
            >
              TheMovieDB
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'right',
              gap: '1.5rem',
              paddingRight: '1rem',
            }}
          >
            <Link
              to='/'
              style={{
                color: 'inherit',
                textDecoration:
                  matchPath(location.pathname, '/') ||
                  location.pathname.includes('/upcomming/page/')
                    ? `underline`
                    : 'none',
              }}
            >
              Upcomming
            </Link>
            <Link
              to='/now_playing'
              style={{
                color: 'inherit',
                textDecoration:
                  matchPath(location.pathname, '/now_playing') ||
                  location.pathname.includes('/now_playing/page/')
                    ? `underline`
                    : 'none',
              }}
            >
              Now Playing
            </Link>
            <Link
              to='/favorite'
              style={{
                color: 'inherit',
                textDecoration: matchPath(location.pathname, '/favorite')
                  ? `underline`
                  : 'none',
              }}
            >
              Favorite
            </Link>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              name='search'
              onChange={(v) => {
                // submit(v.currentTarget);
                setSearch(v.target.value);
              }}
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor={'left'}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerContent setDrawerOpen={setDrawerOpen} />
      </Drawer>
    </>
  );
}
