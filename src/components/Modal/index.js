import React, { useCallback, useEffect } from 'react';
import { ModalContainer } from './styles';

const Modal = ({ children, onClose }) => {
   const handleBack = useCallback((event) => {
      event.preventDefault();
      onClose();
   }, []);

   useEffect(() => {
      window.history.pushState(null, document.title, window.location.href);
      window.addEventListener('popstate', handleBack);

      return () => {
         window.removeEventListener('popstate', handleBack);
      };
   }, []);

   return (
      <ModalContainer>
         <div>{children}</div>
      </ModalContainer>
   );
};

export default Modal;
