// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Importing from 'react-dom/client' instead of 'react-dom'
import './index.css';
import App from './App';

// Create a root using React 18's new API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
