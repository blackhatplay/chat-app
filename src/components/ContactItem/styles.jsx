import styled from 'styled-components';

export const ContactWrapper = styled.div`
   display: flex;
   padding: 1rem;
   gap: 1rem;
   box-shadow: 0 2px 2px ${({ theme }) => theme.colors.backgroundLight};

   /* Ripple effect */
   background-position: center;
   transition: background 0.4s;

   &:hover {
      background: #fff radial-gradient(circle, transparent 1%, #f3f4f7 1%) center/15000%;
   }
   &:active {
      background-color: #f3f4f7;
      background-size: 100%;
      transition: background 0s;
   }

   img {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
   }
`;

export const ChatInfo = styled.div`
   flex: 1;

   div {
      display: flex;

      justify-content: space-between;
   }

   p,
   small {
      color: ${({ theme }) => theme.colors.textSecondary};
   }

   .notify-count {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.light};
   }
`;
