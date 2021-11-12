import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
   Header,
   HeaderContainer,
   HomeContainer,
   MainChat,
   MainChatWrapper,
   Search,
   StoryList,
   AddButton,
} from './styles';

import { FiSearch, FiPlus } from 'react-icons/fi';
import StoryItem from '../../components/StoryItem';
import ContactItem from '../../components/ContactItem';
import { RecentContactsContext } from '../../contexts/RecentContacts';
import MessageContextProvider, { MessageContext } from '../../contexts/Message';
import { Route, Switch, useHistory } from 'react-router';
import Modal from '../../components/Modal';
import AddContact from '../../components/AddContact';
import { ContactContext } from '../../contexts/Contact';
import ChatBox from '../../components/ChatBox';

const HomePage = () => {
   const { recentContacts } = useContext(RecentContactsContext);
   const { setSelectedChat } = useContext(MessageContext);
   const { contacts } = useContext(ContactContext);
   const [showAddContact, setShowAddContact] = useState(false);
   const history = useHistory();

   const closeModal = useCallback(() => {
      setShowAddContact(false);
   }, [setShowAddContact]);

   useEffect(() => {
      setSelectedChat('');
   }, []);

   const onChatSelect = useCallback((id) => {
      history.push(`/chat/${id}`);
   }, []);

   const addContact = () => {
      setShowAddContact(true);
   };

   return (
      <HomeContainer>
         {showAddContact ? (
            <Modal onClose={closeModal}>
               <AddContact onClose={closeModal} />
            </Modal>
         ) : (
            <AddButton onClick={addContact}>
               <FiPlus />
            </AddButton>
         )}

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

         {/* MainChat */}
         <MainChatWrapper>
            <MainChat>
               {!!recentContacts.length && <h3>Recents</h3>}

               {recentContacts.map((contact) => (
                  <ContactItem
                     key={contact.id}
                     id={contact.id}
                     icon="https://source.unsplash.com/L2dTmhQzx4Q/200x200"
                     name={contact.mobile}
                     lastMsg={{ text: 'placeholder!', time: '4.52 pm' }}
                     unreadCount="2"
                     onClick={onChatSelect}
                  />
               ))}
               {!!contacts.length && <h3>Contacts</h3>}

               {contacts.map((contact) => (
                  <ContactItem
                     key={contact.id}
                     id={contact.id}
                     icon="https://source.unsplash.com/L2dTmhQzx4Q/200x200"
                     name={contact.mobile}
                     lastMsg={{ text: 'placeholder!', time: '4.52 pm' }}
                     unreadCount="2"
                     onClick={onChatSelect}
                  />
               ))}
            </MainChat>
         </MainChatWrapper>
      </HomeContainer>
   );
};

const Home = () => {
   return (
      <MessageContextProvider>
         <Switch>
            <Route exact path="/">
               <HomePage />
            </Route>
            <Route exact path="/chat/:chatID" component={ChatBox} />
         </Switch>
      </MessageContextProvider>
   );
};

export default Home;
