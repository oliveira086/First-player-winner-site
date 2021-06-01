import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }
  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;
