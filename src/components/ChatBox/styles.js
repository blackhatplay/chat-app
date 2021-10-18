import styled from 'styled-components';

export const ChatBoxWrapper = styled.div``;
export const ChatBoxHeaderWrapper = styled.div`
   background-color: ${({ theme }) => theme.colors.background};
`;
export const ChatBoxHeader = styled.div`
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   padding: 1rem;
   border-bottom-left-radius: 25px;

   display: flex;
   gap: 1rem;
   align-items: center;

   img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
   }
`;

export const ChatAreaWrapper = styled.div`
   background-color: ${({ theme }) => theme.colors.light};
`;

export const ChatArea = styled.div`
   background-color: ${({ theme }) => theme.colors.background};
   border-top-right-radius: 25px;

   /* view port height - height of header (up down padding + image) */
   height: calc(100vh - 5.2rem);

   gap: 1rem;
   position: relative;
   padding-bottom: 3rem;
   padding-top: 1rem;

   display: flex;
   flex-direction: column-reverse;
   overflow-y: auto;

   &::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
   }
`;

export const Message = styled.div`
   padding: 0.5rem;
   border-radius: 10px;
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   position: relative;
   max-width: 70vw;
   margin-bottom: 1rem;
   width: 100%;

   margin-left: 15px;

   small {
      color: ${({ theme }) => theme.colors.textSecondary};
   }

   &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-top: 15px solid ${({ theme }) => theme.colors.backgroundLight};
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      top: 0;
      left: -15px;
   }
`;

export const MessageRight = styled.div`
   padding: 0.5rem;
   border-radius: 10px;
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   position: relative;
   max-width: 70vw;
   margin-bottom: 1rem;
   width: 100%;

   align-self: flex-end;
   margin-right: 15px;

   small {
      display: block;
      color: ${({ theme }) => theme.colors.textSecondary};
      text-align: right;
   }

   &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-bottom: 15px solid ${({ theme }) => theme.colors.backgroundLight};
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      bottom: 0;
      right: -15px;
   }

   span {
      position: absolute;
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      right: 0;
      padding: 0.5rem;
      z-index: 1;
   }
`;

export const Input = styled.input`
   border: none;
   outline: none;
   width: 100%;
   padding: 1rem;
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   box-shadow: 0 2px 5px ${({ theme }) => theme.colors.shadow};
   border-radius: 100px;
   margin: 0.5rem 0;

   &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
   }
`;

export const InputArea = styled.form`
   display: flex;
   gap: 1rem;
   align-items: center;
   padding: 0 1rem;
   position: fixed;
   width: 100%;
   bottom: 0;

   button {
      color: ${({ theme }) => theme.colors.light};
      outline: none;
      border: none;

      display: flex;
      justify-content: center;
      align-items: center;
      background-image: ${({ theme }) =>
         `linear-gradient(to bottom right, ${theme.colors.secondary},  ${theme.colors.primary})`};
      padding: 0.5rem;
      border-radius: 50%;
      font-size: 1.5rem;
   }
`;
