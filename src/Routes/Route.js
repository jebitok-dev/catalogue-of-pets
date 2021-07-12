import React from 'react';
import { Link, Router } from '@reach/router';
import Details from '../Components/Details';
import App from '../Components/App';

const Route = () => (
  <div className="main-container">
    <h1>
      <Link to="/">Adopt Pets!</Link>
    </h1>
    <Router>
      <App path="/" />
      <Details path="/details/:id" />
    </Router>
  </div>
);

export default Route;
