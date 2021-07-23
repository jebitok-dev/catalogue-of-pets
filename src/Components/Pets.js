import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const Pets = ({ id, media, name }) => {
  let avatar = 'http://placecorgi.com/300/300';

  if (media.length !== 0) {
    avatar = media[0].medium;
  }

  return (
    <Link to={`/details/${id}`}>
      <div className="card">
        <div className="image-container">
          <img onError="this.style.display='none'" src={avatar} alt="" />
          <h1 className="info">{name}</h1>
        </div>
      </div>
    </Link>
  );
};

Pets.propTypes = {
  name: PropTypes.string,
  media: PropTypes.array, // eslint-disable-line
  id: PropTypes.number,
};

Pets.defaultProps = {
  name: '',
  media: [],
  id: 1,
};

export default Pets;
