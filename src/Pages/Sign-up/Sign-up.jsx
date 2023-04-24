import { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

// import { FormInput } from '../FormInput/form-FormInput.component';
import FormInput from '../FormInput/Form-input';
const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassord: ''
}
const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const { displayName, email, password, confirmPassword } = formField

    console.log(formField)

    const resetFormFields = () => {
        setFormField(defaultFormField)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (confirmPassword !== password) {
            return alert('Password must match with ConfirmPassword')

        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, Email already in Use')
            } else {

                console.log('User creation encountered Error', error)
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormField({ ...formField, [name]: value })
    }
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
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
                <button type="submit">Sign Up</button>
            </form >
        </div>
    );
}

export default SignUpForm; 
