import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signOutUser } from '../../utils/firebase/firebase.utils';
import FormInput from '../FormInput/Form-input';
// import "./Sign-up.scss"
import {SignUpContainer, SignUpHeader} from "./SignUp.style.jsx"
import Button, {BUTTON_TYPE_CLASSES} from '../../components/Button/button.component.jsx';
import { UserContext } from '../../contexts/user.context';
import { toast } from 'react-toastify';



const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassord: ''
}
const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const { displayName, email, password, confirmPassword } = formField;

    const {setCurrentUser} = useContext(UserContext)
  const navigate = useNavigate();


    console.log('hit')

    const resetFormFields = () => {
        setFormField(defaultFormField)
    }
   
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        if (confirmPassword !== password) {
            return alert('Password must match with ConfirmPassword')

        }
        const { user } = await createAuthUserWithEmailAndPassword(email, password)
              await signOutUser();
        
        setCurrentUser(null)
        
        await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()

             toast.success('Account created successfully! Please sign in.');
                  setTimeout(() => navigate('/authentication'), 1000);
        } catch (error) {
             if (error.code === 'auth/email-already-in-use') {
        toast.error('Email already in use!');
      } else if (error.code === 'auth/weak-password') {
        toast.error('Password should be at least 6 characters.');
      } else {
        console.error('User creation error:', error);
        toast.error('An unexpected error occurred. Please try again.');
      }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormField({ ...formField, [name]: value })
    }
    return (
        <SignUpContainer>

        
            <SignUpHeader>Don't have an account?</SignUpHeader>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

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

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">Sign Up</Button>
            </form >
       </SignUpContainer>
    )
}

export default SignUpForm; 
