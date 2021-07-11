import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyles from './styles/global';
// import Theme from './styles/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={4000} />
    </Router>
  </QueryClientProvider>
);

export default App;
