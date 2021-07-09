import React from 'react';
import { Router } from '@reach/router';
import Details from '../Components/Details';
import App from '../Components/App';

const Route = () => (
  <div className="main-container">
    <Router>
      <App path="/" />
      <Details path="/details/:id" />
    </Router>
  </div>
);

export default Route;
