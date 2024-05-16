import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import {ReactState} from './ReactState';
import reportWebVitals from './reportWebVitals';
import { ReactReducer } from './ReactReducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReactState />
    <ReactReducer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
