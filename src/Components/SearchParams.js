import React from 'react';
import PropTypes from 'prop-types';
import { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import petFinder from '../Helpers/Api';

const SearchParams = ({
  pets = [], fetchPets, filterPets, filter, filterSize, size, gender, filterGender,
}) => {
  const [petSize, updateSize] = useState(size);
  const [petFilter, updateFilter] = useState(filter);
  const [petGender, updateGender] = useState(gender || 'All');
  const [setPets, UpdatePets] = useState(pets || []);

  const sizes = ['Small', 'Medium', 'Large'];
  const genders = ['Male', 'Female'];
  const capitalize = ([first, ...rest]) =>
        first.toUpperCase() + rest.join('').toLowerCase(); // eslint-disable-line

  async function requestPets() {

  }
};
