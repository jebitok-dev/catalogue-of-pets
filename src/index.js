import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Router from './Routes/Route';
import './index.css';
import reducer from './Reducers';

const store = createStore(reducer, applyMiddleware(thunk));

const PetApp = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(<PetApp />, document.getElementById('root'));
