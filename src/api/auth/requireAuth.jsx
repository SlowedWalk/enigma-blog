import { useSelector } from 'react-redux'
import { selectCurrentToken, selectCurrentUser } from './authSlice';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const RequireAuth = ({
  allowedRoles // add allowedRoles prop to the RequireAuth to check if the user has the required role
 }) => {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  const location = useLocation();

  return (
    token
        // && user.roles?.find(role => allowedRoles?.includes(role))  // check if the user has the required role
        ? <Outlet />
        : <Navigate to='/login' state={{ from: location }} replace={true} />
        // replace={true} prevents the login page from being added to the history stack
  )
}

