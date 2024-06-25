import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: inherit;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  
`;

export default GlobalStyle;
