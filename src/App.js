import { ThemeProvider } from 'styled-components';
import Message from './components/message';

import { Container, GlobalStyle, theme } from './theme';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <Container>
            <Message />
         </Container>
      </ThemeProvider>
   );
}

export default App;
