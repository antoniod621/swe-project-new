import React from 'react';
import { useGoogleLogin } from 'react-google-login';

// refresh token


const clientId =
    '32462246798-k8htnl7fl43le98i28fjh3fg3ks86bbd.apps.googleusercontent.com';

function LoginHooks() {
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
            `Logged in successfully welcome ${res.profileObj.name}. \n See console for full profile object.`
        );

    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
            `Failed to login.`
        );
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
        // responseType: 'code',
        // prompt: 'consent',
    });

    return (
        <button onClick={signIn} className="button">
            <img src="icons/google.svg" alt="google login" className="icon"></img>

            <span className="buttonText">Sign in with Google</span>
        </button>
    );
}

export default LoginHooks;