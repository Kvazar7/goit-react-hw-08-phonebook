import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import  authSelectors  from '../redux/auth/authSelectors';

export default function PublicRoute({
  component: Component,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedin);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}