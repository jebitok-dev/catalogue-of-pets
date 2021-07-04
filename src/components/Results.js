import React from 'react';
import Pets from './Pets';

const Results = ({ pets }) => (
  <div className="search">
    {!pets.length ? (
      <h1>No Pets Found</h1>
    ) : (
      pets.map((pet) => (
        <Pets
          id={pet.id}
          animal={pet.name}
          key={pet.id}
          name={pet.breeds.primary}
          media={pet.photos}
          location={`${pet.contact.address.city},
                                ${pet.contact.address.state}
                            `}
        />
      ))
    )}
  </div>
);

export default Results;
