import { ThemeProvider } from 'styled-components';
import SignIn from './pages/SignIn';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle, theme } from './theme';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />

         <Router>
            <Switch>
               <Route exact path="/signin">
                  <SignIn />
               </Route>
               <ProtectedRoute path="/">
                  <Home />
               </ProtectedRoute>
            </Switch>
         </Router>
      </ThemeProvider>
   );
}

export default App;
