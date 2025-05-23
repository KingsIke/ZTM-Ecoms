import SignUpForm from "../Sign-up/Sign-up"
import SignInForm from "./Sign-In"
import './authentication.scss'

const Authentication = () => {
    return (
        <div className="authentication-container">

            {/* <h1>
                Sign In Page
            </h1> */}
            {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
            {/* <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}

            <SignInForm />
            <SignUpForm />

        </div>
    )
}
export default Authentication