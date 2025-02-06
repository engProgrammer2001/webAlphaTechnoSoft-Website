// AdminRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

// Mock function to get user role, replace with your real authentication logic
const getUserRole = () => {
  // This should be replaced with actual logic to get the user role
  return localStorage.getItem('role'); // Example: "admin" or "user"
};


const AdminRoute = ({ element: Component, ...rest }) => {
  const role = getUserRole();

  // Check if the role is admin
  if (role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  
  // If the user is an admin, render the component
  return <Component {...rest} />;
};

export default AdminRoute;
