import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import Cookies from 'js-cookie';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './store'

axios.defaults.withCredentials = trueimport
axios.defaults.headers.common['X-CSRFToken'] = Cookies.get('kejki');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
