import styled from 'styled-components';

export const ModalContainer = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
   background-color: rgba(49, 49, 49, 0.8);
   display: flex;
   flex-direction: column-reverse;

   & > div {
      width: 100%;
      padding: 0.5rem;
   }
`;
