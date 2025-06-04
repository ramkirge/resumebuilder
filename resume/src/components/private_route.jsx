import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import Layout from './layout';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const nav = useNavigate();

  if (loading) {
    return (
      <Layout>
        <h1 className="text-3xl font-bold text-center">Loading...</h1>
      </Layout>
    );
  }

  if (user) {
    return children;
  } else {
    // Using <Navigate> here instead of nav() to avoid side effects in render
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;



