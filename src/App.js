import { ThemeProvider } from 'styled-components';
import Message from './components/Message';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Container, GlobalStyle, theme } from './theme';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />

         <Router>
            <Switch>
               <Route exact path="/">
                  <SignIn />
               </Route>
               <Route exact path="/signin">
                  <Home />
               </Route>
            </Switch>
         </Router>

         {/* <Container>
            <Message />
         </Container> */}
      </ThemeProvider>
   );
}

export default App;
