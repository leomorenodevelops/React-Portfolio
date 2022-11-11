import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const head = ReactDOM.createRoot(document.querySelector('head'));

head.render(
  <>
    <title>Leo Moreno Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="./assets/css/global-styles.css"/>
    <link rel="stylesheet" href="./assets/css/primary-styles.css"/>
  </>
);

root.render(
    <App />
);
