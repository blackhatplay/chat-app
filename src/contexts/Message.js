import React, { useContext, useState, useEffect } from 'react';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
import { v4 as uuidv4 } from 'uuid';
import { io } from 'socket.io-client';
import { MESSAGE_TYPE } from '../constants';
import { RecentContactsContext } from './RecentContacts';

PouchDB.plugin(PouchDBFind);

const messageDB = new PouchDB('messageDB');
const outgoingDB = new PouchDB('outgoingDB');

let socket;

export const MessageContext = React.createContext();

const MessageContextProvider = ({ children }) => {
   const [messages, setMessages] = useState([]);
   const [outgoingMessages, setOutgoingMessages] = useState({});
   const [selectedChat, setSelectedChat] = useState('');
   const [refreshMessage, setRefreshMessage] = useState(true);
   const [refreshOutgoingMessage, setRefreshOutgoingMessage] = useState(true);
   const { updateRecent } = useContext(RecentContactsContext);

   useEffect(() => {
      socket = io(process.env.REACT_APP_SOCKET_ENDPOINT, {
         reconnectionDelayMax: 10000,
         query: {
            auth: localStorage.getItem('accessToken'),
         },
      });
   }, []);

   const sendMessage = async (messageData) => {
      const newMessage = {
         ...messageData,
         timestamp: new Date().getTime(),
         type: MESSAGE_TYPE.message,
         id: uuidv4(),
      };

      setMessages([newMessage, ...messages]);

      saveMessageToDB(newMessage);
      saveMessageToOutgoingDB(newMessage);
      socket.emit('message', newMessage);
   };

   const addIncommingMessage = (messageData) => {
      const newMessage = {
         ...messageData,
         timestamp: new Date().getTime(),
      };
      updateRecent(newMessage);

      saveMessageToDB(newMessage);
   };

   const saveMessageToDB = (message) => {
      console.log('incomming', message);
      messageDB.post({ ...message, _id: message.id }, function callback(err, result) {
         if (err && err.name !== 'conflict') {
            return console.log(err);
         }

         refreshMessages();
         if (message.type === MESSAGE_TYPE.reply) {
            socket.emit('ack', { id: message.id });
         }
      });
   };
   const saveMessageToOutgoingDB = (message) => {
      outgoingDB.post({ ...message, _id: message.id }, function callback(err, result) {
         if (err && err.name !== 'conflict') {
            return console.log(err);
         }
         refreshOutgoingMessages();
      });
   };

   const refreshMessages = () => {
      setRefreshMessage(true);
   };

   const refreshOutgoingMessages = () => {
      setRefreshOutgoingMessage(true);
   };

   const confirmMessageAck = async (data) => {
      try {
         const doc = await outgoingDB.get(data.id);
         await outgoingDB.remove(doc);
         socket.emit('ackBack', { ackId: data.ackId });
         refreshOutgoingMessages();
      } catch (error) {
         if (error.status === 404) {
            socket.emit('ackBack', { ackId: data.ackId });
         } else {
            console.log(error);
         }
      }
   };

   useEffect(() => {
      socket.on('reply', (msg) => {
         addIncommingMessage(msg);
      });

      socket.on('ack', (data) => {
         confirmMessageAck(data);
      });
   }, []);

   const getMessageById = async () => {
      try {
         await messageDB.createIndex({
            index: { fields: ['timestamp', 'chatID'] },
         });

         const data = await messageDB.find({
            selector: {
               chatID: selectedChat,
               timestamp: { $gte: null },
            },
            sort: [{ timestamp: 'desc' }],
         });

         setMessages(data.docs);
      } catch (error) {
         console.log(error);
      }
   };

   const getOutgoingMessageById = async () => {
      try {
         await outgoingDB.createIndex({
            index: { fields: ['timestamp', 'chatID'] },
         });

         const data = await outgoingDB.find({
            selector: {
               chatID: selectedChat,
               timestamp: { $gte: null },
            },
            sort: [{ timestamp: 'desc' }],
         });

         const outgoingObj = data.docs.reduce((obj, message) => {
            const newObj = obj;

            newObj[message.id] = message;

            return newObj;
         }, {});

         setOutgoingMessages(outgoingObj);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      getMessageById();
      getOutgoingMessageById();
   }, [selectedChat]);

   useEffect(() => {
      if (refreshMessage) {
         setRefreshMessage(false);
         getMessageById();
      }
   }, [refreshMessage]);

   useEffect(() => {
      if (refreshOutgoingMessage) {
         setRefreshOutgoingMessage(false);
         getOutgoingMessageById();
      }
   }, [refreshOutgoingMessage]);

   return (
      <MessageContext.Provider value={{ messages, setSelectedChat, selectedChat, sendMessage, outgoingMessages }}>
         {children}
      </MessageContext.Provider>
   );
};

export default MessageContextProvider;
