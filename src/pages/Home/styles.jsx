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
   gap: 1rem;
`;
