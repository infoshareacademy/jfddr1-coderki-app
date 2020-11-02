import React from 'react';
import AuthGuard from '../AuthGuard.js/AuthGuard';
import AppRouter from '../../AppRouter';

function Root() {
  return (
    <AuthGuard>
      <AppRouter />
    </AuthGuard>
  );
}

export default Root;
