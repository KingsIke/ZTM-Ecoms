import { useState } from 'react';

import { createAuthUserWithEmailAndPassword,signInWithGooglePopup,  createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import FormInput from '../FormInput/Form-input';
import "./Sign-in.scss"
import Button from '../../components/Button/button.component';

const defaultFormField = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const { email, password } = formField

    // console.log(formField)

    const resetFormFields = () => {
        setFormField(defaultFormField)
    }

    const logInGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
        console.log(user)
      
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log("...........",response)
            resetFormFields()
        } catch (error) {
            console.error("Error signing in", error);
            switch (error.code) {
                case 'auth/wrong-password':
                    alert("The password is incorrect. Please try again.");
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
                
                <Button buttonType='google' onClick={logInGoogleUser}>Google Sign in</Button>

                </div>
            
            </form >
        </div>
    )
}

export default SignInForm; 
