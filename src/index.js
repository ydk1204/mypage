import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/js/all.js';

import firebase from "firebase/compat/app"
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIsk3fzKcbD_17GykpKtvWlgyTOJZc-3o",
  authDomain: "dangdang-bf6c7.firebaseapp.com",
  projectId: "dangdang-bf6c7",
  storageBucket: "dangdang-bf6c7.appspot.com",
  messagingSenderId: "51804947188",
  appId: "1:51804947188:web:63190f01da6113a20514a1",
  measurementId: "G-4C9QRJ0970"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


