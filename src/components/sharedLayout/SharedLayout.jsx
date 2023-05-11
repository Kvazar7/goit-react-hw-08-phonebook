import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { Suspense } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { UserMenu } from '../Menu';
import { AuthNav } from '../AuthNav';
import Loader from 'components/Loader/loader';

function SharedLayout() { 
  const isLoggedIn = useSelector(authSelectors.getIsLoggedin);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="static"
        linear-gradient="to right, primary, secondary">
        <Container
          maxWidth="xl"
          border-radius="5">
          <Toolbar disableGutters>
            <AddIcCallIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="p"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Roboto',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'default',
              }}
            >
              Contact Book
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem
                  component={NavLink}
                  to="./"
                  key="Home"
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem
                  component={NavLink}
                  to="./contacts"
                  key="Contacts"
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">Contacts</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <AddIcCallIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="p"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'roboto',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'default',
              }}
            >
              Contact Book
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                component={NavLink}
                to="./"
                key="Home"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              <Button
                component={NavLink}
                to="./contacts"
                key="Contacts"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contacts
              </Button>
            </Box>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </Container>
      </AppBar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
export default SharedLayout;