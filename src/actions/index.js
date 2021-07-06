export const addPets = (pets) => ({
  type: 'ADD_PETS',
  payload: {
    pets,
  },
});

export const fetchPets = (animals) => (dispatch) => dispatch(addPets(animals || []));

export const filterAnimal = (animal) => ({
  type: 'FILTER_TYPE',
  payload: {
    animal,
  },
});

export const filterBreed = (breed) => ({
  type: 'FILTER_BREED',
  payload: {
    breed,
  },
});

export const filterLocation = (location) => ({
  type: 'FILTER_LOCATION',
  payload: {
    location,
  },
});
