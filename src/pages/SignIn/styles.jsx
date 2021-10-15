import styled from 'styled-components';

export const SignInWrapper = styled.div`
   background: url('/images/background.webp') no-repeat center center/cover;
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   color: ${({ theme }) => theme.colors.text};
`;

export const InnerWrapper = styled.div`
   width: 100%;
   height: 80vh;
   display: flex;
   align-items: flex-end;
`;

export const Otp = styled.div`
   display: flex;
   gap: 1rem;
   justify-content: space-evenly;

   input {
      width: 3rem !important;
      height: 3rem;
      text-align: center;
   }
`;

export const Card = styled.div`
   margin: 1rem;
   padding: 1.5rem 1rem;
   background: #fff;
   border-radius: 25px;
   width: 100%;

   h3 {
      margin-bottom: 0.5rem;
   }

   form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input {
         background: ${({ theme }) => theme.colors.light};
         padding: 0.8rem 1rem;
         border: none;
         outline: none;
         width: 100%;
         border-radius: 10px;
         font-size: 1.2rem;
         font-weight: bold;
      }

      button {
         border: none;
         padding: 1rem;
         border-radius: 50px;
         background: ${({ theme }) => theme.colors.dark};
         color: ${({ theme }) => theme.colors.light};
      }

      .link {
         background: none;
         color: ${({ theme }) => theme.colors.secondary};
      }
      small {
         text-align: center;
      }
   }
`;
