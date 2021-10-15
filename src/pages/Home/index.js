import React from 'react';
import { Header, HeaderContainer, HomeContainer, MainChat, MainChatWrapper, Search, StoryList } from './styles';

import { FiSearch } from 'react-icons/fi';
import StoryItem from '../../components/StoryItem';
import ContactItem from '../../components/ContactItem';

const CONTACT_TYPES = {
   user: 'USER',
   group: 'GROUP',
};

const RECENT_CONTACT = [
   {
      id: '5d7e27e8-7f4f-43cc-b6b7-835702079228',
      type: CONTACT_TYPES.user,
      mobile: '8383099735',
   },
   {
      id: 'dff6deb8-cac4-400f-9c62-986675058b85',
      type: CONTACT_TYPES.user,
      mobile: '2541235875',
   },
   {
      id: '8a1852e4-18b8-40f9-9567-13c3d0eaec73',
      type: CONTACT_TYPES.user,
      mobile: '2547513654',
   },
];

const CONTACTS = {
   8383099735: {
      name: 'Manoj Singh',
   },
   2541235875: {
      name: 'Megha P',
   },
   2547513654: {
      name: 'Rishab',
   },
};

const Home = () => {
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
               {RECENT_CONTACT.map((contact) => (
                  <ContactItem
                     key={contact.id}
                     icon="https://source.unsplash.com/L2dTmhQzx4Q/200x200"
                     name="James"
                     lastMsg={{ text: 'Sure no problem!', time: '4.52 pm' }}
                     unreadCount="2"
                  />
               ))}
            </MainChat>
         </MainChatWrapper>
         {/* MainChat */}
      </HomeContainer>
   );
};

export default Home;
