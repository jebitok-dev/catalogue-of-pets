import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ANIMALS } from '@frontendmasters/pet';
import Results from '../Components/Results';
import petFinder from '../Helpers/Api';

const SearchParams = ({
  pets = [], fetchPets, filterPets, filter, filterSize, size, gender, filterGender,
}) => {
  const [petSize, updateSize] = useState(size);
  const [petFilter, updateFilter] = useState(filter);
  const [petGender, updateGender] = useState(gender || 'All');
  const [setPets, updatePets] = useState(pets || []);

  const sizes = ['Small', 'Medium', 'Large'];
  const genders = ['Male', 'Female'];
  const capitalize = ([first, ...rest]) =>
        first.toUpperCase() + rest.join('').toLowerCase(); // eslint-disable-line

  async function requestPets() {
    const { animals } = await petFinder.animal
      .search({
        type: petFilter,
        gender: petGender,
        size: petSize,
      })
      .then((data) => data.data)
      .catch((error) => error);

    fetchPets(animals);
    updatePets(animals);
    filterPets(petFilter);
    filterSize(petSize);
    filterGender(petGender);
  }

  useEffect(async () => {
    const { animals } = await petFinder.animal
      .search({
        type: '',
        size: '',
        gender: '',
      })
      .then((data) => data.data);

    fetchPets(animals);
    updatePets(animals);
  }, []);

  return (
    <div className="search-params" data-testid="search-params-id">
      <form
        data-testid="search-params-form"
        className="search-params-form"
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="animal">
          Animal
          <select
            value={petFilter}
            onChange={(e) => updateFilter(e.target.value)}
          >
            <option disabled hidden defaultValue="">Select</option>
            {ANIMALS.map((option) => (
              <option
                value={option}
                key={option}
              >
                {capitalize(option)}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="size">
          Size
          <select
            value={petSize}
            onChange={(e) => updateSize(e.target.value)}
          >
            <option disabled hidden defaultValue="">Select</option>
            {sizes.map((option) => (
              <option
                value={option}
                key={option}
              >
                {option}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="gender">
          Gender
          <select
            value={petGender}
            onChange={(e) => updateGender(e.target.value)}
          >
            <option disabled hidden defaultValue="">Select</option>
            {genders.map((option) => (
              <option
                value={option}
                key={option}
              >
                {option}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <Results pets={setPets} />
    </div>
  );
};

SearchParams.propTypes = {
  pets: PropTypes.array, // eslint-disable-line
  fetchPets: PropTypes.func,
  filter: PropTypes.string,
  filterPets: PropTypes.func,
  filterSize: PropTypes.func,
  filterGender: PropTypes.func,
  size: PropTypes.string,
  gender: PropTypes.string,
};

SearchParams.defaultProps = {
  pets: [],
  fetchPets: null,
  filter: 'All',
  filterPets: null,
  filterSize: null,
  filterGender: null,
  size: 'All',
  gender: 'All',
};

export default SearchParams;
