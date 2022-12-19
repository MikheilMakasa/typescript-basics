import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';
import UserSearch from './refs/UserSearch';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserSearch />
  </React.StrictMode>
);
