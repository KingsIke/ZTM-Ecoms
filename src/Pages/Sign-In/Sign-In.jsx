import { useState } from 'react';

import { createAuthUserWithEmailAndPassword,signInWithGooglePopup,  createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, linkEmailAndPasswordToGoogleAccount  } from '../../utils/firebase/firebase.utils';

import FormInput from '../FormInput/Form-input';
import "./Sign-in.scss"
import Button from '../../components/Button/button.component';
import { UserContext } from '../../contexts/user.context';

const defaultFormField = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const { email, password } = formField



    const resetFormFields = () => {
        setFormField(defaultFormField)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password)
          console.log("User authenticated:", user);
        //   setCurrentUser(user)
            resetFormFields()
        } catch (error) {
            console.error("Error signing in", error);
            alert(`Authentication failed: ${error.message}`);
            switch (error.code) {
                case 'auth/wrong-password':
                    alert("The password is incorrect");
                    break;
                case 'auth/user-not-found':
                    alert("No user found with this email.");
                    break;
                default:
                    alert("An error occurred. Please try again.");
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormField({ ...formField, [name]: value })
    }
    const logInGoogleUser = async () => {
        try {
        //   const { user } = 
          await signInWithGooglePopup();
        //   setCurrentUser(user)
        //   await createUserDocumentFromAuth(user);
      
          // Now try linking the email/password
          if (email && password) {
            await linkEmailAndPasswordToGoogleAccount(email, password);
            alert("Email and password successfully linked to your Google account!");
          } else {
            alert("Google sign-in successful. To link email/password, fill in both fields and click Google Sign-In again.");
          }
        } catch (error) {
          console.error("Error during Google sign-in or linking", error);
          alert(`Google sign-in or linking failed: ${error.message}`);
        }
      };
      
    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className='buttons-container'>

                <Button buttonType='inverted' type="submit">Sign In</Button>
                
                <Button buttonType='google' onClick={logInGoogleUser} type='button' >Google Sign in</Button>

                </div>
            
            </form >
        </div>
    )
}

export default SignInForm; 
