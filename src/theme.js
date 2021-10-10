import styled, { createGlobalStyle } from 'styled-components';

// light: #f6fbf6;
// primary-light: #b2ee8f;
// primary: #65d970;
// primary-dark: #b4ceb6;
// secondary-light: #0cae29;
// dark: #693f53;
// secondary: #55b3d8;

export const theme = {
   colors: {
      primary: '#65d970',
      primaryDark: '#b4ceb6',
      secondary: '#55b3d8',
      background: '#f6fbf6',
      dark: '#693f53',
   },
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        box-sizing: border-box;

    }
    
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Roboto Mono', monospace;
  }

  a {
      text-decoration: none;
  }
`;

export const Container = styled.div`
   padding: 1rem;
   height: 100%;
`;
