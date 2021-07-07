import React from 'react';
import Pets from './Pets';
/* eslint-disable */
const Results = ({ pets }) => (
  <div className="search">
    {!pets.length ? (
      <h1>No Pets Found</h1>
    ) : (
      pets.map((pet) => (
        <Pets
          key={pet.id}
          id={pet.id}
          animal={pet.name}
          name={pet.breeds.primary}
          media={pet.photos}
          location={`${pet.contact.address.city},
                                ${pet.contact.address.state}
                            `}
          // description={pet.description}
        />
      ))
    )}
  </div>
);

export default Results;
