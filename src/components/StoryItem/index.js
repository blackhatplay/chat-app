import React from 'react';
import { StoryItemWrapper } from './styles';

const StoryItem = ({ icon }) => {
   return (
      <StoryItemWrapper>
         <img src={icon} alt="" />
      </StoryItemWrapper>
   );
};

export default StoryItem;
