import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/auth';
import AuthenticatedRoutes from './authenticated.routes';
import UnauthenticatedRoutes from './unAuthenticated.routes';

const Routes: React.FC = () => {
  const { signed } = useAuth();
  const { push } = useHistory();

  if (!signed) {
    push('/');
    return <UnauthenticatedRoutes />;
  }

  return <AuthenticatedRoutes />;
};

export default Routes;
