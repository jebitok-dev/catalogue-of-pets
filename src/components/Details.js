import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import pet from '@frontendmasters/pet';

/* eslint-disable */
const Details = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [animal, setAnimal] = useState('');
  const [media, setMedia] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  useEffect(async () => {
    await pet.animal
      .show(id)
      .then(({animal}) => {

    setAnimal(animal.type);
    setName(animal.name);
    setBreed(animal.breeds.primary);
    setMedia(animal.photos);
    setLocation(`${animal.contact.address.city}, ${animal.contact.address.state}`);
    setDescription(animal.description);
    setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="details">
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <button
          type="button"
        >
          Adopt
          {name}
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
  id: PropTypes.any,
};

/* eslint-enable */

export default Details;
