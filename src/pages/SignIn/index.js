import React, { useState } from 'react';
import { Card, InnerWrapper, SignInWrapper } from './styles';
import Verification from './Verification';

const SignIn = () => {
   const [mobile, setMobile] = useState('');
   const [verificationScreen, setVerificationScreen] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();

      setVerificationScreen(true);
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
               <Card>
                  <h3>Sign in</h3>
                  <form onSubmit={handleSubmit}>
                     <label htmlFor="mobile">
                        <small>Please enter you mobile number</small>
                     </label>
                     <input type="number" name="mobile" value={mobile} onChange={handleChange} />
                     <small>If you continue, you agree to our terms and conditions</small>
                     <button>Continue</button>
                  </form>
               </Card>
            )}
         </InnerWrapper>
      </SignInWrapper>
   );
};

export default SignIn;
