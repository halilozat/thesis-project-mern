import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext'
import { PostContextProvider } from './context/postContext/PostContext'
import { UserContextProvider } from './context/userContext/UserContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextProvider>
        <UserContextProvider>
        <App />
        </UserContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
