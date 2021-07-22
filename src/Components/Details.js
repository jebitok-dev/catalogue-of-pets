import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import petFinder from '../Helpers/Api';

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
      <h1 className="space" data-testid="details-loading">Loading...</h1>
    );
  }

  let avatar = 'http://placecorgi.com/300/300';

  if (media.length !== 0) {
    avatar = media[0].large;
  }

  const home = () => navigate('/');
  const adopt = () => navigate(url);

  return (
    <div className="details">
      <div className="image-container">
        <img onError={avatar} src={avatar} alt="" />
      </div>
      <div className="details-section">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <p>{description}</p>
        <button type="button" onClick={adopt}>
          Adopt
          <span>{name}</span>
        </button>
        <br />
        <button type="button" onClick={home}>
          Back to Home Page
        </button>
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
