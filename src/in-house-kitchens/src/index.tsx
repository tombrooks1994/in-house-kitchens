import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from './services/theme';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter } from 'react-router-dom';

initializeApp({
  apiKey: "AIzaSyCVtBRJFHQDFdfhWN41HW5H5VYxdEmLvPc",
  authDomain: "in-house-kitchens.firebaseapp.com",
  projectId: "in-house-kitchens",
  storageBucket: "in-house-kitchens.appspot.com",
  messagingSenderId: "1045934750117",
  appId: "1:1045934750117:web:e7b4782883e63f75e8904c",
  measurementId: "G-XYPKMJCZGR"
});

getAnalytics();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
