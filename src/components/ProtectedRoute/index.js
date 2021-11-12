import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import accessToken from '../../utils/accessToken';

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
   const { token } = accessToken();

   if (token) {
      return <Route {...rest}>{children}</Route>;
   } else {
      return (
         <Redirect
            to={{
               pathname: '/signin',
            }}
         />
      );
   }
};

export default ProtectedRoute;
