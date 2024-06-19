import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: open-sans, sans-serif;
  }

  button {
    font-size: 1rem;
    cursor: pointer;
  }
`;

export default GlobalStyle;
