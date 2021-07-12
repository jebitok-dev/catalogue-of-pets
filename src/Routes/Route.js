import React from 'react';
import { Router } from '@reach/router';
import Details from '../Components/Details';
import App from '../Components/App';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Route = () => (
  <div className="main-container">
    <Navbar />
    <Router>
      <App path="/" />
      <Details path="/details/:id" />
    </Router>
    <Footer />
  </div>
);

export default Route;
