import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Amaranth', sans-serif;
  }

  html {
    @media(max-width: 700px) {
      font-size: 13px;
    }
    @media(max-width: 580px) {
      font-size: 10px;
    }
  }
`