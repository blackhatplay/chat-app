import styled from 'styled-components';

export const StoryItemWrapper = styled.div`
   width: 3.2rem;
   height: 3.2rem;
   border-radius: 50%;
   border: 2px solid ${({ theme }) => theme.colors.light};
   outline: 1px solid ${({ theme }) => theme.colors.secondary};
   box-shadow: 0 5px 5px ${({ theme }) => theme.colors.shadow};
   flex: 0 0 auto;

   img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
   }
`;
