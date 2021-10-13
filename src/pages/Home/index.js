import React from 'react';
import { Header, HeaderContainer, HomeContainer, Search, StoryList } from './styles';

import { FiSearch } from 'react-icons/fi';
import StoryItem from '../../components/StoryItem';

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
               </StoryList>
            </Header>
         </HeaderContainer>
         {/* MainChat */}
      </HomeContainer>
   );
};

export default Home;
