import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './UserReducer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = configureStore({
  reducer: {
    users: UserReducer
  }
})


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
