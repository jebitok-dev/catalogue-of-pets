export const addPets = (pets) => ({
  type: 'ADD_PETS',
  payload: {
    pets,
  },
});

export const fetchPets = (animals) => (dispatch) => {
  dispatch(addPets(animals || []));
};

export const filterPets = (breed) => ({
  type: 'FILTER_PETS',
  payload: {
    breed,
  },
});

export const filterGender = (gender) => ({
  type: 'FILTER_GENDER',
  payload: {
    gender,
  },
});

export const filterSize = (size) => ({
  type: 'FILTER_SIZE',
  payload: {
    size,
  },
});
