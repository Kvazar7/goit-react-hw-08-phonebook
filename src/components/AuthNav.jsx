import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
      <Button
        component={NavLink}
        to="./register"
        key="Registration"
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Sing Up
      </Button>
      <Button
        component={NavLink}
        to="./login"
        key="Login"
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Log In
      </Button>
    </Box>
  );
};