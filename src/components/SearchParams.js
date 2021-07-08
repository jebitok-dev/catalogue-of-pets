import React, { useState, useEffect } from 'react';
/* eslint-disable */
import { ANIMALS } from '@frontendmasters/pet';
import Dropdown from './Dropdown';
import Results from './Results';
import client from '../helpers/Api';

const SearchParams = () => {
  const [location, updateLocation] = useState('Seattle, WA');
  const [breeds, updateBreeds] = useState([]);
  const [animal, AnimalDropDown] = Dropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropDown, updateBreed] = Dropdown('Breed', '', breeds);
  const [Pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await client.animal
    .search ({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    updateBreeds([]);
    updateBreed('');
    client.breeds(animal).then(({ breeds }) => {
      const breedItems = breeds.map(({ name }) => name);
      updateBreeds(breedItems);
    });
  }, [animal, updateBreed, updateBreeds]);

  return (
    <div className="search-params" data-testid="search-params-id">
      {name}
      <form 
        data-testid="search-params-form"
        onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}
      >
        <label
          htmlFor="location"
        >
          location
          <input
            id="location"
            value={location}
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>
        <AnimalDropDown />
        <BreedDropDown />
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
      <Results pets={Pets} />
    </div>
  );
};

export default SearchParams;
