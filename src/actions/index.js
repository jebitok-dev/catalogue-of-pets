export const addPets = (pets) => ({
  type: 'ADD_PETS',
  payload: {
    pets,
  },
});

export const fetchPets = (animals) => (dispatch) => dispatch(addPets(animals || []));

export const filterAnimal = (type) => ({
  type: 'FILTER_ANIMAL',
  payload: {
    type,
  },
});

export const filterBreed = (breed) => ({
  type: 'FILTER_BREED',
  payload: {
    breed,
  },
});
