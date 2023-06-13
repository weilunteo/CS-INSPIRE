import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export default function Form() {
  return (
    <div>Form
         <GoogleOAuthProvider clientId="118258470536-fpho9jm441qkb9egda1esnf25vcfj0on.apps.googleusercontent.com">
         <GoogleLogin
        onSuccess={credentialResponse => {
            console.log(credentialResponse);
        }}

        onError={() => {
            console.log('Login Failed');
        }}

        />
            
         </GoogleOAuthProvider>
    
    </div>
  )
}
