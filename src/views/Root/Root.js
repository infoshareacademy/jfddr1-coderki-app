import React from 'react';
import AuthGuard from '../AuthGuard.js/AuthGuard';
import App from '../../App';
import Footer from '../Root/components/Footer';

function Root() {
  return (
    <AuthGuard>
      <App />
    </AuthGuard>
  );
}

export default Root;
