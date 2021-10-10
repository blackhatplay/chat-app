import styled from 'styled-components';

export const ChatBox = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   height: calc(100vh - 2rem);
   justify-content: flex-end;
`;
export const MessageWrapper = styled.div`
   display: flex;
   gap: 1rem;
   flex-direction: ${({ author }) => (author ? 'row-reverse' : 'row')};
`;

export const TextMessage = styled.div`
   background-color: ${({ theme }) => theme.colors.primary};
   color: 'red';
   flex: 1;
   padding: 0.5rem;
   border-radius: 5px;
`;

export const Avatar = styled.div`
   background-color: ${({ theme }) => theme.colors.dark};
   width: 50px;
   height: 50px;
   border-radius: 50%;
`;

export const Input = styled.input`
   background-color: #ccc;
   width: 100%;
   padding: 0.5rem;
   border-radius: 5px;
`;
