import React, { useEffect, useState } from 'react';
import PouchDB from 'pouchdb';
import { CONTACT_TYPES } from '../constants';

const recentContactDB = new PouchDB('recentContact');

export const RecentContactsContext = React.createContext();

const RecentContacts = ({ children }) => {
   const [recentContacts, setRecentContacts] = useState([]);
   const [refresh, setRefresh] = useState(true);
   const updateRecent = async (data) => {
      try {
         const { chatID: id, mobile, timestamp } = data;
         const newRecentUpdate = {
            id,
            mobile,
            lastMsgTime: timestamp,
            type: CONTACT_TYPES.user,
         };

         await recentContactDB.createIndex({
            index: { fields: ['id'] },
         });

         const res = await recentContactDB.find({
            selector: {
               id,
            },
         });
         console.log(res);
         if (res.docs.length === 0) {
            await recentContactDB.post(newRecentUpdate);
         }
         refreshRecent();
      } catch (error) {
         console.log(error);
      }
   };

   const refreshRecent = () => {
      setRefresh(true);
   };

   const updateRecentContacts = (data, lastMsgTime) => {
      setRecentContacts((prevState) => {
         prevState
            .map((contact) => {
               if (contact.id === data.id) {
                  return {
                     ...contact,
                     lastMsgTime,
                  };
               }

               return contact;
            })
            .sort(sortByLastMsgTime);
      });

      recentContactDB
         .put({
            ...data,
            lastMsgTime,
         })
         .then((res) => {
            console.log('updated', res);
         })
         .catch((err) => console.log(err));
   };

   const sortByLastMsgTime = (a, b) => {
      if (a.lastMsgTime > b.lastMsgTime) {
         return -1;
      }

      if (a.lastMsgTime < b.lastMsgTime) {
         return 1;
      }

      return 0;
   };

   useEffect(() => {
      if (refresh) {
         setRefresh(false);

         recentContactDB
            .createIndex({
               index: { fields: ['lastMsgTime', 'mobile'] },
            })
            .then(() => {
               return recentContactDB.find({
                  selector: {
                     mobile: { $exists: true },
                     lastMsgTime: { $gte: null },
                  },
                  sort: [{ lastMsgTime: 'desc' }],
               });
            })
            .then((data) => {
               console.log(data.docs);
               setRecentContacts(data.docs);
            })
            .catch((error) => console.log(error));
      }
   }, [refresh]);

   return (
      <RecentContactsContext.Provider value={{ recentContacts, updateRecentContacts, updateRecent }}>
         {children}
      </RecentContactsContext.Provider>
   );
};

export default RecentContacts;
