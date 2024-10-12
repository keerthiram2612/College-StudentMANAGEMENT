import React from 'react'; // Importing React
import ReactDOM from 'react-dom/client'; // Importing the createRoot method from ReactDOM
import './index.css'; // Importing global styles
import App from './App'; // Importing the main App component
import { BrowserRouter } from 'react-router-dom'; // Importing BrowserRouter for routing

// Creating a root for the React application
const root = ReactDOM.createRoot(document.getElementById('root')); // React 18 method

// Rendering the App wrapped in BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
