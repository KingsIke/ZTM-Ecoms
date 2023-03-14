import { useState } from 'react';

import { CreateUserWithEmailAndPassword, createUserDocumentFromAuth } from 'firebase/auth';

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassord: ''
}
const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormField)

    console.log(formField)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert('Password must match with ConfirmPassword')
            return
        }
        try {
            const { user } = await CreateUserWithEmailAndPassword(email, password)

            await createUserDocumentFromAuth(user, { displayName })
        } catch (error) {
            console.log('User creation encountered Error', error)
        }
    }

    const { displayName, email, password, confirmPassword } = formField
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormField({ ...formField, [name]: value })
    }
    return (
        <div>
            <h1>Sign up with your Email and Password</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Display Name</label>
                <input type="text" required onChange={handleChange} name='displayName' value={displayName} />

                <label htmlFor="">Email</label>
                <input type="email" required onChange={handleChange} name='email' value={email} />

                <label htmlFor="">Password</label>
                <input type="password" required onChange={handleChange} name='password' value={password} />

                <label>Confirm Password </label>
                <input type="password" required onChange={handleChange} name='comfirmPassword' value={confirmPassword} />
                <button type="submit">Sign Up</button>
            </form >
        </div>
    );
}

export default SignUpForm; 
