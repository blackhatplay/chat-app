import { ThemeProvider } from 'styled-components';
import SignIn from './pages/SignIn';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle, theme } from './theme';
import ChatBox from './components/ChatBox';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />

         <Router>
            <Switch>
               <Route exact path="/">
                  {/* <Home /> */}

                  <ChatBox />
               </Route>
               <Route exact path="/signin">
                  <SignIn />
               </Route>
            </Switch>
         </Router>
      </ThemeProvider>
   );
}

export default App;
