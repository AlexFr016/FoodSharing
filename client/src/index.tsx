import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { YMaps, useYMaps } from '@pbe/react-yandex-maps';
import App from './App';
import store from './redux/store';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3001';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <YMaps>
        <App />
      </YMaps>
    </Provider>
  </BrowserRouter>,
);
