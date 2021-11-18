import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
    '32462246798-k8htnl7fl43le98i28fjh3fg3ks86bbd.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout successful');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;