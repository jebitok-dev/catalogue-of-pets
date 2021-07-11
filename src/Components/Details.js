import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import petFinder from '../Helpers/Api';

/* eslint-disable */
const Details = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');
  const [media, setMedia] = useState('');
  const [description, setDescription] = useState('');

  useEffect(async () => {
    const { animal } = await petFinder.animal
      .show(id)
      .then((data) => data.data);

    setUrl(animal.url);
    setName(animal.name);
    setAnimal(animal.type);
    setLocation(`${animal.contact.address.city}, ${animal.contact.address.state}`);
    setBreed(animal.breeds.primary);
    setMedia(animal.photos);
    setDescription(animal.description);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <h1 className="loading" data-testid="details-loading">Loading</h1>
    );
  }

  const home = () => navigate('/');
  const adopt = () => navigate(url);

  return (
    <div className="details">
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <button type="button" onClick={adopt}>
          Adopt
          {name}
        </button>
        <button type="button" onClick={home}>
          Back
        </button>
        <p>{description}</p>
      </div>
    </div>
  );
};

Details.propTypes = {
  id: PropTypes.number,
};

Details.propTypes = {
    id: PropTypes.any,  // eslint-disable-line
};

export default Details;
