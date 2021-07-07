import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const Pets = ({
  name, animal, breed, media, location, id,
}) => {
  let data = '';
  if (media.length !== 0) {
    data = media[0].small;
  }
  return (
    <Link to={`/Details/${id}`} className="pet">
      <div className="image-container">
        <img src={data} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal}  - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

Pets.propTypes = {
  animal: PropTypes.string,
  breed: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  media: PropTypes.array, // eslint-disable-line
  id: PropTypes.number,
};

Pets.defaultProps = {
  animal: '',
  breed: '',
  location: '',
  name: '',
  media: [],
  id: 1,
};

export default Pets;
