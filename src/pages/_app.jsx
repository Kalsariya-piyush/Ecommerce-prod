import '../styles/global.css';

import { ToastContainer } from 'react-toastify';

import Loader from '@/components/Loaders/Loader';
import { AuthProvider } from '@/context/auth';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '../context/theme';

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', () => {
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setLoading(false);
  });

  useEffect(() => {
    if (loading) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [loading]);

  return (
    <AuthProvider>
      {loading && <Loader />}
      <ThemeProvider>
        <ToastContainer
          theme="light"
          position="top-right"
          hideProgressBar
          autoClose={2000}
          closeOnClick
          bodyClassName={'flex items-start p-1'}
          closeButton={false}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default MyApp;
