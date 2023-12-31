import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { rootReducer } from './redux/reducer/rootReducer';
import thunk from 'redux-thunk';
import { legacy_createStore } from 'redux';
import '@tailwindcss/forms'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

root.render(

  <BrowserRouter>
  <Provider store = {store}>

      <App />
  </Provider>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
