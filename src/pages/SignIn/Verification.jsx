import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import server from '../../api/server';
import accessToken from '../../utils/accessToken';
import { Otp, SignInCard } from './styles';

const otpInputArr = ['field1', 'field2', 'field3', 'field4'];

const Verification = ({ mobile }) => {
   const history = useHistory();
   const { setAccessToken } = accessToken();

   const [otp, setOtp] = useState({
      field1: '',
      field2: '',
      field3: '',
      field4: '',
   });

   const field1 = useRef();
   const field2 = useRef();
   const field3 = useRef();
   const field4 = useRef();

   const refs = {
      field1,
      field2,
      field3,
      field4,
   };

   useEffect(() => {
      const otpString = Object.keys(otp).reduce((otpString, currentField) => otpString + otp[currentField], '');

      if (otpString.length === otpInputArr.length) {
         server
            .post(
               '/verify',
               {
                  otp: otpString,
               },
               {
                  headers: {
                     Authorization: `Bearer ${localStorage.getItem('otpToken')}`,
                  },
               },
            )
            .then((res) => {
               setAccessToken(res.data.accessToken);

               history.push('/');
            })
            .catch((err) => console.log(err));
      }
   }, [otp]);

   const handleChange = (field, e) => {
      if (!isNaN(parseInt(e.target.value))) {
         const index = otpInputArr.indexOf(field);

         if (index !== otpInputArr.length - 1) {
            refs[otpInputArr[index + 1]].current.focus();
         }

         setOtp((prevState) => {
            return {
               ...prevState,
               [field]: e.target.value,
            };
         });
      } else {
         setOtp((prevState) => {
            return {
               ...prevState,
               [field]: '',
            };
         });
      }
   };

   const onResend = () => {
      history.push('/signin');
   };

   const handleKeyDown = (field, e) => {
      if (e.key === 'Backspace' || e.key === 'Delete') {
         e.preventDefault();

         const index = otpInputArr.indexOf(field);

         if (index !== 0) {
            refs[otpInputArr[index - 1]].current.focus();
         }
         setOtp((prevState) => {
            return {
               ...prevState,
               [field]: '',
            };
         });
      }
   };

   return (
      <SignInCard>
         <h3>Verification</h3>
         <form>
            <label htmlFor="mobile">
               <small>Enter 4 digit mobile number sent to {mobile}</small>
            </label>

            <Otp>
               {otpInputArr.map((field) => {
                  return (
                     <input
                        type="text"
                        maxLength="1"
                        key={field}
                        value={otp[field]}
                        onChange={(e) => handleChange(field, e)}
                        ref={refs[field]}
                        onKeyDown={(e) => handleKeyDown(field, e)}
                     />
                  );
               })}
            </Otp>
            <small>If you did not recieve the notification</small>
            <button className="link" onClick={onResend}>
               Resend code
            </button>
         </form>
      </SignInCard>
   );
};

export default Verification;
