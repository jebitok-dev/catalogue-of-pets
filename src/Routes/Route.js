import React from 'react';
import { Router } from '@reach/router';
import Details from '../Components/Details';
import App from '../Components/App';
import Navbar from '../Components/Navbar';

const Route = () => (
  <div className="main-container">
    <Navbar />
    <Router>
      <App path="/" />
      <Details path="/details/:id" />
    </Router>
  </div>
);

export default Route;
