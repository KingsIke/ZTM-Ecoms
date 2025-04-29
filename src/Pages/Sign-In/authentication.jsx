// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth'

import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import { async } from '@firebase/util';
import SignUpForm from "../Sign-up/Sign-up"
import SignInForm from "./Sign-In"

const Authentication = () => {

    // useEffect(() => {
    //     const fetchData = async () => {

    //         const response = await getRedirectResult(auth)
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user)
    //         }
    //         console.log(response)
    //     }
    //     fetchData()
    // }, []);

    // const logGoogleUser = async () => {
    //     const { user } = await signInWithGooglePopup();
    //     const userDocRef = await createUserDocumentFromAuth(user)
    //     console.log(user)
    // }

    // const logGoogleRedirectUser = async () => {
    //     const { user } = await signInWithGoogleRedirect();
    //     console.log(user)
    // }
    return (
        <div>

            <h1>
                Sign In Page
            </h1>
            {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
            {/* <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}

            <SignInForm />
            <SignUpForm />

        </div>
    )
}
export default Authentication