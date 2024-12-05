/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom';

export default function AuthGuard({ children }) {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('token') !== null;

  const publicRoutes = ['/signin', '/signup'];

  if (!isAuthenticated && !publicRoutes.includes(location.pathname)) {
    return <Navigate to="/signin" />;
  }

  return children;
}
