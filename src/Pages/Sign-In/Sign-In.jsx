import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGooglePopup,  signInAuthUserWithEmailAndPassword, linkEmailAndPasswordToGoogleAccount  } from '../../utils/firebase/firebase.utils';

import FormInput from '../FormInput/Form-input';
import "./Sign-in.scss"
import Button, {BUTTON_TYPE_CLASSES} from '../../components/Button/Button.component';
import { toast } from 'react-toastify';


const defaultFormField = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const { email, password } = formField

  const navigate = useNavigate();


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
                  toast.success(`Welcome back, ${user.email}!`);
      setTimeout(() => navigate('/'), 1000);
            
        } catch (error) {
            console.error("Error signing in", error);
            switch (error.code) {
                    case 'auth/wrong-password':
                      toast.error('Incorrect password');
                      break;
                    case 'auth/user-not-found':
                      toast.error('No user found with this email.');
                      break;
                    default:
                      toast.error('Authentication failed. Please try again.');
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
       toast.success(`Welcome`);
            // resetFormFields();
            setTimeout(() => navigate('/'), 1000);
          // Now try linking the email/password
          if (email && password) {
                  await linkEmailAndPasswordToGoogleAccount(email, password);
                  toast.success('Email and password linked to your Google account!');
                } else {
            toast.success("Google sign-in successful. To link email/password, fill in both fields and click Google Sign-In again.");
          }
        } catch (error) {
           console.error('Error during Google sign-in or linking', error);
                toast.error(`Google sign-in failed: ${error.message}`);
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

                <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">Sign In</Button>
                
                <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={logInGoogleUser} type='button' >Google Sign in</Button>

                </div>
            
            </form >
        </div>
    )
}

export default SignInForm; 
