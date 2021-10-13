import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
   colors: {
      primary: '#3445FF',
      primaryDark: '#D651FF',
      secondary: '#3444FE',
      background: '#ffffff',
      backgroundLight: '#F3F4F7',
      dark: '#212121',
      text: '#334756',
      light: '#F3F4F5',
      textSecondary: '#777',
      shadow: '#ccc',
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
    color: ${({ theme }) => theme.colors.text};
  }

  a {
      text-decoration: none;
  }
`;

export const Container = styled.div`
   padding: 1rem;
   height: 100%;
`;
