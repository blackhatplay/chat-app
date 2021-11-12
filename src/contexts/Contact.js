import React, { useEffect, useState } from 'react';

import PouchDB from 'pouchdb';
import { DB_NAMES } from '../constants';

export const ContactContext = React.createContext();

const contactDB = new PouchDB(DB_NAMES.contactDB);

const ContactContextProvider = ({ children }) => {
   const [contacts, setContacts] = useState([]);
   const [refresh, setRefresh] = useState(true);

   const refreshRecent = () => {
      setRefresh(true);
   };

   const getAllContacts = async () => {
      try {
         const data = await contactDB.allDocs({ include_docs: true, descending: true });

         const mappedContacts = data.rows.map((contact) => ({ ...contact.doc }));
         console.log(mappedContacts);
         setContacts(mappedContacts);
      } catch (error) {
         console.log(error);
      }
   };

   const addContact = async (contact) => {
      try {
         await contactDB.post(contact);
         refreshRecent();

         console.log('contact added');
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      if (refresh) {
         setRefresh(false);
         getAllContacts();
      }
   }, [refresh]);

   return (
      <ContactContext.Provider value={{ contacts, getAllContacts, addContact }}>{children}</ContactContext.Provider>
   );
};

export default ContactContextProvider;
