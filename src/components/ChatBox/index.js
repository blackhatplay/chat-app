import React from 'react';
import { io } from 'socket.io-client';
import {
   ChatArea,
   ChatAreaWrapper,
   ChatBoxHeader,
   ChatBoxHeaderWrapper,
   ChatBoxWrapper,
   Input,
   InputArea,
   Message,
   MessageRight,
} from './styles';
import { IoMdSend } from 'react-icons/io';

const socket = io('ws://localhost:4000', {
   reconnectionDelayMax: 10000,
   query: {
      id: localStorage.getItem('id'),
   },
});

export const MESSAGE_TYPE = {
   message: 'MESSAGE',
   reply: 'REPLY',
};

const MESSAGES = [
   {
      text: 'Hey from message.',
      type: MESSAGE_TYPE.message,
      id: 'ae5936a1-83f1-4e1b-91bf-5dd545220bb7',
   },
   {
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas excepturi odio in aliquid aspernatur facilis dolor consequatur doloribus tempora recusandae?',
      type: MESSAGE_TYPE.reply,
      id: 'f945c449-4610-4924-9379-72555d498a1b',
   },
   {
      text: 'Hey how are you doing.',
      type: MESSAGE_TYPE.message,
      id: 'a082add6-4a5e-4a33-a7f0-303e91bac507',
   },
   {
      text: 'Hey how are you doing.',
      type: MESSAGE_TYPE.message,
      id: '52ef6f86-433b-41c8-8f81-4b1ac4dd2b70',
   },
   {
      text: 'Hey how are you doing. reply',
      type: MESSAGE_TYPE.reply,
      id: 'b40205ad-e7a6-4f23-9f3b-1fd06f8a2996',
   },
   {
      text: 'Hey how are you doing. message',
      type: MESSAGE_TYPE.message,
      id: '836a98d7-a364-427c-9b1e-94bfadd65d83',
   },
   {
      text: 'Hey how are you doing. message 2',
      type: MESSAGE_TYPE.message,
      id: '5940d1f7-708d-4a0e-bd15-860e4fb46cfd',
   },
   {
      text: 'Hey how are you doing. message 2',
      type: MESSAGE_TYPE.message,
      id: 'fd58ddf0-7ac1-4753-97fd-6e2c44987762',
   },
   {
      text: 'Hey how are you doing. message 2',
      type: MESSAGE_TYPE.message,
      id: '1733d6ae-c6c5-464a-ad62-866d1bebb723',
   },
   {
      text: 'Hey how are you doing. message 2',
      type: MESSAGE_TYPE.message,
      id: '0eaf6d52-3962-4847-9973-4916ab186e5c',
   },
   {
      text: 'Hey how are you doing. message 2 ajhdfj aljdfkhaljksdhf ljkashdfkjahs dflkjashdfjkashdfjkhasljkf',
      type: MESSAGE_TYPE.message,
      id: '62483b8b-3654-4c4e-96e2-b88e275274cb',
   },
];

const ChatBox = () => {
   return (
      <ChatBoxWrapper>
         <ChatBoxHeaderWrapper>
            <ChatBoxHeader>
               <img src="https://source.unsplash.com/L2dTmhQzx4Q/200x200" alt="" />
               <div>
                  <h3>John doe</h3>
                  {/* <small>online</small> */}
               </div>
            </ChatBoxHeader>
         </ChatBoxHeaderWrapper>
         <ChatAreaWrapper>
            <ChatArea>
               {MESSAGES.map((message) =>
                  message.type === MESSAGE_TYPE.reply ? (
                     <Message key={message.id} type={message.type}>
                        <p>{message.text}</p>
                        <small>13:37</small>
                     </Message>
                  ) : (
                     <MessageRight key={message.id} type={message.type}>
                        <p>{message.text}</p>
                        <small>13:37</small>
                     </MessageRight>
                  ),
               )}
               <InputArea>
                  <Input placeholder="Message" />
                  <button>
                     <IoMdSend />
                  </button>
               </InputArea>
            </ChatArea>
         </ChatAreaWrapper>
      </ChatBoxWrapper>
   );
};

export default ChatBox;
