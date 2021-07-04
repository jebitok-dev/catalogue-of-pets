import React from 'react';
import { Link } from '@reach/router';
/* eslint-disable */

const Pets = ({
  name, animal, breed, media, location, id,
}) => {
  let data = '';
  // if (media.length !== 0) {
  //   data = media[0].small;
  // }

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
/* eslint-enable */

export default Pets;
