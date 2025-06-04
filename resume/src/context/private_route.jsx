import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';
import Layout from './layout';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <h2 className="text-2xl font-semibold text-gray-700">Loading...</h2>
        </div>
      </Layout>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;

