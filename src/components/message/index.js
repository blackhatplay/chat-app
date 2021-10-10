import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { set, get, update } from 'idb-keyval';
import { Avatar, ChatBox, Input, MessageWrapper, TextMessage } from './styles';

const socket = io('ws://localhost:5000', {
   reconnectionDelayMax: 10000,
});

socket.on('connect', () => {
   console.log(socket.id);
});

let id = 100;

const Message = () => {
   const [messages, setMessages] = useState([]);
   const [input, setInput] = useState([]);

   useEffect(() => {
      socket.emit('join', localStorage.getItem('id'));

      get(localStorage.getItem('to')).then((val) => {
         if (val) setMessages(val);
      });

      socket.on('reply', (reply) => {
         setMessages((prevState) => [...prevState, reply]);
         update(localStorage.getItem('to'), (val) => {
            console.log(val);
            if (val) {
               return [...val, reply];
            }

            return [reply];
         });
      });
   }, []);

   const sendMessage = (message) => {
      const messageToSend = {
         message,
         id,
         type: 'message',
         recipient: localStorage.getItem('to'),
      };

      setMessages((prevState) => [...prevState, messageToSend]);
      update(localStorage.getItem('to'), (val) => {
         console.log(val);
         if (val) {
            return [...val, messageToSend];
         }

         return [messageToSend];
      });
      socket.emit('message', messageToSend);

      id += 1;
   };

   const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
         sendMessage(e.target.value);

         setInput('');
      }
   };

   const handleInput = (e) => {
      setInput(e.target.value);
   };

   return (
      <ChatBox>
         {messages.map((message) => (
            <MessageWrapper key={message.id} type="text" author={message.type !== 'reply'}>
               <Avatar />
               <TextMessage>{message.message}</TextMessage>
            </MessageWrapper>
         ))}

         <Input onKeyDown={handleKeyDown} value={input} onChange={handleInput} />
      </ChatBox>
   );
};

export default Message;
