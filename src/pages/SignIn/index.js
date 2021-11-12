import React, { useState } from 'react';
import { useHistory } from 'react-router';
import server from '../../api/server';
import accessToken from '../../utils/accessToken';
import { InnerWrapper, SignInCard, SignInWrapper } from './styles';
import Verification from './Verification';

const SignIn = () => {
   const [mobile, setMobile] = useState('');
   const [verificationScreen, setVerificationScreen] = useState(false);

   const history = useHistory();
   const { token } = accessToken();

   if (token) {
      history.push('/');
   }

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         if (mobile) {
            const res = await server.post('/signin', {
               mobile,
            });

            localStorage.setItem('otpToken', res.data.token);

            setVerificationScreen(true);
         }
      } catch (error) {
         console.log(error);
      }
   };

   const handleChange = (e) => {
      setMobile(e.target.value);
   };

   return (
      <SignInWrapper>
         <InnerWrapper>
            {verificationScreen ? (
               <Verification mobile={mobile} />
            ) : (
               <SignInCard>
                  <h3>Sign in</h3>
                  <form onSubmit={handleSubmit}>
                     <label htmlFor="mobile">
                        <small>Please enter you mobile number</small>
                     </label>
                     <input type="number" name="mobile" value={mobile} onChange={handleChange} />
                     <small>If you continue, you agree to our terms and conditions</small>
                     <button>Continue</button>
                  </form>
               </SignInCard>
            )}
         </InnerWrapper>
      </SignInWrapper>
   );
};

export default SignIn;
