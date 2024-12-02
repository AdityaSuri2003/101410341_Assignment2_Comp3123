import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the main App component
import 'bootstrap/dist/css/bootstrap.min.css';


// Render the React application
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Matches the <div id="root"></div> in index.html
);
