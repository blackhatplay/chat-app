import styled from 'styled-components';
import { Card } from '../common/Card';

export const AddContactCard = styled(Card)`
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

      .error {
         color: ${({ theme }) => theme.colors.error};
      }

      button {
         border: none;
         padding: 1rem;
         border-radius: 50px;
         background: ${({ theme }) => theme.colors.dark};
         color: ${({ theme }) => theme.colors.light};

         :disabled {
            background: ${({ theme }) => theme.colors.shadow};
         }
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
