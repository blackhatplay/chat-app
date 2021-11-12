import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import RecentContactsProvider from './contexts/RecentContacts';
import ContactContextProvider from './contexts/Contact';
// import './contexts/importdata';

const params = new URL(window.location).searchParams;
const to = params.get('to');
const id = params.get('id');

window.localStorage.setItem('to', to);
window.localStorage.setItem('id', id);

ReactDOM.render(
   <React.StrictMode>
      <ContactContextProvider>
         <RecentContactsProvider>
            <App />
         </RecentContactsProvider>
      </ContactContextProvider>
   </React.StrictMode>,
   document.getElementById('root'),
);

serviceWorkerRegistration.register();
