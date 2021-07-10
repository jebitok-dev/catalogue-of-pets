import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, createStore } from 'react-redux';

import { Router } from './Routes/Route';
import './index.css';
import reducer from './Reducers';
import App from './Components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
