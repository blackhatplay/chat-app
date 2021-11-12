import styled from 'styled-components';

export const HomeContainer = styled.div``;
export const HeaderContainer = styled.div`
   background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.div`
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   padding: 1rem;
   border-bottom-left-radius: 25px;

   & .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;

      img {
         width: 2.5rem;
         height: 2.5rem;
         border-radius: 50%;
         background: ${({ theme }) => theme.colors.primary};
      }
   }
`;
export const Search = styled.div`
   display: flex;
   background: ${({ theme }) => theme.colors.background};
   padding: 0.5rem 1rem;
   border-radius: 5px;
   gap: 1rem;
   margin: 1rem 0;
   align-items: center;
   box-shadow: 0 5px 10px ${({ theme }) => theme.colors.shadow};

   .searchIcon {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.textSecondary};
   }

   input {
      border: none;
      outline: none;
      width: 100%;

      &::placeholder {
         color: ${({ theme }) => theme.colors.textSecondary};
      }
   }
`;

export const StoryList = styled.div`
   display: flex;
   flex-wrap: nowrap;
   overflow-x: auto;
   gap: 1rem;
   padding: 0.5rem;

   -webkit-overflow-scrolling: touch;

   &::-webkit-scrollbar {
      display: none;
   }
`;

export const MainChatWrapper = styled.div`
   background-color: ${({ theme }) => theme.colors.light};
`;

export const MainChat = styled.div`
   background-color: ${({ theme }) => theme.colors.background};
   border-top-right-radius: 25px;
`;

export const AddButton = styled.button`
   position: absolute;
   bottom: 2rem;
   right: 2rem;
   width: 3rem;
   height: 3rem;
   border: none;
   outline: none;
   border-radius: 50%;
   box-shadow: 0 2px 2px ${({ theme }) => theme.colors.shadow};
   font-size: 1.5rem;
   display: flex;
   justify-content: center;
   align-items: center;
   color: ${({ theme }) => theme.colors.light};
   background-image: ${({ theme }) =>
      `linear-gradient(to bottom right, ${theme.colors.secondary},  ${theme.colors.primary})`};
`;
