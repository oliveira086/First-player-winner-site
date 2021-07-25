import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyles from './styles/global';
// import Theme from './styles/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AppProvider from './contexts';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <Router>
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={4000} />
      </Router>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
