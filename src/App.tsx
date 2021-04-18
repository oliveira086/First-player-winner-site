import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/global';
import Theme from './styles/theme.jsx';

const App: React.FC = () => (
  <Theme>
    <Router>
      <Routes />
      <GlobalStyles />
    </Router>
  </Theme>
);

export default App;
