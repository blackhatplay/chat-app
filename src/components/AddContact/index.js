import React, { useContext, useState } from 'react';
import server from '../../api/server';
import { ContactContext } from '../../contexts/Contact';
import { AddContactCard } from './styles';

const PHONE_NO_LENGTH = 10;

const AddContact = ({ onClose }) => {
   const [name, setName] = useState('');
   const [mobile, setMobile] = useState('');
   const [exist, setExist] = useState(false);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState({
      message: '',
   });
   const [newContact, setNewContact] = useState({
      id: '',
      mobile: '',
   });

   const { addContact } = useContext(ContactContext);

   const onAddContact = (e) => {
      e.preventDefault();
      console.log(newContact);
      addContact({
         ...newContact,
         name,
      });
      onClose();
   };

   const handleName = (e) => {
      setName(e.target.value);
   };

   const handleNumber = async (e) => {
      setError({
         message: '',
      });
      setMobile(e.target.value);

      try {
         if (e.target.value.length === PHONE_NO_LENGTH) {
            setLoading(true);

            const res = await server.post('/verify-contact', {
               mobile: e.target.value,
            });

            if (res.data.id) {
               setNewContact(res.data);
               setExist(true);
               setLoading(false);
            }
         }
      } catch (error) {
         setError(error.response.data.error);
         setLoading(false);
      }
   };

   return (
      <AddContactCard>
         <h3>Add new contact</h3>
         <form onSubmit={onAddContact}>
            {exist ? (
               <>
                  <label htmlFor="name">
                     <small>Name:</small>
                     <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleName}
                        disabled={loading}
                        className={error.message && 'error'}
                     />
                  </label>
                  <button type="submit" disabled={!name && exist}>
                     Add Contact
                  </button>
               </>
            ) : (
               <label htmlFor="mobile">
                  <small>Mobile Number:</small>
                  <input
                     type="number"
                     name="mobile"
                     value={mobile}
                     onChange={handleNumber}
                     disabled={loading}
                     className={error.message && 'error'}
                  />
                  {error.message && <small className="error">{error.message}</small>}
               </label>
            )}
         </form>
      </AddContactCard>
   );
};

export default AddContact;
