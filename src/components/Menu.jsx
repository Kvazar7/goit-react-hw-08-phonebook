import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import authSelectors from '../redux/auth/authSelectors';
import { logOut } from '../redux/auth/authServices';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
      <h4>Welcome, {name}!</h4>
      <Button
        component={NavLink}
        to="./"
        key="Home"
        onClick={() => dispatch(logOut())}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Log Out
      </Button>
    </Box>
  );
};