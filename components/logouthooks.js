import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
    '32462246798-k8htnl7fl43le98i28fjh3fg3ks86bbd.apps.googleusercontent.com';

function LogoutHooks() {
    const onLogoutSuccess = (res) => {
        console.log('Logged out Success');
        alert('Logged out successfully');
    };

    const onFailure = () => {
        console.log('Handle failure cases');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });

    return (
        <button onClick={signOut} className="button">
            <img src="icons/google.svg" alt="google login" className="icon"></img>

            <span className="buttonText">Sign out</span>
        </button>
    );
}

export default LogoutHooks;