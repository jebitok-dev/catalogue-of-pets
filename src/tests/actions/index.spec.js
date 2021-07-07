import {
  addPets,
  filterLocation,
  filterBreed,
  filterAnimal,
} from '../../actions';

const pets = [
  {
    id: 1,
    location: 'Seattle WA',
    animal: 'Dog',
    breed: 'Affenpinscher',
  },
  {
    id: 2,
    location: 'Ottawa, Canada',
    animal: 'bird',
    breed: 'African Grey',
  },
];

test('should return addPets action', () => {
  const action = addPets(pets);
  expect(action).toEqual({
    type: 'ADD_PETS',
    payload: {
      pets,
    },
  });
});

test('should return filterLocation', () => {
  const location = 'Seatle WA';
  const action = filterLocation(location);
  expect(action).toEqual({
    type: 'FILTER_LOCATION',
    payload: {
      location,
    },
  });
});

test('should return filterBreed', () => {
  const breed = 'Affenpinscher';
  const action = filterBreed(breed);
  expect(action).toEqual({
    type: 'FILTER_BREED',
    payload: {
      breed,
    },
  });
});

test('should return filterAnimal', () => {
  const type = 'Dog';
  const action = filterAnimal(type);
  expect(action).toEqual({
    type: 'FILTER_TYPE',
    payload: {
      type,
    },
  });
});
