import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const params = new URL(window.location).searchParams;
const to = params.get('to');
const id = params.get('id');

window.localStorage.setItem('to', to);
window.localStorage.setItem('id', id);

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById('root'),
);

serviceWorkerRegistration.register();
