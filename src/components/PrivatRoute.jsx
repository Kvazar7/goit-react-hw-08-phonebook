import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import  authSelectors  from '../redux/auth/authSelectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedin);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}