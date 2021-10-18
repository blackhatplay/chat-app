import React, { useContext, useEffect, useState } from 'react';
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
import { MessageContext } from '../../contexts/Message';
import { MESSAGE_TYPE } from '../../constants';
const ChatBox = ({ match }) => {
   const { messages, selectedChat, setSelectedChat, sendMessage, outgoingMessages } = useContext(MessageContext);
   const [input, setInput] = useState('');
   const onMessage = (event) => {
      event.preventDefault();

      if (input) {
         const newMessage = {
            text: input,
            chatID: selectedChat,
         };

         sendMessage(newMessage);
         setInput('');
      }
   };

   const onInputChange = (e) => {
      setInput(e.target.value);
   };

   useEffect(() => {
      if (match.params.chatID) setSelectedChat(match.params.chatID);
   }, [match.params]);

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
            <ChatArea id="pp">
               {messages.map((message) =>
                  message.type === MESSAGE_TYPE.reply ? (
                     <Message key={message.id} type={message.type}>
                        <p>{message.text}</p>
                        <small>13:37</small>
                     </Message>
                  ) : (
                     <MessageRight key={message.id} type={message.type}>
                        <p>{message.text}</p>
                        <small>13:37</small>
                        {outgoingMessages[message.id] && <span>sending</span>}
                     </MessageRight>
                  ),
               )}

               <InputArea onSubmit={onMessage}>
                  <Input placeholder="Message" value={input} onChange={onInputChange} />
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
