import React, { useEffect, useState } from 'react';

const accessToken = () => {
   const [token, setToken] = useState(localStorage.getItem('accessToken'));

   const setAccessToken = (accessToken) => {
      setToken(token);
      localStorage.setItem('accessToken', accessToken);
   };

   return { token, setAccessToken };
};

export default accessToken;
