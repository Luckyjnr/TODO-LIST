import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const Data = [
  { Id: "Todo-0", Name: "Eat", Completed: true },  // Corrected 'True' to 'true'
  { Id: "Todo-1", Name: "Sleep", Completed: false }, // Corrected 'False' to 'false'
  { Id: "Todo-2", Name: "Repeat", Completed: false }, // Corrected 'False' to 'false'
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={Data} />
  </React.StrictMode>
);
