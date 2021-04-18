import { ThemeProvider } from 'styled-components';

const typeTheme = true;

const theme = {
  colors: {
    firstColor: '#F7F7F7',
    secondColor: '#000000',
    thirdColor: '#D2D1D3',
    fourthColor: '#E80234',
    fifthColor: '#FBAF00',
    sixthColor: '#007CBE',
    seventhColor: '#00AF54',
    eighthColor: '#020C28',
  },
  fonts: ['sans-serif', 'Poppins'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

const themeDark = {
  colors: {
    firstColor: '#020C28',
    secondColor: '#000000',
    thirdColor: '#D2D1D3',
    fourthColor: '#E80234',
    fifthColor: '#FBAF00',
    sixthColor: '#007CBE',
    seventhColor: '#00AF54',
    eighthColor: '#F7F7F7',
  },
  fonts: ['sans-serif', 'Poppins'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={typeTheme ? theme : themeDark}>
    {children}
  </ThemeProvider>
);

export default Theme;
