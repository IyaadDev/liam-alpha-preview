import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../liam/src/assets/pages/app';
import Login from '../liam/src/assets/pages/login';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import LoginButton from './assets/components/Login';
import LogoutButton from './assets/components/Logout';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/app/home" element={<App />} />
        <Route exact path="/app/login" element={<LoginButton />} />
        <Route exact path="/app/logout" element={<LogoutButton />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-qo6rnjmfafd2euvt.us.auth0.com"
    clientId="6HEb6f6pEyiKsolY2B169jLKHSuHUnZ4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Main />
  </Auth0Provider>,
);