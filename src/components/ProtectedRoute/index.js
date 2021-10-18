import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
   const token = localStorage.getItem('accessToken');

   return (
      <Route
         {...rest}
         render={(props) => {
            if (token) {
               return <Component {...rest} {...props} />;
            } else {
               return (
                  <Redirect
                     to={{
                        pathname: '/signin',
                        state: {
                           from: props.location,
                        },
                     }}
                  />
               );
            }
         }}
      />
   );
};

export default ProtectedRoute;
