import React, { useCallback, useContext, useState } from 'react';
import { Header, HeaderContainer, HomeContainer, MainChat, MainChatWrapper, Search, StoryList } from './styles';

import { FiSearch } from 'react-icons/fi';
import StoryItem from '../../components/StoryItem';
import ContactItem from '../../components/ContactItem';
import { RecentContactsContext } from '../../contexts/RecentContacts';
import { MessageContext } from '../../contexts/Message';
import ChatBox from '../../components/ChatBox';
import { useHistory } from 'react-router';
import { useEffect } from 'react/cjs/react.development';

const Home = () => {
   const { recentContacts } = useContext(RecentContactsContext);
   const { setSelectedChat } = useContext(MessageContext);
   const history = useHistory();

   useEffect(() => {
      setSelectedChat('');
   }, []);

   const onChatSelect = useCallback((id) => {
      history.push(`/chat/${id}`);
   }, []);

   return (
      <HomeContainer>
         {/* Header */}
         <HeaderContainer>
            <Header>
               <div className="info">
                  <p>SupChat</p>
                  <img src="https://source.unsplash.com/L2dTmhQzx4Q/200x200" alt="" />
               </div>

               {/* Search */}
               <Search>
                  <FiSearch className="searchIcon" />
                  <input type="text" placeholder="Search" />
               </Search>

               {/* StoryList */}
               <StoryList>
                  <StoryItem icon="https://source.unsplash.com/L2dTmhQzx4Q/200x200" />
                  <StoryItem icon="https://source.unsplash.com/L2dTmhQzx4Q/200x200" />
                  <StoryItem icon="https://source.unsplash.com/L2dTmhQzx4Q/200x200" />
                  <StoryItem icon="https://source.unsplash.com/L2dTmhQzx4Q/200x200" />
                  <StoryItem icon="https://source.unsplash.com/L2dTmhQzx4Q/200x200" />
                  <StoryItem icon="https://source.unsplash.com/L2dTmhQzx4Q/200x200" />
                  <StoryItem icon="https://source.unsplash.com/L2dTmhQzx4Q/200x200" />
                  <StoryItem icon="https://source.unsplash.com/L2dTmhQzx4Q/200x200" />
                  <StoryItem icon="https://source.unsplash.com/L2dTmhQzx4Q/200x200" />
                  <StoryItem icon="https://source.unsplash.com/L2dTmhQzx4Q/200x200" />
                  <StoryItem icon="https://source.unsplash.com/L2dTmhQzx4Q/200x200" />
               </StoryList>
            </Header>
         </HeaderContainer>

         <MainChatWrapper>
            <MainChat>
               {recentContacts.map((contact) => (
                  <ContactItem
                     key={contact.id}
                     id={contact.id}
                     icon="https://source.unsplash.com/L2dTmhQzx4Q/200x200"
                     name={contact.mobile}
                     lastMsg={{ text: 'Sure no problem!', time: '4.52 pm' }}
                     unreadCount="2"
                     onClick={onChatSelect}
                  />
               ))}
            </MainChat>
         </MainChatWrapper>
         {/* MainChat */}
      </HomeContainer>
   );
};

export default Home;
