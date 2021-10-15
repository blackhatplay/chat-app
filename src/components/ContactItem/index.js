import React from 'react';
import { ChatInfo, ContactWrapper } from './styles';

const ContactItem = ({ icon, name, lastMsg, unreadCount }) => {
   return (
      <ContactWrapper className="ripple">
         <img src={icon} alt="" />
         <ChatInfo>
            <div>
               <h3 className="name">{name}</h3>
               <span className="notify-count">{unreadCount}</span>
            </div>
            <div>
               <p>{lastMsg.text}</p>
               <small>{lastMsg.time}</small>
            </div>
         </ChatInfo>
      </ContactWrapper>
   );
};

export default ContactItem;
